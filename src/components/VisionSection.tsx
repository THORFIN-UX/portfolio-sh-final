import { motion } from "framer-motion";
import { Users, Lightbulb } from "lucide-react";

const VisionSection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-background/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="heading-section mb-6">
                        L'Innovation Pédagogique au Service de la <span className="text-primary">Réussite</span>
                    </h2>

                    <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                        Expert en Sciences Physiques et Mathématiques, le Professeur Sofiane Harrou a redéfini les codes de l'enseignement digital au Maroc. En fusionnant rigueur académique et approche psychologique ("L'approche du Père Marocain"), il brise la barrière de la peur des sciences pour laisser place à la performance pure.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="glass-card p-8 flex flex-col items-center justify-center gap-4 hover:bg-primary/5 transition-colors"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-3xl font-bold text-foreground">+718k</h3>
                            <p className="text-muted-foreground font-medium">Élèves nous font confiance</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="glass-card p-8 flex flex-col items-center justify-center gap-4 hover:bg-primary/5 transition-colors"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                <Lightbulb className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-3xl font-bold text-foreground">Al Jadid Al Moufid</h3>
                            <p className="text-muted-foreground font-medium">Le contenu le plus récent, le plus utile</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VisionSection;
