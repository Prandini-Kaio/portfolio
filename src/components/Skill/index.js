import styled from "styled-components";

const StyledSkill = styled.article`
    .skill {
    text-align: center;
    }

    .skill-image {
    padding: 20px;
    border: 2px solid #131219;
    }

    .skill-title {
    margin-top: 10px;
    padding: 5px 0;
    font-size: 18px;
    border: 2px solid #00eaff;
    opacity: 0;
    transform: translateY(-100px);

    transition: all 0.3s;
    }

    .skill:hover > .skill-title {
    opacity: 1;
    transform: translateY(0);
    }
`;

    function Skill(props) {
        return (
            <StyledSkill>
                <article className='skill'>
                    <div className='skill-image bg'>{props.children}</div>
                    <h3 className='skill-title bg'>{props.title}</h3>
                    <p className='skill-title bg'>Descrição da habilidade</p>
                </article>
            </StyledSkill>
        )
    }

export default Skill;