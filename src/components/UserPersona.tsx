import React from 'react';


interface PersonaProps {
  name: string;
  role: string;
  profile: string;
  painPoints: string[];
  value: string;
  image:string;
}

export default function UserPersona({ name, role, profile, painPoints, value, image }: PersonaProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:border-purple-300 transition-all">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
        <img src={image} alt={`${name}'s profile`} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-purple-900">{name}</h3>
          <p className="text-purple-600">{role}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-purple-900 mb-2">Profile</h4>
          <p className="text-purple-700">{profile}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-purple-900 mb-2">Pain Points</h4>
          <ul className="list-disc list-inside text-purple-700 space-y-1">
            {painPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-purple-900 mb-2">Value of AI Features</h4>
          <p className="text-purple-700">{value}</p>
        </div>
      </div>
    </div>
  );
}