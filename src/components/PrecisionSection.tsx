import { motion } from "framer-motion";

export function PrecisionSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Our Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
            Medical AI should augment,
            <br />
            <span className="text-gradient italic">never replace,</span>
            <br />
            clinical expertise.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We believe in building tools that empower healthcare professionals
            with insights they can trust, verify, and act upon with confidence.
            Every algorithm is designed with the patient at its center.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-3 gap-8"
        >
          {[
            { value: "99.2%", label: "Accuracy Rate" },
            { value: "50ms", label: "Response Time" },
            { value: "HIPAA", label: "Compliant" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
