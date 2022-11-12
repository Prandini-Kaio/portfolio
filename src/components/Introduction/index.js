import styled from 'styled-components';
import Link from '../Link'


const StyledIntroduction = styled.div`
    .description {
        font-size: 16px;
        color: #c9c9c9;
        line-height: 20px;
        max-width: 500px;
        margin: 20px 0 40px;
    }
`;

function Introduction() {
    return (
        <StyledIntroduction>
            <h2>Hi, I'm Kaio. <br />I'm a begginer developer.</h2>
            <div className='description'>
                <p>I'm starting my development career. I am looking for individual and professional improvement. I count on your help, give me tips and advice. Thanks for being here!
                    I wish I could work with you, take a closer look and see my specialties and skills.</p>
            </div>
            <Link link="mainto:prandini.kaio@gmail.com" title="Work With Me" />
        </StyledIntroduction>
    )
}

export default Introduction;