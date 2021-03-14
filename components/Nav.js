import Link from 'next/link';
import {useState} from "react";

export default function Nav()
{
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
            name: 'Contact us',
            href: '/contact-us'
        }
    ])
    return (
       <div className="container mx-auto bg-gray-100 shadow-md fixed top-0 left-0 w-full">
            <nav className="md:px-24 px-5 py-4 flex md:flex-row flex-col md:justify-between">
                <div>
                    <h5 className="text-2xl text-normal">Trisenb Oil Services</h5>
                </div>
                <ul className="flex flex-row md:p-2 p-1">
                    {navItems.map(({name, href}, i) => {
                        return (
                            <Link href={href} key={i}>
                                <a className="mr-5 text-gray-500 font-normal text-base hover:text-black">{name}</a>
                            </Link>
                        )
                    })}
                </ul>
            </nav>
       </div>
    )
} 