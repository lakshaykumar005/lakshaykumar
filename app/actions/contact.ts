"use server"

import { z } from "zod"

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

    // Here you would integrate with your email service
    // For example, using Resend, Nodemailer, or SendGrid

    // Simulate email sending (replace with actual email service)
    await simulateEmailSending({
      to: "lakashyakumar@example.com", // Your email
      from: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    return {
      success: true,
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      error: "Failed to send message. Please try again later.",
    }
  }
}

// Simulate email sending - replace with actual email service
async function simulateEmailSending(emailData: any) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real implementation, you would use:
  // - Resend: https://resend.com/docs
  // - SendGrid: https://sendgrid.com/docs
  // - Nodemailer: https://nodemailer.com/
  // - Or any other email service

  console.log("Email would be sent:", emailData)

  // Uncomment and configure when using a real email service:
  /*
  import { Resend } from 'resend'
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  await resend.emails.send({
    from: 'contact@yourdomain.com',
    to: emailData.to,
    subject: emailData.subject,
    html: emailData.html,
    reply_to: emailData.from,
  })
  */
}
