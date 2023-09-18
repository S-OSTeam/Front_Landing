import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Login from "../pages/Login";

export const AppRouter = () => {
	return(
		<Routes>
			<Route path='/' element={<Login/>}/>
		</Routes>
	);
}
