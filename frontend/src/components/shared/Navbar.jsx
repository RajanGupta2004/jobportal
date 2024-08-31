import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { LogOut, UserRound } from 'lucide-react'
import { Button } from '../ui/button'


const Navbar = () => {

    const user = false
    return (
        <div className='flex items-center justify-between mx-auto px-4 md:px-20  h-14 max-w-8xl'>
            <div>

                <h1 className='text-2xl font-bold'>Job <span className='text-red-700'>Portal</span></h1>
            </div>
            <div className='flex items-center gap-10'>

                <ul className='flex items-center gap-4'>
                    <li className='uppercase font-bold text-gray-900 cursor-pointer'>home</li>
                    <li className='uppercase font-bold text-gray-900 cursor-pointer'>Job</li>
                    <li className='uppercase font-bold text-gray-900 cursor-pointer'>Brows</li>
                </ul>

                {
                    !user ? (
                        <div className='flex items-center gap-2'>
                            <Button variant="outline">Login</Button>
                            <Button className='bg-purple-700 hover:bg-purple-800' >Signup</Button>
                        </div>

                    ) : (
                        <Popover>
                            <PopoverTrigger>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent>
                                <div className='flex items-center gap-3'>
                                    <UserRound />
                                    <h3 className='cursor-pointer hover:underline'>Profile</h3>
                                </div>
                                <div className='flex items-center gap-3 mt-2'>
                                    <LogOut />
                                    <h3 className='cursor-pointer hover:underline'>Logout</h3>
                                </div>

                            </PopoverContent>
                        </Popover>
                    )
                }




            </div>

        </div>
    )
}

export default Navbar