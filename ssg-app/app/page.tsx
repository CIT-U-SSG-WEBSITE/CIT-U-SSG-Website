import BranchesOfGovernment from "@/components/Home/BranchesOfGovernment";
import MeetTheAdministration from "@/components/Home/MeetTheAdministration";
import PresidentialMessage from "@/components/Home/PresidentialMessage";
import ReadConstitution from "@/components/Home/ReadConstitution";
import HeroSection from "@/components/Home/HeroSection";


export default function Home() {
  return (
    <div className="w-full h-fit flex flex-col gap-24 md:gap-36 items-center md:pt-10 pb-24 md:pb-36">
      <HeroSection />
      <PresidentialMessage />
      <MeetTheAdministration />
      <BranchesOfGovernment />
      <ReadConstitution />
    </div>
  );
}
