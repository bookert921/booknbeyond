import React from 'react';
import { ProjectsContainer, ProjectCardLink, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP, GitHubLink } from './ProjectsElements';

const Projects = () => {
    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsH1>Projects</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectCardLink target="_blank" href="https://github.com/fostimus/better-boothang" aria-label="twillio messaging app">
                        <ProjectsCard>
                            <ProjectsIcon src="/Welcome.png" />
                            <ProjectsH2>Better Boothang</ProjectsH2>
                            <ProjectsP>Automate those special, but forgetful, occations with this NodeJS app using Twillio messaging services.</ProjectsP>
                        </ProjectsCard>
                    </ProjectCardLink>
                    <ProjectCardLink target="_blank" href="https://github.com/enbre/goal-getter-frontend" aria-label="goal app">
                        <ProjectsCard>
                            <ProjectsIcon src="screenshot1.png" />
                            <ProjectsH2>Goal Getter!</ProjectsH2>
                            <ProjectsP>A simple ReactJS/ExpressJS todo app that breaks goals down into smaller tasks. Users create profiles under Passport Authentication.</ProjectsP>
                        </ProjectsCard>
                    </ProjectCardLink>
                    <ProjectCardLink target="_blank" href="https://github.com/bookert921/next-reason-app" aria-label="blog">
                        <ProjectsCard>
                            <ProjectsIcon src="/Home.png" />
                            <ProjectsH2>BookNBeyond Blog</ProjectsH2>
                            <ProjectsP>A starter blog using NextJS and markdown blog posts aimed at inspiring new develpers.</ProjectsP>
                        </ProjectsCard>
                    </ProjectCardLink>
                </ProjectsWrapper>
                <ProjectsP style={{ color: 'white', marginTop: '50px' }}>Additional projects can be found on my github: <GitHubLink target="_blank" href="https://github.com/bookert921/" aria-label="github">https://github.com/bookert921/</GitHubLink>.</ProjectsP>
            </ProjectsContainer>
        </>
    )
}

export default Projects