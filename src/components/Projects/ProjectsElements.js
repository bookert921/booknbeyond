import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 1100px){
        height: 990px;
    }

    @media screen and (max-width: 768px){
        height: 1300px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const ProjectsWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    
    @media screen and (max-width: 1100px){
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ProjectsIcon = styled.img`
    height: 200px;
    width: 300px;
    margin-bottom: 10px;

    @media screen and (max-width: 400px){
        height: 125px;
        width: 200px;
    }
`

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    ${'' /* color: #000; */}
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ProjectsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align: center;
`
export const ProjectCardLink = styled.a`
    text-decoration: none;
    color: #010101;
`

export const GitHubLink = styled.a`
    color: #fff;
    text-decoration: none;
    
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`