import { motion } from "framer-motion";
import { Play, Clock, BookOpen, ArrowRight } from "lucide-react";
import track1 from "@/assets/imgs/photo-6.jpeg";
import track2 from "@/assets/imgs/photo-7.jpeg";
import track3 from "@/assets/imgs/photo-8.jpeg";

const tracks = [
  {
    id: "3AC",
    title: "Les Héros du Régional",
    level: "3ème Année Collège",
    description: "Fondations solides en Mécanique et Électricité pour dominer l'examen régional.",
    lessons: 48,
    hours: 120,
    color: "from-cyan-500/20 to-blue-600/20",
    borderColor: "border-cyan-400/40",
    image: track1,
    large: true,
  },
  {
    id: "TCS",
    title: "L'Éveil Scientifique",
    level: "Tronc Commun Scientifique",
    description: "Maîtrise des concepts fondamentaux pour une orientation réussie vers les filières d'élite.",
    lessons: 64,
    hours: 180,
    color: "from-purple-500/20 to-pink-600/20",
    borderColor: "border-purple-400/40",
    image: track2,
    large: false,
  },
  {
    id: "1BAC",
    title: "L'Élite des Sciences Math",
    level: "1ère Baccalauréat",
    description: "Analyse approfondie et résolution de problèmes complexes. La préparation ultime pour l'année décisive.",
    lessons: 72,
    hours: 200,
    color: "from-emerald-500/20 to-teal-600/20",
    borderColor: "border-emerald-400/40",
    image: track3,
    large: false,
  },
];

const TracksSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="category-label text-primary mb-2">Portfolio des Niveaux</h2>
            <h3 className="heading-section">The Masterclass Tracks</h3>
          </div>
          <p className="text-muted-foreground text-lg max-w-xl text-right md:text-left">
            Choisissez votre parcours vers l'excellence. Chaque niveau est conçu pour maximiser votre potentiel.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl glass-card border border-white/10 ${track.large ? "md:col-span-2 lg:col-span-2 row-span-2" : "col-span-1 row-span-1"
                }`}
            >
              {/* Background Image & Gradient */}
              <div className="absolute inset-0">
                <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-60 z-10 mix-blend-overlay`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-20" />
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-30 p-8 flex flex-col justify-end">
                {/* Top Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 rounded-full bg-background/30 backdrop-blur-md border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                    {track.level}
                  </span>
                </div>

                <div className="space-y-4 transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className={`font-bold text-white ${track.large ? "text-3xl lg:text-4xl" : "text-2xl"}`}>
                    {track.title}
                  </h3>

                  <p className="text-gray-200 leading-relaxed max-w-xl">
                    {track.description}
                  </p>

                  {/* Stats & Action */}
                  <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span>{track.lessons} leçons</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{track.hours}h</span>
                    </div>

                    <button className="ml-auto w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
