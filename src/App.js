import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css';
import Navigation from './components/ui/Navigation';
import Products from './components/Products/Products';
import Favourites from './components/Favourites/Favourites';

const App = () => {
	return (
		<BrowserRouter>
			<Navigation />
			<main>
			<Routes>
				<Route path="/" element={<Products />} />
				<Route path="/favourites" element={<Favourites />} />
			</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
