import { Link } from "react-router-dom";
import { Mail, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { gmailComposeUrl } from "@/lib/gmail";

const exploreLinks = [
  { to: "/our-work", label: "Our Work" },
  { to: "/our-motive", label: "Our Motive" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/donate", label: "Donate" },
  { to: "/directors-message", label: "Director's Message" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="https://i.ibb.co/YFqj0WYr/Whats-App-Image-2025-11-04-at-10-09-36-0bf639c7.jpg"
                alt="Feed Paws Initiative logo"
                className="object-cover w-11 h-11 rounded-full ring-1 ring-border"
              />
              <span className="text-xl font-serif font-medium text-foreground">
                Feed Paws Initiative
              </span>
            </Link>
            <p className="max-w-sm mt-4 text-sm leading-relaxed text-muted-foreground">
              A community-driven initiative feeding, caring for, and protecting stray
              animals — one paw at a time.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground">
              Get in touch
            </h3>
            <a
              href={gmailComposeUrl("report.fpi@gmail.com")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              report.fpi@gmail.com
            </a>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/feedpawsinitiative"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Feed Paws Initiative on Instagram"
                className="flex items-center justify-center w-9 h-9 transition-colors border rounded-full border-border text-muted-foreground hover:text-primary hover:border-primary/40"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbB7e8AHrDZlaju9eL3g"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Feed Paws Initiative on WhatsApp"
                className="flex items-center justify-center w-9 h-9 transition-colors border rounded-full border-border text-muted-foreground hover:text-primary hover:border-primary/40"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-10 border-t border-border sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Feed Paws Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
