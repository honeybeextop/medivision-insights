import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { DocsSidebar } from "@/components/DocsSidebar";
import { Footer } from "@/components/Footer";
import { CodeBlock } from "@/components/CodeBlock";

const DocsUsage = () => {
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
              <span className="text-primary">Usage</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-8">
              Usage
            </h1>

            <div className="h-px bg-border mb-8" />

            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-8">
                Learn how to integrate Medivision AI into your clinical applications
                with these practical examples.
              </p>

              <h2 className="font-serif text-2xl font-medium mt-12 mb-4">Basic Initialization</h2>
              
              <p className="text-muted-foreground mb-4">
                Initialize the Medivision client with your API credentials:
              </p>

              <pre className="glass-card p-4 overflow-x-auto text-sm mb-8">
                <code className="text-muted-foreground">{`import { MedivisionClient } from '@medivision/ai';

const client = new MedivisionClient({
  apiKey: process.env.MEDIVISION_API_KEY,
  apiSecret: process.env.MEDIVISION_API_SECRET,
});`}</code>
              </pre>

              <h2 className="font-serif text-2xl font-medium mt-12 mb-4">Image Analysis</h2>
              
              <p className="text-muted-foreground mb-4">
                Analyze medical images with explainable AI insights:
              </p>

              <pre className="glass-card p-4 overflow-x-auto text-sm mb-8">
                <code className="text-muted-foreground">{`const analysis = await client.analyze({
  type: 'radiology',
  image: imageBuffer,
  modality: 'CT',
  bodyPart: 'chest',
});

console.log(analysis.findings);
console.log(analysis.confidence);
console.log(analysis.explanation);`}</code>
              </pre>

              <h2 className="font-serif text-2xl font-medium mt-12 mb-4">Clinical Decision Support</h2>
              
              <p className="text-muted-foreground mb-4">
                Get evidence-based treatment recommendations:
              </p>

              <pre className="glass-card p-4 overflow-x-auto text-sm mb-8">
                <code className="text-muted-foreground">{`const recommendation = await client.recommend({
  diagnosis: 'community-acquired-pneumonia',
  patientData: {
    age: 65,
    comorbidities: ['diabetes', 'hypertension'],
  },
});

console.log(recommendation.treatments);
console.log(recommendation.evidenceLevel);`}</code>
              </pre>

              <h2 className="font-serif text-2xl font-medium mt-12 mb-4">Error Handling</h2>
              
              <p className="text-muted-foreground mb-4">
                Handle API errors gracefully in production:
              </p>

              <pre className="glass-card p-4 overflow-x-auto text-sm mb-8">
                <code className="text-muted-foreground">{`try {
  const result = await client.analyze(data);
} catch (error) {
  if (error.code === 'RATE_LIMITED') {
    // Implement exponential backoff
  } else if (error.code === 'INVALID_IMAGE') {
    // Request valid medical image
  }
}`}</code>
              </pre>
            </div>
          </motion.article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DocsUsage;
