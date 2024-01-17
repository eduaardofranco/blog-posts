import { Header } from './components/Header'
import { Post } from './Components/Post'
import { Sidebar } from './Components/Sidebar'

import './global.css'
import './app.css'

function App() {

  return (
    <>
      <Header />

      <div className='wrapper'>
        <aside>
          <Sidebar />
        </aside>
        
        <main>
          <Post
            name="Eduardo Franco"
            role="FrontEnd developer"
            title="Post 1"
            content="Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
          />
          <Post
          name="Diego Fernandes"
          role="Backend developer"
            title="Post muito lindo"
            content="Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 "
          />
        </main>
      </div>
    </>

  )
}

export default App
