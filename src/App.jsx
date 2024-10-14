import Footer from './Footer/Footer'
import GetMoreUpdates from './More/GetMoreUpdates'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import LandingPage from './components/LandingPage';

import Description from './Description'
import ServiceCard from './ServiceCard'
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  

  return (
    <>
      <div>
      <LandingPage />
      <ServiceCard/>
      <Description/>
        <Blogs />
        <GetMoreUpdates/>
      <Footer/>
       </div>
    </>
  )
}

export default App
