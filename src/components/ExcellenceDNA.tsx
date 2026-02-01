import { motion } from "framer-motion";
import { Video, FileText, Users, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Sessions Live Interactives",
    description: "Posez vos questions, nous levons vos doutes en temps réel.",
    highlight: "Hebdomadaire",
  },
  {
    icon: FileText,
    title: "Résumés Ultra-Concentrés (PDF)",
    description: "L'essentiel du cours, sans superflu, pour une révision efficace.",
    highlight: "Haute Qualité",
  },
  {
    icon: Users,
    title: "Séries d'Exercices Graduées",
    description: "Du concept de base aux défis de niveau examen national.",
    highlight: "Progressif",
  },
  {
    icon: MessageCircle,
    title: "Mentorat WhatsApp 24/7",
    description: "Une ligne directe pour votre suivi quotidien.",
    highlight: "Réponse Rapide",
  },
];

const ExcellenceDNA = () => {
  return (
    <section className="py-24 relative">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section mb-4">
            Un Accompagnement <span className="text-primary">360°</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une approche complète pour garantir votre réussite
          </p>
        </motion.div>

        {/* Bento Grid - Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card-hover p-8 h-full flex flex-col hover:border-primary/30 transition-all duration-300">
                  {/* Icon with glow */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    {/* Subtle glow behind icon */}
                    <div className="absolute inset-0 w-14 h-14 bg-primary/40 rounded-2xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Highlight badge */}
                  <div className="mt-6 pt-4 border-t border-frost/10 flex justify-between items-center">
                    <span className="text-sm font-medium text-primary">
                      {feature.highlight}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExcellenceDNA;
