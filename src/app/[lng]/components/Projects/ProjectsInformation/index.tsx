import { projectsList } from '@/config/constants/projects'
import { useTranslations } from 'next-intl'
import React from 'react'
import { ProjectsTextFormat } from '../ProjectsTextFormat'

export const ProjectsInformation = () => {
    const t = useTranslations('Projects')

    return (
        <div id='projects'>
            <h1 className="text-3x1 font-semibold mb6 flex gap-x-3 items-center text-black/80 dark:text-white/80">
            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" ></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>
                {t('projects')}
            </h1>
            <ol className="relative border-s border-gray-200 ml-3">
                {
                    projectsList.map(project => (
                        <ProjectsTextFormat
                            key={project.id}
                            {...project}
                        />
                    ))
                }
            </ol>
        </div>
    )
}
