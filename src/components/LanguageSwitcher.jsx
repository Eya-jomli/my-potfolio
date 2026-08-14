import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
  ];

  const currentLanguage = languages.find(
    (lang) => lang.code === language
  );

  return (
    <div className="relative w-full md:w-auto">
      {/* Language Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full md:w-auto flex items-center justify-between md:justify-center gap-2 px-4 py-2 rounded-full glass text-sm hover:text-[var(--color-primary)] transition-colors"
      >
        {currentLanguage?.label}

        <ChevronDown
          size={16}
          className={`transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 right-0 md:left-auto md:right-0 mt-2 glass-strong rounded-xl p-1 z-50">
          {languages.map((lang) => (
            <button
              type="button"
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                language === lang.code
                  ? "text-[var(--color-primary)] bg-[var(--color-surface)]"
                  : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};