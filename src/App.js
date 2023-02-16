import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import  './index.css';
import Menu from "./view/page/Menu/Menu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeComponent from "./view/page/Home/HomeComponent";
import NotFound from "./view/util/notFound";
import Profile from "./view/page/profile/Profile";
import Container from './view/page/Container';
import Logout from "./view/page/auth/auth/logout";
import LoginForm from "./view/page/auth/auth/loginForm";
import RegisterForm from "./view/page/auth/auth/registerForm";
import {ToastContainer} from "react-toastify";
import Contact from "./view/page/contact/Contact";
import About from "./view/page/about/About";
import MenuTest from "./view/page/Menu/MenuTest";
function App() {

    return (
            <BrowserRouter>
                {/* <ToastContainer/> */}
                <Routes>
                    <Route path = "/" element = {< Container />}>
                        <Route path="/" element = {< HomeComponent />}/>
                        <Route path = "contact" element = {< Contact />}/>
                        <Route path = "about" element = {< About />}/>
                        <Route path = "profile" element = {< Profile />}/>
                        <Route path = "logout" element = {< Logout />}/>
                        <Route path = "login" element = {< LoginForm />}/>
                        <Route path = "register" element = {< RegisterForm />}/>
                        <Route path = "menu" element = {< MenuTest />}/>
                        <Route path = "*" element = {< NotFound  />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
    );
}

export default App;
