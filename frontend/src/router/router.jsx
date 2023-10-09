import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from '../layout/header/header'

import Home from '../pages/home/home';

function Router (){
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />    
            </Routes>
        </BrowserRouter>
    )
}
export default Router