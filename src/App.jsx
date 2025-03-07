import MainPage from './pages/MainPage/MainPage'
import './App.css'
import UserBar from './components/UserBar/UserBar'
import CartBar from './components/CartBar/CartBar'

function App() {

  return (
    <div className='app'>
      <MainPage/>
      <UserBar/>
      <CartBar/>
    </div>
  )
}

export default App
