'use client'

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ThemeSwicher } from "../ThemeSwicher";
import { LanguageSwicher } from "../LanguageSwicher";
import VercelIcon from "../../../../../../public/icons/favicon.svg";

import { Sidebar } from "./Sidebar";

type LinkType = {
    id: string;
    url: string;
    label: string;
    icon: string;
};

type LayoutProps = {
    lng: string
    linksList: LinkType[]
}

export const Header: React.FC<LayoutProps> = ({ lng, linksList = [] }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const pathname = usePathname() || "";

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setIsDrawerOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="dark:bg-slate-700 dark:text-white bg-slate-200">
            <div className="flex items-center justify-between w-full">
                <div className="nav-left-container">
                    <Image
                        src={VercelIcon}
                        width={80}
                        alt="Warner Hurtado Icon"
                        priority
                    />
                    <div  >
                        <Link href={`/${lng}`}>
                            <label className="block sm:hidden">Warner</label>
                            <label className="hidden sm:block">Warner Hurtado Laguna</label>
                        </Link>
                    </div>
                </div>
                <div className="w-full hidden lg:block">
                    <ul className="flex items-center justify-between">
                        {

                            linksList.map(link => (
                                <li className={`${pathname.includes(link.url)
                                    ? 'border-b-2 border-black dark:border-white'
                                    : 'hover:border-b-2 border-yellow-800 dark:border-yellow-200'}`}
                                    key={link.id}
                                >
                                    <Link href={`/${lng}/${link.url}`}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="nav-right-container">
                    <div className="hidden lg:block">
                        <LanguageSwicher lng={lng} />
                    </div>
                    <div className="hidden lg:block">
                        <ThemeSwicher />
                    </div>
                    <div ref={sidebarRef}>
                        <Sidebar
                            isDrawerOpen={isDrawerOpen}
                            toggleDrawer={toggleDrawer}
                            linksList={linksList}
                            lng={lng}
                            pathname={pathname}
                        />
                    </div>
                    <div className="text-center block lg:hidden">
                        <button
                            className=" text-white focus:ring-4 focus:ring-white-300 rounded-lg   px-2 py-1 focus:outline-none dark:focus:ring-white-800"
                            type="button"
                            onClick={toggleDrawer} >
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14">
                                <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"></path>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
};
