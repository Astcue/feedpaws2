import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, UtensilsCrossed, Stethoscope, Megaphone } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import galleryImages from "@/data/galleryImages";

const activities = [
  {
    icon: UtensilsCrossed,
    title: "Daily Feeding Rounds",
    description:
      "Every day, we provide nutritious meals to stray dogs in our community, ensuring no pup goes hungry.",
  },
  {
    icon: Stethoscope,
    title: "Medical Care",
    description:
      "Regular health check-ups, vaccinations, and emergency support for injured or sick animals.",
  },
  {
    icon: Megaphone,
    title: "Community Awareness",
    description:
      "Educational programs that promote responsible pet ownership and compassion for street animals.",
  },
];

const DOGS_FED_BASE_COUNT = 217;
const DOGS_FED_START_DAY = Math.floor(Date.UTC(2026, 8, 30) / 86_400_000);

const getDogsFedCount = () => {
  const currentDay = Math.floor(Date.now() / 86_400_000);
  const daysElapsed = Math.max(0, currentDay - DOGS_FED_START_DAY);
  let count = DOGS_FED_BASE_COUNT;

  for (let day = 1; day <= daysElapsed; day += 1) {
    let seed = Math.imul(DOGS_FED_START_DAY + day + 0x9e3779b9, 0x85ebca6b);
    seed ^= seed >>> 13;
    seed = Math.imul(seed, 0xc2b2ae35);
    seed ^= seed >>> 16;
    count += 8 + ((seed >>> 0) % 23);
  }

  return count;
};

const stats = [
  { value: getDogsFedCount(), label: "Dogs fed", suffix: "+" },
  { value: 16, label: "Active volunteers", suffix: "" },
  { value: 1, label: "Feeding location", suffix: "" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const HomePage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isGalleryHovered, setIsGalleryHovered] = useState(false);

  useEffect(() => {
    if (isGalleryHovered) return;

    const timeout = window.setTimeout(() => {
      setActiveImage((current) => (current + 1) % galleryImages.length);
    }, 8000);

    return () => window.clearTimeout(timeout);
  }, [activeImage, isGalleryHovered]);

  const showPreviousImage = () => {
    setActiveImage((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % galleryImages.length);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="eyebrow">Because every paw deserves care</span>
              <h1 className="mt-5 font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl md:text-6xl">
                Feeding hope,
                <br />
                saving lives.
              </h1>
              <p className="max-w-md mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                We're a community-driven initiative dedicated to feeding, caring for, and
                protecting stray animals in our neighborhood — one meal, one visit at a time.
              </p>

              <div className="flex flex-col gap-3 mt-9 sm:flex-row">
                <Link
                  to="/our-work"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  See our work
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/our-motive"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-medium transition-colors border rounded-full border-border text-foreground hover:border-primary/40 hover:text-primary"
                >
                  Our mission
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="overflow-hidden aspect-[4/3] rounded-2xl border border-border shadow-medium">
                <img
                  src="https://res.cloudinary.com/jfd0gitf/image/upload/v1790130316/1000166401.jpg"
                  alt="A Feed Paws volunteer feeding a stray dog"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute px-5 py-4 border -bottom-6 -left-6 rounded-xl bg-card/75 border-white/70 backdrop-blur-xl shadow-medium hidden sm:block dark:border-white/20">
                <p className="font-serif text-2xl text-foreground">708+</p>
                <p className="text-xs text-muted-foreground">meals served and counting</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border bg-muted/40 md:py-20">
        <div className="container-page">
          <div className="grid gap-10 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                className="text-center"
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <motion.div {...fadeUp} className="max-w-xl mb-10">
            <span className="eyebrow">Our location</span>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Find us in Raiganj
            </h2>
            <p className="mt-3 text-muted-foreground">
              <MapPin className="inline w-4 h-4 mr-1.5 align-text-bottom" aria-hidden="true" />
              Raiganj, West Bengal 733134
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-border shadow-card"
          >
            <iframe
              title="Map showing Raiganj, West Bengal 733134"
              src="https://maps.google.com/maps?q=Raiganj%2C%20West%20Bengal%20733134&z=14&output=embed"
              className="block w-full h-[280px] border-0 md:h-[400px]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <motion.div {...fadeUp} className="max-w-xl mb-14">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Our daily work for the animals who need it most
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                className="p-7 border rounded-2xl border-border bg-card shadow-card"
              >
                <div className="flex items-center justify-center w-11 h-11 mb-5 rounded-xl bg-primary/10">
                  <activity.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-xl text-foreground">{activity.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission preview */}
      <section className="py-20 md:py-28 bg-muted/40 border-y border-border">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div {...fadeUp}>
              <div
                className="relative overflow-hidden aspect-[4/3] rounded-2xl border border-border shadow-card"
                aria-roledescription="carousel"
                aria-label="Feed Paws gallery"
                onMouseEnter={() => setIsGalleryHovered(true)}
                onMouseLeave={() => setIsGalleryHovered(false)}
              >
                <AnimatePresence initial={false}>
                  <motion.img
                    key={galleryImages[activeImage]}
                    src={galleryImages[activeImage]}
                    alt={`Feed Paws gallery photo ${activeImage + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </AnimatePresence>
                <button
                  type="button"
                  onClick={showPreviousImage}
                  aria-label="Previous gallery photo"
                  className="absolute z-10 grid w-10 h-10 text-white -translate-y-1/2 rounded-full left-4 top-1/2 place-items-center border border-white/50 bg-black/25 backdrop-blur-sm hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={showNextImage}
                  aria-label="Next gallery photo"
                  className="absolute z-10 grid w-10 h-10 text-white -translate-y-1/2 rounded-full right-4 top-1/2 place-items-center border border-white/50 bg-black/25 backdrop-blur-sm hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute z-10 flex gap-1.5 bottom-5 left-16 right-16">
                  {galleryImages.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={`Show gallery photo ${index + 1}`}
                      aria-pressed={activeImage === index}
                      className="flex-1 h-2 overflow-hidden rounded-full bg-white/40"
                    >
                      {index < activeImage && <span className="block w-full h-full bg-white" />}
                      {index === activeImage && (
                        <motion.span
                          key={image}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 8, ease: "linear" }}
                          className="block w-full h-full origin-left bg-white"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <span className="eyebrow">Why it matters</span>
              <h2 className="mt-4 mb-5 font-serif text-3xl text-foreground md:text-4xl">
                No stray should go hungry or unseen
              </h2>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                We started with a handful of volunteers feeding dogs in our own neighborhood.
                Today, that same commitment drives everything we do — from daily feeding rounds
                to medical care and community education.
              </p>
              <Link
                to="/our-motive"
                className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
              >
                Read our story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <motion.div
            {...fadeUp}
            className="p-10 text-center rounded-2xl border border-primary/15 bg-secondary text-secondary-foreground shadow-card md:p-16"
          >
            <h2 className="mb-4 font-serif text-3xl md:text-4xl">Join our mission</h2>
            <p className="max-w-xl mx-auto mb-8 text-base opacity-90 md:text-lg">
              Whether you volunteer your time or spread the word, every action helps a life on
              the street.
            </p>
            <Link
              to="/volunteer"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Become a volunteer
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
