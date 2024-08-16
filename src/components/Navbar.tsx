import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-4 py-2 bg-slate-700 text-white'>
            <h2>Logo</h2>
            <div className='cursor-pointer'>

                <DropdownMenu>
                    <DropdownMenuTrigger className='focus:outline-none'>
                        <Avatar className='focus:outline-none'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>



        </div>
    )
}

export default Navbar
