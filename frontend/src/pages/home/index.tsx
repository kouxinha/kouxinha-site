//hooks
import usePageTitles from '../../hooks/usePageTitles'

//css
import './style.css'

function Home() {
  usePageTitles()

  return (
    <>
      <header>
        header
      </header>

      <main className='text-blue-400'>
        main
      </main>

      <footer>  
        footer
      </footer>
    </>
  )
}

export default Home