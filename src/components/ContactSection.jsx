import {
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  
  return (
    <section id="Contacs" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
            <h4 className="font-medium"> Email</h4>
            <a
                href="mailto:theozachary2902@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
            >
                theozachary2902@gmail.com
            </a>
            </div>
        </div>

        <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
            <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
            <h4 className="font-medium"> Phone</h4>
            <a
                href="tel:+6281316460913"
                className="text-muted-foreground hover:text-primary transition-colors"
            >
                +62 81316460913
            </a>
            </div>
        </div>

        <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
            <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
            <h4 className="font-medium"> Location</h4>
            <span className="text-muted-foreground hover:text-primary transition-colors">
                Bekasi, Indonesia
            </span>
            </div>
        </div>
        </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/theodorezachary/" target="_blank">
                  <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/theoo_zachary/" target="_blank">
                  <InstagramIcon />
                </a>
                <a href="http://www.youtube.com/@theo_zachary" target="_blank">
                  <YoutubeIcon />
                </a>
              </div>
            </div>
          </div>
    </section>
  );
};