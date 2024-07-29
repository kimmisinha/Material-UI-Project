import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Signup from "./Component/Signup";
import SignIn from "./Component/SignIn";
import LandingPage from "./Component/LandingPage";
import TeamPage from "./Component/TeamPage";
import OurTeam from "./Component/OurTeam";
import CoWorking from "./Component/CoWorking";
function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage/>
      <TeamPage/>
      <OurTeam/>
      <CoWorking/>
     <Footer/>
     <Home/>
     <Signup/>
     <SignIn/>
    </div>
  );
}

export default App;
