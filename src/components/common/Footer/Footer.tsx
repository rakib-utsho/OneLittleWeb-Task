import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";

const footerLinks = {
  help: [
    { name: "Customer Support", href: "/support" },
    { name: "Delivery Details", href: "/delivery" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Works", href: "/works" },
    { name: "Career", href: "/career" },
  ],
  resources: [
    { name: "Free eBooks", href: "/ebooks" },
    { name: "Development Tutorial", href: "/tutorial" },
    { name: "How to - Blog", href: "/blog" },
    { name: "Youtube Playlist", href: "/youtube" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#", icon: FaTwitter },
  { name: "Facebook", href: "#", icon: FaFacebookF },
  { name: "Instagram", href: "#", icon: FaInstagram },
  { name: "Github", href: "#", icon: FaGithub },
];

export const Footer = () => {
  return (
    // Footer Component
    <footer className="w-full bg-[#FFFFFF] border border-t-[#D6D6D6]">
      {/* Main Div */}
      {/* Logo and description */}
      <div className="mx-auto w-full container flex flex-col items-start justify-between gap-10 py-16 px-6 sm:flex-row">
        <div className="">
          <Link href="/" className="text-lg font-bold">
            <Image
              src={"/images/logo.png"}
              alt="Logo"
              width={100}
              height={50}
            />
          </Link>
          <p className="mt-5 max-w-sm text-base leading-8 text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
            sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>
          {/* Social Links */}
          <div className="mt-9 flex items-center gap-7">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-[#2c2c2c] transition hover:opacity-75"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Links */}

        {/* Company Links */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-[#222222]">Company</h3>
          <ul className="space-y-3">
            {footerLinks.company.map((companyLink) => (
              <li key={companyLink.name}>
                <Link
                  href={companyLink.href}
                  className="text-base text-[#2a2a2a] transition hover:opacity-75"
                >
                  {companyLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-5 text-xl font-semibold text-[#222222]">Help</h3>
          <ul className="space-y-3">
            {footerLinks.help.map((helpLink) => (
              <li key={helpLink.name}>
                <Link
                  href={helpLink.href}
                  className="text-base text-[#2a2a2a] transition hover:opacity-75"
                >
                  {helpLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resource Links */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-[#222222]">
            Resources
          </h3>
          <ul className="space-y-3">
            {footerLinks.resources.map((resourceLink) => (
              <li key={resourceLink.name}>
                <Link
                  href={resourceLink.href}
                  className="text-base text-[#2a2a2a] transition hover:opacity-75"
                >
                  {resourceLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* copyright  */}
      <div className="bg-[#1d0439] py-4">
        <p className="text-center text-sm text-white">
          © Copyright 2024, All Rights Reserved by XYZ
        </p>
      </div>
    </footer>
  );
};
