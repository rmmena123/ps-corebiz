// --- Importações necessárias
import React from "react";
import axios from "axios";
import * as S from "./styles";

// --- Importação das imagens
// Header
import LogoBlack from "../../img/logo-corebiz.png";
import SearchImage from "../../img/search.png";
import UserImage from "../../img/user.png";
import CartImage from "../../img/cart.png";

// Main - Banner
import Banner from "../../img/banner.png";
import BannerMobile from "../../img/banner-mobile.png";

// Main - Products
import OfferProduct from "../../img/offer.png";
import ProductImg from "../../img/product-img.png";
import EmptyStar from "../../img/star-empty.png";
import FullStar from "../../img/star-full.png";

// --- Função que retorna a página
function App() {
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

				<S.Products>
					<div>
						<h2>Mais Vendidos</h2>
					</div>

					<S.Product>
						<div>
							<img src={ProductImg} alt="Imagem Produto"></img>
							<img src={OfferProduct} alt="Produto em Oferta"></img>
						</div>

						<div>
							<p>SAPATO FLOATER PRETO</p>

							<div>
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

							<div>
								<button>Comprar</button>
							</div>
						</div>
					</S.Product>

					<S.Product>
						<div>
							<img src={ProductImg} alt="Imagem Produto"></img>
							<img src={OfferProduct} alt="Produto em Oferta"></img>
						</div>

						<div>
							<p>SAPATO FLOATER PRETO</p>

							<div>
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

							<div>
								<button>Comprar</button>
							</div>
						</div>
					</S.Product>

					<S.Product>
						<div>
							<img src={ProductImg} alt="Imagem Produto"></img>
							<img src={OfferProduct} alt="Produto em Oferta"></img>
						</div>

						<div>
							<p>SAPATO FLOATER PRETO</p>

							<div>
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

							<div>
								<button>Comprar</button>
							</div>
						</div>
					</S.Product>

					<S.Product>
						<div>
							<img src={ProductImg} alt="Imagem Produto"></img>
							<img src={OfferProduct} alt="Produto em Oferta"></img>
						</div>

						<div>
							<p>SAPATO FLOATER PRETO</p>

							<div>
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

							<div>
								<button>Comprar</button>
							</div>
						</div>
					</S.Product>
				</S.Products>
			</S.Main>
		</>
	);
}

// Exporta a função App que contém a página
export default App;
