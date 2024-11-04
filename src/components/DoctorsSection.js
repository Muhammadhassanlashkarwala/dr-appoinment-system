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
import { Button } from "./ui/button";
import Link from "next/link";

export const DoctorsSection = ({isHome}) => {

    const filtered = isHome ? doctors.slice(0, 6) : doctors

    return(
        <div className="container mx-auto">
      <div className=" flex justify-between px-20">
        <h1 className="font-semibold px-10 text-3xl">Premium Doctors</h1>
        <div className="px-10">

{isHome ? (
    <Link href={"/doctors"}>
    <Button>See All</Button>
    </Link>
    ) : (
    <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Dr.categories" />
    </SelectTrigger>
    <SelectContent>
      {categories.map((category) => ( <SelectItem key={category} value={category}>{category}</SelectItem>
      ))};
    </SelectContent>
  </Select>
)};
      
        </div>
      </div>
     <div className="px-10 my-4">
     <div className="grid px-20 gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
       {filtered.map((doctor) => (<Card key={doctor.name}>
        <CardHeader>
    <CardTitle>{doctor.name}</CardTitle>
  <CardDescription>{doctor.category}</CardDescription>
  </CardHeader>
       </Card>))}
      </div>
     </div>
        </div>
    )
}