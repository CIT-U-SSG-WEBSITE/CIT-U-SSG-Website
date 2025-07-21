'use client';

import React from 'react';
import { fetchCommissionsFiltered } from '@/backend/controllers/commissionController';

async function Page() {
  //const commissions = await fetchCommissionsFiltered('SUPREME COURT');
  
  const members = [
    {
      name: 'Sato, Christian D.',
      department: 'CE',
      program: 'BSCE-2',
      id: '24-1074-894',
      role: 'Chief Justice',
      image: '/zeth.png',
    },
    {
      name: 'Valenzona, Niño Mj, C',
      department: 'ME',
      program: 'BSME-MECH-2',
      id: '24-4318-551',
      role: 'Associate Justice',
      image: '/zeth.png',
    },
    {
      name: 'Rheyvene L. Balogbog',
      department: '',
      program: '',
      id: '',
      role: 'Associate Justice',
      image: '/zeth.png',
    },
    {
      name: 'Zapanta, Faith Adah Noreen T.',
      department: 'ChE',
      program: 'BSChE-2',
      id: '24-3988-526',
      role: 'Associate Justice',
      image: '/zeth.png',
    },
    {
      name: 'Gallardo, Darlain Vea C.',
      department: 'CE',
      program: 'BSCE-2',
      id: '24-0579-153',
      role: 'Associate Justice',
      image: '/zeth.png',
    },
    {
      name: 'Tan, Claire Angel P.',
      department: 'CE',
      program: 'BSCE - 1',
      id: '24-1795-778',
      role: 'Associate Justice',
      image: '/zeth.png',
    },
    {
      name: 'Yunting, Rozette Anne A.',
      department: 'CNAHS',
      program: 'BSN-2',
      id: '24-1824-562',
      role: 'Associate Justice',
      image: '/zeth.png',
    },
  ];
  
  const chief = members.find((m) => m.role === 'Chief Justice');
  const associates = members.filter((m) => m.role !== 'Chief Justice');
  
  return (
    <div className="bg-[var(--color-light-neutral)] text-[var(--color-dark-neutral)] font-sans p-6">
      {/* Cover Image */}
      <div
        className="w-full h-48 md:h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80')`,
        }}
      ></div>
      
      
      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Section Title */}
        <div className="text-3xl font-serif mb-1">Judiciary Branch</div>
        
        {/* Badge */}
        <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 bg-[var(--color-maroon)] text-[var(--color-light-neutral)]">
          Government: Judiciary
        </div>
        
        {/* Commission List */}
        <div className="space-y-3 mb-6">
          {/*{commissions.map((item) => (
            <div
              key={item.name}
              className="flex items-center bg-[var(--color-light-neutral)] p-4 rounded-md border border-[var(--color-gold-dark)]"
            >
              <span className="font-serif text-sm">{item.name}</span>
            </div>
          ))}*/}
        </div>
        
        {/* Court Description */}
        <div className="p-4 bg-[var(--color-near-white)] rounded-md text-sm leading-relaxed mb-6">
          <p>
            The judicial power of the CIT-U SSG shall be vested in the{' '}
            <strong className="text-[var(--color-maroon)] font-sans">Student Supreme Court</strong>. The Court shall handle all complaints on any violation of the CIT-U SSG Constitution, laws, policies, executive orders, or regulations. It shall also exercise its power to judge in any petition to compel legislative or executive action pertaining to the rights and welfare of the students.
          </p>
        </div>
        
        {/* Justices Description */}
        <div className="p-4 bg-[var(--color-near-white)] rounded-md text-sm leading-relaxed mb-6">
          <p>
            The Student Supreme Court is composed of a{' '}
            <strong className="text-[var(--color-gold-dark)] font-sans">Chief Justice</strong> who presides over all court sessions, and{' '}
            <strong className="text-[var(--color-gold-dark)] font-sans">six (6) Associate Justices</strong> who assist in upholding the laws, policies, and regulations of the CIT-U Supreme Student Government.
          </p>
        </div>
        
        {/* Judicial Core */}
        <div className="mb-8">
          <h2 className="text-xl font-serif text-[var(--color-dark-neutral)] mb-4">Judicial Core</h2>
          
          {/* Chief Justice */}
          <div className="mb-6">
            <h3 className="text-lg font-serif text-[var(--color-dark-neutral)] mb-2">Chief Justice</h3>
            <div className="flex flex-col items-center">
              <div className="relative w-full sm:w-64 aspect-[3/4] bg-[var(--color-maroon)] rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${chief?.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
              <div className="text-sm font-serif mt-2 text-[var(--color-dark-neutral)]">{chief?.name}</div>
              <div className="text-xs font-serif text-[var(--color-dark-neutral)]">{chief?.role}</div>
            </div>
          </div>
          
          {/* Associate Justices */}
          <h3 className="text-lg font-serif text-[var(--color-dark-neutral)] mb-2">Associate Justices</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {associates.map((member, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-full aspect-[3/4] bg-[var(--color-maroon)] rounded-xl overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                </div>
                <div className="text-sm font-serif mt-2 text-[var(--color-dark-neutral)]">{member.name}</div>
                <div className="text-xs font-serif text-[var(--color-dark-neutral)]">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Page;
