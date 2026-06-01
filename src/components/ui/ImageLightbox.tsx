"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { TbX } from "react-icons/tb";

interface ImageLightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageLightbox({
  src,
  alt,
  isOpen,
  onClose,
}: ImageLightboxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} preview`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 rounded-full bg-slate-800/80 p-2 text-slate-200 transition-colors hover:bg-slate-700 hover:text-white"
            aria-label="Close image preview"
          >
            <TbX size={24} />
          </button>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 flex max-h-[90vh] max-w-[90vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              className="max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
