import Link from '../Link';
import Heading from '../Heading';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    .footer {
        text-align: center;
    }

    .link-container {
        display: grid;
        row-gap: 20px;
        column-gap: 15px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        margin-top: 50px;
    }

    .link {
        margin: 15px 20px 15px 0;
    }
`;

function Footer(){
    return(
        <StyledFooter>
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
                    link='https://www.linkedin.com/in/prandini-kaio/'
                    title='LinkedIn' 
                    />

                    <Link
                    className='link'
                    link='https://api.whatsapp.com/send?phone=5535988847827'
                    title='WhatsApp' 
                    />
                </div>
            </footer>
        </StyledFooter>
    )
}

export default Footer;