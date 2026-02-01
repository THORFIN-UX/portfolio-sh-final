import { motion } from "framer-motion";
import profImage from "@/assets/imgs/photo-5.jpeg";
import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 pointer-events-none" />

      <div className="container mx-auto px-6 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-foreground/80">Éducation Scientifique d'Élite</span>
            </motion.div>

            <h1 className="heading-hero">
              Prof SH : <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                L’Art de Maîtriser
              </span> <br />
              la Physique & les Mathématiques
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
              Plus qu’un cours, une immersion vers l’excellence. Rejoignez la communauté du Professeur Sofiane Harrou et transformez vos blocages en réussites académiques.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.5)] transition-all hover:shadow-[0_0_30px_rgba(var(--primary),0.6)]">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Découvrir l'Offre d'Excellence
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-lg px-8 py-6 bg-transparent hover:bg-primary/10 text-foreground border border-transparent hover:border-primary/20 transition-all"
              >
                Voir le Portfolio YouTube
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-frost/10"
            >
              {[
                { value: "15K+", label: "Élèves" },
                { value: "98%", label: "Taux de Réussite" },
                { value: "500+", label: "Heures de Vidéo" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Professor Image with Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow aura effect - Enhanced */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[120%] h-[120%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            </div>

            {/* Image container */}
            <div className="relative z-10 glow-aura">
              <div className="relative overflow-hidden rounded-3xl glass-card p-2 border border-primary/20">
                <img
                  src={profImage}
                  alt="Prof. SH"
                  className="w-[300px] md:w-[400px] lg:w-[450px] h-auto rounded-2xl object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 glass-card px-6 py-3 border-l-4 border-primary"
              >
                <div className="text-sm text-muted-foreground">Excellence en</div>
                <div className="text-lg font-bold text-primary">Physique & Mathématiques</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
