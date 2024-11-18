import { DoctorsSection } from "@/components/DoctorsSection"


export default function Doctors({ searchParams }){
    console.log("searchParams=>", searchParams);
    return(
       <div>
        <DoctorsSection />
       </div>
    );
};