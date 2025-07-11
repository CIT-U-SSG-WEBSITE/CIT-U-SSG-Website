import BranchesOfGovernment from "@/components/Home/BranchesOfGovernment";
import MeetTheAdministration from "@/components/Home/MeetTheAdministration";
import PresidentialMessage from "@/components/Home/PresidentialMessage";
import GotQuestions from "@/components/Home/GotQuestions";
import ReadConstitution from "@/components/Home/ReadConstitution";
import HeroSection from "@/components/Home/HeroSection";


export default function Home() {
  return (
    <div className="w-full h-fit flex flex-col gap-36 items-center pt-10 pb-36">
      <HeroSection />
      <PresidentialMessage />
      <MeetTheAdministration />
      <BranchesOfGovernment />
      <ReadConstitution />
      <GotQuestions />
    </div>
  );
}
