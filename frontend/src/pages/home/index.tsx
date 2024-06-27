//hooks
import SetPageTitle from '../../hooks/usePageTitle'

//css
import './style.css'

function Home() {
  SetPageTitle('Home');

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
