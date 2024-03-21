import { Metadata } from "next"

import { ExperienceInformation } from "../components/Experience/ExperienceInformation"

export const metadata: Metadata = {
    title: 'Warner - Experience',
    description: 'Warner has experience as Frontend Engineer and Fullstack Engineer along his career.',
  }

const Experience: React.FC = () => {
    return (
        <ExperienceInformation />
    )

}

export default Experience
