"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/content";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)]"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="relative">
        <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1A7.9 7.9 0 0 0 12 19.9 7.94 7.94 0 0 0 17.6 6.3zM12 18.5a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25A6.59 6.59 0 1 1 12 18.5zm3.61-4.93c-.2-.1-1.17-.58-1.35-.64s-.31-.1-.44.1-.51.64-.62.77-.23.15-.43.05a5.4 5.4 0 0 1-1.59-.98 6 6 0 0 1-1.1-1.37c-.11-.2 0-.3.09-.4s.2-.23.3-.35a1.36 1.36 0 0 0 .2-.33.37.37 0 0 0 0-.35c0-.1-.44-1.06-.6-1.45s-.32-.33-.44-.34h-.38a.72.72 0 0 0-.52.24 2.18 2.18 0 0 0-.68 1.62 3.79 3.79 0 0 0 .79 2 8.66 8.66 0 0 0 3.32 2.93c.46.2.83.32 1.11.41a2.69 2.69 0 0 0 1.23.08 2 2 0 0 0 1.32-.93 1.65 1.65 0 0 0 .11-.93c-.05-.08-.18-.13-.38-.23z" />
      </svg>
    </motion.a>
  );
}
