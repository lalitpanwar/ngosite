import { About, Hero, HowYouCanHelp, ImageGallery, Initiatives, MeetOurTeam, OurMission, FAQ } from "@/components";
import DonateCTA from "@/components/sections/DonateCTA";



export default function Home() {
  return (
    <>
<main className="min-h-screen">
<Hero />
<About />
<Initiatives />
<HowYouCanHelp />
<DonateCTA />
<OurMission />
<ImageGallery />
<MeetOurTeam />
<FAQ />
</main> 
</>
  );
}
