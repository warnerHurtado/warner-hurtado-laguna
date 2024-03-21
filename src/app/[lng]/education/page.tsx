import { Metadata } from "next"

import { EducationInformation } from "../components/Education/EducationInformation"

export const metadata: Metadata = {
  title: 'Warner - Education',
  description: 'Warner has a bachelor of Software Engineer, also he has some courses from Udemy related with Frontend and Backend.',
}

const Education: React.FC = () => {
  return (
    <>
        <EducationInformation />
    </>
  )
}

export default Education
