import { doctors } from "@/lib/data";
import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function DoctorDetails({ params }){
    const doctorInfo = doctors.find((doctor) => doctor.id == params.id)
    return(
        <div className="min-h-screen">
  <div className="container py-10 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
        {doctorInfo.category}
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
          {doctorInfo.name}
        </h1>
        <div className="flex mb-4">
          <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
            Description :
          </a>
        </div>
        <p className="leading-relaxed mb-4">
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric
          sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps
          cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
          tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.
        </p>
        <div className="flex border-t border-gray-200 items-center pt-2 my-4">
          <h1 className="font-semibold text-xl text-black">Fees:</h1>
          <h1 className="text-xl ml-auto text-black">${doctorInfo.fees}</h1>
        </div>
        <div className="flex border-t border-gray-200 items-center pt-2 my-4">
          <h1 className="font-semibold text-xl text-black">Hospital:</h1>
          <h1 className="text-xl ml-auto text-black">{doctorInfo.hospital}</h1>
        </div>
        <div className="flex border-t border-gray-200 items-center pt-2 my-4">
          <h1 className="font-semibold text-xl text-black">Appoinment Time:</h1>
          <h1 className="text-xl ml-auto text-black">{doctorInfo.appointmentTime}</h1>
        </div>

        <Button className="w-full py-2">Book Your Appointment</Button>
        {/* <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Color</span>
          <span className="ml-auto text-gray-900">Blue</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Size</span>
          <span className="ml-auto text-gray-900">Medium</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Quantity</span>
          <span className="ml-auto text-gray-900">4</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">
            $58.00
          </span>
      <div className="flex ml-auto border-0 py-2 px-6">
        <Button>
           Book Now 
        </Button>
      </div>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div> */}
      </div>
      <div className="lg:w-1/2 relative w-full lg:h-auto h-64 object-cover object-center rounded">

      <Image
        alt="Doctor"
        fill={true}
        src="https://images.unsplash.com/photo-1605369473971-c5e417ac3220?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VyZ2VvbnxlbnwwfHwwfHx8MA%3D%3D"
      />
      </div>
    </div>
  </div>


        </div>
    );
}