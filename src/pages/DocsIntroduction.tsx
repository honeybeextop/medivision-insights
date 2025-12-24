import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { DocsSidebar } from "@/components/DocsSidebar";
import { Footer } from "@/components/Footer";
import { Activity } from "lucide-react";

const DocsIntroduction = () => {
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
              <span className="text-primary">Introduction</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-8">
              Introduction
            </h1>

            <div className="h-px bg-border mb-8" />

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                <span className="font-serif italic text-accent">Healthcare evolves.</span>{" "}
                Your diagnostic tools should keep pace.
              </p>

              <p className="text-foreground/90 leading-relaxed mb-6">
                <strong className="text-foreground">Medivision AI</strong> is an advanced medical intelligence platform designed to assist healthcare professionals with diagnostic accuracy and clinical decision-making. Built with explainability at its core, it provides transparent, traceable reasoning that clinicians can trust.
              </p>

              <div className="glass-card p-4 flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Latest Release</p>
                  <p className="text-foreground font-medium">v1.0.0</p>
                </div>
                <span className="ml-auto w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              </div>

              <h2 className="font-serif text-2xl font-medium mt-12 mb-4">Key Capabilities</h2>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">Medical Image Analysis</strong> — Advanced interpretation of radiological and pathological images</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">Clinical Decision Support</strong> — Evidence-based treatment recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">Explainable AI</strong> — Transparent reasoning for every diagnostic insight</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">Enterprise Integration</strong> — HIPAA-compliant APIs for seamless EHR integration</span>
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-medium mt-12 mb-4">Getting Started</h2>
              
              <p className="text-muted-foreground leading-relaxed">
                Ready to integrate Medivision AI into your clinical workflow? Head over to the{" "}
                <a href="/docs/installation" className="text-primary hover:underline">Installation</a>{" "}
                guide to get started, or explore our{" "}
                <a href="/docs/api" className="text-primary hover:underline">API Reference</a>{" "}
                for detailed endpoint documentation.
              </p>
            </div>
          </motion.article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DocsIntroduction;
