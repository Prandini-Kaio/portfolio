import styled from "styled-components";

const StyledLogo = styled.div`
    .logo{
        font-weight: 700px;
        font-size: 24px;
    }
`;

function Logo(){
    return(
        <StyledLogo>
            <h1 className='logo'>KAIO</h1>
        </StyledLogo>
    )
}

export default Logo;