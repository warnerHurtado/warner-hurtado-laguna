'use client'

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { LanguageSwicher } from "../LanguageSwicher";
import { ThemeSwicher } from "../ThemeSwicher";
import VercelIcon from "../../../../../../public/icons/favicon.svg";

type LinkType = {
    id: string;
    url: string;
    label: string;
};

type LayoutProps = {
    lng: string
    linksList: LinkType[]
}

export const Header: React.FC<LayoutProps> = ({ lng, linksList = [] }) => {
    const pathname = usePathname() || "";

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
                    <div >
                        <Link href={`/${lng}`}>Warner Hurtado Laguna</Link>
                    </div>
                </div>
                <div className="w-full">
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
                    <LanguageSwicher lng={lng} />
                    <ThemeSwicher />
                </div>
            </div>
        </nav>
    );
};
