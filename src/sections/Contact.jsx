import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.info.email,
      value: "Eya.jomli@esprit.tn",
      href: "mailto:Eya.jomli@esprit.tn",
    },
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: "+49 015511281053",
      href: "tel:+49015511281053",
    },
    {
      icon: MapPin,
      label: t.contact.info.location,
      value: "Germany",
      href: "#",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider">
            {t.contact.label}
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in">
            {t.contact.title}{" "}
            <span className="font-serif italic font-normal text-white">
              {t.contact.titleItalic}
            </span>
          </h2>

          <p className="text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
            {t.contact.description}
          </p>
        </div>

        <div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300"
            >
              <div className="space-y-6">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.contact.form.name}
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    placeholder={t.contact.form.namePlaceholder}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-[var(--color-primary)] focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.contact.form.email}
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    placeholder={t.contact.form.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-[var(--color-primary)] focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.contact.form.message}
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-[var(--color-primary)] focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <Button
                  className="w-full"
                  type="submit"
                  size="lg"
                >
                  {t.contact.form.send}
                  <Send />
                </Button>

              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};