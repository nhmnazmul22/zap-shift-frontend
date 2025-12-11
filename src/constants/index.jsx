import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import {
  FiTruck,
  FiDollarSign,
  FiMapPin,
  FiBriefcase,
} from "react-icons/fi";
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

export const HowItWorksData = [
  {
    id: 1,
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: FiTruck,
  },
  {
    id: 2,
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: FiDollarSign,
  },
  {
    id: 3,
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: FiMapPin,
  },
  {
    id: 4,
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: FiBriefcase,
  },
];

export const ourServices = [
  {
    id: 1,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    id: 2,
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    id: 3,
    title: "Fulfillment Solution",
    description:
      "We offer customized service with inventory management, online order processing, packaging, and after-sales support.",
  },
  {
    id: 4,
    title: "Cash on Home Delivery",
    description:
      "100% cash-on-delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    id: 5,
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services including warehouse and inventory management support.",
  },
  {
    id: 6,
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility, customers can return or exchange their products with online business merchants.",
  },
];
