"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Trophy,
  GraduationCap,
  Briefcase,
  User,
  Rocket,
  Star,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ContactForm } from "@/components/contact-form"
import { AnimatedSection } from "@/components/animated-section"
import { FloatingElements } from "@/components/floating-elements"
import { AnimatedCounter } from "@/components/animated-counter"
import { Models3D } from "@/components/3d-models"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn, bounceIn } from "@/lib/animations"
import React from "react"

export default function Portfolio() {
  const skills = {
    languages: ["Python", "Java", "HTML/CSS", "JavaScript", "SQL", "Dart", "React"],
    tools: ["Git/GitHub", "Unix Shell", "VS Code"],
    frameworks: ["Node.js", "EJS", "Express.js", "Flutter", "Next.js"],
    cloud: ["GCP (Slight Experience)"],
  }

  const projects = [
    {
      title: "Blog Website",
      description:
        "Dynamic blog website using Node.js, EJS, and CSS with PostgreSQL database. Features user-friendly interface for creating, editing, and deleting blog posts.",
      tech: ["Node.js", "EJS", "CSS", "PostgreSQL"],
      links: [
        { label: "Live Demo", url: "https://blogspot-ydsn.onrender.com" },
        { label: "Next.js Version", url: "https://factlink-blog.vercel.app" },
      ],
    },
    {
      title: "Online Grocery Delivery App",
      description:
        "Grocery delivery app inspired by FreshToHome with functional discounts, maps for location detection, and delivery schedules using Flutter.",
      tech: ["Flutter", "Maps API", "JSON"],
      links: [
        {
          label: "View Project",
          url: "https://drive.google.com/drive/folders/1KDKmR_aYxi44akjdg3rtVHaD8OrsYd5o?usp=sharing",
        },
      ],
    },
    {
      title: "Morph AI Website",
      description:
        "AI-powered insurance website inspired by Policy Bazaar using Next.js with AI integrations, voice-driven chatbots, and VAPI AI for personalized customer experience.",
      tech: ["Next.js", "AI Integration", "VAPI AI", "Voice Chatbots"],
      links: [{ label: "Live Demo", url: "https://gromo-morph.vercel.app" }],
    },
  ]

  const stats = [
    { label: "Projects Completed", value: 3, suffix: "+" },
    { label: "Technologies Mastered", value: 9, suffix: "+" },
    { label: "CGPA", value: 7.7, suffix: "" },
  ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white min-h-screen flex items-center">
        <FloatingElements />
        <Models3D />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div className="mx-auto max-w-4xl" variants={staggerContainer} initial="initial" animate="animate">
            <motion.h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl" variants={fadeInUp}>
              Lakshay Kumar R. B.
            </motion.h1>
            <motion.p className="mb-8 text-xl text-blue-100 sm:text-2xl" variants={fadeInUp}>
              Computer Science Engineering Student & Full Stack Developer
            </motion.p>
            <motion.p className="mb-10 text-lg text-blue-200 max-w-2xl mx-auto" variants={fadeInUp}>
              Passionate about building innovative web applications and AI-powered solutions. Currently pursuing B.E. in
              Computer Science with hands-on experience in cloud computing and full-stack development.
            </motion.p>
            <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={fadeInUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  <Link href="#projects">
                    <Rocket className="mr-2 h-5 w-5" />
                    View My Work
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  <Link href="#contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  variants={bounceIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    <AnimatedCounter
                      from={0}
                      to={
                        stat.label === "CGPA"
                          ? stat.value
                          : Math.round(stat.value)
                      }
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-4xl text-center">
              <motion.h2
                className="mb-8 text-4xl font-bold text-gray-900"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <User className="inline mr-3 h-8 w-8 text-blue-600" />
                About Me
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                I'm a dedicated Computer Science Engineering student with a passion for creating innovative digital
                solutions. With experience in full-stack development, cloud computing, and AI integration, I enjoy
                tackling complex problems and building user-centric applications that make a real impact.
              </motion.p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <motion.h2
              className="mb-12 text-4xl font-bold text-center text-gray-900"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <GraduationCap className="inline mr-3 h-8 w-8 text-blue-600" />
              Education
            </motion.h2>
            <div className="mx-auto max-w-4xl space-y-6">
              {[
                {
                  title: "B.E. Computer Science and Engineering",
                  institution: "Sri Venkateswara College Of Engineering",
                  period: "2022 - 2026",
                  grade: "CGPA: 7.7",
                  color: "blue",
                },
                {
                  title: "Higher Secondary Certificate (12th Class)",
                  institution: "Velammal Vidyashram CBSE, Surapet",
                  period: "May 2022",
                  grade: "Grade: 76% | Subjects: Maths, Physics, Chemistry, Computer Science",
                  color: "green",
                },
                {
                  title: "Secondary School Certificate (10th Class)",
                  institution: "Velammal Vidyashram CBSE, Surapet",
                  period: "April 2020",
                  grade: "Grade: 83% | Subjects: Maths, Science, Social and Languages",
                  color: "purple",
                },
              ].map((edu, index) => (
                <motion.div
                  key={edu.title}
                  variants={fadeInLeft}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <Card className={`border-l-4 border-l-${edu.color}-600 hover:shadow-lg transition-all duration-300`}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{edu.title}</span>
                        <Badge variant="secondary">{edu.period}</Badge>
                      </CardTitle>
                      <CardDescription>{edu.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{edu.grade}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <motion.h2
              className="mb-12 text-4xl font-bold text-center text-gray-900"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Briefcase className="inline mr-3 h-8 w-8 text-blue-600" />
              Work Experience
            </motion.h2>
            <div className="mx-auto max-w-4xl space-y-6">
              {[
                {
                  title: "Intern",
                  company: "TI CLEAN MOBILITY PVT. LTD.",
                  period: "Dec 2023 - Jul 2024",
                  tasks: [
                    "Managed SQL Server databases, including database design, optimization, and maintenance",
                    "Developed Power BI dashboards to visualize data trends and business insights",
                  ],
                  color: "blue",
                },
                {
                  title: "Cloud Computing Intern",
                  company: "8Queens Software Technologies Pvt. Ltd.",
                  period: "Aug 2024 - Nov 2024",
                  tasks: [
                    "Completed internship focused on cloud infrastructure and services",
                    "Gained hands-on experience in cloud architecture, virtualization, and deploying scalable cloud solutions",
                  ],
                  color: "green",
                },
                {
                  title: "Full Stack Developer",
                  company: "Dreampi.in",
                  period: "Feb 2025 - present",
                  tasks: [
                    "Developed and deployed 4 complex product-based websites(Till Now), handling both frontend and backend. Built scalable with modern frameworks and optimized system performance.",
                  ],
                  color: "green",
                },
              ].map((exp, index) => (
                <motion.div
                  key={exp.title}
                  variants={fadeInRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <Card className={`border-l-4 border-l-${exp.color}-600 hover:shadow-lg transition-all duration-300`}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{exp.title}</span>
                        <Badge variant="secondary">{exp.period}</Badge>
                      </CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {exp.tasks.map((task, taskIndex) => (
                          <motion.li
                            key={taskIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + taskIndex * 0.1 + 0.3 }}
                          >
                            {task}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <motion.h2
              className="mb-12 text-4xl font-bold text-center text-gray-900"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Code className="inline mr-3 h-8 w-8 text-blue-600" />
              Skills & Technologies
            </motion.h2>
            <motion.div
              className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 lg:grid-cols-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { title: "Languages", items: skills.languages, icon: Code, color: "blue" },
                { title: "Tools", items: skills.tools, icon: Database, color: "green" },
                { title: "Frameworks", items: skills.frameworks, icon: Rocket, color: "purple" },
                { title: "Cloud", items: skills.cloud, icon: Cloud, color: "orange" },
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-center text-lg">
                        <category.icon className={`mr-2 h-5 w-5 text-${category.color}-600`} />
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {category.items.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + skillIndex * 0.05 + 0.5 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge variant="secondary" className="hover:bg-blue-100 transition-colors duration-200">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <motion.h2
              className="mb-12 text-4xl font-bold text-center text-gray-900"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Rocket className="inline mr-3 h-8 w-8 text-blue-600" />
              Featured Projects
            </motion.h2>
            <motion.div
              className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="group h-full hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50/30">
                    <CardHeader>
                      <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.7 }}
                            >
                              <Badge
                                variant="outline"
                                className="text-xs hover:bg-blue-50 transition-colors duration-200"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        {project.links.map((link, linkIndex) => (
                          <motion.div key={linkIndex} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="w-full justify-start hover:bg-blue-50 transition-all duration-200"
                            >
                              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                {link.label}
                              </Link>
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section id="accomplishments" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <motion.h2
              className="mb-12 text-4xl font-bold text-center text-gray-900"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Trophy className="inline mr-3 h-8 w-8 text-blue-600" />
              Accomplishments
            </motion.h2>
            <div className="mx-auto max-w-4xl">
              <motion.div
                variants={scaleIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Card className="border-l-4 border-l-yellow-500 bg-gradient-to-r from-yellow-50 to-orange-50 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                      >
                        <Star className="mr-2 h-6 w-6 text-yellow-500" />
                      </motion.div>
                      7th Place - Finarva Hackathon 25
                    </CardTitle>
                    <CardDescription className="text-base">
                      National-level fintech competition organized by Gromo and powered by AWS
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Developed an AI-driven insurance website that streamlines user onboarding, policy recommendations,
                      and claim processes using intelligent automation and machine learning. Out of numerous
                      participants, our team ranked 7th, showcasing innovation in the fintech-insurtech space.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden"
      >
        <FloatingElements />
        <Models3D />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <motion.h2
                className="mb-8 text-4xl font-bold"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                Let's Connect
              </motion.h2>
              <motion.p
                className="text-xl text-blue-100 max-w-2xl mx-auto"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
              </motion.p>
            </div>

            {/* Contact Form */}
            <div className="mb-16">
              <ContactForm />
            </div>

            {/* Contact Info Cards */}
            <motion.div
              className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={bounceIn} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <Phone className="mx-auto mb-4 h-8 w-8" />
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-blue-100">7305418154</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={bounceIn} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <MapPin className="mx-auto mb-4 h-8 w-8" />
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-blue-100">Chennai, Tamil Nadu</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={bounceIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <Link
                      href="https://www.linkedin.com/in/lakshai-kumar-1b5a53303"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <Linkedin className="mx-auto mb-4 h-8 w-8" />
                      <p className="font-semibold">LinkedIn</p>
                      <p className="text-sm text-blue-100">Connect with me</p>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={bounceIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <Link
                      href="https://github.com/lakshaykumar005"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <Github className="mx-auto mb-4 h-8 w-8" />
                      <p className="font-semibold">GitHub</p>
                      <p className="text-sm text-blue-100">View my code</p>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                variants={bounceIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <Link
                      href="https://drive.google.com/file/d/1HasZ6qK94gMRNulNjBRFkNvwC3LawKWK/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <Github className="mx-auto mb-4 h-8 w-8" />
                      <p className="font-semibold">Resume</p>
                      <p className="text-sm text-blue-100">About Me</p>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}
