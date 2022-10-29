import Link from '../Link';
import './styles.css';

import { SiReact } from "react-icons/si";
import { AiFillHtml5 as HTML } from "react-icons/ai";
import { DiCss3 as CSS, DiGit, DiGithubAlt } from "react-icons/di";
import { IoLogoJavascript as JS } from "react-icons/io";
import { SiC as C } from "react-icons/si";

function ProjectCard(props){
    return(
        <article className='card-content'>
            <div className='description'>
                <h3 className='card-title'>{props.title}</h3>
                <p className='card-description'>{props.children}</p>
            </div>
            <Link title={props.titlelink} link={props.link}/>
        </article>
    )
}

export default ProjectCard;