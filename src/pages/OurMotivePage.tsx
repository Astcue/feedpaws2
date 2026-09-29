import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Users, Leaf, Sparkles, MapPin, ExternalLink, Mail } from "lucide-react";
import { gmailComposeUrl } from "@/lib/gmail";

const cityRequestGmailUrl = gmailComposeUrl("report.fpi@gmail.com", {
  subject: "Request to add my city to Feed Paws locations",
  body: "Hello Feed Paws Initiative,\n\nI would like to request that you add my city to your locations.\n\nCity:\nState:\nPostal code:\n\nThank you.",
});

const values = [
  { icon: Heart, title: "Compassion", description: "Every animal deserves love and care." },
  { icon: Shield, title: "Protection", description: "Safeguarding vulnerable street animals." },
  { icon: Users, title: "Community", description: "Building a network of caring individuals." },
  { icon: Leaf, title: "Sustainability", description: "Creating lasting change in animal welfare." },
  { icon: Sparkles, title: "Hope", description: "Believing in a better tomorrow for all." },
];

const timeline = [
  { year: "2025", title: "The Beginning", description: "Started with a small group of friends feeding stray dogs in our neighborhood." },
  { year: "2025", title: "Growing Impact", description: "Expanded our reach to cover more areas and recruited more volunteers." },
  { year: "2025", title: "Medical Support", description: "Partnered with local vets to provide medical care for injured animals." },
  { year: "2025", title: "Community Programs", description: "Launched awareness campaigns in schools and communities." },
  { year: "2025", title: "Looking Ahead", description: "Planning to establish a permanent shelter and adoption center." },
];

const team = [
  { name: "Core Team", role: "Founders & coordinators", count: 4 },
  { name: "Volunteers", role: "Field workers", count: 16 },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const OurMotivePage = () => {
  return (
    <div>
      <section className="pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="container-page">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="eyebrow">Why we do this</span>
            <h1 className="mt-4 mb-4 font-serif text-4xl text-foreground md:text-5xl">Our motive</h1>
            <p className="text-lg text-muted-foreground">Driven by compassion, powered by community.</p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="pb-16 md:pb-20">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div {...fadeUp} className="p-9 border border-primary/15 rounded-2xl bg-secondary text-secondary-foreground shadow-card md:p-10">
              <Target className="w-9 h-9 mb-6 text-primary" />
              <h2 className="mb-4 font-serif text-2xl">Our mission</h2>
              <p className="leading-relaxed opacity-90">
                To ensure no stray animal goes hungry or without medical care in our community.
                We strive to create a compassionate environment where every living being is
                treated with dignity and respect.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="p-9 border rounded-2xl bg-card border-border shadow-card md:p-10"
            >
              <Eye className="w-9 h-9 mb-6 text-primary" />
              <h2 className="mb-4 font-serif text-2xl text-foreground">Our vision</h2>
              <p className="leading-relaxed text-muted-foreground">
                A world where every stray animal has access to food, shelter, and medical care.
                We envision communities that coexist harmoniously with street animals, treating
                them as valued members of our shared environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-y border-border bg-muted/40 md:py-24">
        <div className="container-page">
          <motion.div {...fadeUp} className="max-w-xl mb-12">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Our core values</h2>
            <p className="mt-3 text-muted-foreground">The principles that guide everything we do.</p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                className="p-6 border rounded-2xl bg-card border-border shadow-card"
              >
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-primary/10">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="mb-1.5 font-serif text-lg text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 border-y border-border bg-muted/40 md:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div {...fadeUp}>
            <span className="eyebrow">Our location</span>
            <h2 className="mt-4 mb-4 font-serif text-3xl text-foreground md:text-4xl">Rooted in Raiganj</h2>
            <p className="text-muted-foreground">
              Feed Paws Initiative serves its community from Raiganj, West Bengal.
            </p>
            <div className="flex items-start gap-3 mt-6">
              <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <p className="font-medium text-foreground">Raiganj, West Bengal 733134</p>
            </div>
            <div className="flex items-center gap-3 mt-4 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              <span>More locations coming soon</span>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Raiganj%2C%20West%20Bengal%20733134"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-primary hover:underline"
            >
              Open map
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={cityRequestGmailUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-fit gap-2 px-5 py-3 mt-6 font-semibold rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Request your city
            </a>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            id="location-map"
            className="scroll-mt-28 overflow-hidden border rounded-xl border-border shadow-card"
          >
            <iframe
              title="Map showing Raiganj, West Bengal 733134"
              src="https://maps.google.com/maps?q=Raiganj%2C%20West%20Bengal%20733134&z=14&output=embed"
              className="block w-full h-[320px] border-0 md:h-[400px]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <motion.div {...fadeUp} className="max-w-xl mx-auto mb-12 text-center">
            <span className="eyebrow">The team</span>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">Meet our heroes</h2>
            <p className="mt-3 text-muted-foreground">The passionate individuals behind Feed Paws.</p>
          </motion.div>

          <div className="grid max-w-2xl gap-6 mx-auto md:grid-cols-2">
            {team.map((group, index) => (
              <motion.div
                key={group.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                className="p-8 text-center border rounded-2xl bg-card border-border shadow-card"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                  <span className="text-2xl font-serif font-medium text-primary">{group.count}</span>
                </div>
                <h3 className="mb-1 font-serif text-xl text-foreground">{group.name}</h3>
                <p className="text-sm text-muted-foreground">{group.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 border-t border-border bg-muted/40 md:py-24">
        <div className="container-page">
          <motion.div {...fadeUp} className="max-w-xl mb-14">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Our journey</h2>
            <p className="mt-3 text-muted-foreground">From humble beginnings to growing impact.</p>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-8 border-l border-border pl-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="relative"
              >
                <span className="absolute -left-[2.15rem] top-1.5 w-3 h-3 rounded-full bg-primary" />
                <span className="inline-block mb-2 text-xs font-semibold tracking-wide text-primary">
                  {item.year}
                </span>
                <h3 className="mb-1.5 font-serif text-xl text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMotivePage;
