import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">SAAD RAJPOOT</h2>
            <p className="mt-2 text-primary-light">
              Computer Science Graduate | Web Developer
            </p>
          </div>

          <div className="flex space-x-6">
            <SocialLink href="https://github.com/Saadiie" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/saadiiieee/" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://www.instagram.com/saadiiieeee/" icon={<Instagram size={20} />} label="Instagram" />
            <SocialLink href="mailto:rajpootsaad491@gmail.com" icon={<Mail size={20} />} label="Email" />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-light/30 text-center text-sm text-primary-light">
          <p>© {new Date().getFullYear()} Saad Rajpoot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <Link href={href} className="hover:text-primary-light transition-colors duration-200" aria-label={label}>
      {icon}
    </Link>
  );
}
