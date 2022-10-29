import Menu from './components/Menu';
import Introduction from './components/Introduction';
import Heading from './components/Heading';
import ProjectCard from './components/ProjectCard';
import Skill from './components/Skill';
import Footer from './components/Footer';

import { SiReact } from "react-icons/si";
import { AiFillHtml5 as HTML } from "react-icons/ai";
import { DiCss3 as CSS } from "react-icons/di";
import { IoLogoJavascript as JS } from "react-icons/io";
import { SiC as C } from "react-icons/si";

import './App.css';
import logo from './dart.png'

function App() {
  return (
    <main>
      <header className="light-bg">
        <div className='container'>
          <Menu />
        </div>
      </header>

      <section className="container section">
        <div className='introduction'>
          <Introduction/>
        </div>
        <div className='perfil-image'>
          <img src={logo} width={300} height={300}/>
        </div>
      </section>

      <section className='section light-bg'>
        <Heading id='projects'>Projects</Heading>
        <div className='container projects-container'>
          <ProjectCard title='FEELING' titlelink='Conheça' link='#skills'>Este projeto está em construção a algum tempo. Eu junto de meus amigos, começamos a construção de Feeling como um hoobie e continua assim
          até hoje. Gostamos de não deixar como uma responsabilidade tão profunda, por mais que todos nós temos atribuições e deveres dentro do projeto. Gostariamos de prosseguir
          com ele e um dia conseguir lançar.</ProjectCard>
          <ProjectCard title='PORTFOLIO' titlelink='Conheça' link='#skills'/>
        </div>
      </section>

      <section className='section light-bg'>
        <Heading id='skills'>Skills</Heading>
        <div className="container skills-container">
          <Skill title="React">
            <SiReact size={70} color="#00eaff" />
          </Skill>
          <Skill title="Html">
            <HTML size={70} color="#00eaff" />
          </Skill>
          <Skill title="Css">
            <CSS size={70} color="#00eaff" />
          </Skill>
          <Skill title="Js">
            <JS size={70} color="#00eaff" />
          </Skill>
          <Skill title="C">
            <C size={70} color="#00eaff" />
          </Skill>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <Footer/>
        </div>
      </section>
      
    </main>
  );
}

export default App;
