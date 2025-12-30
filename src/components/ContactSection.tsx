"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, MapPin, Send, Facebook } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "bhawnaahuja89989@gmail.com",
      href: "mailto:bhawnaahuja89989@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "New York, USA",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/bhawna-ahujaa/",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "View my work",
      href: "https://github.com/bhawnaahuja89989-debug",
      color: "from-orange-500 to-red-500"
    }
  ];

  const handleChange = (e: any) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const handleSubmit = async () => {
    // Check if fields are filled
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;

    // Trigger validation for each field
    if (!nameInput.checkValidity()) {
      nameInput.reportValidity();
      return;
    }
    if (!emailInput.checkValidity()) {
      emailInput.reportValidity();
      return;
    }
    if (!messageInput.checkValidity()) {
      messageInput.reportValidity();
      return;
    }

    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');
      formDataToSend.append('_subject', 'New Contact Form Submission!');

      const response = await fetch('https://formsubmit.co/bhawnaahuja89989@gmail.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen text-[hsl(var(--text-primary))] flex flex-col justify-center py-20">
      <div className="container mx-auto px-6 md:px-10 w-full space-y-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-[hsl(var(--text-secondary))] max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Let's create something amazing together!
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Let's Connect
              </h3>
              <p className="text-[hsl(var(--text-secondary))] leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Feel free to reach out through any of these channels.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300`} />

                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="relative flex items-center gap-4 p-4 bg-[hsl(var(--bg))]/60 backdrop-blur-xl border border-[hsl(var(--text-muted))] rounded-xl group-hover:border-transparent transition-all"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-10 text-white`}>
                        <div>{item.icon}</div>
                      </div>
                      <div>
                        <p className="text-sm text-[hsl(var(--text-muted))] font-medium">{item.label}</p>
                        <p className="font-semibold">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="relative flex items-center gap-4 p-4 bg-[hsl(var(--bg))]/60 backdrop-blur-xl border border-[hsl(var(--text-muted))] rounded-xl group-hover:border-transparent transition-all">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-10 text-white`}>
                        <div>{item.icon}</div>
                      </div>
                      <div>
                        <p className="text-sm text-[hsl(var(--text-muted))] font-medium">{item.label}</p>
                        <p className="font-semibold">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-sm text-[hsl(var(--text-muted))] mb-4">Or find me on social media</p>
              <div className="flex gap-3">
                {[
                  { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/bhawna.ahuja.39566/" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/bhawna-ahujaa/" },
                  { icon: <Instagram className="w-5 h-5" />, href: "http://instagram.com/bhawnaa15" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-purple-600/10 border border-primary/20 flex items-center justify-center hover:from-primary hover:to-purple-600 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 text-[hsl(var(--text-secondary))] group-hover:text-white transition-colors">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 contact-form" role="form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[hsl(var(--text-secondary))] mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[hsl(var(--bg))]/60 backdrop-blur-xl border border-[hsl(var(--text-muted))] rounded-xl placeholder-[hsl(var(--text-secondary))] focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[hsl(var(--text-secondary))] mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[hsl(var(--bg))]/60 backdrop-blur-xl border border-[hsl(var(--text-muted))] rounded-xl placeholder-[hsl(var(--text-secondary))] focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[hsl(var(--text-secondary))] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-[hsl(var(--bg))]/60 backdrop-blur-xl border border-[hsl(var(--text-muted))] rounded-xl placeholder-[hsl(var(--text-secondary))] focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                onClick={handleSubmit}
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer w-full px-6 py-4 bg-primary text-white font-semibold rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="my-8 p-6 bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/30 rounded-xl"
            >
              <p className="text-sm text-[hsl(var(--text-secondary))]">
                <span className="text-primary font-semibold">Quick response guaranteed! </span>
                I typically respond within 24 hours. For urgent matters, reach out via email or LinkedIn.
              </p>
            </motion.div>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-center"
              >
                <p className="text-green-400 font-semibold">
                  ✓ Thank you for your message! I'll get back to you soon.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}