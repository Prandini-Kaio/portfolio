import Menu from './components/Menu';
import Introduction from './components/Introduction';
import Heading from './components/Heading';
import ProjectCard from './components/ProjectCard';
import Skill from './components/Skill';
import Footer from './components/Footer';

import { SiCplusplus, SiCsharp, SiReact } from "react-icons/si";
import { AiFillHtml5 as HTML } from "react-icons/ai";
import { DiCss3 as CSS, DiJava } from "react-icons/di";
import { IoLogoJavascript as JS } from "react-icons/io";
import { SiC as C } from "react-icons/si";
import styled from 'styled-components';
import logo from './images/dart.png';

const StyledApp = styled.main`
  .section {
  padding: 90px 20px 120px;
}

  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    column-gap: 15px;
    row-gap: 20px;
    padding-top: 70px;
  }

  .skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    column-gap: 30px;
    row-gap: 20px;
    padding-top: 70px;
  }

  .introduction{
    display: inline-block;
  }

  .perfil-image{
    display: inline-block;
    padding: 1px;
    float: right;
    background-color: #131219;
    border-radius: 4px;
    border: 2px solid #131219;
    transition: all 0.3s;
  }

  .perfil-image:hover{
    border: 2px solid #00EFFF;
    background-color: #17161d;
  }

  .perfil-image img{
    border-radius: 4px;
    border: 1px solid;
    border-color: white;
    transform: translateY(0) translateX(0);
    transition: all 0.3s;
  }

  .perfil-image img:hover{
    /*border: 2px solid rgba(0, 234, 255, 0.8);*/
    transform: translateY(-15px) translateX(15px);
  }

`;


function App() {
  return (
    <StyledApp>
      <header className="light-bg">
        <div className='container'>
          <Menu />
        </div>
      </header>

      <section className="container section">
        <div className='introduction'>
          <Introduction />
        </div>
        <div className='perfil-image shadow-pop-bl'>
          <img src={logo} width={300} height={300} />
        </div>
      </section>

      <section className='section light-bg'>
        <Heading id='projects'>Projects</Heading>
        <div className='container projects-container'>
          <ProjectCard title='FEELING' titlelink='Conheça' link='#skills'>Este projeto está em construção a algum tempo. Eu junto de meus amigos, começamos a construção de Feeling como um hoobie e continua assim
            até hoje. Gostamos de não deixar como uma responsabilidade tão profunda, por mais que todos nós temos atribuições e deveres dentro do projeto. Gostariamos de prosseguir
            com ele e um dia conseguir lançar.</ProjectCard>
          <ProjectCard title='PORTFOLIO' titlelink='Conheça' link='#skills' />
        </div>
      </section>

      <section className='section light-bg'>
        <Heading id='skills'>Skills</Heading>
        <div className="container skills-container">
          <Skill title="React">
            <SiReact size={70} color="#00eaff" />
          </Skill>
          <Skill title="C#">
            <SiCsharp size={70} color="#00eaff" />
          </Skill>
          <Skill title="Java">
            <DiJava size={70} color="#00eaff" />
          </Skill>
          <Skill title="Javascript">
            <JS size={70} color="#00eaff" />
          </Skill>
          <Skill title="C">
            <C size={70} color="#00eaff" />
          </Skill>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <Footer />
        </div>
      </section>

    </StyledApp>
  );
}

export default App;
