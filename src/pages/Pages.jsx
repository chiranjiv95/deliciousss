import React from 'react';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';

function Pages() {
        return (
                <div>

                        <Routes>
                                <Route path="/" element={<Home />}></Route>
                                <Route path="/Cuisine/:type" element={<Cuisine />}></Route>
                                <Route path="/Searched/:search" element={<Searched />}></Route>
                                <Route path="/Recipe/:id" element={<Recipe />}></Route>
                        </Routes>

                </div>
        )
}

export default Pages