import { useTranslations } from 'next-intl'

export const EducationInformation = () => {
    const t = useTranslations('Experience')

    return (
        <div id="experience">
            <h1 className="text-3x1 font-semibold mb6 flex gap-x-3 items-center text-black/80 dark:text-white/80">
                <svg
                    className="size-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    {/* Graduation Cap Icon */}
                    <path d="M7 8v-3l5-5l5 5v3"></path>
                    <path d="M6 8a6 3 0 0 1 12 0"></path>
                    <path d="M19 8v4"></path>
                </svg>                {t('workExperience')}
            </h1>
            <ol className="relative border-s border-gray-200 ml-3">
                {/* {
                    jobsExperience.map(job => (
                        <ExperienceTextFormat
                            key={job.id}
                            jobPosition={t(job.jobPosition)}
                            jobDescription={t(job.jobDescription)}
                            jobTime={t(job.jobTime)}
                            linkMoreInfo={job.urlMoreInfo}
                        />
                    ))
                } */}
            </ol>
        </div>
    )
}
