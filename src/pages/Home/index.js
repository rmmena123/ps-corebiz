// --- Importações de bibliotecas e arquivos
import React, { useState, useEffect, Component } from "react";
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
// import ProductImg from "../../img/product-img.png";
// import EmptyStar from "../../img/star-empty.png";
import FullStar from "../../img/star-full.png";
import BorderTitle from "../../img/border.png";

// ----------------------

// Footer
import BorderTitleWhite from "../../img/border-white.png";
import EmailIcon from "../../img/email.png";
import ContactIcon from "../../img/contact.png";
import LogoWhite from "../../img/logo-corebiz-footer.png";
import VtexLogo from "../../img/logo-vtex.png";
import { render } from "@testing-library/react";

// -------------------------------------------------------

// --- Função que retorna o App
function App() {
	// --- Funcionalidade - GET dos produtos da API

	// Configurações para realizar o GET das informações dos produtos da API
	var configGet = {
		method: "get",
		url: "https://corebiz-test.herokuapp.com/api/v1/products",
		headers: {},
	};

	// Função para realizar o GET dos dados dos produtos da API
	axios(configGet)
		.then(function (response) {
			// Armazena um vetor com os objetos (cada objeto corresponde a um produto contendo suas informações)
			const products = response.data;
			const productsData = [];

			// Armazena os produtos no Local Storage para uso
			products.map((product) => {
				productsData.push(product);
			});
			localStorage.setItem("Products", JSON.stringify(productsData));
		})
		.catch(function (error) {
			console.log(error);
		});

	// -------------------------------------------------------

	const [products, setProducts] = useState([]);

	useEffect(() => {
		let productsArray = localStorage.getItem("Products");
		productsArray = JSON.parse(productsArray);
		setProducts(productsArray);
	}, []);

	// -------------------------------------------------------

	// --- Funcionalidade - Carrinho de Compras

	// Armazenar estado do número de itens no carrinho
	let [item, setItem] = useState(0);

	// Busca a informação no Local Storage e a valida
	useEffect(() => {
		const data = localStorage.getItem("data");

		if (data) {
			setItem(JSON.parse(data));
		}
	}, []);

	// Persiste o número de itens no Local Storage e o apresenta na tela
	useEffect(() => {
		localStorage.setItem("data", JSON.stringify(item));
		parseInt(item);
		document.getElementById("cartCheckout").innerHTML = item;
	});

	// Função chamada após o clique no botão comprar, incrementa o número de itens e dispara setItem
	const incrementCart = (e) => {
		e.preventDefault();
		parseInt(item);
		item++;
		setItem(item);
	};

	// -------------------------------------------------------

	// --- Funcionalidade - POST dos inputs da Newsletter
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
					<S.HeaderParagraph className="cartItems" id="cartCheckout">
						0
					</S.HeaderParagraph>
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
						{products.map((product, i) => {
							// let productsId = [];
							let productsImgUrl = [];
							let productsName = [];
							let productsStars = [];
							let productsListPrice = [];
							let productsPrice = [];
							let productsInstallmentsArray;
							let productsInstallments;
							let productsInstallmentsQuantity = [];
							let productsInstallmentValue = [];

							// productsId = product.productId;

							productsImgUrl = product.imageUrl;

							productsName = product.productName;

							productsStars = product.stars;

							productsListPrice = product.listPrice;

							productsPrice = product.price;

							productsInstallmentsArray = Object.values(product.installments);

							productsInstallments = productsInstallmentsArray[0];

							if (productsInstallments) {
								productsInstallmentsQuantity = productsInstallments.quantity;
								productsInstallmentValue = productsInstallments.value;
							} else {
								productsInstallmentsQuantity = null;
								productsInstallmentValue = null;
							}

							function imgStars(productsStars) {
								var arrayStars = [];
								var counter = 0;
								while (productsStars !== 0) {
									productsStars--;
									arrayStars[counter] = (
										<img src={FullStar} alt="Estrela"></img>
									);
									counter++;
								}

								return arrayStars;
							}

							function renderListPrice(listPrice) {
								if (listPrice === null) {
									return <p></p>;
								} else {
									let price = JSON.stringify(listPrice);
									let reais = Math.floor(price.length - 2);
									let result =
										price.substr(0, reais) + "," + price.substr(reais);
									return <p>De R$ {result}</p>;
								}
							}

							function renderPrice(productPrice) {
								let price = JSON.stringify(productPrice);
								let reais = Math.floor(price.length - 2);
								let result = price.substr(0, reais) + "," + price.substr(reais);

								return <h3>por R$ {result}</h3>;
							}

							function renderInstallments(
								productsInstallmentsQuantity,
								productsInstallmentValue
							) {
								if (
									productsInstallmentsQuantity === null ||
									productsInstallmentValue === null
								) {
									return <p></p>;
								} else {
									let price = JSON.stringify(productsInstallmentValue);
									let reais = Math.floor(price.length - 2);
									let result =
										price.substr(0, reais) + "," + price.substr(reais);
									return (
										<p>
											ou em {JSON.stringify(productsInstallmentsQuantity)}x de
											R$ {result}
										</p>
									);
								}
							}

							function renderOffer(listPrice) {
								if (listPrice === null) {
									return <p></p>;
								} else {
									return (
										<img
											src={OfferProduct}
											alt="Produto em Oferta"
											className="imgOffer"
										></img>
									);
								}
							}

							return (
								<S.Product>
									<div className="imagesPdt">
										{renderOffer(productsListPrice)}
										<img src={productsImgUrl} alt="Imagem Produto"></img>
									</div>

									<div className="infoPdt">
										<p>{productsName}</p>

										<div className="imgStars">{imgStars(productsStars)}</div>

										<div>
											{renderListPrice(productsListPrice)}
											{renderPrice(productsPrice)}
											{renderInstallments(
												productsInstallmentsQuantity,
												productsInstallmentValue
											)}
										</div>

										<div className="btnProduct">
											<button onClick={incrementCart}>COMPRAR</button>
										</div>
									</div>
								</S.Product>
							);
						})}
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

// Exporta a função App
export default App;
