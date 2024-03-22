import { Metadata } from "next"

import { EducationInformation } from "../components/Education/EducationInformation"

export const metadata: Metadata = {
  title: 'Warner - Education',
  description: 'Warner has a bachelor of Software Engineer, also he has some courses from Udemy related with Frontend and Backend.',
  openGraph: {
    title: "Warner Hurtado - Education",
    description: "Warner has diferents titles where he learns about difExplore my educational background and academic training in my portfolio. Learn more about my degrees, educational institutions attended and outstanding achievements in areas such as frontend and backend.",
    type: "website",
    url: "https://warner-hurtado-laguna.vercel.app/",
    siteName: "Warner Hurtado Laguna",
    images: [{
      url: "https://warner-hurtado-laguna.vercel.app/images/opengraphImage.jpg",
    }],
  }
}

const Education: React.FC = () => {
  return (
    <>
        <EducationInformation />
    </>
  )
}

export default Education
