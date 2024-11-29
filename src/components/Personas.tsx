import React from 'react';
import UserPersona from './UserPersona';
import EmilyImage from './images/download.jpeg';
import LilaImage from './images/lila.png';
import RajImage from './images/raj.jpeg';
import SophiaImage from './images/sophia.jpeg';
import SamImage from './images/download (1).jpeg';
const personas = [
  {
    name: "Emily",
    role: "Content Creator",
    profile: "A 25-year-old content creator who uses tools for video creation, music generation, and storyboarding.",
    painPoints: [
      "Overwhelmed by managing separate tools",
      "Steep learning curve for advanced AI features",
      "Difficulty maintaining creative flow across platforms"
    ],
    value: "A unified, multimodal interface that allows seamless transitions between tasks, reducing tool-switching fatigue and fostering creativity.",
    image: EmilyImage,
  },
  {
    name: "Lila",
    role: "Student",
    profile: "A 19-year-old college student using AI chatbots for study assistance and writing help.",
    painPoints: [
      "Finds AI responses untrustworthy due to unclear reasoning.",
      "Prefers interactive inputs like voice and images alongside text.",
      "Desires dynamic engagement for better clarity."
    ],
    value: "Explainable AI features and multimodal interaction capabilities, making the tool more approachable and reliable for academic purposes.",
    image: LilaImage,
    },
  {
    name: "Raj",
    role: "Management Consultant",
    profile: "A 35-year-old consultant who frequently drafts presentations and analyzes large datasets.",
    painPoints: [
      "Generic AI outputs lacking context",
      "Poor integration with existing workflows",
      "Limited collaboration features"
    ],
    value: "Customizable AI-driven outputs tailored to project requirements, with real-time editing and collaborative features.",
    image: RajImage,
    },
  {
    name: "Sophia",
    role: "Busy Parent",
    profile: "A 40-year-old parent juggling work and family, using AI to simplify everyday tasks.",
    painPoints: [
      "Limited time to learn complex interfaces",
      "Inaccurate voice recognition",
      "Misaligned recommendations"
    ],
    value: "Voice-activated AI that understands nuanced commands and adapts over time, delivering results quickly and efficiently.",
    image: SophiaImage,
    },
  {
    name: "Sam",
    role: "Technophile",
    profile: "A 28-year-old developer exploring AI tools for hobby projects like code generation and gaming content.",
    painPoints: [
      "Finds AI-generated outputs rigid and difficult to tweak. ",
      "Lacks detailed insights into the decision-making process of AI models."
    ],
    value: "Advanced customization options and transparency dashboards for greater control and understanding of AI processes.",
    image: SamImage,
    }

];

export default function Personas() {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-purple-900 text-center">User Personas</h2>
        <p className="text-purple-700 text-center mb-12 max-w-2xl mx-auto">
          Understanding our diverse user base helps us create features that address real needs and pain points.
        </p>
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {personas.map((persona, index) => (
            <UserPersona key={index} {...persona} />
          ))}
        </div>
      </div>
    </section>
  );
}