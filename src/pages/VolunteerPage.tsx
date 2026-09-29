import { motion } from "framer-motion";
import { Heart, Users, Calendar, CheckCircle } from "lucide-react";
import { gmailComposeUrl } from "@/lib/gmail";

const benefits = [
  { icon: Heart, text: "Make a real difference in animals' lives" },
  { icon: Users, text: "Join a community of compassionate people" },
  { icon: Calendar, text: "Flexible scheduling based on your availability" },
  { icon: CheckCircle, text: "No prior experience required" },
];

const VolunteerPage = () => {
  return (
    <div>
      <section className="pt-32 pb-10 md:pt-40 md:pb-12">
        <div className="container-page">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="eyebrow">Join our team</span>
            <h1 className="mt-4 mb-4 font-serif text-4xl text-foreground md:text-5xl">
              Become a volunteer
            </h1>
            <p className="text-lg text-muted-foreground">
              Lend your hands and heart to help stray animals in our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-10">
        <div className="container-page">
          <div className="flex flex-wrap gap-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex items-center gap-2 px-4 py-2 border rounded-full bg-card border-border"
              >
                <benefit.icon className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="pb-16 md:pb-20">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto overflow-hidden border rounded-2xl bg-card border-border shadow-medium"
          >
            <div className="p-6 text-center border-b border-border bg-muted/40">
              <h2 className="font-serif text-2xl text-foreground">Volunteer registration form</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below to join our volunteer team.
              </p>
            </div>

            <div className="relative" style={{ paddingBottom: "120%" }}>
              <iframe
                src="https://form.svhrt.com/6a0f186f682986fcc071f79f"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Volunteer Registration Form"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 border-t border-border bg-muted/40 md:py-24">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="mb-4 font-serif text-2xl text-foreground md:text-3xl">Have questions?</h2>
            <p className="mb-7 text-muted-foreground">
              If you have any questions about volunteering or need more information, feel free
              to reach out to us directly.
            </p>
            <a
              href={gmailComposeUrl("help.feedpawsinitiative@gmail.com")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Contact us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerPage;
