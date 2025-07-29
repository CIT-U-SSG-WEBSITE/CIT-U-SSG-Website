
import React from 'react';

interface Officer {
  name: string;
  role: string;
  image: string;
}

interface JudiciaryTeamProps {
  officers: Officer[];
  title: string;
  subtitle: string;
}

export default function judiciaryteam({ officers, title, subtitle }: JudiciaryTeamProps) {
  const chief = officers.find(m => m.role === 'Chief Justice');
  const associates = officers.filter(m => m.role !== 'Chief Justice');

  return (
    <div>
      <h2 className="text-3xl font-serif font-bold mb-2">{title}</h2>
      <p className="mb-6 font-sans">{subtitle}</p>

      {/* Chief Justice */}
      <div className="mb-8">
        <h3 className="text-xl font-serif mb-3">Chief Justice</h3>
        {chief && (
          <div className="flex flex-col items-center">
            <div className="w-48 aspect-[3/4] sm:w-64 bg-maroon rounded-xl overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${chief.image})` }}
            />
            <p className="mt-2 font-serif">{chief.role}</p>
            <p className="text-sm font-serif">{chief.name}</p>
          </div>
        )}
      </div>

      {/* Associate Justices */}
      <div>
        <h3 className="text-xl font-serif mb-3">Associate Justices</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {associates.map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-full aspect-[3/4] bg-maroon rounded-xl overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <p className="mt-2 font-serif text-center">{member.role}</p>
              <p className="text-sm font-serif text-center">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
