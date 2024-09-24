import { createRoot } from 'react-dom/client'
import PrimeraParte from './components/PrimeraParte'
import SegundaParte from './components/SegundaParte'
import Footer from './components/Footer'
import './css/style.css'


createRoot(document.getElementById('root')).render(
<>

<PrimeraParte/>

<SegundaParte/>



<Footer/> 
   

</>
)
