import { Metadata } from "next"

import { ExperienceInformation } from "../components/Experience/ExperienceInformation"

export const metadata: Metadata = {
    title: 'Warner - Experience',
    description: 'Warner has experience as Frontend Engineer and Fullstack Engineer along his career.',
    openGraph: {
        title: "Warner Hurtado - Experience",
        description: "Warner Hurtado has knowlege with cutting edge technology.",
        type: "website",
        url: "https://warner-hurtado-laguna.vercel.app/",
        siteName: "Warner Hurtado Laguna",
        images: [{
          url: "https://warner-hurtado-laguna.vercel.app/images/opengraphImage.jpg",
        }],
      }
  }

const Experience: React.FC = () => {
    return (
        <ExperienceInformation />
    )

}

export default Experience
