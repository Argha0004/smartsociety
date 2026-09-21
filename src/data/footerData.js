import { FaInstagram } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

// =========================
// Quick Links
// =========================

export const quickLinks = [
  {
    label: "Events",
    path: "/events",
  },
  {
    label: "Schedule",
    path: "/schedule",
  },
  {
    label: "Registration",
    path: "/registration",
  },
  {
    label: "Sponsors",
    path: "/sponsors",
  },
  {
    label: "Gallery",
    path: "/gallery",
  },
  {
    label: "FAQs",
    path: "/faqs",
  },
];

// =========================
// Social Links
// =========================

export const socialLinks = [
  {
    label: "Instagram",
    icon: FaInstagram,
    path: "#",
  },
  {
    label: "Email",
    icon: Mail,
    path: "mailto:cfccf@smartsociety.org",
  },
  {
    label: "Phone",
    icon: Phone,
    path: "tel:+918509974846",
  },
];

// =========================
// Contact Information
// =========================

export const contactInfo = {
  emails: {
    icon: Mail,
    items: [
      "cfccf@smartsociety.org",
      "sanghamitra@iem.edu.in",
      "malay.ganguly@iem.edu.in",
    ],
  },

  phone: {
    icon: Phone,
    number: "+91 8509974846",
  },

  address: {
    icon: MapPin,
    text: ["Nandan, Kolkata, West Bengal", "India"],
  },
};

// =========================
// Legal Links
// =========================

export const legalLinks = [
  {
    label: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    label: "Terms of Service",
    path: "/terms-of-service",
  },
  {
    label: "Support",
    path: "/support",
  },
];
