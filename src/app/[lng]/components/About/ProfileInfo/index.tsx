
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import ProfileImage from '../../../../../../public/images/profile-picture.jpg'
import ButtonSocialPill from '../ButtonSocialPill'

export const ProfileInfo: React.FC = () => {
    const t = useTranslations('Index')
    const startYear = 2020; 
    const currentYear: number = new Date().getFullYear();
    const yearsOfExperience = currentYear - startYear;

    return <div>
        <div className='mt-5 lg:mt-2'>
            <Image
                priority
                src={ProfileImage}
                alt='Banner Image Warner Hurtado'
                height={80}
                className='rounded-full'

            />
        </div>
        <div className='mt-2'>
            <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10"
            >
                {t('title')}
                <a
                    href="https://linkedin.com/in/warner-hurtado"
                    target="_blank"
                    rel="noopener"
                    className="flex justify-center items-center">
                    <span
                        className="text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-blue-600 text-white"
                    >
                        {t('available')}
                    </span>
                </a>
            </h1>
            <h2 className="text-xl lg:text-2xl text-balance max-w-[700px] " >
                <span>+{yearsOfExperience} {t('experience')}</span>
                <span className="text-yellow-800 dark:text-yellow-200">
                    {t('position')}
                </span>
                .
                <span className="text-red-800 dark:text-red-200">
                    {t('location')}
                </span>
                .
                <span className="text-sky-800 dark:text-sky-200" >
                    {t('specialization')}
                </span>
            </h2>
            <div className="flex gap-4 mt-8 flex-wrap">
                <ButtonSocialPill link={'https://linkedin.com/in/warner-hurtado'} text={'LinkedIn'} />
                <ButtonSocialPill link={'https://github.com/warnerHurtado'} text={'GitHub'} />
                <ButtonSocialPill link={'mailto:warnerhurtadolagu@gmail.com'} text={'warnerhurtadolagu@gmail.com'} />
            </div>
        </div>

    </div>
}
