import { useTranslations } from 'next-intl'
import { ExperienceTextFormat } from '../ExperienceTextFormat'
import { jobsExperience } from '@/config/constants/experience'

export const ExperienceInformation: React.FC = () => {
    const t = useTranslations('Experience')

    return (
        <div id="experience">
            <h1 className="text-3x1 font-semibold mb6 flex gap-x-3 items-center text-black/80 dark:text-white/80">
                <svg className="size-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" ></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>
                {t('workExperience')}
            </h1>
            <ol className="relative border-s border-gray-200 ml-3">
                {
                    jobsExperience.map(job => (
                        <ExperienceTextFormat
                            key={job.id}
                            jobPosition={t(job.jobPosition)}
                            jobDescription={t(job.jobDescription)}
                            jobTime={t(job.jobTime)}
                            linkMoreInfo={job.urlMoreInfo}
                        />
                    ))
                }
            </ol>
        </div>
    )
}
