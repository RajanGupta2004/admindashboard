import React from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { CreditCard, Folder, LayoutDashboard, Newspaper, Settings, User } from 'lucide-react'
import Link from 'next/link'


const Sidebar = () => {
    return (
        <>
            <Command className='bg-slate-300 rounded-none'>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>
                            <LayoutDashboard className='mr-2 h-4 w-4' />
                            <Link href="/">Dashboard</Link>
                        </CommandItem>
                        <CommandItem>
                            <Newspaper className='mr-2 h-4 w-4' />
                            <Link href="/posts">Posts</Link>
                        </CommandItem>
                        <CommandItem>
                            <Folder className='mr-2 h-4 w-4' />
                            <Link href="/category">Category</Link>
                        </CommandItem>

                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem>
                            <User className='mr-2 h-4 w-4' />
                            <span>Profile</span>
                            <CommandShortcut>#P</CommandShortcut>
                        </CommandItem>

                        <CommandItem>
                            <CreditCard className='mr-2 h-4 w-4' />
                            <span>Billing</span>
                            <CommandShortcut>#B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <Settings className='mr-2 h-4 w-4' />
                            <span>Setting</span>
                            <CommandShortcut>#S</CommandShortcut>
                        </CommandItem>

                    </CommandGroup>
                </CommandList>
            </Command>

        </>
    )
}

export default Sidebar
