import React from 'react';
import { MonitorSmartphone, Brain, Users, Workflow, MessageSquareMore, Share2 } from 'lucide-react';

const features = [
  {
    icon: MonitorSmartphone,
    title: "Multimodal Workspace",
    description: "Seamlessly combine text, voice, image, and video inputs for natural interaction."
  },
  {
    icon: Brain,
    title: "Explainable AI Dashboard",
    description: "Transparent insights into AI decision-making process and confidence levels."
  },
  {
    icon: Workflow,
    title: "Smart Workflow Generator",
    description: "Task-specific templates that adapt to your unique needs and goals."
  },
  {
    icon: MessageSquareMore,
    title: "Voice-Activated Assistant",
    description: "Natural language commands for hands-free operation and multitasking."
  },
  {
    icon: Share2,
    title: "Collaboration Mode",
    description: "Real-time co-editing and feedback with role-based permissions."
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Intuitive interface that adapts to different user personas and needs."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-purple-900 text-center">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow
                          border border-purple-100 group hover:border-purple-300">
                <Icon className="w-10 h-10 mb-6 text-purple-700 group-hover:text-purple-900 transition-colors" />
                <h3 className="text-xl font-semibold mb-3 text-purple-900">{feature.title}</h3>
                <p className="text-purple-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}