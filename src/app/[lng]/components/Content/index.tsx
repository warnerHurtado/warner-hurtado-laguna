import { useTranslations } from "next-intl";

import { Footer } from "./Footer";
import { Header } from "./Header";



type ContentBaseProps = {
  children?: React.ReactNode
  lng: string
};

export const ContentBase: React.FC<ContentBaseProps> = ({ children, lng }) => {
  const t = useTranslations('Header')

  const linksList = [
    { id: '0', url: 'experience', label: t('experience'), icon: 'ExperienceIcon' },
    { id: '1', url: 'projects', label: t('projects'), icon: 'ProjectIcon' },
    { id: '2', url: 'education', label: t('education'), icon: 'EducationIcon' },
    { id: '3', url: 'about', label: t('about'), icon: 'InfoIcon' },
  ]

  return (
    <>
      <Header lng={lng} linksList={linksList} />
      <div className="main-container">{children}</div>
      <Footer />
    </>
  );
};
