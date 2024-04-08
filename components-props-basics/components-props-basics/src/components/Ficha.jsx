function Ficha(props){
    return (
        <div>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
            <img src={props.src} alt={props.titulo} with="75px" height="75px"></img>
        </div>
    )
}
export default Ficha 