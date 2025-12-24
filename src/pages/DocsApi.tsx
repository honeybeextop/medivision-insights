import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { DocsSidebar } from "@/components/DocsSidebar";
import { Footer } from "@/components/Footer";

const DocsApi = () => {
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
              <span className="text-primary">API Reference</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-8">
              API Reference
            </h1>

            <div className="h-px bg-border mb-8" />

            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-8">
                Complete API documentation for the Medivision AI platform.
                All endpoints require authentication via API key.
              </p>

              <h2 className="font-serif text-2xl font-medium mt-12 mb-4">Base URL</h2>
              
              <pre className="glass-card p-4 overflow-x-auto text-sm mb-8">
                <code className="text-accent">https://api.medivision.ai/v1</code>
              </pre>

              <h2 className="font-serif text-2xl font-medium mt-12 mb-4">Authentication</h2>
              
              <p className="text-muted-foreground mb-4">
                Include your API key in the request headers:
              </p>

              <pre className="glass-card p-4 overflow-x-auto text-sm mb-8">
                <code className="text-muted-foreground">{`Authorization: Bearer YOUR_API_KEY
X-API-Secret: YOUR_API_SECRET`}</code>
              </pre>

              <h2 className="font-serif text-2xl font-medium mt-12 mb-6">Endpoints</h2>

              {/* Endpoint: Analyze */}
              <div className="glass-card p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 rounded text-xs font-medium bg-primary/20 text-primary">POST</span>
                  <code className="text-foreground">/analyze</code>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Analyze medical images and return diagnostic insights.
                </p>
                <h4 className="text-sm font-medium text-foreground mb-2">Parameters</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li><code className="text-accent">image</code> — Base64 encoded image (required)</li>
                  <li><code className="text-accent">type</code> — Analysis type: radiology, pathology, dermatology</li>
                  <li><code className="text-accent">modality</code> — Imaging modality: CT, MRI, X-ray, ultrasound</li>
                </ul>
              </div>

              {/* Endpoint: Recommend */}
              <div className="glass-card p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 rounded text-xs font-medium bg-primary/20 text-primary">POST</span>
                  <code className="text-foreground">/recommend</code>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Get clinical decision support recommendations.
                </p>
                <h4 className="text-sm font-medium text-foreground mb-2">Parameters</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li><code className="text-accent">diagnosis</code> — ICD-10 code or diagnosis string (required)</li>
                  <li><code className="text-accent">patientData</code> — Patient demographics and history</li>
                  <li><code className="text-accent">guidelines</code> — Preferred clinical guidelines</li>
                </ul>
              </div>

              {/* Endpoint: Explain */}
              <div className="glass-card p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 rounded text-xs font-medium bg-primary/20 text-primary">GET</span>
                  <code className="text-foreground">/explain/:analysisId</code>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Retrieve detailed explanation for a previous analysis.
                </p>
                <h4 className="text-sm font-medium text-foreground mb-2">Parameters</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li><code className="text-accent">analysisId</code> — Analysis ID from previous request</li>
                  <li><code className="text-accent">format</code> — Output format: json, markdown, html</li>
                </ul>
              </div>

              <h2 className="font-serif text-2xl font-medium mt-12 mb-4">Rate Limits</h2>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">Standard:</strong> 100 requests per minute</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">Enterprise:</strong> 1000 requests per minute</span>
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

export default DocsApi;
