import Navbar from "./component/Navbar";
import "./App.css"
import Intro from "./component/Intro/Intro";
import { Services } from "./component/Services/Services";
//  import Exp from "./component/Exp/Exp";
import { Work } from "./component/Work/Work";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Project } from "./component/Project/Project";
  // import { Testimonials } from "./component/Testimonials/Testimonials";
import { Contact } from "./component/Contact/Contact"; 
import { Footer } from "./component/Footer/Footer";
import {themeContext} from  "./Context"
import {useContext} from  "react"
 
 
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background :  darkMode? "black": "",
      color:darkMode? "white":""
    }}
    
    >
      <Navbar/>
      <Intro/>
      <Services/>
     {/* <Exp/> */}
     <Work/>
      <Project/>
      {/* <Testimonials/> */}
      <Contact/>.
      <Footer/>
    </div>
  );
}

export default App;
