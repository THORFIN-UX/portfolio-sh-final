import { motion } from "framer-motion";

const formulas = [
  {
    category: "Physique",
    formula: "F = q(E + v ∧ B)",
    description: "Force de Lorentz",
    color: "text-primary",
  },
  {
    category: "Électricité",
    formula: "U = R ⋅ I",
    description: "Loi d'Ohm",
    color: "text-accent",
  },
  {
    category: "Mathématiques",
    formula: "e^{iθ} = cos(θ) + i sin(θ)",
    description: "Formule d'Euler",
    color: "text-primary",
  },
];

const LiveScience = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section mb-4">
            La Précision au Cœur de l'<span className="text-primary">Apprentissage</span>
          </h2>
          <p className="text-muted-foreground text-xl italic max-w-2xl mx-auto">
            "La nature est un livre écrit en langage mathématique."
          </p>
        </motion.div>

        {/* Formula Display - Neon Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {formulas.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="glass-card p-8 group flex flex-col justify-between hover:border-primary/30 transition-all duration-500"
            >
              <div className="space-y-6 text-center">
                <div className="text-sm text-primary/80 font-medium tracking-wider uppercase">
                  {item.category}
                </div>

                {/* Neon formula */}
                <div className="py-6 min-h-[120px] flex items-center justify-center">
                  <span className={`neon-text text-3xl md:text-3xl lg:text-4xl font-light tracking-wide ${item.color} font-mono`}>
                    {index === 2 ? (
                      <>e<sup className="text-xl">iθ</sup> = cos(θ) + i sin(θ)</>
                    ) : (
                      item.formula
                    )}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>

                {/* Animated underline */}
                <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-700 mx-auto" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional floating formulas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-6 text-muted-foreground/40 text-lg md:text-xl font-serif italic">
            <span className="hover:text-primary/60 transition-colors cursor-default">∇ × E = -∂B/∂t</span>
            <span className="text-frost/20">•</span>
            <span className="hover:text-primary/60 transition-colors cursor-default">E = mc²</span>
            <span className="text-frost/20">•</span>
            <span className="hover:text-primary/60 transition-colors cursor-default">∫ F·dr = ΔKE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveScience;
