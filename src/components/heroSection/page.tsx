import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className=" ml-3  md:ml-20 mt-28 text-white flex flex-col mb-10">
        <div className="font-bold mb-5 text-lg">
        WELCOME TO
        </div>
        <div className="text-3xl md:text-4xl max-w-[300px] md:max-w-[500px] font-black">
        Certified Cloud Applied Generative AI Engineering (PEC-GenAI)
        </div>
        <div className=" max-w-80 my-7">Aim to prepare individuals for the revolutionary era of Generative AI.</div>
        <div>
        <div className="flex">
  <Button className="flex-2 bg-theme_color py-6 mr-2 hover:bg-transparent border border-theme_color hover:text-theme_color min-w-9 md:min-w-12">
    <p className="hidden md:flex">GET STARTED NOW!</p>
    <p className="md:hidden">START NOW</p>
    <MoveRight className="mr-2 h-4 w-4 mx-2" /> 
  </Button>
  
  <Button className="flex-2 bg-white text-theme_color py-6 hover:bg-transparent border hover:text-white min-w-9 md:min-w-12">
    
    <p className="hidden md:flex">VIEW COURSE</p>
    <p className="md:hidden">COURSE </p>
    <MoveRight className="mr-2 h-4 w-4 mx-2" /> 
  </Button>
</div>
        </div>

    </div>
  )
}
