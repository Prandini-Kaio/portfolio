import styled from "styled-components";

const StyledLink = styled.div`
  .link {
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    padding: 10px 60px;
    background: transparent;
    border: 1px solid white;
    border-radius: 10px;
    
    transition: all 0.3s;
  }

  .link:hover {
    padding: 10px 65px;
  }
 
  .neon-header {
    text-align: center;
    line-height: 2;
    color: #1ecaa7;
    margin-left: 200px;
    text-shadow:    0 0 22px #00EFFF,
                    0 0 20px #048C95,
                    0 0 12px #00285B;
  }
`;

function Link(props) {
  return (
    <StyledLink>
      <a href={props.link} target="_blank" className='link neon-header'>
        {props.title}
      </a>
    </StyledLink>
  )
}

export default Link;