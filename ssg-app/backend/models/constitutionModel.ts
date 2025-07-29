export interface Section {
  text: string;
  clauses?: null | string[];
}

export interface Article {
  title: string;
  sections: Section[];
}

export interface Constitution {
  title: string;
  preamble: string;
  articles: Article[];
}

export const constitution2024: Constitution = {
  title: "The 2024 CIT University Supreme Student Government Constitution",
  preamble:
    "We, the college students of Cebu Institute of Technology – University, imploring the aid of the Divine Providence, in order to establish a student government that shall inspire us to become values-driven, highly competent, and innovative; embody our ideals, visions, and aspirations; safeguard our rights and welfare; uphold the common aspirations; safeguard our rights and welfare; uphold the common good; foster a harmonious relationship among the student body and the different sectors of the University; and instill in ourselves the spirit of social and civic consciousness, do solemnly ordain and promulgate this Constitution.",
  articles: [
    {
      title: "Name, Seat, Nature, and Jurisdiction",
      sections: [
        {
          text: "The name of the body shall be the Cebu Institute of Technology – University Supreme Student Government, which shall hereinafter be referred to as the CIT-U SSG."
        },
        {
          text: "The seat of the CIT-U SSG shall be in Cebu Institute of Technology – University, N. Bacalso Avenue, Cebu City, which shall hereinafter be referred to as the University."
        },
        {
          text: "The CIT-U SSG shall be the highest governing student organization in the college department of the University."
        },
        {
          text: "The CIT-U SSG is a democratic government and is independent insofar as its actuations are not inconsistent with existing laws, policies, and pertinent regulations of the Commission on Higher Education, which shall hereinafter be referred to as CHED."
        },
        {
          text: "The CIT-U SSG shall have jurisdiction and authority within the limits of its powers provided for in this Constitution and the laws of the land, over all bona fide college students of the University."
        }
      ]
    },
    {
      title: "Declaration of Principles and Objectives",
      sections: [
        { text: "The CIT-U SSG shall have the power which emanates from the student body. It shall be the sole representative and voice of the college students in the University." },
        { text: "The CIT-U SSG believes that the common good of the students is its primary concern." },
        { text: "The CIT-U SSG believes in the importance of the University’s Mission statement of ‘We GEAR for Life’ in committing to guide learners to become industry-preferred and life ready professionals, empower people for knowledge generation and creativity, accelerate community development, and respond proactively to a fast-changing world." },
        { text: "The CIT-U SSG believes that an equitable environment should be established to promote cooperation among the different sectors of the University." },
        { text: "The CIT-U SSG shall be at the forefront of the students’ struggle for their rights and welfare, as secured in Article IV of this Constitution, the University Student Handbook, and as mandated by the laws of the land." },
        { text: "The CIT-U SSG shall help develop the physical, intellectual, social, cultural, political, moral and spiritual potentials, interests, and well-being of the students to the fullest." },
        { text: "The CIT-U SSG shall consider the customs, traditions, beliefs, and interests of the various sectors among the student body in the formulation and implementation of its policies." },
        { text: "The CIT-U SSG shall initiate, organize, and conduct activities, programs, and projects which shall benefit the student body and preserve the honorable reputation and glorious tradition of the University." },
        { text: "The CIT-U SSG shall monitor the recognized student organizations in coordination with the duly assigned office and/or representative of the University." },
        { text: "The CIT-U SSG shall promote students’ awareness of their duties and responsibilities as provided for in this Constitution." },
        { text: "The CIT-U SSG shall adopt and implement a policy of public disclosure of all its transactions involving the interests of its members." }
      ]
    },
    {
      title: "Membership",
      sections: [
        {
          text: "All bona fide college students enrolled in any certificate- or degree-granting programs certified by the University Registrar are members of the CIT-U SSG."
        },
        {
          text: "Every member of the CIT-U SSG shall pay a membership fee which entitles him/her to be an official member for one semester only. The membership fee per semester shall be the amount set by the CIT-U SSG through a resolution and agreed upon with the representative/s of the University. Any increase in the membership fee must be determined by a majority vote of the members of the Congress and must not be more than 50% of the existing amount."
        },
        {
          text: "Membership in the CIT-U SSG ceases in any of the following cases:",
          clauses: [
            "Expulsion from the University",
            "Transfer to other institutions of learning, except in cases of cross-enrolment",
            "Discontinuation of study in the University"
          ]
        },
        {
          text: "No students from other institutions of learning who shall cross-enrol in the University shall be a member of the CIT-U SSG."
        }
      ]
    },
    {
      title: "Bill of Rights",
      sections: [
        {
          text: "Every student has the right to receive competent instruction and quality education relevant to his program."
        },
        {
          text: "Every student has the right to information and access to his own class and academic records, the confidentiality of which shall be kept and preserved by the University and the persons concerned, unless otherwise provided for by a lawful order of an authority on those matters."
        },
        {
          text: "Every student has the right to expeditious issuance of diploma, transcript of records, transfer credentials, and other similar documents relative to his enrollment in the University provided that all his records are intact and all necessary clearances are accomplished."
        },
        {
          text: "Every student has the right to acquire their grades in accordance with the deadline set for the instructors by the University."
        },
        {
          text: "Every student has the right to evaluate their instructors and the different offices of the University."
        },
        {
          text: "All students shall have the right to:",
          clauses: [
            "Have their grievances heard and speedily redressed in the proper forum and in accordance with the laws of the land;",
            "Peacefully assemble and petition the administration for redress of their valid and legitimate grievances in accordance with the legal and proper norms of conduct as well as the existing policies of CHED and of the University;",
            "Speedy disposition of their cases brought before the Judiciary or any of the University’s administrative body;",
            "Form and join clubs, associations, organizations, and student political parties, whose purposes are not contrary to the laws of the land, and policies of the University and of the CIT-U SSG;",
            "Freedom of speech and of the press in accordance with the laws of the land and existing policies of CHED and of the University;",
            "Freedom of religious and spiritual practices;",
            "Access to documents and records pertaining to the official acts, transactions, or decisions of the CIT-U SSG;",
            "Attend meetings and other various activities of the CIT-U SSG subject to the limitations as may be provided by the laws, orders, rules and regulations of the CIT-U SSG;",
            "All other rights provided for in the Magna Carta for Students’ Rights and other subsequent CIT-U SSG laws."
          ]
        },
        {
          text: "Through the CIT-U SSG officers, students shall have the right to be informed and consulted regarding the University policies which may directly affect them and be allowed to present their views before such matters be adopted."
        },
        {
          text: "No disciplinary actions shall be taken against any student without due process of law nor shall any students be denied the equal protection of the laws. Neither involuntary servitude nor any form of undue exploitation and/or excessive punishment or penalties shall be imposed on any student."
        },
        {
          text: "Students have the right to be represented, through the CIT-U SSG, in the determination of the University policies in matters that directly affect them provided that such representation does not impair the authority granted by law and/or CHED regulations to the University."
        },
        {
          text: "In all investigations, a student accused of an offense shall have the right to remain silent, have counsel of his own choice, and be informed of such rights."
        },
        {
          text: "A student accused of any offense shall have the following rights:",
          clauses: [
            "Be presumed innocent until the contrary is proved;",
            "Have counsel of his own choice;",
            "Be heard by himself and counsel;",
            "Be informed of the nature and cause of accusation against him;",
            "Have a speedy and impartial trial;",
            "Secure attendance of his witnesses face to face;",
            "Present evidence on his behalf."
          ]
        },
        {
          text: "No force, violence, coercion, or any other means which vitiate free will shall be used to extract any confession or admission from the student concerned during any stage of the investigation."
        },
        {
          text: "No student accused of any offense shall be compelled to testify against himself."
        },
        {
          text: "In any proceedings, any confession obtained in violation of Section 10, 12, and 13 of this article shall be deemed inadmissible in evidence against him."
        },
        {
          text: "Every student has the right to participate in all elections, referenda, plebiscites, and other similar activities of the CIT-U SSG unless otherwise disqualified by a CIT-U SSG law, or any pertinent regulation."
        }
      ]
    },
    {
      title: "Duties and Responsibilities of Members",
      sections: [
        {
          text: "All bona fide members of the CIT-U SSG shall have the following duties and responsibilities:",
          clauses: [
            "To uphold the Constitution of the Republic of the Philippines;",
            "To uphold the vision, mission, goals, and objectives of the University, which are geared towards the total development of every student;",
            "To uphold the CIT-U SSG Constitution. This duty carries with it the responsibility to be familiar with and be guided by the provisions of the Constitution and its amendments whenever there shall be;",
            "To know and obey the school rules, regulations, policies, and requirements concerning academic matters, and campus activities as stated in the University Student Handbook, prospectus, and school bulletins;",
            "To cooperate with the school authorities in the implementation of such rules, regulations, and policies provided that they do not transgress the students’ rights and/or the existing laws of the land;",
            "To observe and obey the rules, regulations, resolutions, acts, and orders promulgated by the Congress of the CIT-U SSG provided that these do not contravene with the existing rules and policies of the University, laws of the land, and CHED rules and regulations."
          ]
        }
      ]
    }
  ]
};
