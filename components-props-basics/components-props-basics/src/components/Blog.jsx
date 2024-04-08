import Title from './Title'
import SubTitle from './SubTitle'
import Image from './Image'
import Paragraph from './Paragraph'

const Blog = () =>{

return(
    <>
    <Title 
        titulo="React"
    />
    <SubTitle 
        SubTitle="¿Que es React?"
    />
    <Image 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" 
        alt="imagen react"
        with="100px"
        height="100px"
    />
    <Paragraph 
        Paragraph="Conoce los fundamentos de React y por que es la librería más usada del mundo"
    />
    </>
)
}

export default Blog