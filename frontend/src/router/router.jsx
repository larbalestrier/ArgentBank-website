import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from '../layout/header/header'
import Footer from '../layout/footer/footer'

import Home from '../pages/home/home';

function Router (){
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />    
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
export default Router