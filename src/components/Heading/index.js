import styled from 'styled-components';

const StyledHeading = styled.div`
    .heading-container {
        text-align: center;
    }

    .heading {
        font-size: 28px;
        padding-bottom: 15px;
        display: inline-block;
        border-bottom: 5px solid rgba(0, 234, 255, 0.8);
    }
`;

function Heading(props){
    return(
        <StyledHeading>
            <div className='heading-container'>
                <h2 id={ props.id } className='heading'>{props.children}</h2>
            </div>
        </StyledHeading>
    )
}

export default Heading;