import React from 'react';
import { Target, Lightbulb, LandPlotIcon } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-purple-900 text-center">
          Problem Statement & Objectives
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
            <div className="flex items-center gap-4 mb-6">
              <LandPlotIcon className="w-8 h-8 text-purple-700" />
              <h3 className="text-xl font-semibold text-purple-900">Current Landscape</h3>
            </div>
            <p className="text-purple-700 leading-relaxed">
              The digital age has seen a surge in AI-driven tools, yet most solutions 
              lack seamless multimodal integration and fail to adapt to individual user needs.
            </p>
          </div>
          <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
            <div className="flex items-center gap-4 mb-6">
              <Lightbulb className="w-8 h-8 text-purple-700" />
              <h3 className="text-xl font-semibold text-purple-900">Core Need</h3>
            </div>
            <p className="text-purple-700 leading-relaxed">
              Interactivo leverages AI to create dynamic, deeply personalized experiences 
              across diverse use cases, ensuring intuitive interaction regardless of technical expertise.
            </p>
          </div>
          <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-8 h-8 text-purple-700" />
              <h3 className="text-xl font-semibold text-purple-900">Challenge</h3>
            </div>
            <p className="text-purple-700 leading-relaxed">
              AI solutions must not only deliver results but also align with user expectations, offering explainability, multimodal inputs, and real-time adaptability. The mission is to provide a harmonious interface where human intuition meets AI intelligence, elevating productivity and creativity without complicating the user journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}