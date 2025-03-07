import Header from "../../components/Header/Header"
import Listings from "../../components/Listings/Listings"
import "./MainPage.css"

export default function MainPage() {
  return (
    <div className='main-page'>
      <Header/>
      <Listings/>
    </div>
  )
}
