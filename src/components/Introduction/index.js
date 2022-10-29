import './styles.css';
import Link from '../Link'

function Introduction(){
    return(
        <div>
            <h2>Hi, I'm Kaio. <br />I'm a begginer developer.</h2>
            <div className='description'>
                <p>I'm starting my development career. I am looking for individual and professional improvement. I count on your help, give me tips and advice. Thanks for being here!
I wish I could work with you, take a closer look and see my specialties and skills.</p>
            </div>
            <Link link="mainto:prandini.kaio@gmail.com" title="Work With Me"/>
        </div>
    )
}

export default Introduction;