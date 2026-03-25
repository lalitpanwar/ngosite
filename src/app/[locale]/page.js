import { About, Hero, HowYouCanHelp, ImageGallery, Initiatives, MeetOurTeam, OurMission, FAQ } from "@/components";
import DonateCTA from "@/components/sections/DonateCTA";



export default async function Home({params}) {
  return (
    <>
    
<main className="min-h-screen">

<Hero />
<About />
<Initiatives />
<HowYouCanHelp />
<DonateCTA />
<OurMission />
<ImageGallery isHomePage={true} />
<MeetOurTeam />
<FAQ />

</main> 
</>
  );
}
