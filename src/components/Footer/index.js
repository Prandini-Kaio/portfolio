import './styles.css';
import Link from '../Link';
import Heading from '../Heading';

function Footer(){
    return(
        <footer className='footer'>
            <Heading>Reach me out!</Heading>
            <div className='link-container'>
                <Link
                className='link'
                link='mailto:prandini.kaio@gmail.com'
                title='Email' 
                />

                <Link
                className='link'
                link='https://github.com/prandini-kaio'
                title='GitHub'
                />

                <Link
                className='link'
                link='linkedin.com/prandini-kaio'
                title='LinkedIn' 
                />

                <Link
                className='link'
                link='#'
                title='WhatsApp' 
                />
            </div>
        </footer>
    )
}

export default Footer;