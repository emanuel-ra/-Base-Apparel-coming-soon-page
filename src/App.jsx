import './App.css'
import Card from './components/Card'


function App() {


  return (
    <>
      <main className="max-w-[1440px] flex flex-col lg:m-auto lg:p-10 ">
        <Card />
        <footer className='p-2  text-dark-grayish-red lg:text-white text-center'>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className='text-soft-Red' target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/emanuel-ra"  target="_blank" className='text-soft-Red'>Tomas Emanuel Ramirez Abarca</a>.
        </footer>
      </main>
    </>
  )
}

export default App
