import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  "Upload draft script and supporting images",
  "Use voice commands to refine storyboard",
  "Receive AI-generated recommendations",
  "Share with team for feedback"
];

export default function Journey() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-purple-900 text-center">
          User Journey
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-purple-50 p-10 rounded-2xl border border-purple-100">
            <h3 className="text-2xl font-semibold mb-8 text-purple-900">
              Creating a Video Presentation
            </h3>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center
                                border-2 border-purple-200 text-purple-900 font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-purple-800">{step}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-purple-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}