import React from 'react'

export const DatesInfo: React.FC<{ dateInfo: string }> = ({ dateInfo }) => {
    return (
        <>            
            <time className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80" >
                {dateInfo}
            </time>
        </>
    )
}
