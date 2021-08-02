// --- Importações de bibliotecas e arquivos
import React, { useState } from "react";
import axios from "axios";
import * as S from "./styles";

// -------------------------------------------------------

// --- Importação das imagens
// Header
import LogoBlack from "../../img/logo-corebiz.png";
import SearchImage from "../../img/search.png";
import UserImage from "../../img/user.png";
import CartImage from "../../img/cart.png";

// ----------------------

// Main - Banner
import Banner from "../../img/banner.png";
import BannerMobile from "../../img/banner-mobile.png";

// ----------------------

// Main - Products
import OfferProduct from "../../img/offer.png";
import ProductImg from "../../img/product-img.png";
import EmptyStar from "../../img/star-empty.png";
import FullStar from "../../img/star-full.png";
import BorderTitle from "../../img/border.png";

// ----------------------

// Footer
import BorderTitleWhite from "../../img/border-white.png";
import EmailIcon from "../../img/email.png";
import ContactIcon from "../../img/contact.png";
import LogoWhite from "../../img/logo-corebiz-footer.png";
import VtexLogo from "../../img/logo-vtex.png";

// -------------------------------------------------------

// --- Função que retorna o App e usa a API
function App() {
	// --- Uso da API - POST dos inputs da Newsletter

	// Armazenar estado do nome e e-mail dos inputs
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	// Armazena os dados dos inputs da Newsletter para envio à API
	var dataNewsletter = { email: email, name: name };

	// Configurações para realizar o POST das informações para a API
	var configPost = {
		method: "post",
		url: "https://corebiz-test.herokuapp.com/api/v1/newsletter",
		headers: {},
		data: dataNewsletter,
	};

	// Variável que armazena o Regex para teste de validação do email
	var re = /\S+@\S+\.\S+/;

	// Função para realizar a validação dos dados dos inputs e o POST deles para a API caso sejam válidos
	function handleNewsletter() {
		axios(configPost)
			.then(function (response) {
				alert(
					"Cadastro realizado com sucesso. Obrigado por assinar nossa newsletter!"
				);
				console.log(JSON.stringify(response.data));
			})
			.catch(function (error) {
				if (name === "") {
					alert("Insira um nome");
					console.log(error);
				} else if (!re.test(email)) {
					alert("Insira um email no formato correto");
					console.log(error);
				}
			});
	}

	// ----------------------

	/*

	// --- Uso da API - GET dos produtos da API

	// Configurações para realizar o GET das informações dos produtos da API
	var configGet = {
		method: "get",
		url: "https://corebiz-test.herokuapp.com/api/v1/products",
		headers: {},
	};

	// Função para realizar o GET dos dados dos produtos da API
	axios(configGet)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
			console.log(error);
		});

	*/

	// -------------------------------------------------------

	// --- Retorna os componentes da aplicação
	return (
		<>
			<S.Header>
				<img src={LogoBlack} alt="Logo Corebiz"></img>

				<S.HeaderComponent className="userInput">
					<input placeholder="O que está procurando?"></input>
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

			<S.Main>
				<S.Banner>
					<img src={Banner} alt="Banner" className="bannerDesktop"></img>
					<img
						src={BannerMobile}
						alt="Banner Mobile"
						className="bannerMobile"
					></img>

					<S.BannerParagraph>
						<p>Olá, o que você está buscando?</p>

						<p>Criar ou migrar seu e-commerce?</p>
					</S.BannerParagraph>
				</S.Banner>

				<S.ProductsSection>
					<div className="productsTitle">
						<h2>Mais Vendidos</h2>
						<img src={BorderTitle} alt="Borda"></img>
					</div>

					<S.Products>
						<S.Product>
							<div className="imagesPdt">
								<img src={OfferProduct} alt="Produto em Oferta"></img>
								<img src={ProductImg} alt="Imagem Produto"></img>
							</div>

							<div className="infoPdt">
								<p>SAPATO FLOATER PRETO</p>

								<div className="imgStars">
									<img src={FullStar} alt="Avaliação"></img>
									<img src={FullStar} alt="Avaliação"></img>
									<img src={FullStar} alt="Avaliação"></img>
									<img src={EmptyStar} alt="Avaliação"></img>
									<img src={EmptyStar} alt="Avaliação"></img>
								</div>

								<div>
									<p>De R$ 299,00</p>
									<h3>por R$ 100,00</h3>
									<p>ou em 10x de R$ 10,00</p>
								</div>

								<div className="btnProduct">
									<button>COMPRAR</button>
								</div>
							</div>
						</S.Product>

						<S.Product>
							<div className="imagesPdt">
								<img src={OfferProduct} alt="Produto em Oferta"></img>
								<img src={ProductImg} alt="Imagem Produto"></img>
							</div>

							<div className="infoPdt">
								<p>SAPATO FLOATER PRETO</p>

								<div className="imgStars">
									<img src={FullStar} alt="Avaliação"></img>
									<img src={FullStar} alt="Avaliação"></img>
									<img src={FullStar} alt="Avaliação"></img>
									<img src={EmptyStar} alt="Avaliação"></img>
									<img src={EmptyStar} alt="Avaliação"></img>
								</div>

								<div>
									<p>De R$ 299,00</p>
									<h3>por R$ 100,00</h3>
									<p>ou em 10x de R$ 10,00</p>
								</div>

								<div className="btnProduct">
									<button>COMPRAR</button>
								</div>
							</div>
						</S.Product>

						<S.Product>
							<div className="imagesPdt">
								<img src={OfferProduct} alt="Produto em Oferta"></img>
								<img src={ProductImg} alt="Imagem Produto"></img>
							</div>

							<div className="infoPdt">
								<p>SAPATO FLOATER PRETO</p>

								<div className="imgStars">
									<img src={FullStar} alt="Avaliação"></img>
									<img src={FullStar} alt="Avaliação"></img>
									<img src={FullStar} alt="Avaliação"></img>
									<img src={EmptyStar} alt="Avaliação"></img>
									<img src={EmptyStar} alt="Avaliação"></img>
								</div>

								<div>
									<p>De R$ 299,00</p>
									<h3>por R$ 100,00</h3>
									<p>ou em 10x de R$ 10,00</p>
								</div>

								<div className="btnProduct">
									<button>COMPRAR</button>
								</div>
							</div>
						</S.Product>

						<S.Product>
							<div className="imagesPdt">
								<img src={OfferProduct} alt="Produto em Oferta"></img>
								<img src={ProductImg} alt="Imagem Produto"></img>
							</div>

							<div className="infoPdt">
								<p>SAPATO FLOATER PRETO</p>

								<div className="imgStars">
									<img src={FullStar} alt="Avaliação"></img>
									<img src={FullStar} alt="Avaliação"></img>
									<img src={FullStar} alt="Avaliação"></img>
									<img src={EmptyStar} alt="Avaliação"></img>
									<img src={EmptyStar} alt="Avaliação"></img>
								</div>

								<div>
									<p>De R$ 299,00</p>
									<h3>por R$ 100,00</h3>
									<p>ou em 10x de R$ 10,00</p>
								</div>

								<div className="btnProduct">
									<button>COMPRAR</button>
								</div>
							</div>
						</S.Product>
					</S.Products>
				</S.ProductsSection>

				<S.NewsletterSection>
					<div className="newsletterTitle">
						<h2>Participe de nossas news com promoções e novidades!</h2>
					</div>

					<div className="newsletterForm">
						<input
							type="text"
							placeholder="Digite seu nome"
							value={name}
							onChange={(e) => setName(e.target.value)}
						></input>

						<input
							type="email"
							placeholder="Digite seu email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						></input>

						<button onClick={handleNewsletter}>Eu quero!</button>
					</div>
				</S.NewsletterSection>
			</S.Main>

			<S.Footer>
				<div className="addressFooter">
					<h2>Localização</h2>
					<img
						src={BorderTitleWhite}
						alt="Borda Branca"
						className="borderFooter"
					></img>

					<ul>
						<li>Avenida Andrômeda, 2000. Bloco 6 e 8</li>
						<li>Alphavile SP</li>
						<li>brasil@corebiz.ag</li>
						<li>+55 11 3090 1039</li>
					</ul>
				</div>

				<div className="buttonsFooter">
					<button>
						<img src={EmailIcon} alt="Ícone E-mail"></img>
						<p>ENTRE EM CONTATO</p>
					</button>

					<button>
						<img src={ContactIcon} alt="Ícone E-mail"></img>
						<p>FALE COM O NOSSO CONSULTOR ONLINE</p>
					</button>
				</div>

				<div className="LogosFooter">
					<div>
						<p>Created by</p>
						<img src={LogoWhite} alt="Logo Corebiz"></img>
					</div>

					<div>
						<p>Powered by</p>
						<img src={VtexLogo} alt="Logo Vtex"></img>
					</div>
				</div>
			</S.Footer>
		</>
	);
}

// Exporta a função App que contém a página
export default App;
