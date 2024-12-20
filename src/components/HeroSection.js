import Image from "next/image";
import { Button } from "./ui/button";

export const HeroSection = () => {
    return( 
<section className="text-gray-600 body-font ">
  <div className="container flex mx-auto px-20 py-14 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-3/2  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="font-semibold px-10 sm:text-3xl text-3xl mb-4 text-gray-900">
      DOCTOR APPOINMENT 
        <br className="hidden lg:inline-block" />
        SYSTEM.
      </h1>
      <p  className="mb-8 px-10 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan  heirloom 
        <br className="hidden lg:inline-block" />
       neutra air plant cold-pressed tacos poke beard tote bag.
        <br className="hidden lg:inline-block" />
         Heirloom echo park mlkshk
        tote bag selvage hot chicken 
        <br className="hidden lg:inline-block" />
        authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex px-10 gap-4 justify-center">
      <Button variant="outline">
        Find Doctor You Need
        </Button>
        <Button>
    Apply as Doctor
        </Button>
  
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full px-10 md:w-1/2 w-5/6 flex justify-end">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        height={400}
        width={400}
        
        src="https://images.unsplash.com/photo-1609188076864-c35269136b09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
      />
    </div>
  </div>
</section>
    );
};

// 15:22