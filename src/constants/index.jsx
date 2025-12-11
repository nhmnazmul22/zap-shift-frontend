import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const menuLinks = [
  {
    id: 1,
    label: "Services",
    href: "/services",
  },
  {
    id: 2,
    label: "Coverage",
    href: "/coverage",
  },
  {
    id: 3,
    label: "About Us",
    href: "/about-us",
  },
  {
    id: 4,
    label: "Pricing",
    href: "/pricing",
  },
  {
    id: 5,
    label: "Be a Rider",
    href: "/be-a-Rider",
  },
];

export const social = [
  { id: "ln", href: "https://www.linkedin.com", icon: <FaLinkedinIn /> },
  { id: "x", href: "https://www.twitter.com", icon: <BsTwitterX /> },
  { id: "fb", href: "https://www.facebook.com", icon: <FaFacebookF /> },
  { id: "yt", href: "https://www.youtube.com", icon: <FaYoutube /> },
];
