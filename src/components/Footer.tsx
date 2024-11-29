import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-purple-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="#" className="text-white/70 hover:text-white transition-colors">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">
            <TwitterIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-center text-white/70">
          © 2024 PromptBOT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}