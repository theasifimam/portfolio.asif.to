import React from "react";
import { Linkedin, Github, Mail, ArrowUp, FileText } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border bg-card py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <a href="#home" className="font-extrabold text-lg text-foreground">
            <span className="text-primary">asif</span>.to
          </a>
          <span className="hidden sm:inline text-muted-foreground">·</span>
          <p className="text-xs text-muted-foreground">
            © {currentYear} Asif Imam • Frontend & Full-Stack Developer • Delhi,
            India
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/assets/asif-imam-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-secondary hover:bg-primary hover:text-white border border-border text-foreground flex items-center justify-center transition-all"
            aria-label="Download Resume"
            title="Download Resume (PDF)"
          >
            <FileText size={16} />
          </a>
          <a
            href="https://linkedin.com/in/theasifimam"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-secondary hover:bg-primary hover:text-white border border-border text-foreground flex items-center justify-center transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/theasifimam"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-secondary hover:bg-primary hover:text-white border border-border text-foreground flex items-center justify-center transition-all"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://wa.me/919911471995"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-secondary hover:bg-emerald-500 hover:text-white border border-border text-foreground flex items-center justify-center transition-all"
            aria-label="WhatsApp Contact"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.392 9.806-9.8.001-2.605-1.01-5.057-2.85-6.895-1.839-1.837-4.29-2.846-6.899-2.847-5.41 0-9.81 4.397-9.813 9.8-.001 1.512.41 2.99 1.194 4.295l-.993 3.624 3.71-.973zm8.415-4.545c-.328-.164-1.94-.959-2.242-1.07-.301-.11-.522-.164-.74.163-.219.329-.85.842-1.041 1.07-.19.227-.383.254-.712.09-1.464-.734-2.42-1.301-3.32-2.855-.24-.411.24-.381.688-1.272.073-.146.037-.274-.018-.384-.055-.11-.522-1.258-.716-1.722-.19-.456-.381-.393-.522-.4h-.446c-.155 0-.406.059-.619.292-.213.232-.813.793-.813 1.933 0 1.14.83 2.242.946 2.4.115.158 1.632 2.49 3.955 3.493.553.239 1.002.381 1.345.49.555.176 1.06.151 1.46.091.446-.066 1.94-.792 2.212-1.52.274-.728.274-1.353.19-1.47-.083-.117-.308-.182-.637-.346z" />
            </svg>
          </a>
          <a
            href="mailto:asif@asif.to"
            className="w-9 h-9 rounded-full bg-secondary hover:bg-primary hover:text-white border border-border text-foreground flex items-center justify-center transition-all"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="ml-2 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center transition-transform hover:scale-105 shadow-sm cursor-pointer"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
