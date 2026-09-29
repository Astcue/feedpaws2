import { motion } from "framer-motion";
import { ArrowRight, MapPin, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import galleryImages from "@/data/galleryImages";

const impactStories = [
  {
    title: "Tiger's Recovery",
    description:
      "Tiger was found weak and injured, struggling to walk and barely eating. He was taken to a vet, where his wounds were treated and he was given medication, food, and proper care. Over the next few weeks, Tiger slowly regained his strength. His wound healed, his appetite returned, and he started walking and playing again. Today, Tiger is healthy, active, and back to being the happy dog he once was.",
    icon: Heart,
  },
  {
    title: "Community Initiative",
    description:
      "Our awareness programs have contributed to higher local adoption interest and fewer cases of animal abandonment in our area.",
    icon: Star,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const OurWorkPage = () => {
  return (
    <div>
      <section className="pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="container-page">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="eyebrow">Gallery</span>
            <h1 className="mt-4 mb-4 font-serif text-4xl text-foreground md:text-5xl">
              Our work in action
            </h1>
            <p className="text-lg text-muted-foreground">
              Glimpses of our daily efforts to make a difference in the lives of stray animals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="pb-16 md:pb-20">
        <div className="container-page">
          <div className="columns-1 gap-5 md:columns-2">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                className="relative mb-5 break-inside-avoid"
              >
                <img
                  src={image}
                  alt={`Feed Paws activity ${index + 1}`}
                  className={`block w-full rounded-2xl ${index === 2 ? "aspect-[6/5] object-cover" : "h-auto"}`}
                  loading="lazy"
                />
                {index === 1 && (
                  <Link
                    to="/our-work/gallery"
                    className="mt-4 hidden items-center gap-2 rounded-lg border border-primary px-5 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex"
                  >
                    View more
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
          <div className="mt-6 flex justify-center md:hidden">
            <Link
              to="/our-work/gallery"
              className="inline-flex items-center gap-2 rounded-lg border border-primary px-5 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View more
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 border-y border-border bg-muted/40 md:py-24">
        <div className="container-page">
          <motion.div {...fadeUp} className="max-w-xl mb-12">
            <span className="eyebrow">Stories of hope</span>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">Impact stories</h2>
            <p className="mt-3 text-muted-foreground">
              Real stories that show the impact of your support.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {impactStories.map((story, index) => (
              <motion.div
                key={story.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.1 }}
                className="p-8 border rounded-2xl bg-card border-border shadow-card"
              >
                <div className="flex items-center justify-center mb-6 rounded-xl w-11 h-11 bg-primary/10">
                  <story.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-xl text-foreground">{story.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <motion.div
            {...fadeUp}
            className="p-10 text-center border rounded-2xl bg-card border-border shadow-card md:p-14"
          >
            <MapPin className="w-9 h-9 mx-auto mb-5 text-primary" />
            <h2 className="mb-4 font-serif text-2xl text-foreground md:text-3xl">Where we operate</h2>
            <p className="max-w-2xl mx-auto mb-6 text-muted-foreground">
              Our feeding routes cover multiple neighborhoods, ensuring that stray animals across
              our locality receive regular meals and care. We currently operate in one primary
              location, with plans to expand our reach.
            </p>
            <Link
              to="/our-motive#location-map"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              aria-label="View active location on the Our Motive page"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-medium">1 active location</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurWorkPage;
