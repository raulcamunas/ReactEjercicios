import './Api.css'
import { useEffect, useState } from 'react'


const Card = () => {

    const [api, setApi] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then((resp) => resp.json())
        .then((data) => {
            setApi(data.results)
        })
        .catch(() => {
            console.error("La petición Falló")
        })
        
    }, [])

    return (
        <>
            <h1> Rick And Morty Api</h1>
            <ol className='tarjeta'>
                {api.map(({ id, name, image, status, origin }) => (
                    <li key={id}>
                        <div>
                            <h2>{name}</h2>
                            <img src={image} alt={name} className='imagen'/>
                            <div className='datos'>
                                <p>Estado: {status}</p>
                                <p>Origen: {origin.name}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </>
    );
}

export default Card
