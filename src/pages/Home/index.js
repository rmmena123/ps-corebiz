// Importações necessárias
import React from "react";
import axios from "axios";
import * as S from "./styles";

// Importação das imagens
import LogoBlack from "../../img/logo-corebiz.png";
import SearchImage from "../../img/search.png";
import UserImage from "../../img/user.png";
import CartImage from "../../img/cart.png";

// Função que retorna a página
function App() {
	return (
		<header id="navbar">
			<img src={LogoBlack} alt="Logo Corebiz"></img>

			<div>
				<input placeholder="O que você está procurando?"></input>
				<img src={SearchImage} alt="Ícone Lupa Pesquisa"></img>
			</div>

			<div>
				<p>Minha Conta</p>
				<img src={UserImage} alt="Ícone Usuário"></img>
			</div>

			<div>
				<img src={CartImage} alt="Ícone Carrinho de Compras"></img>
				<p>0</p>
			</div>
		</header>
	);
}

// Exporta a função App que contém a página
export default App;
