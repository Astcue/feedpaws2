import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import galleryImages from "@/data/galleryImages";

const PhotoGalleryPage = () => (
  <div>
    <section className="pt-32 pb-12 md:pt-40 md:pb-14">
      <div className="container-page">
        <Link to="/our-work" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to our work
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mt-8"
        >
          <span className="eyebrow">Photo gallery</span>
          <h1 className="mt-4 mb-4 font-serif text-4xl text-foreground md:text-5xl">More moments from our work</h1>
          <p className="text-lg text-muted-foreground">A closer look at the animals and community we care for.</p>
        </motion.div>
      </div>
    </section>

    <section className="pb-16 md:pb-20">
      <div className="container-page">
        <div className="columns-1 gap-5 sm:columns-2 xl:columns-3">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.24) }}
              className="mb-5 break-inside-avoid overflow-hidden rounded-xl"
            >
              <img
                src={image}
                alt={`Feed Paws activity ${index + 1}`}
                className="block w-full h-auto rounded-xl"
                loading="lazy"
              />
            </motion.figure>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-6 mt-10 border-t border-border text-muted-foreground">
          <Clock className="w-4 h-4 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm">More photos will be added soon.</p>
        </div>
      </div>
    </section>
  </div>
);

export default PhotoGalleryPage;
