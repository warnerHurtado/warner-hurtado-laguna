import { useTranslations } from 'next-intl'

import { coursesAndCertifications, educationTitles } from '@/config/constants/education'
import { DescriptionInfo } from '../../CommonComponents/DescriptionInfo'

export const EducationInformation = () => {
    const t = useTranslations('Education')

    return (
        <div id="education">
            <h1 className="text-3x1 font-semibold mb6 flex gap-x-3 items-center text-black/80 dark:text-white/80">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon"
                    style={{ width: "2em", height: "2em", verticalAlign: "middle", fill: "currentColor", overflow: "hidden" }}
                    viewBox="0 0 1024 1024"
                    version="1.1">
                    <path d="M895.1808 395.3664L521.728 194.8672c-6.0416-3.2768-13.312-3.2768-19.3536 0L128.8192 395.3664c-14.2336 7.68-14.4384 27.9552-0.3072 35.9424L264.192 507.5968v194.4576c0 7.8848 4.608 15.1552 11.6736 18.5344l230.1952 109.056c5.632 2.6624 12.0832 2.6624 17.7152-0.1024l224.4608-108.8512c7.0656-3.3792 11.5712-10.5472 11.5712-18.432V507.5968l73.9328-41.5744v310.6816c0 11.264 9.216 20.48 20.48 20.48s20.48-9.216 20.48-20.48V442.9824l20.7872-11.6736c14.1312-7.9872 13.9264-28.2624-0.3072-35.9424zM718.848 686.1824L514.8672 790.3232 305.152 685.9776V530.6368l196.8128 110.592c6.2464 3.4816 13.824 3.4816 20.0704 0l196.8128-110.592v155.5456z m-206.848-86.3232L181.0432 413.7984 512 236.1344l330.9568 177.664L512 599.8592z" />
                </svg>
                {t('education')}
            </h1>
            <ol className="relative border-s border-gray-200 ml-3">
                {
                    educationTitles.map(degree => (
                        <DescriptionInfo
                            key={degree.id}
                            date={t(degree.date)}
                            title={t(degree.title)}
                            description={t(degree.institution)}
                        />
                    ))
                }
            </ol>
            <h1 className="text-3x1 font-semibold mb6 flex gap-x-3 items-center text-black/80 dark:text-white/80">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon"
                    style={{ width: "2em", height: "2em", verticalAlign: "middle", fill: "currentColor", overflow: "hidden" }}
                    viewBox="0 0 1024 1024"
                    version="1.1">
                    <path d="M895.1808 395.3664L521.728 194.8672c-6.0416-3.2768-13.312-3.2768-19.3536 0L128.8192 395.3664c-14.2336 7.68-14.4384 27.9552-0.3072 35.9424L264.192 507.5968v194.4576c0 7.8848 4.608 15.1552 11.6736 18.5344l230.1952 109.056c5.632 2.6624 12.0832 2.6624 17.7152-0.1024l224.4608-108.8512c7.0656-3.3792 11.5712-10.5472 11.5712-18.432V507.5968l73.9328-41.5744v310.6816c0 11.264 9.216 20.48 20.48 20.48s20.48-9.216 20.48-20.48V442.9824l20.7872-11.6736c14.1312-7.9872 13.9264-28.2624-0.3072-35.9424zM718.848 686.1824L514.8672 790.3232 305.152 685.9776V530.6368l196.8128 110.592c6.2464 3.4816 13.824 3.4816 20.0704 0l196.8128-110.592v155.5456z m-206.848-86.3232L181.0432 413.7984 512 236.1344l330.9568 177.664L512 599.8592z" />
                </svg>
                {t('courses')}
            </h1>
            <ol className="relative border-s border-gray-200 ml-3">
                {
                    coursesAndCertifications.map(course => (
                        <DescriptionInfo
                            key={course.id}
                            title={t(course.title)}
                            description={t('courseInstitution1')}
                            url={course.url}
                            urlLabel={t('knowMore')}
                        />
                    ))
                }
            </ol>
        </div>
    )
}
