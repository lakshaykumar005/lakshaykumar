"use server"

import { z } from "zod"
import { Resend } from "resend"

// Contact form schema for validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormState = {
  success?: boolean
  error?: string
  fieldErrors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  try {
    // Validate form data
    const validatedFields = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    })

    if (!validatedFields.success) {
      return {
        error: "Please fix the errors below",
        fieldErrors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const { name, email, subject, message } = validatedFields.data

    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured")
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email using Resend
    // Note: For free tier, we can only send to the verified email address
    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["2022cs0401@svce.ac.in"], // Use your verified email address
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #374151;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This message was sent from your portfolio contact form.</p>
            <p><strong>Reply to:</strong> ${email}</p>
            <p>You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      replyTo: email,
    })

    // Log the result for debugging
    console.log("Email sent successfully:", result)

    return {
      success: true,
    }
  } catch (error) {
    console.error("Contact form error:", error)
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes("RESEND_API_KEY")) {
        return {
          error: "Email service is not configured. Please contact the administrator.",
        }
      }
      if (error.message.includes("Invalid API key")) {
        return {
          error: "Email service configuration error. Please try again later.",
        }
      }
      if (error.message.includes("rate limit")) {
        return {
          error: "Too many requests. Please wait a moment and try again.",
        }
      }
    }
    
    return {
      error: "Failed to send message. Please try again later.",
    }
  }
}

