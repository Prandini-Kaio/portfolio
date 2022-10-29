import './styles.css';

function Link(props){
    return(
        <a href={props.link} target="_blank" className='link'>
            {props.title}
        </a>//O target="_blank" ele abre uma nova aba para o link ao inves de redirecionar diretamente
    )
}

export default Link;