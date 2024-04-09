import './App.css'
import { Header } from './components/Header'
import { Title } from './components/Title'
import { Main } from './components/Main'
import { Image } from './components/Image'
import { Paragraph } from './components/Paragraph'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Header>
          <Title title="Hola"/>
        </Header>
        <Main>
          <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" 
              alt="imagen react"
              with="100px"
              height="100px"
          />
        </Main>
        <Footer>
          <Paragraph paragraph="Hola buenas tardes"/>
        </Footer>
      </div>
    </>
  )
}

export default App
