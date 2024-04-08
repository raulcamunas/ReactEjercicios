import './App.css'
import Blog from './components/Blog'
import Ficha from './components/Ficha'
function App() {

  return (
    <>
      <div>
      <Blog />
      </div>
      <div className='blog'>
      <Ficha 
        titulo="Angular"
        subtitulo="Blog de Angular"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
      />
      <Ficha 
        titulo="Vue"
        subtitulo="Blog de Vue"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
      />
      <Ficha 
        titulo="Svelte"
        subtitulo="Blog de Svelte"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
      />
      </div>
    </>
  )
}

export default App
