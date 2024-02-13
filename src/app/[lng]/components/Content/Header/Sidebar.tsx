import Link from 'next/link';
import React, { MouseEventHandler } from 'react'

import {
    ExperienceIcon, ProjectIcon,
    EducationIcon,
    InfoIcon,
} from '../../SvgIcons';

import { ThemeSwicher } from '../ThemeSwicher';
import { LanguageSwicher } from '../LanguageSwicher';

type LinkType = {
    id: string;
    url: string;
    label: string;
    icon: string;
};

type SidebarPropTypes = {
    isDrawerOpen: boolean;
    toggleDrawer: MouseEventHandler;
    linksList: LinkType[];
    pathname: string;
    lng: string;
}

const sidebarIcons = {
    ExperienceIcon,
    ProjectIcon,
    EducationIcon,
    InfoIcon
}

export const Sidebar: React.FC<SidebarPropTypes> = ({
    isDrawerOpen,
    toggleDrawer,
    linksList,
    pathname,
    lng
}) => {
    return (
        <div>
            <div
                id="drawer-navigation"
                className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? '' : '-translate-x-full'} bg-slate-300 dark:bg-gray-800`}
                tabIndex={-1}
                aria-labelledby="drawer-navigation-label"
            >
                <div className="flex items-center">
                    <LanguageSwicher lng={lng} />
                    <ThemeSwicher />
                </div>   
                <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={toggleDrawer}>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        {
                            linksList.map(link => {
                                const UrlIcon = sidebarIcons[link.icon as keyof typeof sidebarIcons]

                                return (
                                    <li key={link.id}>
                                        <Link
                                            href={`/${lng}/${link.url}`}
                                            className={`${pathname.includes(link.url) ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700'} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
                                            <UrlIcon />
                                            <span className="flex-1 ms-3 whitespace-nowrap">{link.label}</span>
                                        </Link>
                                    </li>
                                )
                            }
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
