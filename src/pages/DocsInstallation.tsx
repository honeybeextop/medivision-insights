import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { DocsSidebar } from "@/components/DocsSidebar";
import { Footer } from "@/components/Footer";
import { CodeBlock } from "@/components/CodeBlock";

const DocsInstallation = () => {
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
              <span className="text-primary">Installation</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-8">
              Installation
            </h1>

            <div className="h-px bg-border mb-8" />

            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-8">
                Get started with Medivision AI in your development environment. 
                Our SDK supports Node.js, Python, and RESTful API integrations.
              </p>

              <h2 className="font-serif text-2xl font-medium mt-12 mb-4">Node.js SDK</h2>
              
              <p className="text-muted-foreground mb-4">
                Install the official Node.js SDK using npm or yarn:
              </p>

              <CodeBlock code="npm install @medivision/ai" className="mb-4" />
              
              <p className="text-muted-foreground text-sm mb-8">
                Or using yarn:
              </p>

              <CodeBlock code="yarn add @medivision/ai" className="mb-8" />

              <h2 className="font-serif text-2xl font-medium mt-12 mb-4">Python SDK</h2>
              
              <p className="text-muted-foreground mb-4">
                For Python applications, install via pip:
              </p>

              <CodeBlock code="pip install medivision-ai" className="mb-8" />

              <h2 className="font-serif text-2xl font-medium mt-12 mb-4">Environment Configuration</h2>
              
              <p className="text-muted-foreground mb-4">
                Set your API credentials as environment variables:
              </p>

              <CodeBlock 
                code={`export MEDIVISION_API_KEY="your-api-key"
export MEDIVISION_API_SECRET="your-api-secret"`}
                className="mb-8" 
              />

              <h2 className="font-serif text-2xl font-medium mt-12 mb-4">Requirements</h2>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Node.js 18+ or Python 3.9+</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Valid API credentials (request access via dashboard)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>HTTPS connectivity to api.medivision.ai</span>
                </li>
              </ul>
            </div>
          </motion.article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DocsInstallation;
