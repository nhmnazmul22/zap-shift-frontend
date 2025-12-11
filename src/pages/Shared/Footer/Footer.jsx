import React from "react";
import Logo from "../../../components/Logo/Logo.jsx";
import LinkItems from "../common/LinkItems.jsx"
import { Link } from "react-router";
import { social } from "../../../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 text-neutral-100 rounded-2xl shadow-inner">
      <div className="mx-auto px-6 py-10 sm:py-12 md:py-16 ">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="w-36">
            <Logo />
          </div>

          <p className="max-w-2xl text-sm sm:text-base text-base-100">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* dotted divider */}
        <div className="mt-6">
          <div className="mx-auto w-full max-w-7xl border-t border-dotted border-neutral opacity-50" />
        </div>

        {/* Navigation links (centered) */}
        <nav className="mt-6">
          <ul className="flex flex-wrap justify-center gap-6 text-neutral-300 text-sm sm:text-base">
            {/* LinkItems renders <li> elements */}
            <LinkItems className="text-base-100!" />
          </ul>
        </nav>

        <div className="mt-6">
          <div className="mx-auto w-full max-w-7xl border-t border-dotted border-neutral opacity-50" />
        </div>

        {/* Social icons */}
        <div className="mt-6 flex items-center justify-center gap-4">
          {social.map((s) => (
            <Link
              key={s.id}
              href={s.href}
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700 transition-shadow shadow-sm"
            >
              <span className="text-sm">{s.icon}</span>
            </Link>
          ))}
        </div>

        {/* bottom copyright */}
        <div className="mt-8 text-center text-sm text-base-100">
          <p className="mt-2">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
