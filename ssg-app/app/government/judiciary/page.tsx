import React from 'react';
import { fetchCommissionsFiltered } from '@/backend/controllers/commissionController';
import JudiciaryTeam from './judiciaryteam';

async function Page() {
  const commissions = await fetchCommissionsFiltered('SUPREME COURT');
  const members = [
    { name: 'Christian D. Sato', role: 'Chief Justice', image: '/zeth.png' },
    { name: 'Niño Mj C. Valenzona', role: 'Associate Justice', image: '/zeth.png' },
    { name: 'Rheyvene L. Balogbog', role: 'Associate Justice', image: '/zeth.png' },
    { name: 'Faith Adah Noreen T. Zapanta', role: 'Associate Justice', image: '/zeth.png' },
    { name: 'Darlain Vea C. Gallardo', role: 'Associate Justice', image: '/zeth.png' },
    { name: 'Claire Angel P. Tan', role: 'Associate Justice', image: '/zeth.png' },
    { name: 'Rozette Anne A. Yunting', role: 'Associate Justice', image: '/zeth.png' },
  ];

  const chief = members.find(m => m.role === 'Chief Justice');

 return (

<div className="flex justify-center items-start w-full px-6 py-10">
  <div className="max-w-6xl w-full flex flex-col gap-10">
    
   
    <div className="w-full h-[420px] rounded-3xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1350&q=80"
        alt="Judiciary Banner"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>


    <div className="flex flex-col gap-5 w-full text-black text-justify">
      <span className="font-serif text-3xl font-bold text-left">Judiciary Branch</span>
      <span className="text-lg text-left">Where justice is served.</span>
      <p>
        The judicial power of the CIT-U SSG shall be vested in the{' '}
        <strong className="font-sans">Student Supreme Court</strong>. The Court shall handle all complaints on any violation of the CIT-U SSG Constitution, laws, policies, executive orders, or regulations. It shall also exercise its power to judge in any petition to compel legislative or executive action pertaining to the rights and welfare of the students.
      </p>

      <div className="flex flex-col gap-5 w-full text-black text-justify">


      <JudiciaryTeam
        officers={members}
        title="Student Supreme Court"
        subtitle="The Student Supreme Court is composed of a Chief Justice who presides over all court sessions, and six (6) Associate Justiceswho assist in upholding the laws, policies, and regulations of the CIT-U Supreme Student Government."
      />
    </div>
  </div>
</div>
</div>

);
}
export default Page;