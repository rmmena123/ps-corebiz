// Importações necessárias
import React from "react";
import axios from "axios";
import * as S from "./styles";
import "./styles.css";

// Importação das imagens
import LogoBlack from "../../img/logo-corebiz.png";
import SearchImage from "../../img/search.png";
import UserImage from "../../img/user.png";
import CartImage from "../../img/cart.png";

// Função que retorna a página
function App() {
	return (
		// ---------- Header ----------
		<S.Header>
			<img src={LogoBlack} alt="Logo Corebiz"></img>

			<S.HeaderComponent className="userInput">
				<S.HeaderInput placeholder="O que está procurando?"></S.HeaderInput>
				<img src={SearchImage} alt="Ícone Lupa Pesquisa"></img>
			</S.HeaderComponent>

			<S.HeaderComponent>
				<img src={UserImage} alt="Ícone Usuário"></img>
				<S.HeaderParagraph>Minha Conta</S.HeaderParagraph>

				<img
					src={CartImage}
					alt="Ícone Carrinho de Compras"
					className="imgHeader"
				></img>
				<S.HeaderParagraph className="cartItems">0</S.HeaderParagraph>
			</S.HeaderComponent>
		</S.Header>
	);
}

// Exporta a função App que contém a página
export default App;
