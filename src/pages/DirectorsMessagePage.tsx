// src/pages/DirectorsMessagePage.tsx
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import VolunteerOfYear, { Winner } from "../components/VolunteerOfYear";

const DirectorsMessagePage = () => {

  const paragraphs = [
    `Feed Paws Initiative started with a very simple thought, if we see an animal suffering, we shouldn't just walk past it.`,
    `We started small, with whatever we had and with a few people who were willing to help. Since then, we've fed dogs, responded to cases, helped animals get treatment and, most importantly, learned a lot along the way.`,
    `What makes me proudest about Feed Paws Initiative is the people behind it. Most of our work is done by young volunteers who give their time without expecting anything in return. They go out in the field, deal with difficult situations and keep showing up.
There is a lot more that we want to do. But for now, our focus is simple, help where we can, learn from what we do, and keep moving forward.`,
    `Thank you to everyone who has trusted us, supported us, volunteered with us, or simply helped an animal because they saw it needed help.`,

];

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-10 text-center">
            <span className="eyebrow">A personal note</span>
            <h1 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              Director's message
            </h1>
          </div>

          <div className="relative p-8 border rounded-2xl bg-card border-border shadow-medium md:p-14">
            <Quote className="absolute w-10 h-10 top-6 left-6 text-primary/10" aria-hidden="true" />

            <div className="relative z-10">
              <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
                Dear friends and supporters,
              </p>

              {paragraphs.map((p, i) => (
                <p key={i} className="mb-5 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}

              <div className="pt-6 mt-2 border-t border-border">
                <p className="mb-1 text-foreground">With warmth and gratitude,</p>
                <p className="text-xl font-medium text-foreground font-serif">Shri Sayan Ghosh</p>
                <p className="text-sm text-muted-foreground">Hon'ble Director,
Feed Paws Initiative</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DirectorsMessagePage;
