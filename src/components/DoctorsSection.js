import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { categories } from "@/lib/data";
  import { doctors } from "@/lib/data";
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HomeIcon, PlusIcon, StitchesLogoIcon } from "@radix-ui/react-icons"

export const DoctorsSection = ({isHome}) => {

    const filtered = isHome ? doctors.slice(0, 6) : doctors

    return(
        <div className="container mx-auto my-10">
      <div className=" flex justify-between px-20">
        <h1 className="font-semibold px-10 my-4 text-3xl">Premium Doctors</h1>
        <div className="px-10">
        {
 isHome ? (
    <Link href={"/doctors"}>
    <Button>See All</Button>
    </Link>
    )
    :(
    <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Dr.categories"/>
    </SelectTrigger>
    <SelectContent>
      {categories.map((category) => ( <SelectItem key={category} value={category}>{category}</SelectItem>
      ))}
    </SelectContent>
  </Select>
)}
      
        </div>
      </div>
     <div className="px-10 mt-4">
     <div className="grid my-3 px-20 gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
       {filtered.map((doctor) => (
         <Card key={doctor.name}>
        <CardHeader className={"flex flex-row"}>
        <Avatar className="self-center h-10 w-10 gap-4">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>DAS</AvatarFallback>
</Avatar>
    <div className="pl-4">
    <CardTitle>{doctor.name}</CardTitle>
  <CardDescription>{doctor.category}</CardDescription>
    </div>
  </CardHeader>
  {
    !isHome && <CardContent>
    <div className="flex justify-between my-2">
      <div className="flex items-center gap-2">
        <HomeIcon />
      <h1 className="font-semibold">Gender</h1>
      </div>
      <h1>{doctor.gender}</h1>
    </div>
    <div className="flex justify-between my-2">
    <div className="flex items-center gap-2">
        <PlusIcon />
      <h1 className="font-semibold">Hospital</h1>
      </div>
      <h1>{doctor.hospital}</h1>
    </div>
    <div className="flex justify-between my-2">
    <div className="flex items-center gap-2">
        <StitchesLogoIcon />
      <h1 className="font-semibold">Appointment Time</h1>
      </div>
      <h1>{doctor.appointmentTime}</h1>
    </div>
  </CardContent>
  }
  

  <CardFooter>
    <Link href={`/doctors/${doctor.id}`}>
    <Button>See Detail</Button>
    </Link>
  </CardFooter>
       </Card>
      
       ))}
      </div>
     </div>
        </div>
    )
}