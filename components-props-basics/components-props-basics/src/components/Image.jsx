import './Image.css'

function Image(props) {
    return (
        <div>
            <img src={props.src} alt={props.alt} with={props.with} height={props.height}></img>
        </div>
    )
}

export default Image