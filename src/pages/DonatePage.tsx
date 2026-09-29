import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Gift, Heart, Loader2, Mail } from "lucide-react";
import { gmailComposeUrl } from "@/lib/gmail";

const upcomingFeatures = [
  { icon: Gift, title: "Sponsor a meal", description: "Help fund daily feeding rounds for animals in need." },
  { icon: Heart, title: "Support animal care", description: "Contribute to rescue, treatment, and ongoing care." },
  { icon: Mail, title: "Impact updates", description: "See how community support makes a difference." },
];

const DonatePage = () => {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleNewsletterSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email) return;
    setNewsletterStatus("submitting");
    setTimeout(() => {
      setNewsletterStatus("success");
      setEmail("");
    }, 700);
  };

  return (
    <div>
      <section className="pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="container-page">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="eyebrow">Support our cause</span>
            <h1 className="mt-4 mb-4 font-serif text-4xl text-foreground md:text-5xl">Make a donation</h1>
            <p className="text-lg text-muted-foreground">Your generosity helps us feed and care for stray animals every single day.</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-page">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl p-6 mx-auto border rounded-2xl bg-card border-border shadow-card md:p-10">
            <div className="py-8 text-center md:py-10" role="status" aria-live="polite">
              <Clock className="w-10 h-10 mx-auto mb-5 text-primary" />
              <h2 className="mb-3 font-serif text-2xl text-foreground md:text-3xl">Donations are coming soon</h2>
              <p className="max-w-lg mx-auto text-muted-foreground">We’re preparing a secure way for you to support Feed Paws Initiative. Please check back soon, or sign up below to hear when donations open.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-y border-border bg-muted/40 md:py-24">
        <div className="container-page">
          <div className="max-w-xl mx-auto mb-12 text-center"><h2 className="font-serif text-3xl text-foreground md:text-4xl">What's coming</h2><p className="mt-3 text-muted-foreground">A transparent way to support our work.</p></div>
          <div className="grid max-w-4xl gap-5 mx-auto md:grid-cols-3">{upcomingFeatures.map((feature) => <div key={feature.title} className="p-6 border rounded-2xl bg-card border-border shadow-card"><div className="flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-primary/10"><feature.icon className="w-5 h-5 text-primary" /></div><h3 className="mb-1.5 font-serif text-lg text-foreground">{feature.title}</h3><p className="text-sm text-muted-foreground">{feature.description}</p></div>)}</div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl p-9 mx-auto border rounded-2xl bg-card border-border shadow-card md:p-10">
            <div className="mb-7 text-center"><Mail className="w-8 h-8 mx-auto mb-4 text-primary" /><h2 className="mb-2 font-serif text-2xl text-foreground">Stay updated</h2><p className="text-muted-foreground">Get updates about our work and future donation options.</p></div>
            {newsletterStatus === "success" ? <div className="p-6 text-center rounded-xl bg-secondary"><Heart className="w-7 h-7 mx-auto mb-3 text-primary" /><p className="font-medium text-foreground">Thank you for subscribing!</p><p className="text-sm text-muted-foreground">We'll keep you updated.</p></div> : <form onSubmit={handleNewsletterSubmit} className="space-y-3" noValidate><label htmlFor="donate-email" className="sr-only">Email address</label><input id="donate-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required disabled={newsletterStatus === "submitting"} className="w-full px-5 py-3.5 rounded-xl bg-muted border border-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" /><button type="submit" disabled={newsletterStatus === "submitting"} className="flex items-center justify-center w-full gap-2 px-6 py-3.5 font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-70">{newsletterStatus === "submitting" && <Loader2 className="w-4 h-4 animate-spin" />}{newsletterStatus === "submitting" ? "Submitting…" : "Notify me"}</button></form>}
            <div className="pt-6 mt-8 text-center border-t border-border"><p className="text-sm text-muted-foreground">For direct assistance, contact us at:</p><a href={gmailComposeUrl("help.feedpawsinitiative@gmail.com")} target="_blank" rel="noreferrer" className="font-medium text-primary hover:underline">help.feedpawsinitiative@gmail.com</a></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
