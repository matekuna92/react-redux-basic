import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Navigation from './components/ui/Navigation';
import Products from './components/Products/Products';
import Favourites from './components/Favourites/Favourites';

const App = () => {
	return (
		<Fragment>
			<Navigation />
				<main>
					<Routes>
						<Route path='/' component={Products} />
						<Route path='/favourites' component={Favourites} />
					</Routes>
				</main>
		</Fragment>
	);
}

export default App;
