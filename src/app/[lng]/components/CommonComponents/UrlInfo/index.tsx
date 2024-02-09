import { url } from "inspector"

type UrlInfoPropType = {
    label: string
    url: string
}

export const UrlInfo: React.FC<UrlInfoPropType> = ({ url, label }) => {
    return (
        <a
            href={url}
            target="_blank"
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
            {label}
            <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9">
                </path>
            </svg>
        </a>
    )
}
