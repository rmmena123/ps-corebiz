// Importações necessárias
import styled from "styled-components";

// ---------- Header ----------
export const Header = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 1rem;

	img {
		cursor: pointer;
	}

	& .userInput {
		justify-content: space-between;
		align-items: center;
		min-width: 40%;
		max-width: 71rem;
		padding-bottom: 0.3rem;
		border-bottom: 1px solid var(--user-border-pdtinfo-gray);
	}

	@media (max-width: 800px) {
		flex-direction: column;

		& .userInput {
			min-width: 70%;
		}
	}
`;

export const HeaderComponent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	input {
		width: 100%;
		outline: none;
		height: 2.3rem;
		font-weight: 400;
		font-size: 1.3rem;
	}

	img {
		cursor: pointer;
	}

	& .imgHeader {
		margin-left: 2rem;
	}

	& .cartItems {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--cart-ellipse-red);
		color: var(--bg-font-white);
		border-radius: 100%;
		width: 1.8rem;
		height: 1.8rem;
	}

	@media (max-width: 800px) {
		margin-top: 2rem;
	}
`;

export const HeaderParagraph = styled.p`
	font-size: 1.3rem;
	margin-left: 0.6rem;
	cursor: pointer;
`;

// ---------- Main ----------

export const Main = styled.main`
	width: 100%;
`;

// ----- Banner -----

export const Banner = styled.section`
	display: flex;
	margin-top: 4rem;
	height: 43rem;

	img {
		width: 100%;
		height: 100%;
		position: relative;
	}

	& .bannerMobile {
		display: none;
	}

	@media (max-width: 800px) {
		height: 30rem;

		& .bannerDesktop {
			display: none;
		}

		& .bannerMobile {
			display: block;
		}
	}
`;

export const BannerParagraph = styled.div`
	position: absolute;
	left: 5%;
	top: 25%;
	width: 50%;

	p {
		color: white;
		font-size: 3rem;
		font-weight: 700;
	}

	p:last-child {
		font-size: 4.5rem;
		font-weight: 900;
	}

	@media (max-width: 800px) {
		width: 100%;
		top: 33%;

		p {
			font-size: 2rem;
		}

		p:last-child {
			font-size: 3rem;
		}
	}
`;

// ----- Products -----

export const ProductsSection = styled.section`
	margin-top: 4rem;
	display: flex;
	flex-direction: column;

	& .productsTitle {
		margin-left: 6rem;
	}

	& .productsTitle h2 {
		font-size: 2rem;
		font-weight: 900;
	}
`;

export const Products = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
`;

export const Product = styled.div`
	width: 21.6rem;
	height: auto;
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	& .imagesPdt {
		display: flex;
		position: relative;
	}

	& .imagesPdt img:first-child {
		width: 8rem;
		position: absolute;
		right: 0;
	}

	& .infoPdt {
		width: 100%;
		height: 100%;
		padding-top: 2rem;
	}

	& .infoPdt:hover {
		background-color: var(--bgpdt-hover);
	}

	& .infoPdt p {
		font-size: 1.2rem;
		text-align: center;
		color: var(--user-border-pdtinfo-gray);
		font-weight: 400;
	}

	& .infoPdt p:first-child {
		font-weight: 600;
	}

	& .infoPdt p:last-child {
		font-size: 1.1rem;
	}

	& .infoPdt h3 {
		font-size: 1.8rem;
		font-weight: 700;
		text-align: center;
	}

	& .imgStars {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& .btnProduct {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& .btnProduct button {
		margin-top: 1rem;
		margin-bottom: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 12.6rem;
		height: 3.3rem;
		border-radius: 0.5rem;
		background-color: var(--bg-font-black);
		color: var(--bg-font-white);
		font-size: 1.2rem;
		cursor: pointer;
	}
`;

// ----- Newsletter -----

export const NewsletterSection = styled.section``;
