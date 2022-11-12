import Link from '../Link';
import styled from 'styled-components';

import { SiReact } from "react-icons/si";
import { AiFillHtml5 as HTML } from "react-icons/ai";
import { DiCss3 as CSS, DiGit, DiGithubAlt } from "react-icons/di";
import { IoLogoJavascript as JS } from "react-icons/io";
import { SiC as C } from "react-icons/si";

const StyledCard = styled.article`
    .card-content {
        padding: 20px 25px 30px;
        background-color: #131219;
        border-radius: 4px;
        border: 2px solid #17161d;

        transition: all 0.5s;
    }

    .card-content:hover {
        border-color: rgba(0, 234, 255, 0.8);
        transform: translateY(-15px) translateX(15px);
    }

    .card-title {
        font-size: 20px;
    }

    .card-description {
        margin-top: 15px;
        font-size: 16px;
        word-wrap: break-word;
        font-weight: 500;
        line-height: 28px;
        color: #c9c9c9;
    }

    .description {
        font-size: 16px;
        color: #c9c9c9;
        line-height: 20px;
        max-width: 500px;
        margin: 20px 0 40px;
    }
`;

function ProjectCard(props) {
    return (
        <StyledCard>
            <article className='card-content'>
                <div className='description'>
                    <h3 className='card-title'>{props.title}</h3>
                    <p className='card-description'>{props.children}</p>
                </div>
                <Link title={props.titlelink} link={props.link} />
            </article>
        </StyledCard>
    )
}

export default ProjectCard;