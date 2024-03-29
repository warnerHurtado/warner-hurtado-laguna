import { Metadata } from "next"
import { ProjectsInformation } from "../components/Projects/ProjectsInformation"

export const metadata: Metadata = {
  title: 'Warner - Projects',
  description: 'Warner has worked on different projects as a Frontend and Fullstack Engineer, successfully completing them.',
  openGraph: {
    title: "Warner Hurtado - Projects",
    description: "Projects where Warner has been working on.",
    type: "website",
    url: "https://warner-hurtado-laguna.vercel.app/",
    siteName: "Warner Hurtado Laguna",
    images: [{
      url: "https://warner-hurtado-laguna.vercel.app/images/opengraphImage.jpg",
    }],
  }
}

const Projects: React.FC = () => {
  return (
    <ProjectsInformation />
  )
}

export default Projects
