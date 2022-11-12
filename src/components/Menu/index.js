import Logo from '../Logo';
import styled from 'styled-components';

const StyledMenu = styled.menu`
    .menu{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #17161d;
        padding: 20px 0;

        a{
            font-size: 20px;
            font-weight: 500;
            margin-left: 24px;
            text-decoration: none;

            transition: color 0.3s;
        }

        a:hover{
            color: rgba(0, 234, 255, 0.8);
        }
    }
`;

function Menu(props){
    return(
        <StyledMenu>
                <menu className='menu'>
                    <Logo />
                    <nav>
                        <a className='menu-link' href='#projects'>projects</a>
                        <a className='menu-link' href='#skills'>skills</a>
                    </nav>
                </menu>
            </StyledMenu>
    )
}

export default Menu;