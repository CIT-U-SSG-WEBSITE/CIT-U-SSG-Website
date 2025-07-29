import React from 'react';
import { fetchCommissionsFiltered } from '@/backend/controllers/commissionController';
import './style.css';

export default async function Page() {
  const committees = await fetchCommissionsFiltered("LEGISLATIVE COMMITTEE");

  return (
    <div className="section"> 
    <div className="legislative-banner">
     <img src="/image/legislative-banner.jpg" alt="Legislative Banner" className="banner-image" />
      </div>

      <h1 className="text-4xl font-bold font-serif text-[--color-dark-neutral] mb-2">Legislative Branch</h1>
      <p className="text-xl font-sans text-[--color-dark-neutral] italic mb-3">Voices United for Progress</p>
      <p className="text-base font-sans text-[--color-dark-neutral] mb-6">
        The Legislative Branch serves as the representative voice of the Technologian community.
        Made up of elected student legislators from various academic units, it formulates policies,
        enacts resolutions, and deliberates on matters affecting the student body. Through regular
        sessions, collaborative debates, and committee work, this branch ensures that every sector
        of the student population is heard—and that ideas are transformed into actionable and
        impactful governance.
      </p>

      <h2 className="text-3xl font-bold font-serif text-[--color-dark-neutral] mb-2">Legislative Core</h2>
      <p className="text-sm font-sans text-[--color-dark-neutral] mb-4">
        Meet the student leaders driving policy and representation.
      </p>

      <div className="legislative-core-scroll">
        {[
          {
            title: 'House Speaker',
            name: 'Carl Angelo Iverson A. Miranda',
            image: '/image/legislative-1.jpg',
          },
          {
            title: 'Speaker Pro Tempore',
            name: 'Rhodyl B. Maitim',
            image: '/image/legislative-2.jpg',
          },
          {
            title: 'Legislative Secretary',
            name: 'Charlyn Paula L. Gimoros',
            image: '/image/legislative-3.jpg',
          },
          {
            title: 'Asst. Legis-Sec',
            name: 'Palm Antonette C. Quiban',
            image: '/image/legislative-4.jpg',
          },
        ].map((member, idx) => (
          <div className="core-card-wrapper" key={idx}>
            <div className="core-card">
              <img src={member.image} alt={member.name} className="core-image" />
            </div>
            <div className="core-title">{member.title}</div>
            <div className="core-name">{member.name}</div>
          </div>
        ))}
      </div>

      <div className="committees">
        <div className="committee-header">
          <h2 className="text-2xl font-bold font-serif text-[--color-dark-neutral] mb-0">Legislative Committees</h2>
          <p className="text-sm font-sans text-[--color-dark-neutral] mt-0 mb-6 leading-none">
            Oversight, policy-making, and student representation in action.
          </p>
        </div>

        {[
          {
            title: 'Committee on Finance',
            description: 'Oversees the financial operations, budgeting, and accountability to ensure transparency and efficient use of funds.',
            logo: '/image/COF.png',
          },
          {
            title: 'Committee on Information Management',
            description: 'Handles the communication and evaluation of congressional actions to keep the student body well-informed.',
            logo: '/image/CIM.png',
          },
          {
            title: 'Committee on Research',
            description: 'Leads research efforts to guide student policies, programs, and legislative priorities with data and insights.',
            logo: '/image/COR LOGO.png',
          },
          {
            title: 'Committee on Rules and Regulations',
            description: 'Ensures legislation follows internal standards by reviewing bills and enhancing the official rules of the Congress.',
            logo: '/image/CRAR LOGO.png',
          },
          {
            title: 'Committee on Technologian Concerns',
            description: 'Oversees the SSG financial operations, budgeting, and accountability to ensure transparent and efficient use of funds.',
            logo: '/image/CTC LOGO.png',
          },
        ].map((committee, index) => (
          <div className="committee-item" key={index}>
            <img src={committee.logo} alt={`${committee.title} Logo`} className="committee-logo" />
            <div className="committee-content">
              <div className="committee-title"><p className="text-xl font-bold">{committee.title}</p></div>
              <div className="committee-description"><p className="text-base text-left break-normal">{committee.description}</p></div>
            </div>
            <div className="committee-arrow">&gt;</div>
          </div>
        ))}
      </div>
    </div>
  );
}
