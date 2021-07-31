// Importações necessárias
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

// Função que cria as rotas da aplicação
export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home}></Route>
			</Switch>
		</BrowserRouter>
	);
}
