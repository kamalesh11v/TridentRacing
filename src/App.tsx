import { Achievements } from "./pages/Achievements"
import  MainPage  from "./pages/MainPage"
import { BrowserRouter, Routes , Route } from "react-router-dom"
import { Sponsors } from "./pages/Sponsors"
import { Team } from "./pages/Team"
import { ContactUs } from "./pages/ContactUs"

export const App = () =>{
    return <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<MainPage/>}></Route>
            <Route path="/achievements" element = {<Achievements/>}></Route>
            <Route path="/sponsors" element = {<Sponsors/>}></Route>
            <Route path="/team" element = {<Team/>}></Route>
            <Route path = "/contactus" element={<ContactUs/>}></Route>
        </Routes>
    </BrowserRouter>
   
    </>
}