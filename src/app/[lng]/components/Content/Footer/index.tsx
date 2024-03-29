import { useTranslations } from 'next-intl'

export const Footer: React.FC = () => {
    const t = useTranslations('Footer')

    return (
        <footer className="dark:bg-slate-700 dark:text-white bg-slate-200">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm sm:text-center text-yellow-800 dark:text-yellow-200">© {`${new Date().getFullYear()} `}
                <a href="#" className="hover:underline">
                        Warner Hurtado
                </a>.
                    {t('rights')}
                </span> 
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"> 
                    <li> 
                        <a href="#" className="hover:underline me-4 md:me-6" >
                            {t('aboutMe')}
                        </a> 
                    </li> 
                    <li> 
                        <a href="https://www.linkedin.com/in/warner-hurtado/" target="_blank" className="hover:underline" >
                            {t('contact')}
                        </a> 
                    </li> 
                </ul> 
            </div>
        </footer>
    );
};
