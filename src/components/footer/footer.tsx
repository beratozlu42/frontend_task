import React from 'react';
import { Facebook, Instagram, Twitter, type LucideIcon } from 'lucide-react'; 

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-sm text-[#470808] hover:text-gray-900 transition duration-150 whitespace-nowrap"
  >
    {children}
  </a>
);

interface SocialLink {
  icon: LucideIcon;
  href: string;
}

export default function Footer() {
  const socialLinks: SocialLink[] = [
    { icon: Facebook, href: '#facebook' },
    { icon: Instagram, href: '#instagram' },
    { icon: Twitter, href: '#twitter' },
  ];

  return (
    <footer className="bg-white border-t border-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-center py-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:space-x-12">
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
            <FooterLink href="/shipping">Shipping</FooterLink>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-4 border-t border-gray-300">

          <p className="text-xs text-gray-500 order-2 md:order-1 mt-3 md:mt-0">
            ©️ 2025 E-Products All Rights Reserved. Built with <span className="text-red-400">React</span> and <span className="text-red-400">TailwindCSS</span>
          </p>
          
          <div className="flex space-x-4 order-1 md:order-2">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Go to ${item.icon.displayName} page`}
                className="text-[#470808] hover:text-gray-700 transition duration-150"
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}