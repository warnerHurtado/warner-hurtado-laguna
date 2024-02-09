import { DatesInfo } from '../DatesInfo'
import { UrlInfo } from '../UrlInfo'

type DescriptionInfoPropType = {
    title: string,
    description: string
    date?: string
    url?: string
    urlLabel?: string
}

export const DescriptionInfo: React.FC<DescriptionInfoPropType> = ({ title, description, date = '', url, urlLabel = '' }) => {
    return (
        <li className="mb-10 ms-4" >
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700" />
            <DatesInfo dateInfo={date} />
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mt-2">
                {title}
            </h3>
            <p className="mb-4 text-base font-normal  dark:text-gray-200 text-pretty">
                {description}
            </p>
            {
                url && <UrlInfo url={url} label={urlLabel} />
            }
        </li>
    )
}
