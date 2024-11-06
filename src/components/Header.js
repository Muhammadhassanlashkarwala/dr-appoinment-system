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
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
</div>
       </div>
    )
}