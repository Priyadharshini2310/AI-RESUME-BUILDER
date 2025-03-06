import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='p-3 px-5 flex justify-between items-center shadow-md fixed w-full h-24 backdrop-blur-xl'>
            <div className='flex flex-row '>
                <div className='mt-6'><Link to={'/dashboard'}>
            <img src='/logo.png' className='hover:scale-110 duration-200 transition:ease-in-out' width={100} height={100} />
            </Link></div>
            <div><img src='/cosmo.png' className='scale-110 duration-200 transition:ease-in-out' width={150} height={70} /></div>
            
            </div>
             
            {isSignedIn ?
                <div className='flex gap-2 items-center'>
                    <Link to={'/dashboard'}>
                        <Button className="bg-blue-500 text-white hover:bg-white hover:text-blue-500" variant="outline">Dashboard</Button>
                    </Link>
                    <UserButton />
                </div> :
                <Link to={'/auth/sign-in'}>
                    <Button className="bg-blue-500 hover:bg-blue-400">Login/Signup</Button>
                </Link>
            }

        </div>
    )
}

export default Header
