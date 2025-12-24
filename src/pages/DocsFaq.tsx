import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { DocsSidebar } from "@/components/DocsSidebar";
import { Footer } from "@/components/Footer";

const faqs = [
  {
    question: "Is Medivision AI HIPAA compliant?",
    answer: "Yes. Medivision AI is built with HIPAA compliance at its foundation. All data is encrypted in transit and at rest, with audit logs for every access. We provide Business Associate Agreements (BAAs) for enterprise customers.",
  },
  {
    question: "How accurate are the diagnostic insights?",
    answer: "Our models achieve 99.2% accuracy in controlled clinical studies. However, Medivision AI is designed as a clinical decision support tool — all insights should be verified by qualified healthcare professionals before clinical action.",
  },
  {
    question: "Can I integrate with my existing EHR system?",
    answer: "Yes. We provide HL7 FHIR-compliant APIs and pre-built integrations for major EHR systems including Epic, Cerner, and Allscripts. Custom integrations are available for enterprise customers.",
  },
  {
    question: "What medical imaging modalities are supported?",
    answer: "Medivision AI supports CT, MRI, X-ray, ultrasound, mammography, and pathology slides. We continuously expand modality support based on clinical demand and validation studies.",
  },
  {
    question: "How does the explainable AI work?",
    answer: "Every diagnostic insight includes a detailed explanation of the reasoning process, including attention maps for imaging analysis, referenced clinical literature, and confidence intervals. This transparency helps clinicians validate and trust AI recommendations.",
  },
];

const DocsFaq = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 pt-28 pb-16">
        <div className="flex gap-12">
          <DocsSidebar />
          
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 max-w-3xl"
          >
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
              <span>Docs</span>
              <span className="mx-2">›</span>
              <span className="text-primary">Troubleshooting & FAQ</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-8">
              Troubleshooting & FAQ
            </h1>

            <div className="h-px bg-border mb-8" />

            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-12">
                Common questions and solutions for integrating Medivision AI
                into clinical workflows.
              </p>

              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-3 shrink-0" />
                    <div>
                      <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-serif text-2xl font-medium mt-16 mb-6">Need More Help?</h2>
              
              <p className="text-muted-foreground leading-relaxed">
                For technical support, contact our team at{" "}
                <a href="mailto:support@medivision.ai" className="text-primary hover:underline">
                  support@medivision.ai
                </a>{" "}
                or visit our{" "}
                <a href="https://github.com" className="text-primary hover:underline">
                  GitHub repository
                </a>{" "}
                to file an issue.
              </p>
            </div>
          </motion.article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DocsFaq;
