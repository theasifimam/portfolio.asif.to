import React, { useState } from "react";
import {
  Send,
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  Phone,
  MapPin,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const emailAddress = "asif@asif.to";
  const phoneNumber = "+91 9911471995";
  const location = "Delhi, India";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setSubmitting(true);
    const emailSubject = encodeURIComponent(
      subject
        ? `Job Opportunity / Inquiry: ${subject}`
        : `Job Opportunity from ${name}`,
    );
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage / Role Details:\n${message}`,
    );

    setTimeout(() => {
      window.location.href = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;
      setSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 400);
  };

  return (
    <section
      id="contact"
      className="py-8 sm:py-24 px-4 sm:px-8 md:px-12 max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card p-5 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-border shadow-xs"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Contact & Resume */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-2 block">
                // GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight mb-4">
                Let's Discuss{" "}
                <span className="text-primary">Opportunities</span>.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                I am actively seeking Frontend Developer / Full-Stack Developer
                positions where I can build impactful products with a
                high-performing engineering team.
              </p>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary border border-border text-xs font-bold mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Open for Full-Time Roles • {location}</span>
              </div>

              {/* Resume Download CTA */}
              <div className="mb-6">
                <a
                  href="/assets/asif-imam-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-primary text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm"
                >
                  <FileText size={16} />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-3.5 sm:p-4 rounded-[1.5rem] bg-secondary border border-border flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-muted-foreground block uppercase font-bold">
                      Direct Email
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-foreground truncate block">
                      {emailAddress}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-full bg-card border border-border hover:bg-muted text-foreground text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-3.5 sm:p-4 rounded-[1.5rem] bg-secondary border border-border flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-muted-foreground block uppercase font-bold">
                      Phone / Mobile
                    </span>
                    <a
                      href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                      className="text-xs sm:text-sm font-extrabold text-foreground hover:text-primary transition-colors block"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-bold text-muted-foreground px-3 py-1 rounded-full bg-card border border-border">
                  Delhi, IN
                </span>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-5 pl-0 sm:pl-2 pt-2">
                <a
                  href="https://github.com/theasifimam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-xs font-mono font-bold uppercase transition-colors"
                >
                  <Github size={16} className="text-primary" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/theasifimam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-xs font-mono font-bold uppercase transition-colors"
                >
                  <Linkedin size={16} className="text-primary" /> LinkedIn
                </a>
                <a
                  href="https://wa.me/919911471995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-emerald-500 flex items-center gap-2 text-xs font-mono font-bold uppercase transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-emerald-500"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.392 9.806-9.8.001-2.605-1.01-5.057-2.85-6.895-1.839-1.837-4.29-2.846-6.899-2.847-5.41 0-9.81 4.397-9.813 9.8-.001 1.512.41 2.99 1.194 4.295l-.993 3.624 3.71-.973zm8.415-4.545c-.328-.164-1.94-.959-2.242-1.07-.301-.11-.522-.164-.74.163-.219.329-.85.842-1.041 1.07-.19.227-.383.254-.712.09-1.464-.734-2.42-1.301-3.32-2.855-.24-.411.24-.381.688-1.272.073-.146.037-.274-.018-.384-.055-.11-.522-1.258-.716-1.722-.19-.456-.381-.393-.522-.4h-.446c-.155 0-.406.059-.619.292-.213.232-.813.793-.813 1.933 0 1.14.83 2.242.946 2.4.115.158 1.632 2.49 3.955 3.493.553.239 1.002.381 1.345.49.555.176 1.06.151 1.46.091.446-.066 1.94-.792 2.212-1.52.274-.728.274-1.353.19-1.47-.083-.117-.308-.182-.637-.346z" />
                  </svg>{" "}
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact / Recruiter Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono font-bold uppercase tracking-wide text-primary mb-1.5 block">
                    Your Name / Company
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Sarah Connor / Acme Inc."
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-secondary/30 hover:bg-secondary/50 focus:bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono font-bold uppercase tracking-wide text-primary mb-1.5 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. sarah@acme.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-secondary/30 hover:bg-secondary/50 focus:bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold uppercase tracking-wide text-primary mb-1.5 block">
                  Subject / Role Title
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Frontend Engineer / Full Stack Developer Role"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-secondary/30 hover:bg-secondary/50 focus:bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold uppercase tracking-wide text-primary mb-1.5 block">
                  Role Details / Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about the role, tech stack, team, or schedule an interview..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-secondary/30 hover:bg-secondary/50 focus:bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground resize-none"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-primary hover:opacity-90 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitting ? (
                    <span>Opening Mail Client...</span>
                  ) : (
                    <>
                      <span>Send Message / Invite</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
