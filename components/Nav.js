import { useRouter } from "next/dist/client/router"
import requests from "../utils/requests"
function Nav() {
    const router = useRouter()
    return (
        <nav className='relative'>
            <div className='flex px-10 py-2 sm:px-20 text-2xl space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide overflow-y-hidden'>
                {Object.entries(requests).map(([key, {title, url}]) => (
                    <h2  onClick={() => router.push(`/?genre=${key}`)} key={key} className=' last:pr-4 px-3 cursor-pointer whitespace-nowrap transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 select-none'>{title}</h2>
                ))}
            </div>

            <div className='absolute top-0 right-0 bg-gradient-to-l from-trans h-10 w-1/12'>
            </div>
            <div className='absolute top-0 left-0 bg-gradient-to-r from-trans h-10 w-1/12'>
            </div>
        </nav>
    )
}

export default Nav
