import { useTranslations } from 'next-intl'
import React from 'react'

type ExperienceTextFormatProps = {
    jobTime: string
    jobPosition: string
    jobDescription: string
    linkMoreInfo?: string
}

export const ExperienceTextFormat: React.FC<ExperienceTextFormatProps> = ({
    jobTime, jobPosition, jobDescription, linkMoreInfo
}) => {
    const t = useTranslations('commonKeys')

    return (
        <li className="mb-10 ms-4" >
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80" >
                {jobTime}
            </time>
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mt-2">
                {jobPosition}
            </h3>
            <p className="mb-4 text-base font-normal  dark:text-gray-200 text-pretty">
                {jobDescription}
            </p>
            {
                linkMoreInfo && (
                    <a
                        href={linkMoreInfo}
                        className="
                        bg-white/5 
                        rounded-full
                        border dark:border-white/10 border-gray-300
                        py-1 px-2 md:py-2 md:px-4
                        inline-flex justify-center items-center gap-x-2
                        text-xs md:text-base
                        transition
                        hover:scale-110 hover:bg-white/10"
                    >
                        {
                            t('knowMore')
                        }
                        <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9">
                            </path>
                        </svg>
                    </a>)
            }
        </li>
    )
}
