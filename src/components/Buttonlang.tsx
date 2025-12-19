import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

type Variant = "floating" | "navbar";

interface SprachenButtonProps {
  variant?: Variant;
}

export default function SprachenButton({ variant = "floating" }: SprachenButtonProps) {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();

  const languages = [
    { code: "rom", label: "Romanes", imgSrc: "/flags/Flag_of_the_Romani_people.svg.png" },
    { code: "ro", label: "Rumänisch", imgSrc: "/flags/Flag_of_Romania.svg.webp" },
    { code: "en", label: "English", imgSrc: "/flags/Flag_of_the_United_Kingdom.svg.png" },
    { code: "de", label: "Deutsch", imgSrc: "/flags/Flag_of_Germany.svg.webp" },
    { code: "fr", label: "French", imgSrc: "/flags/Flag_of_France.svg.png" },
    { code: "it", label: "Italian", imgSrc: "/flags/Flag_of_Italy.svg.png" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.9 },
  };

  const isFloating = variant === "floating";

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div
      className={
        isFloating
          ? "fixed top-4 right-4 z-50 flex flex-col items-center space-y-2 mt-20"
          : "relative flex items-center"
      }
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            className={
              isFloating
                ? "flex flex-col items-center space-y-5"
                : "absolute top-full right-0 mt-2 flex flex-col items-stretch space-y-2 bg-white rounded-xl shadow-lg border border-gray-200 p-2 z-50"
            }
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                variants={itemVariants}
                onClick={() => handleLanguageChange(lang.code)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={
                  isFloating
                    ? "w-24 h-12 rounded-md shadow-md hover:scale-105 transition border border-gray-200"
                    : "w-24 h-12 rounded-md shadow-sm hover:scale-105 transition border border-gray-200"
                }
                style={{
                  backgroundImage: `url(${lang.imgSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                aria-label={lang.label}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button (changed to gold) */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        className={
          isFloating
            ? "w-24 h-12 bg-amber-500 text-black p-4 rounded-full shadow-lg hover:bg-amber-600 transition flex items-center justify-center border border-amber-200/40"
            : "w-10 h-10 bg-amber-500 text-black rounded-full shadow-md hover:bg-amber-600 transition flex items-center justify-center border border-amber-200/40"
        }
      >
        <Languages size={22} />
      </motion.button>
    </div>
  );
}
