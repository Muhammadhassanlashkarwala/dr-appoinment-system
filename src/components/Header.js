import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  import Link from "next/link";
export const Header =() => {
    return(
       <div className="container bg-secondary py-3 px-10 flex justify-between mx-auto">
         <h1 className="px-20 font-semibold font-mono text-2xl">Dr.Appoinment</h1>
      <div className="px-20">
         <Menubar>
  <MenubarMenu>
    <MenubarTrigger className={'border-none bg-transparent'}>
      <Avatar>
      <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>Not upload an image</AvatarFallback>
</Avatar>
      </Avatar>
    </MenubarTrigger>
    <MenubarContent>
      <Link href={'/profile'}>
      <MenubarItem>Profile</MenubarItem> 
      </Link>
      <MenubarSeparator />
     <Link href={'/appointments'}>
     <MenubarItem>My Appointment</MenubarItem>
     </Link>
      <MenubarSeparator />
      <MenubarItem>Logout</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
</div>
       </div>
    )
}