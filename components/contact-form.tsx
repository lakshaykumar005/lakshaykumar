"use client"

import { useActionState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { submitContactForm, type ContactFormState } from "@/app/actions/contact"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const initialState: ContactFormState = {}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
      <Card className="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
        <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <CardHeader className="text-center">
            <motion.div variants={fadeInUp}>
              <CardTitle className="text-2xl font-bold text-gray-900">Send Me a Message</CardTitle>
              <CardDescription className="text-gray-600">
                I'd love to hear from you! Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent>
            {state.success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Alert className="mb-6 border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    Thank you for your message! I'll get back to you soon.
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}

            {state.error && !state.success && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Alert className="mb-6 border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">{state.error}</AlertDescription>
                </Alert>
              </motion.div>
            )}

            <motion.form action={formAction} className="space-y-6" variants={staggerContainer}>
              <div className="grid gap-6 md:grid-cols-2">
                <motion.div className="space-y-2" variants={fadeInUp}>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    className={`transition-all duration-300 ${state.fieldErrors?.name ? "border-red-500 shake" : ""}`}
                    disabled={isPending}
                  />
                  {state.fieldErrors?.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-600"
                    >
                      {state.fieldErrors.name[0]}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div className="space-y-2" variants={fadeInUp}>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className={`transition-all duration-300 ${state.fieldErrors?.email ? "border-red-500 shake" : ""}`}
                    disabled={isPending}
                  />
                  {state.fieldErrors?.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-600"
                    >
                      {state.fieldErrors.email[0]}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <motion.div className="space-y-2" variants={fadeInUp}>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  required
                  className={`transition-all duration-300 ${state.fieldErrors?.subject ? "border-red-500 shake" : ""}`}
                  disabled={isPending}
                />
                {state.fieldErrors?.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-600"
                  >
                    {state.fieldErrors.subject[0]}
                  </motion.p>
                )}
              </motion.div>

              <motion.div className="space-y-2" variants={fadeInUp}>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, question, or just say hello!"
                  rows={6}
                  required
                  className={`transition-all duration-300 resize-none ${
                    state.fieldErrors?.message ? "border-red-500 shake" : ""
                  }`}
                  disabled={isPending}
                />
                {state.fieldErrors?.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-600"
                  >
                    {state.fieldErrors.message[0]}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  disabled={isPending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isPending ? (
                    <>
                      <motion.div
                        className="mr-2 h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.form>

            <motion.div className="mt-6 text-center text-sm text-gray-500" variants={fadeInUp}>
              <p>You can also reach me directly at:</p>
              <p className="font-medium text-gray-700">Phone: 7305418154</p>
            </motion.div>
          </CardContent>
        </motion.div>
      </Card>
    </motion.div>
  )
}
