import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BarraNav from '../components/BarraNav';
import Home from '../components/Home'
import Login from '../components/Login';
import Carrusel from '../components/Carrusel';
import SignUp from '../components/SignUp';






export const AppRouter = () => {

    
    const [search, setSearch] = useState('')
    const [getMovies, setGetMovies] = useState('Todas las peliculas')
      
    

    return (
        <div>
            <Router>            
            <BarraNav seccion={setGetMovies} estadoSearch={setSearch}/>
            <Carrusel/>
                <Routes>
                    <Route path="/" element={<Home showCategory={getMovies} searchMovie={search}/>}/>
                    <Route path="/login" element={<Login/> } />
                    <Route path="/SignUp" element={<SignUp/>}/>                 
                </Routes>
            </Router>
        </div>
    )
}