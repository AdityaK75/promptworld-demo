import React from "react";
import { Target, UserCheck, TrendingUp } from "lucide-react";

export default function Objectives() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-purple-900 text-center">
          Key Objectives
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Card 1: Enhanced User Engagement */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300 border border-purple-100 flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-6">
              <UserCheck className="w-10 h-10 text-purple-700 transition-transform transform hover:scale-110" />
              <h3 className="text-xl font-semibold text-purple-900">
                Enhanced User Engagement
              </h3>
            </div>
            <p className="text-purple-700 leading-relaxed mb-4">
              Drive active interaction by delivering personalized, multimodal
              experiences that adapt to diverse user needs and contexts.
            </p>
            <p className="text-purple-700 font-medium">
              Value: Increased session duration and higher feature adoption
              rates, ensuring a deeply satisfying user experience.
            </p>
          </div>
          {/* Card 2: Improved Retention */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300 border border-purple-100 flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-10 h-10 text-purple-700 transition-transform transform hover:scale-110" />
              <h3 className="text-xl font-semibold text-purple-900">
                Improved Retention
              </h3>
            </div>
            <p className="text-purple-700 leading-relaxed mb-4">
              Build long-term user loyalty by integrating AI that feels
              intuitive, valuable, and context-aware.
            </p>
            <p className="text-purple-700 font-medium">
              Value: Reduced churn as users rely on the platform for productivity
              and creativity across tasks.
            </p>
          </div>
          {/* Card 3: Differentiation in Market */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300 border border-purple-100 flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-6">
              <TrendingUp className="w-10 h-10 text-purple-700 transition-transform transform hover:scale-110" />
              <h3 className="text-xl font-semibold text-purple-900">
                Differentiation in Market
              </h3>
            </div>
            <p className="text-purple-700 leading-relaxed mb-4">
              Use advanced human-AI interaction capabilities to establish
              Interactivo as a leader in multimodal, AI-powered productivity and
              creativity tools.
            </p>
            <p className="text-purple-700 font-medium">
              Value: Stand out in a competitive market by offering unparalleled
              convenience, adaptability, and integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
