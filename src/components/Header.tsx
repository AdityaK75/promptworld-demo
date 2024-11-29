import React from 'react';
import SamImage from './images/PW.avif';

export default function Header() {
  return (
    <header className="bg-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-purple-50/50" />
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center gap-4 mb-4">
          <img src={SamImage} className="w-100 h-12 text-purple-800" />
          {/* <span className="text-purple-800 font-semibold">AI-Powered Innovation</span> */}
        </div>
        <h1 className="text-6xl font-bold mb-6 text-purple-900">
          PromptBOT
        </h1>
        <p className="text-xl text-purple-700 max-w-2xl font-light">
          Revolutionizing user experience in human-AI interaction through seamless 
          multimodal integration and personalized experiences.
        </p>
      </div>
    </header>
  );
}