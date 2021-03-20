import Link from 'next/link';
import {useState} from "react";

export default function Nav()
{
    // console.log(Router)
    let [navItems] = useState([
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'About',
            href: '/about'
        },
        {
            name: 'Services',
            href: '/services'
        },
        {
            name: 'Gallery',
            href: '/gallery'
        },
        {
            name: 'Contact us',
            href: '/contact-us'
        }
    ])
    // ${route === href ? 'rounded-md bg-blue-600 shadow-md text-white' : 'text-gray-500'}
    return (
       <div className="bg-gray-100 shadow-md fixed top-0 left-0 w-screen">
           <div className="">
            <nav className="md:px-24 px-5 py-4 flex md:flex-row flex-col md:justify-between">
                {/* <div className="h-20 w-20">
                    <img src="/images/img1.jpg" alt=""/>
                </div> */}
                <div className={'flex flex-row'}>
                    <img className="h-14 w-auto px-2 py-1" src="/images/img1.jpg" alt=""/>
                    <h5 className="text-3xl font-medium px-2 py-1">Trisenb Oil Services</h5>
                </div>
                <ul className="flex flex-row md:p-2 p-1">
                    {navItems.map(({name, href}, i) => {
                        return (
                            <Link href={href} key={i}>
                                <a className={`mr-1 px-2 py-1 text-gray-500 font-normal text-base hover:text-black`}>{name}</a>
                            </Link>
                        )
                    })}
                </ul>
            </nav>
            </div>
            <style jsx>{`
                .logo {
                    display: flex;
                    height: 74.5px;
                    width: 74.5px;
                    float: left;
                    padding: 1rem 1rem;
                    border-top-left-radius: 50%;
                    border-bottom-right-radius: 50%;
                    border-bottom-right-radius: 50%;
                }
            `}</style>
       </div>
    )
} 