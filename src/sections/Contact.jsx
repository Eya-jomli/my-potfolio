import { Mail, Phone, MapPin, Send  } from "lucide-react"; 
import { Button } from "@/components/Button";
import { useState } from "react";
const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "Eya.jomli@esprit.tn",
        href: "mailto:Eya.jomli@esprit.tn"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+49 015511281053",
        href: "tel:+49015511281053"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Germany",
        href: "#"
    },
];
export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email:"",
        message:""
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
            {/*Section header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider">
                    Get In Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in">
                    Let's build {" "}
                    <span className="font-serif italic font-normal text-white">
                        something great.
                    </span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
                    Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.
                </p>
            </div>

            <div>
                <div>
                    <form className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300 ">
                        <div className="space-y-6">
                            <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"> Name</label>
                            <input 
                            id="name" 
                            type="text" 
                            required
                            placeholder="Your name..."
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({...formData, name: e.target.value})
                            }
                            className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border[var(--color-primary)] focus:ring-1 focus:ring-primary outline-none transition-all" />
                        </div>

                        <div>
                            <label htmlFor="email" type="email"
                            className="block text-sm font-medium mb-2 mt-2"
                            > Email</label>
                            <input 
                            required
                            placeholder="name@email.com"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({...formData, email: e.target.value})
                            }
                            className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border[var(--color-primary)] focus:ring-1 focus:ring-primary outline-none transition-all" />
                        </div>

                        <div>
                            <label> Message</label>
                            <textarea 
                            rows={5}
                            required
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({...formData, message: e.target.value})
                            }
                            placeholder="Your message"
                            className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border[var(--color-primary)] focus:ring-1 focus:ring-primary outline-none transition-all resize-none" />
                        </div>

                        <Button className="w-full" type="submit" size="lg"> 
                            Send Message
                            <Send />
                        </Button>
                    </form>
                </div>
            </div>

        </div>

    </section>
);
};