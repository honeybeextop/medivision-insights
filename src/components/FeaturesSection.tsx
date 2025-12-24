import { motion } from "framer-motion";
import { Brain, Stethoscope, Eye, Building2 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Diagnostics",
    description: "Advanced medical image and data interpretation powered by state-of-the-art machine learning models.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Decision Support",
    description: "Confidence-backed treatment insights that integrate seamlessly with clinical workflows.",
  },
  {
    icon: Eye,
    title: "Explainable AI",
    description: "Transparent, traceable medical reasoning that clinicians can trust and verify.",
  },
  {
    icon: Building2,
    title: "Enterprise-Ready",
    description: "HIPAA-aware architecture with scalable systems designed for healthcare institutions.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function FeaturesSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            Engineered for{" "}
            <span className="text-gradient italic">precision.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built on the premise that diagnostic excellence should be accessible,
            not a privilege.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group glass-card p-8 glow-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
