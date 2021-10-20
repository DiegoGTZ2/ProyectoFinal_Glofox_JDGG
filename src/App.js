
import './styles/styles.scss';
import Registro from './Registro';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Banner from './Banner';
import Instalaciones from './Instalaciones';
import Programas from './Programas';

const App = () =>(
 
  <Router>
    <Route path="/" exact component={Banner}/>
    <Route path="/Registro" exact component={Registro}/>
    <Route path="/Instalaciones" exact component={Instalaciones}/>
    <Route path="/Programas" exact component={Programas}/>
    
    
</Router>
)
  


export default App;
