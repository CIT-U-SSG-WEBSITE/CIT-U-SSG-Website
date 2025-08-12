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
          text: "The name of the body shall be the Cebu Institute of Technology – University Supreme Student Government, which shall hereinafter be referred to as the CIT-U SSG.",
        },
        {
          text: "The seat of the CIT-U SSG shall be in Cebu Institute of Technology – University, N. Bacalso Avenue, Cebu City, which shall hereinafter be referred to as the University.",
        },
        {
          text: "The CIT-U SSG shall be the highest governing student organization in the college department of the University.",
        },
        {
          text: "The CIT-U SSG is a democratic government and is independent insofar as its actuations are not inconsistent with existing laws, policies, and pertinent regulations of the Commission on Higher Education, which shall hereinafter be referred to as CHED.",
        },
        {
          text: "The CIT-U SSG shall have jurisdiction and authority within the limits of its powers provided for in this Constitution and the laws of the land, over all bona fide college students of the University.",
        },
      ],
    },
    {
      title: "Declaration of Principles and Objectives",
      sections: [
        {
          text: "The CIT-U SSG shall have the power which emanates from the student body. It shall be the sole representative and voice of the college students in the University.",
        },
        {
          text: "The CIT-U SSG believes that the common good of the students is its primary concern.",
        },
        {
          text: "The CIT-U SSG believes in the importance of the University’s Mission statement of “We GEAR for Life” in committing to guide learners to become industry-preferred and life ready professionals, empower people for knowledge generation and creativity, accelerate community development, and respond proactively to a fast-changing world.",
        },
        {
          text: "The CIT-U SSG believes that an equitable environment should be established to promote cooperation among the different sectors of the University.",
        },
        {
          text: "The CIT-U SSG shall be at the forefront of the students’ struggle for their rights and welfare, as secured in Article IV of this Constitution, the University Student Handbook, and as mandated by the laws of the land.",
        },
        {
          text: "The CIT-U SSG shall help develop the physical, intellectual, social, cultural, political, moral and spiritual potentials, interests, and well-being of the students to the fullest.",
        },
        {
          text: "The CIT-U SSG shall consider the customs, traditions, beliefs, and interests of the various sectors among the student body in the formulation and implementation of its policies.",
        },
        {
          text: "The CIT-U SSG shall initiate, organize, and conduct activities, programs, and projects which shall benefit the student body and preserve the honorable reputation and glorious tradition of the University.",
        },
        {
          text: "The CIT-U SSG shall monitor the recognized student organizations in coordination with the duly assigned office and/or representative of the University.",
        },
        {
          text: "The CIT-U SSG shall promote students’ awareness of their duties and responsibilities as provided for in this Constitution.",
        },
        {
          text: "The CIT-U SSG shall adopt and implement a policy of public disclosure of all its transactions involving the interests of its members.",
        },
      ],
    },
    {
      title: "Membership",
      sections: [
        {
          text: "All bona fide college students enrolled in any certificate- or degree-granting programs certified by the University Registrar are members of the CIT-U SSG.",
        },
        {
          text: "Every member of the CIT-U SSG shall pay a membership fee which entitles him/her to be an official member for one semester only. The membership fee per semester shall be the amount set by the CIT-U SSG through a resolution and agreed upon with the representative/s of the University. Any increase in the membership fee must be determined by a majority vote of the members of the Congress and must not be more than 50% of the existing amount.",
        },
        {
          text: "Membership in the CIT-U SSG ceases in any of the following cases:",
          clauses: [
            "Expulsion from the University;",
            "Transfer to other institutions of learning, except in cases of cross-enrolment; or",
            "Discontinuation of study in the University.",
          ],
        },
        {
          text: "No students from other institutions of learning who shall cross-enrol in the University shall be a member of the CIT-U SSG.",
        },
      ],
    },
    {
      title: "Bill of Rights",
      sections: [
        {
          text: "Every student has the right to receive competent instruction and quality education relevant to his program.",
        },
        {
          text: "Every student has the right to information and access to his own class and academic records, the confidentiality of which shall be kept and preserved by the University and the persons concerned, unless otherwise provided for by a lawful order of an authority on those matters.",
        },
        {
          text: "Every student has the right to expeditious issuance of diploma, transcript of records, transfer credentials, and other similar documents relative to his enrollment in the University provided that all his records are intact and all necessary clearances are accomplished.",
        },
        {
          text: "Every student has the right to acquire their grades in accordance with the deadline set for the instructors by the University.",
        },
        {
          text: "Every student has the right to evaluate their instructors and the different offices of the University.",
        },
        {
          text: "All students shall have the right to/of:",
          clauses: [
            "Have their grievances heard and speedily redressed in the proper forum and in accordance with the laws of the land;",
            "Peacefully assemble and petition the administration for redress of their valid and legitimate grievances in accordance with the legal and proper norms of conduct as well as the existing policies of CHED and of the University;",
            "Speedy disposition of their cases brought before the Judiciary or any of the University’s administrative body;",
            "Form and join clubs, associations, organizations, and student political parties, whose purposes are not contrary to the laws of the land, and policies of the University and of the CIT-U SSG;",
            "Freedom of speech and of the press in accordance with the laws of the land and existing policies of CHED and of the University;",
            "Freedom of religious and spiritual practices;",
            "Access to documents and records pertaining to the official acts, transactions, or decisions of the CIT-U SSG;",
            "Attend meetings and other various activities of the CIT-U SSG subject to the limitations as may be provided by the laws, orders, rules and regulations of the CIT-U SSG; and",
            "All other rights provided for in the Magna Carta for Students’ Rights and other subsequent CIT-U SSG laws.",
          ],
        },
        {
          text: "Through the CIT-U SSG officers, students shall have the right to be informed and consulted regarding the University policies which may directly affect them and be allowed to present their views before such matters be adopted.",
        },
        {
          text: "No disciplinary actions shall be taken against any student without due process of law nor shall any students be denied the equal protection of the laws. Neither involuntary servitude nor any form of undue exploitation and/or excessive punishment or penalties shall be imposed on any student.",
        },
        {
          text: "Students have the right to be represented, through the CIT-U SSG, in the determination of the University policies in matters that directly affect them provided that such representation does not impair the authority granted by law and/or CHED regulations to the University.",
        },
        {
          text: "In all investigations, a student accused of an offense shall have the right to remain silent, have counsel of his own choice, and be informed of such rights.",
        },
        {
          text: "A student accused of any offense shall have the following rights to:",
          clauses: [
            "Be presumed innocent until the contrary is proved;",
            "Have counsel of his own choice;",
            "Be heard by himself and counsel;",
            "Be informed of the nature and cause of accusation against him;",
            "Have a speedy and impartial trial;",
            "Secure attendance of his witnesses face to face; and",
            "Present evidence on his behalf.",
          ],
        },
        {
          text: "No force, violence, coercion, or any other means which vitiate free will shall be used to extract any confession or admission from the student concerned during any stage of the investigation.",
        },
        {
          text: "No student accused of any offense shall be compelled to testify against himself.",
        },
        {
          text: "In any proceedings, any confession obtained in violation of Section 10, 12, and 13 of this article shall be deemed inadmissible in evidence against him.",
        },
        {
          text: "Every student has the right to participate in all elections, referenda, plebiscites, and other similar activities of the CIT-U SSG unless otherwise, disqualified by a CIT-U SSG law, or any pertinent regulation.",
        },
      ],
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
            "To observe and obey the rules, regulations, resolutions, acts, and orders promulgated by the Congress of the CIT-U SSG provided that these do not contravene with the existing rules and policies of the University, laws of the land, and CHED rules and regulations.",
          ],
        },
      ],
    },
    {
      title: "Executive Department",
      sections: [
        {
          text: "The executive power of the CIT-U SSG shall be vested in the President. The Vice President and the Cabinet shall assist him in exercising his functions.",
        },
        {
          text: "No student shall be elected as President or Vice President unless he has the following qualifications:",
          clauses: [
            "He is a bona fide student in any collegiate division of the University, with a minimum load of eighteen (18) units during the time of his/her election and in the semester immediately preceding his/her election. If he/she is enrolled in fewer than eighteen (18) units, they must submit a recommendation letter from the dean certifying that they have no failing grades;",
            "He has had residency in the University for at least two (2) semesters and two (2) semesters of which were successive and immediately preceding his election;",
            "In cases where an “Incomplete” mark is due to reasons attributable to the teacher or the curriculum, the candidate must provide an endorsement from the department dean confirming the circumstance. Suppose the “Incomplete” mark is due to reasons not attributable to either party, he/she must present valid proof to support their claim, subject to the approval of the election committee.",
            "He has not been connected with the University as an employee, a member of the faculty, or a working scholar for at least two (2) semesters immediately preceding his election;",
            "He possesses good moral character, certified by at least two (2) full-time faculty members of the University and by the Student Success Office (SSO), and has not been subjected to any disciplinary action for serious violation of any rules and policies of the University as defined in the University Student Handbook; and",
            "He is not a graduating student in the first semester of his term of office.",
            "He has served at least one (1) complete term in the Supreme Student Government, whether as part of the executive or the legislative department, or has been a high-ranking or executive officer (President, Vice-President, or similar) of an SSO-accredited organization for at least one (1) academic year. For students who have served as de facto officers (i.e., of their own initiative) rather than being elected or appointed as officers, they shall also be required to submit an attestation or certification that they have served in such capacity, which shall be duly attested by either the adviser of that organization or the President or Vice-President of that organization.",
            "He shall be cleared of any medical condition(s), which may affect the conduct of this office, by a certified Medical Professional.",
          ],
        },
        {
          text: "The President and the Vice President shall hold office for a term of one academic year. Such term shall begin on the day they take their oath of office and shall end on the day when the newly- elected President and Vice President shall have taken their respective oaths. They shall be elected by a popular vote of the members of the CIT-U SSG. The President and the Vice President shall not be eligible for any re-election in the same position. The person having the highest number of votes shall be proclaimed elected, but in case two or more shall have an equal and highest number of votes, one of them shall forthwith be chosen through a toss of coin or any alternative method provided for in the Election Code of the Commission on Elections.",
        },
        {
          text: "Before they enter on the execution of their office, the President-elect, the Vice President- elect or the Acting President shall take their oath of office or affirmation in the following manner: “I do solemnly swear (or affirm) that I will faithfully and conscientiously fulfill my duties as President (or Vice President or Acting President) of the Cebu Institute of Technology – University Supreme Student Government, preserve and defend its Constitution, execute and obey its laws, do justice to every student and consecrate myself to the service of the student body and my Alma Mater, the Cebu Institute of Technology – University. So help me God.” (In case of affirmation, the last sentence is omitted.)",
        },
        {
          text: "If at the time fixed for the beginning of the term of the President-elect, he shall cease to be a student of the University, the Vice President-elect shall become the President.",
        },
        {
          text: "If at the time fixed for the beginning of the term of the President, he shall fail to qualify for any other reason, the Vice President shall act as the President until the President shall have qualified.",
        },
        {
          text: "In the event that the President cannot perform and/or discharge the powers and duties of his office by reason of death, impeachment, resignation, or permanent incapacity and disability, the Vice President shall become the President, and in the default of the Vice President, the Speaker of the Congress shall act as President. In the default of the Speaker of the Congress, the Speaker Pro Tempore of the Congress shall act as the President.",
        },
        {
          text: "Whenever there is a vacancy in either the Office of the Vice President, Office of the Secretary General, Office of the Treasurer General, or Office of the Executive Auditor during the term for which he was elected, the person garnering the next highest number of votes shall assume the vacancy. However, if at the time fixed for the beginning of the term, there shall be vacancies in the above-mentioned offices, the Commission on Elections may call for a special election. If both methods of filling the vacancies be deemed unfeasible by the Commission on Elections, the elected President may opt to open the position for appointments with the concurrence of the Commission on Appointments.",
        },
        {
          text: "Whenever the President transmits to the House Speaker, as the ex-officio Chairperson of the Commission on Appointments, his written declaration that he is unable to discharge the powers and duties of his office, and until he transmits to them a written declaration to the contrary, such powers and duties shall be discharged by the Vice President as Acting President.",
        },
        {
          text: "Appointments extended by an Acting President shall remain effective, unless revoked by the elected President within thirty (30) days from the receipt of a notice related to such appointments.",
        },
        {
          text: "The President shall have the following powers, duties, and functions:",
          clauses: [
            "He shall be the Chief Executive Officer of the CIT-U SSG;",
            "He shall have control and supervision of the Executive Department and the power to create position/committee which he deems necessary to realize the objectives of the CIT-U SSG, subject to the approval of the Commission on Appointments;",
            "He shall exercise general supervision over all the activities, programs, projects, and similar undertakings of the CIT-U SSG;",
            "He shall consult the Advisory Board from time to time on matters affecting the CIT-U SSG or the student body in general;",
            "He shall represent the student body during the discussions on all matters which directly affect its interest and give recommendations and suggestions that shall redound to the students’ welfare and benefit;",
            "He shall represent the CIT-U SSG on events and occasions where representation is needed. He may delegate some powers of representation to other members of the CIT-U SSG, as he may deem proper and necessary;",
            "He shall call a special session of the Congress whenever the need arises;",
            "He shall preside over all executive sessions, including joint sessions within the Congress, Cabinet meetings, meetings of the Council of Leaders, and all other meetings called by him;",
            "He shall preserve and defend this Constitution and shall executive and see to it that all laws, acts, guidelines, policies, and regulations of the CIT-U SSG are properly implemented;",
            "He shall sign all acts, resolutions, and other documents of the CIT-U SSG;",
            "He shall inform the Congress every month of the student affairs and activities, and shall recommend measures, as he may deem expedient and proper for its consideration;",
            "He shall present to the CIT-U SSG, on the first joint session of the term, a budget of receipt and expenditures of the previous term, which may be the basis of the general appropriations. No provision shall be embraced therein and any such provision or enactment shall be limited in its operation to such appropriation;",
            "With the assistance of the Vice President and the Cabinet, he shall prepare the budget of the CIT-U SSG and submit the same to the Congress on or before its first regular session;",
            "He shall have the power to veto any act or resolution of the Congress provided that after fifteen (15) days of receipt of the same and without any action taken, it shall become effective as if he had signed it.",
            "He shall have the power to issue executive orders which he deems necessary to realize the objectives of the CIT-U SSG or upon the interest of the students; and",
            "He shall submit to the University President, through the authorized representative of the University, a written report of the operations of the CIT-U SSG, including a complete list and copies of the acts, resolutions, and other measures of the Congress, and executive orders issued by him immediately after the end of his term.",
          ],
        },
        {
          text: "The President shall perform other powers and duties as may be necessary and incidental to the discharge and performance of the functions of his office as may be provided by a CIT-U SSG law.",
        },
        {
          text: "The Vice President shall have the following duties and functions:",
          clauses: [
            "He shall perform the duties and functions of the President in the absence or temporary incapacity of the latter;",
            "He shall assist the President in carrying out the objectives and policies of the CIT-U SSG, in supervising its activities, and in all other matters where his assistance may be required; and",
            "He shall perform such other functions as may be provided by a CIT-U SSG law.",
          ],
        },
        {
          text: "The Cabinet shall be the primary executive body of the CIT-U SSG under the authority and supervision of the President.",
        },
        {
          text: "The Cabinet shall be composed of the:",
          clauses: [
            "Vice President",
            "Secretary General",
            "Treasurer General",
            "Executive Auditor",
            "Cabinet-Secretary",
            "Solicitor-General",
            "Chairpersons of the Cabinet-level Commissions",
          ],
        },
        {
          text: "No student shall be elected as Secretary General unless he has the following qualifications:",
          clauses: [
            "He is a bona fide student in any collegiate division of the University, with a minimum load of eighteen (18) units during the time of his election and in the semester immediately preceding his election;",
            "He has had residency in the University for at least two (2) semesters and two (2) semesters of which were successive and immediately preceding his elections;",
            "He must have passed all his subjects, without any mark of “Dropped” or “Incomplete” in any of his subjects in the two (2) previous semesters immediately preceding his election duly certified by the authorized representative of the University;",
            "He has not been connected with the University as an employee, a member of the faculty, or a working scholar for at least two (2) semesters immediately preceding his election;",
            "He possesses good moral character, certified by at least two (2) full-time faculty members of the University and by the Student Success Office (SSO) and has not been subjected to any disciplinary actions for serious violation of any rules and policies of the University as defined in the University Student Handbook; and",
            "He is not a graduating student in the first semester of his term of office.",
          ],
        },
        {
          text: "The Secretary General shall have the following duties and functions:",
          clauses: [
            "He shall report directly to the President;",
            "He shall keep the minutes of the executive sessions, Cabinet meetings, and all other meetings presided by the President;",
            "He shall coordinate with the Legislative Secretariat for the task of keeping intact all the documents and records of the CIT-U SSG;",
            "He shall coordinate with the other members of the Cabinet at all times to ensure the fulfilment of the goals and objectives of the CIT-U SSG; and",
            "He shall perform such other functions as may be provided by the President, or a CIT-U SSG law.",
          ],
        },
        {
          text: "No student shall be elected as Treasurer General unless he has the following qualifications:",
          clauses: [
            "He is a bona fide student in any collegiate division of the University, with a minimum load of eighteen (18) units during the time of his election and in the semester immediately preceding his election;",
            "He has had residency in the University for at least two (2) semesters and two (2) semesters of which were successive and immediately preceding his elections;",
            "He must have passed all his subjects, without any mark of “Dropped” or “Incomplete” in any of his subjects in the two (2) previous semesters immediately preceding his election duly certified by the authorized representative of the University;",
            "He has not been connected with the University as an employee, a member of the faculty, or a working scholar for at least two (2) semesters immediately preceding his election;",
            "He possesses good moral character, certified by at least two (2) full-time faculty members of the University and by the Student Success Office (SSO) and has not been subjected to any disciplinary actions for serious violation of any rules and policies of the University as defined in the University Student Handbook; and",
            "He is not a graduating student in the first semester of his term of office.",
          ],
        },
        {
          text: "The Treasurer General shall have the following duties and functions:",
          clauses: [
            "He shall report directly to the President;",
            "He shall have custody of the general fund and all other funds of the CIT-U SSG and know the exact amount of such funds at all times;",
            "He, together with the President, shall have the sole jurisdiction to withdraw the general fund and all other funds in the name of the CIT-U SSG in any local bank of good reputation;",
            "He, together with the President, shall sign financial transactions of the CIT-U SSG;",
            "He shall be in charge of the disbursements of the general fund in accordance with the provisions of the Constitution;",
            "He shall keep a book of records for all received receipts issues for the account of the CIT-U SSG, for keeping track of disbursed and remitted funds and collection of such other funds or fees as authorized by the Congress;",
            "He shall summarize the needed data in the preparation of the semestral financial statement of the CIT-U SSG and subsequently submit it to the Congress not later than its last session every semester;",
            "He shall coordinate with the other members of the Cabinet at all times to ensure the fulfilment of the goals and objectives of the CIT-U SSG; and",
            "He shall perform such other functions as may be provided by the President, or a CIT-U SSG law.",
          ],
        },
        {
          text: "No student shall be elected as Executive Auditor unless he has the following qualifications:",
          clauses: [
            "He is a bona fide student from the College of Management, Business and Accountancy, taking up any of the following programs: BS Accountancy, BS Accounting Information Systems, BS Management Accounting, or BSBA in Banking and Financial Management. Additionally, he is enrolled with a minimum load of eighteen (18) units during the time of his election and in the semester immediately preceding it; He shall obtain a recommendation letter from the College Dean or Department Chair;",
            "He has had residency in the University for at least two (2) semesters and two (2) semesters of which were successive and immediately preceding his elections;",
            "He must have passed all his subjects, without any mark of “Dropped” or “Incomplete” in any of his subjects in the two (2) previous semesters immediately preceding his election duly certified by the authorized representative of the University;",
            "He has not been connected with the University as an employee, a member of the faculty, or a working scholar for at least two (2) semesters immediately preceding his election;",
            "He possesses good moral character, certified by at least two (2) full-time faculty members of the University and by the Student Success Office (SSO) and has not been subjected to any disciplinary actions for serious violation of any rules and policies of the University as defined in the University Student Handbook; and",
            "He is not a graduating student in the first semester of his term of office.",
          ],
        },
        {
          text: "The Executive Auditor shall have the following duties and functions:",
          clauses: [
            "He shall report directly to the President;",
            "He shall not be part of any Cabinet-level Commissions;",
            "He shall coordinate with the Treasurer General of the CIT University Supreme Student Government to monitor and record all the receipts and disbursements made;",
            "He shall keep record of the general fund and all other funds of the CIT University Supreme Student Government and know the exact amount of audited funds at all times;",
            "He shall be in charge of recording all the receipts and disbursements of the general fund and all other funds in the name of CIT-U SSG in any local bank of good reputation made and transacted by the Treasurer General;",
            "He shall keep the book of records and have the same be open for inspection by any member of the CIT University Supreme Student Government at any reasonable hours on business days;",
            "He shall audit and review all the financial data prepared by the Treasurer General and all financial statements of the CIT University Supreme Student Government prior to having them audited by the independently operating Commission on Audit;",
            "He shall communicate with the other members of the Cabinet at all times to ensure the fulfillment of the goals and objectives of the CIT-U SSG; and",
            "He shall perform such other functions as may be provided by the President or a CIT-U SSG law.",
          ],
        },
        {
          text: "No student shall be appointed as Cabinet Secretary unless he has the following qualifications:",
          clauses: [
            "He is a bona fide student in any collegiate division of the University, with a minimum load of eighteen (18) units during the time of his appointment and in the semester immediately preceding his appointment;",
            "He has had residency in the University for at least two (2) semesters and two (2) semesters of which were successive and immediately preceding his appointment;",
            "He must have passed all his subjects, without any mark of “Dropped” or “Incomplete” in any of his subjects in the two (2) previous semesters immediately preceding his appointment duly certified by the authorized representative of the University;",
            "He has not been connected with the University as an employee, a member of the faculty, or a working scholar for at least two (2) semesters immediately preceding his appointment;",
            "He possesses good moral character, certified by at least two (2) full-time faculty members of the University and by the Student Success Office (SSO) and has not been subjected to any disciplinary actions for serious violation of any rules and policies of the University as defined in the University Student Handbook; and",
            "He is not a graduating student in the first semester of his term of office.",
            "He has served at least one (1) complete term in the Supreme Student Government, whether as part of the executive or the legislative department.",
          ],
        },
        {
          text: "The Cabinet Secretary shall have the following duties and functions:",
          clauses: [
            "He shall report directly to the President;",
            "He shall keep the minutes of the joint sessions, cabinet meetings, and all other authorized meetings presided by the President;",
            "He shall coordinate with the Legislative Secretariat for the task of keeping intact all the documents and records of the CIT-U SSG;",
            "He shall Coordinate with the Cabinet Secretariat in compiling the documents and minutes of the meetings of the Executive Commissions;",
            "He shall Coordinate with the Secretary General in keeping track of the records of the CIT-U SSG;",
            "He shall communicate with the other members of the Cabinet at all times to ensure the fulfillment of the goals and objectives of the CIT-U SSG;",
            "He shall perform such other functions as may be provided by the President or a CIT-U SSG law.",
          ],
        },
        {
          text: "No student shall be appointed as Solicitor-General unless he has the following qualifications:",
          clauses: [
            "He is a bona fide student in any collegiate division of the University, with a minimum load of eighteen (18) units during the time of his appointment and in the semester immediately preceding his appointment;",
            "He has had residency in the University for at least two (2) semesters and two (2) semesters of which were successive and immediately preceding his appointment;",
            "He must have passed all his subjects, without any mark of “Dropped” or “Incomplete” in any of his subhects in the two (2) previous semesters immediately preceding his appointment duly certified by the authorized representative of the University;",
            "He has not been connected with the University as an employee, a member of the faculty, or a working scholar for at least two (2) semesters immediately preceding his appointment;",
            "He possesses good moral character, certified by at least two (2) full-time faculty members of the Univeristy and by the Student Success Office (SSO) and has not been subjected to any disciplinary actions for serious violation of any rules and policies of the University as defined in the University Student Handbook; and",
            "He is not a graduating student in the first semester of his term of office.",
            "He has served at least one (1) complete term in the Supreme Student Government, whether as part of the executive or the legislative department.",
          ],
        },
        {
          text: "The Solicitor-General shall have the following duties and functions:",
          clauses: [
            "He shall report directly to the President;",
            "He shall represent the CIT-U SSG and its constituencies in all legal proceedings issued by the Supreme Student Court, or any other judiciary and investigative entities;",
            "He shall appear in any court or hearings in any action involving the validity of any policy, law, executive order, or proclamation, house bill, resolution, rule or regulation when, in his judgment or the judgment of the President, intervention is necessary or when requested by the Court;",
            "In the absence or upon request of the President, He shall appear in all proceedings issued by the grievance investigation committee as provided by the University Student Handbook, Annex L, Item 3;",
            "Upon the instruction of the President, and in coordination with the legal team of the University, He shall represent the CIT-U SSG in corporate or external litigations, negotiations, or conferences where the legal position of the organization must be defended or present;",
            "He shall represent the President in internal litigations issued by the CIT-U SSG Congress or the CIT-U Student Supreme Court where the legal position of the President must be defended or present;",
            "Upon request of the President or other proper office of the CIT-U SSG, He shall prepare documents for use in official transactions with conformity to law and public interest in mind;",
            "He shall call any committees or commissions for service, assistance, and cooperation during investigations;",
            "Supervise the legal affairs of the CIT-U SSG;",
            "He shall oversee, assess, and ensure the validity of the executive orders, house bills, resolutions, appeals, proposals, programs, and proceedings as provided by the CIT-U SSG Constitution, the University Student Handbook, or any other existing policies relevant to the operations of the CIT-U SSG;",
            "He shall investigate and initiate actions towards CIT-U SSG or its officers when its undertakings violate the provisions of the CIT-U SSG Constitution, the University Student Handbook, or any other existing policies relevant to the operations of the CIT-U SSG;",
            "He shall advise the CIT-U SSG on policy-making including but not limited to the creation of executive orders, house bills, resolutions, appeals, and proposals; and",
            "He shall Perform other functions as may be provided by law.",
          ],
        },
        {
          text: "The Chairpersons of the Cabinet-level Commissions shall have the following duties and functions:",
          clauses: [
            "They shall report directly to the President;",
            "They shall supervise the activities and undertakings related to the conduct of the duties and functions of their office;",
            "They shall regularly conduct meetings of their office and/or upon the interest of the student body;",
            "They shall ensure that their office functions efficiently and effectively;",
            "They shall create sub-commissions which they deem necessary to realize the objectives of their office, subject to the approval of the President; and",
            "They shall perform such other functions as may be provided by the President, or a CIT-U SSG law.",
          ],
        },
        {
          text: "The Cabinet-level Commissions, which shall hereinafter be referred to as the CABCOM, provided by this Constitution shall be the following:",
          clauses: [
            "Commission on Internal Affairs",
            "Commission on Public Relations",
            "Commission on Extracurricular Activities",
            "Commission on Networks and Linkages",
            "Commission on Social Responsibility",
            "Commission on Extended Services",
          ],
        },
        {
          text: "The Commission on Internal Affairs shall have the following duties and functions:",
          clauses: [
            "Be the coordinating body of the different student organizations of the University;",
            "Conduct regular meetings of the heads/representatives of the different student organizations to keep a strong line of communication and a healthy relationship between the CIT-U SSG and its constituents;",
            "Coordinate with the other CABCOM at all times to ensure the fulfillment of the goals and objectives of the CIT-U SSG; and",
            "Perform such other functions as may be provided by the President or a CIT-U SSG law.",
          ],
        },
        {
          text: "The Commission on Public Relations shall have the following duties and functions:",
          clauses: [
            "Take charge of the official press releases on the activities, programs, projects, and similar undertakings of the CIT-U SSG for publication in all forms of media of the CIT-U SSG;",
            "Keep the students informed of the current and upcoming events of the CIT-U SSG;",
            "Coordinate with the other CABCOM at all times to ensure the fulfillment of the goals and objectives of the CIT-U SSG; and",
            "Perform such other functions as may be provided by the President, or a CIT-U SSG law.",
          ],
        },
        {
          text: "The Commission on Extracurricular Activities shall have the following duties and functions:",
          clauses: [
            "Plan and initiate activities, programs, and projects for the physical, intellectual, social, cultural, political, moral, and spiritual development of the students;",
            "Ensure that all the activities, programs, and projects organized by the CIT-U SSG attain their objectives;",
            "Coordinate with the other CABCOM at all times to ensure the fulfillment of the goals and objectives of the CIT-U SSG; and",
            "Perform such other functions as may be provided by the President or a CIT-U SSG law.",
          ],
        },
        {
          text: "The Commission on Networks and Linkages shall have the following duties and functions:",
          clauses: [
            "Establish and maintain liaisons with the public and private sectors, and other student councils/governments and organizations outside of the University;",
            "Coordinate with the other CABCOM at all times to ensure the fulfillment of the goals and objectives of the CIT-U SSG; and",
            "Perform such other functions as may be provided by the President, or a CIT-U SSG law.",
          ],
        },
        {
          text: "The Commission on Social Responsibility shall have the following duties and functions:",
          clauses: [
            "Be the socio-civic arm of the CIT-U SSG for the fulfillment of one of its objectives which is to infuse social awareness and civic consciousness among the students;",
            "Spearhead the planning of the socio-civic-related activities, programs, and projects of the CIT-U SSG;",
            "Coordinate with the other CABCOM at all times to ensure the fulfillment of the goals and objectives of the CIT-U SSG; and",
            "Perform such other functions as may be provided by the President, or a CIT-U SSG law.",
          ],
        },
        {
          text: "The Commission on Extended Services shall have the following duties and functions:",
          clauses: [
            "Be the arm of the CIT-U SSG in implementing and evaluating student related services;",
            "Coordinate with the other CABCOM at all times to ensure the fulfillment of the goals and objectives of the CIT-U SSG; and",
            "Perform such other functions as may be provided by the President, or a CIT-U SSG law.",
          ],
        },
        {
          text: "The Cabinet Secretary and the Solicitor General shall be appointed by the President with the consent of the Commission on Appointments.",
        },
        {
          text: "Each of the CABCOM shall be composed of a Chairperson and at least two (2) Commissioners who shall be appointed by the President with the consent of the Commission on Appointments.",
        },
        {
          text: "The qualifications of the members of the Cabinet shall be determined by the Commission on Appointments provided that the said qualifications do not violate any provision of this Constitution.",
        },
        {
          text: "The President shall not hold any executive positions (such as President, Vice-President, and similar) or chair standing committees in other organizations. The Vice President, and the members of the Cabinet may hold any other positions as officers of any campus organizations, clubs or societies during their term provided that they disclose such affiliation/s to the public, by notifying the Congress, through the Committee on Rules and Regulations, in writing, and strictly avoid conflict of interest in the conduct of their office. In the case that a conflict of interest arises or gross negligence occurs due to the concurrency of offices, the officer concerned shall be subject to the intervention of the Committee on Rules and Regulations.",
        },
        {
          text: "The President, at his own discretion, may remove any member of the Cabinet from time to time.",
        },
        {
          text: "The President, Vice President, and all the members of the Cabinet should not, during their term of office, be directly or indirectly employed by the University.",
        },
        {
          text: "The President shall, during the date of his induction, present an action plan of the Supreme Student Government for the first 100 days under his leadership. No elected President shall assume office without presenting the mentioned action plan.",
        },
        {
          text: "The President shall deliver to the public, through the Congress, a semestral State of the Student Government Address (SOSGA) during the first day of classes of every semester. He may issue an executive order in relation to its content, delivery and broadcast that is not contrary with the preceding paragraph.",
        },
        {
          text: "The President shall form a Presidential Communications Committee (PCC) which shall serve as the official communication and transparency channel of the CIT-U SSG, to which its membership, structure, duties and functions be defined by an executive order. The Supervisor of the PCC shall also be subject to the same stipulations in Article VI Section 37.",
        },
        {
          text: "The President, upon his discretion, may form a Consultative Commission on Constitutional Reforms which shall study the CIT-U SSG Constitution and recommend possible amendments to its provisions. He may issue an executive order in relation to its formation, composition, purpose, and broadcast, provided that it is not contrary to law, public order, public policy, or any provisions of this Constitution.",
        },
      ],
    },
    {
      title: "Legislative Department",
      sections: [
        { text: "The legislative power of the CIT-U SSG shall be vested in the Congress." },
        {
          text: "The Congress shall be composed of representatives from the different regular and degree-granting collegiate divisions of the University:",
          clauses: [
            "The associate courses shall be merged with the department which it is closely related for the purpose of representation to the Congress;",
            "Departmental representation to the Congress shall be determined through the respective enrollment figures of each college, as deemed appropriate by the Commission on Elections. Such a decision shall be made in accordance with the provisions of the prevailing Election Code.",
            "Collegiate/departmental representation to the Congress as defined in the preceding paragraph shall be based on the current enrollment figures of each collegiate division/department as certified by the authorized office of the University. Each collegiate division/department shall have at least one (1) representative, provided that any collegiate division/department with an enrollment of more than 300 shall be allowed one or more representative for every additional 300 or a major fraction thereof which shall not be less than 200 students as certified to by the authorized office of the University. In the case that there are less than 300 students in the population, there should be at least one (1) representative for the department. The College of Engineering and Architecture (CEA) and the College of Computer Studies (CCS) will follow a departmental basis for representation, while College of Arts, Sciences, and Educations (CASE), College of Nursing and Allied Health Sciences (CNAHS), College of Management, Business , and Accountancy (CMBA), and College of Criminal Justice (CCJ) will be on a collegiate basis. Exact number of representatives will be released on a separate date.",
          ],
        },
        {
          text: "No student shall be elected as a member of the Congress unless he has the following qualifications:",
          clauses: [
            "He is a bona fide student in any collegiate division/department and must have a residency of at least (1) semester of the college/department which he shall represent, with a minimum load of eighteen (18) units during the time of his election and in the semester immediately preceding his election;",
            "He must have a residency of at least one (1) semester immediately preceding his election;",
            "He must have passed all his subjects, without any mark of “Dropped” or “Incomplete” in any of his subjects in the semester immediately preceding his election;",
            "The above qualifications must be duly certified by the authorized representative of the University;",
            "He has not been connected with the University as an employee, a member of the faculty, or a working scholar for at least two (2) semesters immediately preceding his election;",
            "He possesses good moral character, certified by at least two (2) full-time faculty members of the University and by the Student Success Office (SSO), and has not been subjected to any disciplinary action for serious violation of any rules/policies of the University as defined in the University Student Handbook; and",
            "He is not a graduating student in the first semester of his term of office.",
          ],
        },
        {
          text: "The members of the Congress shall be elected by a majority of all the votes cast in their respective colleges/departments. The election of the said members shall be held simultaneously with the election of the President and the Vice President. The elected members shall hold office for a term of one academic year and they shall take their oath of office in the same manner as that of the President, the Vice President, and the rest of the elected members of the Cabinet.",
        },
        {
          text: "The Congress shall convene twice a month for its regular sessions. It may also convene for special sessions anytime when the President or Speaker calls it or upon a motion of a majority of its members constituting a quorum to finish proceedings it may deem necessary.",
        },
        {
          text: "The Congress shall constitute a quorum of a majority of its members to transact any business. A small number may adjourn only after sixty (60) minutes from the appointed time.",
        },
        {
          text: "The Congress shall, by a majority vote of all its members, elect from among themselves the Speaker, Speaker Pro Tempore, Legislative Secretary, Assistant Legislative Secretary and other officers, as it may deem necessary.",
        },
        {
          text: "The House Speaker shall have the following powers and duties:",
          clauses: [
            "Preside over all the regular and special sessions of the Congress except during executive and special sessions called by the President wherein the latter shall be the presiding officer;",
            "Implement the rules and regulations of the Congress;",
            "Sign documents, bills, acts, and resolutions of the Congress;",
            "Be the official representative of the Legislative Department in the functions that require its presence;",
            "Serve as the ex-officio Chairperson of the Commission on Appointments; and",
            "Exercise such other powers and duties related to his position as may be provided by a CIT-U SSG law.",
          ],
        },
        {
          text: "The Speaker Pro Tempore shall have the following powers and duties:",
          clauses: [
            "Assume the duties and powers of the House Speaker in cases of absence or temporary incapacity of the Speaker, until such time that the Speaker returns to office and resumes work; and, in case of resignation, removal, permanent incapacity or death of the Speaker, the Speaker Pro Tempore shall become the Speaker and the Congress shall, by a majority vote of all its members, elect from among themselves the new Speaker Pro Tempore;",
            "Preside over the session when, even if present, the Speaker does not preside, or has not designated any other Member as temporary presiding officer;",
            "Recommend to the Speaker appropriate policies, strategies and programs of action to improve the process of legislation and the quality of legislative measures; and",
            "Exercise such other powers and duties related to his position as may be assigned or delegated to him by the Speaker or as may be provided by a CIT-U SSG law.",
          ],
        },
        {
          text: "The Legislative Secretary shall have the following powers and duties:",
          clauses: [
            "Report directly to the Speaker;",
            "Be the Chairperson of the Legislative Secretariat; and",
            "Exercise such other powers and duties related to his position as may be provided by a CIT-U SSG law.",
          ],
        },
        {
          text: "The Assistant Legislative Secretary have the following powers and duties:",
          clauses: [
            "Assume the duties and powers of the Legislative Secretary in cases of absence or temporary incapacity of the Legislative Secretary, until such time that the Legislative Secretary returns to office and resumes work; and, in case of resignation, removal, permanent incapacity or death of the Legislative Secretary, the Assistant Legislative Secretary shall become the Legislative Secretary and the Congress shall, by a majority vote of all its members, elect from among themselves the new Assistant Legislative Secretary;",
            "Exercise such other powers and duties related to his position as may be provided by a CIT-U SSG law.",
          ],
        },
        {
          text: "Unless in conflict with the provisions of the Constitution or with any existing policy of the CHED or of the University, the procedures of the meetings of the Congress shall be governed by the “Robert’s Rules of Order, Revised” and by such other supplementary rules and regulations which the Congress may adopt. No new rulings may be promulgated except with the concurrence of a majority vote of all its members constituting a quorum.",
        },
        {
          text: "The Congress may punish its members for disorderly behavior during sessions and with the concurrence of a two-thirds vote (⅔) vote of all its members, and suspend or expel any member for gross misconduct and disorderly behavior during sessions, negligence of duty, absenteeism, or violation of the CIT-U SSG Constitution. If the penalty is suspension, it shall not exceed thirty (30) days.",
        },
        {
          text: "No member of the Congress shall be questioned for any speech, debate, and discussion outside the session. All sessions of the Congress must be held within the University.",
        },
        {
          text: "The Congress shall have the sole and exclusive power to pass all appropriation bills, revenue bills, bills of local applications, and resolutions.",
        },
        {
          text: "There shall be a Commission on Appointments which shall be composed of the House Speaker, as ex officio Chairperson, the Speaker Pro Tempore, the Legislative Secretary, as a non-voting member, and the Chairpersons of the Legislative Committees. The Chairperson of the Commission shall not vote, except in case of a tie. The Commission shall act on all appointments submitted to it within thirty (30) days from their submission. The Commission shall rule by a majority vote of all its members.",
        },
        {
          text: "There shall be a Secretariat which shall be chaired by the Legislative Secretary and composed of the secretaries of each legislative committee. It shall examine the propriety of any proposed bill, resolution, or regulation in the Congress. It shall be in charge of updating the Congress with regards to the guidelines and policies of the CHED and of the University that may affect the rights and welfare of the students. It shall record the minutes of each session of the Congress and when completed, shall provide a copy to each committee.",
        },
        {
          text: "The Legislative Committees, which shall be constituted immediately during the inaugural session of the Congress, shall be as follows:",
          clauses: [
            "Committee on Finance",
            "Committee on Information Management",
            "Committee on Research",
            "Committee on Rules and Regulations",
            "Committee on Technologian Concerns",
          ],
        },
        {
          text: "Each of the legislative committees shall be composed of a chairperson, a vice chairperson and its members. The chairpersons shall be elected by a majority vote of all the Members of the Congress from among themselves. Each committee shall have not less than three (3) members. No member of the Congress shall be a chairperson or member of more than one (1) committee.",
        },
        {
          text: "Once elected, the chairperson and members of the committees cannot be removed from their position except on grounds of negligence of duty, dishonesty, incompetence, and other causes as may be provided by a CIT-U SSG law. The House Speaker shall convene the Congress to hear the case upon receipt of a written motion for removal and decide the matter in accordance with its rules on disciplinary procedures and other promulgated rules and regulations of the Congress that may have a direct bearing on the case.",
        },
        {
          text: "The subject of the motion for removal shall have the right to due process during the entire congressional hearing/investigation of the case. The subject of the motion for removal shall abstain from the decision of the Congress on the matter.",
        },
        {
          text: "The person removed from his position in the committee shall nevertheless still continue to function as a member of the Congress unless his removal from the committee shall also warrant his expulsion from the Congress.",
        },
        {
          text: "The following are the committees and their corresponding duties and responsibilities:",
          clauses: [
            "The Committee on Finance shall be in charge of recording the expenditures of the CIT-U SSG, and enforcing standard operating procedures in regards to the financial system. It shall also be in charge of the preparation of the annual budget, of which allocation must be given to all under the structure of the CIT-U SSG. It shall formulate and implement policies and procedures governing the financial resources, and require financial documents necessary for the maintenance of an effective financial monitoring system. It shall keep a book of accounts of the CIT-U SSG which shall be open to the student body and submit a financial report of the CIT-U SSG to the Speaker at the end of each semester. It shall perform such other related functions as may be provided by a resolution of the Congress or by a CIT-U SSG law.",
            "The Committee on Information Management shall be in charge of the circulation of acts, resolutions, and laws approved by the Congress to keep the student body informed of all its transactions. It shall formulate laws and resolutions that will assist the Commission on Public Relations in creating a system of the different processes for information dissemination. It shall perform such other related functions as may be provided by a resolution of the Congress or by a CIT-U SSG law.",
            "The Committee on Research shall facilitate research and related activities of the CIT-U SSG and shall also advise the Congress and the Executive Department on events, programs, policies, and priorities regarding research and related activities. It shall perform such other related functions as may be provided by a resolution of the Congress or by a CIT-U SSG law.",
            "The Committee on Rules and Regulations shall scrutinize policies, bills, and resolutions regarding the rules and regulations inside the office. It shall also promulgate a “Rules of the Congress” that puts into writing the Congress’ rules and regulations to promote efficiency and integrity in the performance of the functions and duties of the CIT-U SSG officers and the conduct of its operations. It shall perform such other related functions as may be provided by a resolution of the Congress or by a CIT-U SSG law.",
            "The Committee on Technologian Concerns shall receive from the college/department representatives, concerns of any student against any person or entity for acts or violations of his right as a student and submit its finding to the proper authority of the University for proper action. It shall also solicit concerns and suggestions from the students in relation to their stay in the University which may include, but not limited to, office processes, school facilities, services, academic resources, equipment, and teaching methods. It shall perform such other related functions as may be provided by a resolution of the Congress or by a CIT-U SSG law.",
          ],
        },
        {
          text: "All Legislators may hold any other positions as officers of any campus organizations, clubs, or societies during their term provided that they disclose such affiliation/s to the public, by notifying the Committee on Rules and Regulations in writing, and strictly avoid conflict of interest in the conduct of their office. In the case that a conflict of interest arises or gross negligence occurs due to the concurrency of offices, the officer concerned shall be subject to the intervention of the Committee on Rules and Regulations.",
        },
        {
          text: "The House Speaker, Speaker Pro Tempore, Legislative Secretary, Assistant Legislative Secretary and the Chairpersons of the Legislative Committees shall not hold at most one (1) executive positions (such as President, Vice-President and similar) or chair standing committees in other organizations.",
        },
        {
          text: "No negotiations, regulations, and compromises entered into by the President with the school administration, other student governments, or other student organizations shall be valid and effective unless concurred in by a majority vote of all the members of the Congress.",
        },
        {
          text: "No bill or resolution shall be approved without the majority vote of the members of the Congress. The House Speaker, or the Acting Speaker of the House in the absence of the former, upon his discretion, may call for two or more readings which shall occur on separate days. Upon the last reading of such a bill or resolution, amendments may be introduced and voted upon, and in its final form, a vote shall be taken immediately thereafter with the yays and nays entered in the Journal.",
        },
        {
          text: "Every bill or resolution passed by the Congress shall, before it becomes effective, be presented to the President. If he approves the same, he shall sign it; otherwise, he shall veto it and return the same with his objections to the Congress, which shall enter the objections at large in its Journal and proceed to reconsider it. If, after such reconsideration, two-thirds (⅔) of all the Members shall agree to pass the bill or resolution, it shall become effective. The President shall communicate his veto of any bill or resolution to the Congress as stated in Section 11 (n) of Article VI in this Constitution.",
        },
      ],
    },
    {
      title: "The Judiciary",
      sections: [
        {
          text: "The judicial power of the CIT-U SSG shall be vested in the Student Supreme Court, which shall hereinafter be referred to as SSC.",
        },
        {
          text: "The SSC shall be convened and organized by the President not later than seven (7) weeks after he assumes his office subject to the provisions of this Constitution.",
        },
        {
          text: "The SSC shall handle all complaints on any violation of the CIT-U SSG Constitution, laws, policies, executive orders, or regulations. It shall also exercise its power to judge in any petition to compel legislative or executive action pertaining to the rights and welfare of the students.",
        },
        {
          text: "The Student Supreme Court shall be the court of original and final jurisdiction in cases involving the Student Bill of Rights.",
        },
        {
          text: "The SSC shall be composed of a Chief Justice who shall preside over all sessions of the court, eight (8) Associate Justices and four (4) Puisne Justices. Judicial Appointments:",
          clauses: [
            "The Chief Justice and all eight (8) shall be appointed by the President and will retain his or her seat for at least 2 year concurrent span as long as they abide by and meet the standards of the SSC.",
            "Puisne Justices, numbering four (4), will be appointed by the existing Justices, serving a minimum one-year term. They are eligible to run as prospects in subsequent years, subject to the Chief Justice's discretion, and their positions can only be filled when prospective candidates are identified.",
            "All appointments are subject to confirmation of the Commission on Appointments.",
          ],
        },
        {
          text: "The Court may sit in one of its three (3) divisions composed a minimum of 3 members each:",
          clauses: [
            "Division of Civil rights and Liberties: works to uphold the civil and constitutional rights of all persons, particularly some of the most vulnerable members;",
            "Division of Dispute Resolution: is used to define the full range of dispute (claim) resolution mechanisms, which includes negotiation, mediation, non-binding and binding arbitration, and litigation; and",
            "Division of Constitutional Review: Constitutional review or constitutional control, guaranteeing the effectiveness, stability, and protection of the rights guaranteed by the constitution and preventing their infringement.",
          ],
        },
        {
          text: "Each division shall specialize in the respective areas mentioned in its name, ensuring a fair and student-centric approach to addressing various issues.",
        },
        {
          text: "The Student Supreme Court shall establish the rules of its proceedings which shall be known Rules of Court. These Rules shall ensure the protection and enforcement of constitutional rights, pleading, and practice, and shall not diminish, increase, or modify substantive rights.",
        },
        {
          text: "The SSC shall have the following powers and duties:",
          clauses: [
            "Hear, try, and decided cases properly brought before involving any of the following: i) The constitutionality or validity of any CIT-U SSG law or resolution passed by the Congress or any executive order issued by the President; ii) Any election protest or violation of election laws in the exercise of its appellate jurisdiction; and iii) The legality of any act or performance of an officer of the CIT-U SSG.",
            "Appoint a Clerk of Court who shall record and keep the minutes of the meetings and trials of the SSC;",
            "Summon and order the investigation of suspension of any CIT-U SSG officer;",
            "Adopt a Complaint and Investigation Code;",
            "Settle actual controversies involving rights which are legally demandable and enforceable; and",
            "Determine whether or not there has been a grave abuse of discretion amounting to lack or excess of jurisdiction on the part of any department of the CIT-U SSG.",
          ],
        },
        {
          text: "The SSC shall convene anytime when the Chief Justice calls it or upon a motion of a majority of the Associate Justices constituting a quorum to finish proceedings it may deem necessary. All sessions shall be held within the University.",
        },
        {
          text: "Every decision of the SSC shall clearly and distinctly state the facts of the case and the CIT-U SSG law, constitutional provision, or executive orders on which the decision is based.",
        },
        {
          text: "The maximum period within which the case shall be resolved or decided by the SSC shall be four (4) weeks from the date of its submission for a resolution or decision.",
        },
        {
          text: "The members of the SSC shall continue to hold office even after a case is resolved. The office shall only cease upon the induction of a new set of CIT-U SSG officers.",
        },
        {
          text: "The SSC shall submit to the President and to the Congress a case report a week after a case is resolved.",
        },
      ],
    },
    {
      title: "Constitutional Commissions",
      sections: [
        { text: "A. Common Provisions" },
        {
          text: "The constitutional commission which shall be independent, shall be the Commission on Audit and the Commission on Elections.",
        },
        {
          text: "The constitutional commissions shall be convened and organized by the President not later than seven (7) weeks after he assumes his office subject to the provisions of the constitution.",
        },
        {
          text: "Each commission shall be headed by a Chairperson and assisted by the Commissioners who shall hold office for one (1) year which shall commence from the date of their appointment and shall expire one year thereafter unless impeached during his term.",
        },
        {
          text: "Constitutional commissioners may hold any other positions as officers of any campus organizations, clubs, or societies during their term provided that they disclose such affiliation/s to the public, by notifying the Committee on Rules and Regulations in writing, and strictly avoid conflict of interest in the conduct of their office. In the case that a conflict of interest arises or gross negligence occurs due to the concurrency of offices, the officer concerned shall be subject to the intervention of the Committee on Rules and Regulations.",
        },
        {
          text: "In case of a vacancy in the Constitutional Commissions because of disqualification, resignation, or permanent incapacity of any member of the Commissions, the President shall immediately fill-up the vacancy not later than four (4) weeks subject to the provisions of this Constitution.",
        },
        { text: "B. Commission on Audit" },
        {
          text: "There shall be an independent Commission on Audit, which shall hereinafter be referred to as COA, composed of a Chairperson and at least two (2) Commissioners who shall be appointed by the President with the consent of the Commission on Appointments.",
        },
        {
          text: "The Chairperson and the Commissioners must possess the following qualifications:",
          clauses: [
            "Must be a bona fide student of the University for at least four (4) consecutive semesters for the Chairperson, and at least two (2) consecutive semesters for the Commissioners, preceding their appointment;",
            "Must be of good moral character duly certified by at least two (2) full-time faculty members of the College of Management, Business and Accountancy (CMBA) of the University;",
            "The Chairperson must be from the CMBA and must be a major of either Accounting, Accounting Information Systems, or Management Accounting that has substantial knowledge about auditing;",
            "The Commissioners must possess the substantial knowledge in Accounting and Auditing;",
            "The Chairperson and the Commissioners must have passed all their subjects and have no mark of “Dropped” or “Incomplete” in their academic records in the semesters immediately preceding their appointment; and",
            "Must not have been a candidate for any position in the student government election preceding his appointment.",
          ],
        },
        {
          text: "The COA shall the following powers and functions:",
          clauses: [
            "Examine, audit, and settle all accounts, funds, and/or properties of the CIT-U SSG and promulgate accounting and auditing rules and regulations, including those for the prevention of the irregular, unnecessary, excessive or extravagant expenditure or use of funds and/or properties;",
            "Decide or resolve any financial and/or auditing case brought before it within fifteen (15) days from the date of its submission for decision or resolution;",
            "Record the financial account of the CIT-U SSG in the proper books of journal, and report to the President and the Congress any anomaly or irregularity in the disbursement of the student fund or use of properties;",
            "Present the Code of Audit to the Congress for approval not later than the last legislative session of the first semester;",
            "Submit every semester the audited financial report on the expenditures of the CIT-U SSG to the President and the Congress. It shall submit additional reports as may be required by a CIT-U SSG law; and",
            "Perform such other powers and functions as may be provided by a CIT-U SSG law.",
          ],
        },
        {
          text: "Unless otherwise provided by a CIT-U SSG law, any decision, order, or ruling of the Commission may be brought to the Student Supreme Court on appeal by the aggrieved party within seven (7) days from the receipt of a copy thereof",
        },
        { text: "C. Commission on Elections" },
        {
          text: "There shall be an independent Commission on Election, which shall hereinafter be referred to as COMELEC, composed of a Chairperson and nine (9) Commissioners who shall be appointed by the President with the consent of the Commission on Appointments.",
        },
        {
          text: "The Chairperson shall endorse names of the Commissioners to the President for appointment with the consent of the Commission on Appointments.",
        },
        {
          text: "The Chairperson and the Commissioners shall have the following qualifications:",
          clauses: [
            "Must be a bona fide student of the University for at least two (2) consecutive semesters for the Chairperson, and at least two (2) consecutive semesters for the Commissioners, preceding their appointment;",
            "Must be of good moral character duly certified by at least two (2) full-time faculty members of the University;",
            "Must have passed all their subjects and have no mark of “Dropped” or “Incomplete” in their academic records in the semester immediately preceding their appointment;",
            "Must not have been a candidate for any position in the student government election preceding his appointment.",
          ],
        },
        {
          text: "The COMELEC shall have the following powers and functions:",
          clauses: [
            "Enforce and administer all students’ laws, policies, and rules and regulations relative to the conduct of elections to ensure free, orderly, and honest elections;",
            "Be the sole judge of all contests relating to the conduct of elections and returns;",
            "Decide administrative questions affecting elections;",
            "Register student political parties;",
            "Certify the qualifications of the candidates as provided for in Article VI and VII of this Constitution;",
            "Present the Election Code to the Congress for approval not later than the last legislative session of the first semester;",
            "Submit to the outgoing President and members of the Congress, and publish in all forms of media of COMELEC a report on the complete canvass of results and the conduct and manner of the recent election not later than thirty (30) days from the said election; and",
            "Perform such other powers and functions as may be provided by any CIT-U SSG law",
          ],
        },
        {
          text: "The decisions of COMELEC on all electoral practices shall be considered final unless appealed in the Student Supreme Court.",
        },
      ],
    },
    {
      title: "Council of Leaders",
      sections: [
        {
          text: "The Council of Leaders, which shall hereinafter be referred to as COL, shall serve as an advisory body to the President, without any executive or legislative functions.",
        },
        {
          text: "The COL shall be composed of the following:",
          clauses: [
            "President;",
            "Members of the Cabinet;",
            "House Speaker;",
            "Presidents of the Student Organizations; and",
            "Representatives from the Student Publication",
          ],
        },
        {
          text: "The COL shall serve as a venue where:",
          clauses: [
            "Student leaders can suggest programs and activities for the University;",
            "Student leaders can assess the performance of the CIT-U SSG through an assessment survey and recommend necessary steps to further attain its objectives;",
            "Information regarding CIT-U SSG affairs can be disseminated; and",
            "Other purposes which the council may serve.",
          ],
        },
        {
          text: "The COL shall convene at least once every semester. The President shall have the prerogative to call emergency meetings at times which warrant the immediate advice of the COL.",
        },
        {
          text: "The procedures of the meetings of the COL shall be governed by the “Robert’s Rule of Order, revised” and by such other supplementary rules and regulations which the COL may adopt. No new rulings may be promulgated except with the concurrence of a majority vote of all its members constituting a quorum.",
        },
      ],
    },
    {
      title: "Presidential Sectoral Advisory Council",
      sections: [
        {
          text: "The Presidential Sectoral Advisory Council, which shall hereinafter be referred to as PSAC, shall serve as a sectoral advisory body to the President, without any executive or legislative functions.",
        },
        {
          text: "The PSAC shall be composed of the following:",
          clauses: [
            "President;",
            "Vice President;",
            "Secretary General, as a non-voting member;",
            "Representative from Academic Scholars;",
            "Representative from Non-Academic Scholars;",
            "Representative from Student Athletes;",
            "Representative from Faith-Based Organizations;",
            "Representative from LGBTQIA+;",
            "Representative from Creative & Performing Arts; and",
            "Other dominant sectors as may be determined by the President, or a CIT-U SSG law.",
          ],
        },
        {
          text: "The PSAC shall serve as a venue where:",
          clauses: [
            "Student leaders from different sectors can suggest programs and activities for the University;",
            "Student leaders from different sectors can assess the performance of the CIT-U SSG and recommend necessary steps to further attain its objectives",
            "Information regarding CIT-U SSG affairs can be disseminated; and",
            "Sectoral concerns may be lobbied.",
          ],
        },
        {
          text: "The PSAC shall convene at least once every two months. The President shall have the prerogative to call emergency meetings at times which warrant the immediate advice of the PSAC.",
        },
        {
          text: "The procedures of the meetings of the PSAC shall be governed by the “Robert’s Rule of Order, Revised” and by such other supplementary rules and regulations which the PSAC may adopt. No new rulings may be promulgated except with the concurrence of a majority vote of all its members constituting a quorum.",
        },
      ],
    },
    {
      title: "Accountability of Officers",
      sections: [
        {
          text: "The CIT-U SSG officers shall serve with the highest degree of responsibility, integrity, loyalty, sincerity, and efficiency and shall remain accountable to the student body.",
        },
        {
          text: "Any CIT-U SSG officer may be suspended or expelled from his officer for any of the following cases:",
          clauses: [
            "Violation of the CIT-U SSG Constitution and CIT-U SSG law;",
            "Bribery;",
            "Gross neglect of duty;",
            "Any grave offense or misconduct reflecting upon his moral character;",
            "Malversation of funds; and",
            "Abuse of power.",
          ],
        },
        {
          text: "In all cases, the officer sought to be impeached, expelled, or suspended shall have the right to due process of law.",
        },
        {
          text: "The President, the Vice President, the Secretary General and other elected members of the Executive Committee, the members of the Student Supreme Court, and the members of the Constitutional Commissions shall be removed from office on impeachment and conviction of a culpable violation of the Constitution of students’ laws and other causes mentioned in Section 2 hereof.",
        },
        {
          text: "The CIT-U SSG Congress shall have the sole and exclusive power to initiate, try, and decide all cases of impeachment. Upon the filing of a verified complaint, the Congress may initiate impeachment trials by vote of at least one-fifth (⅕) of all its Members. No officer shall be convicted without the concurrence of at least two-thirds (⅔) of all the Members immediately by the Congress. When the Congress sits on the impeachment cases, its Members shall be under oath or affirmation.",
        },
        {
          text: "Judgment in cases of impeachment shall extend only to removal from office and permanent disqualification to hold and enjoy any office of honor and trust in the CIT-U SSG without prejudice to his prosecution by civil courts for his acts subject to the disciplinary action of the school.",
        },
        { text: "The judgment in cases of impeachment shall be final and unappealable." },
        {
          text: "No elective or appointive officer of the CIT-U SSG shall engage in active participation in partisan local and/or national politics wherein the name of the CIT-U SSG shall be used to support directly or indirectly any local and/or national candidate and as means to promote partisan political purposes.",
        },
      ],
    },
    {
      title: "General Provisions",
      sections: [
        { text: "This Constitution shall be known as the 2024 CIT-U SSG Constitution." },
        {
          text: "The Official Seal of the CIT-U SSG shall contain the symbols such as the scale of justice, gavel of authority, quill of truth, three stars, laurel of wisdom, and six-toothed half gear.",
          clauses: [
            "The scale of justice represents the commitment of the student government to do justice to every student and ensure due process of law;",
            "The gavel of authority represents the student government as the highest governing student organization in the college department of the University;",
            "The quill of truth represents the commitment of the student government to transparency, honest, integrity and accountability;",
            "The three stars represent the three branches of the student government namely the Executive Department, the Legislative Department and the Judiciary;",
            "The laurel of wisdom symbolizes the Supreme Student Government’s pursuit for knowledge, ability to make sound judgments, and commitment to quality education; and",
            "The six-toothed half gear represent the six colleges of the University namely the College of Arts, Sciences and Education (CASE), College of Computer Studies (CCS), College of Criminal Justice (CCJ), College of Engineering and Architecture (CEA), College of Management, Business and Accountancy (CMBA) and College of Nursing and Allied Health Sciences (CNAHS).",
          ],
        },
        {
          text: "There shall be an official seal for the Congress wherein the official seal shall contain",
          clauses: [
            "The six-toothed gear signifies the committees in the Legislative Department, namely the Committee on Rules and Regulations, Committee on Finance, Committee on Information Management, Committee on Research, and Committee on Technologian Concerns. This means that each committee has a respective function to play in the Congress.",
            "The rope of unity represents the bond of the legislators in the Congress who have been united to achieve a common goal —to serve the Technologians.",
            "The scale of justice and fairness signifies that the members of the Congress must preserve the idea of the fair distribution of law, with no influence of bias, privilege, or corruption.",
            "The fist of strength represents the voice and firm stand of the members of the Congress for the rights and welfare of the Technologians.",
            "The gavel of authority signifies the commitment of the Congress to be of service to the Technologians through impactful legislations, such as resolutions and bills.",
            "The laurel of wisdom symbolizes knowledge as well as eternal glory, special achievement, success, and triumph.",
            "The star of guidance represents the members of the Congress who shall motivate and guide one another, as well as the members of the Technologian studentry.",
            "The House of Representatives serves as a constant reminder to the members of the Congress of their roles, duties, and mission.",
          ],
        },
        {
          text: "The Accounting Office of the University shall have the sole and exclusive authority to collect the CIT-U SSG membership fee for and on behalf of the CIT-U SSG and shall remit the whole collected amount to the Treasurer General of the CIT-U SSG through its official bank account.",
        },
        {
          text: "The CIT-U SSG President, Treasurer General and Chairperson of the Advisory Board of the CIT-U SSG shall be the signatories of the transactions with the University Treasurer and with the official CIT-U SSG bank account.",
        },
        {
          text: "There shall be an Advisory Board to the CIT-U SSG composed of one (1) Chairperson and two (2) board members who are full-time faculty members of the University. The President shall, with the approval of the majority of all the Members of the Congress, submit a list of names of at least five full- time faculty members to the University President who shall then appoint from the list submitted, the Chairperson and members of the Advisory Board. The approval of nominees of the President to the Advisory Board shall be done by the Congress in its first regular session.",
        },
        {
          text: "The CIT-U SSG is a continuing body and funds pertaining thereto shall be used for its activities according to a CIT-U SSG law. No funds of the CIT-U SSG shall be diverted to funds of the University.",
        },
        {
          text: "Funds of the CIT-U SSG that are not appropriated to by the Congress shall automatically be appropriated to the emergency fund. Remaining funds at the end of the school year shall be carried over to the general fund of the succeeding school year.",
        },
        {
          text: "No money or property belonging to the CIT-U SSG shall be appropriated, applied or used for the benefit or support of any candidate of a student political party in the University or in any partisan local and/or national political activity.",
        },
        {
          text: "No disbursement of the general fund shall be made except in pursuance of an appropriation act and deemed necessary instances. The President, Treasurer General, and the Chairperson of the Advisory Board shall attest to all disbursements.",
        },
        {
          text: "Contributions may be solicited for some specific purpose as Congress may determine by law, regulation, or resolution provided the manner and the purpose for which the contributions are solicited are not against any existing policy of the CHED or the University. The President and the Advisory Board shall attach the solicitations of such contributions.",
        },
        {
          text: "All money collected or raised by the CIT-U SSG in pursuance of a law, rule, resolution or regulation passed by the Congress for a special purpose shall be treated as special fund and paid out or used for such purpose for which the special fund was created has been fulfilled or abandoned. The balance shall be transferred to the general fund.",
        },
        {
          text: "All elective and appointive officers of the CIT-U SSG shall be sworn into office. No Constitutional officer shall discharge his powers and duties without first taking his oath of office.",
        },
        {
          text: "The President, Vice President, Secretary General, the Treasurer General, the Executive Auditor, and Members of the Congress shall take their oath of office in an induction ceremony on the same date and place.",
        },
        {
          text: "In cases when the attendance of members in sessions in relation to Sections 13 and 6 of Article VII and Article VIII, respectively, of this Constitution becomes extremely difficult or impossible - such as on occasions of natural calamities, pandemics, strikes, riots, and civil disturbances, whether fortuitous or not - and there is urgent necessity to act on any measure, the House Speaker, in consultation with the Speaker Pro Tempore and the Legislative Secretary, in the case of the Congress and/or the Chief Justice, in the case of the Student Supreme Court, may authorize the conduct of sessions through electronic platforms like video conference, telecommunications and other computer online technologies.",
        },
      ],
    },
    {
      title: "Amendments and Transitory Provisions",
      sections: [
        {
          text: "This Constitution shall take effect immediately upon its ratification by a majority of the votes cast in a plebiscite held for that purpose and subsequent approval of the CIT-U SSG Adviser. Once ratified, this Constitution shall supersede and annul any existing previous constitutions of the CIT-U SSG.",
        },
        {
          text: "Any amendment or revision of this Constitution may be proposed by the Congress upon a vote of two-thirds (⅔) of all its members constituting itself as a Constituent Assembly or request the President to convene and appoint members of a Constitutional Convention, composed of the Vice President, the Secretary General as a non-voting member, six (6) members of the Congress, seven (7) members of the Executive Department, three (3) representatives from departmental organizations, three (3) representatives from non-departmental organizations, the Chairperson of the Commission on Audit and the Chairperson of the Commission on Elections.",
        },
        {
          text: "Any amendment or revision of this Constitution under Section 2 shall be approved by a vote of two-thirds (⅔) of all of the members of the Congress and shall be valid when ratified by a majority of the votes cast in a plebiscite held for that purpose and subsequent approval of the CIT-U SSG Adviser.",
        },
        {
          text: "The Congress, upon a vote of three-fourths (¾) of all its members, in case of an emergency or extreme circumstances as mentioned in Article XII Section 15 of this Constitution, may suspend provisions, provided that it should have a subsequent approval of the CIT-U SSG Adviser. The validity of such suspension may be appealed to the Student Supreme Court.",
        },
        {
          text: "All existing resolutions, codes, rules, Acts, and policies consistent with this Constitution shall remain operative until amended, suspended, repealed, or revoked by a vote of two-thirds (⅔) of all of the members of the Congress.",
        },
        {
          text: "All existing executive orders issued by the President consistent with this Constitution shall remain operative until amended, suspended, repealed, or revoked.",
        },
        {
          text: "The term of incumbent officers may be extended until such time that matters pertaining to their term of office will be taken care of.",
        },
        {
          text: "Any amendment or revision of this Constitution may be done only when one (1) academic year has lapsed after the ratification of the existing Constitution.",
        },
        {
          text: "The amendments and revisions as mentioned in the previous section shall be proclaimed effective only after seven (7) days from the plebiscite or referendum. The amended Constitution must be published in the official newsletter of the Supreme Student Government.",
        },
      ],
    },
  ],
};
