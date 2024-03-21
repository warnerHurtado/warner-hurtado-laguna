import { Metadata } from "next"
import { ProjectsInformation } from "../components/Projects/ProjectsInformation"

export const metadata: Metadata = {
  title: 'Warner - Projects',
  description: 'Warner has worked on different projects as a Frontend and Fullstack Engineer, successfully completing them.',
}

const Projects: React.FC = () => {
  return (
    <ProjectsInformation />
  )
}

export default Projects
