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
			font-size: 2.5rem;
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
export const NewsletterSection = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 2rem;
	padding: 4rem 0;
	background-color: var(--bg-newsletter);
	font-family: "Lato", sans-serif;

	& .newsletterTitle h2 {
		text-align: center;
		margin-bottom: 2rem;
		font-size: 2.2rem;
		font-weight: 700;
	}

	& .newsletterForm {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& .newsletterForm input {
		background-color: var(--bg-font-white);
		width: 28rem;
		height: 4.8rem;
		outline: none;
		margin-right: 1rem;
		padding-left: 1.5rem;
		color: var(--input-placeholder);
		font-size: 1.2rem;
		font-weight: 700;
		border-radius: 0.5rem;
	}

	& .newsletterForm button {
		background-color: var(--bg-font-black);
		width: 14rem;
		height: 4.8rem;
		border-radius: 0.5rem;
		color: var(--bg-font-white);
		font-size: 1.4rem;
		font-weight: 700;
		cursor: pointer;
	}

	@media (max-width: 820px) {
		& .newsletterForm {
			flex-direction: column;
		}

		& .newsletterForm input {
			margin-bottom: 2rem;
			width: 90%;
			margin-right: 0;
		}

		& .newsletterForm button {
			width: 90%;
		}
	}

	@media (max-width: 550px) {
		& .newsletterTitle h2 {
			text-align: left;
			margin-left: 1rem;
		}
	}
`;

// ---------- Main ----------
export const Footer = styled.footer`
	width: 100%;
	min-height: 22rem;
	background-color: var(--bg-font-black);
	color: var(--bg-font-white);
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;

	& .addressFooter h2 {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
	}

	& .addressFooter .borderFooter {
		margin-bottom: 1.5rem;
	}

	& .addressFooter li {
		font-size: 1.3rem;
	}

	& .buttonsFooter {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	& .buttonsFooter button {
		width: 20rem;
		padding: 1.6rem;
		height: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 2.5rem;
		border-radius: 0.5rem;
		background-color: var(--bg-font-white);
		font-weight: 600;
		cursor: pointer;
	}

	& .buttonsFooter button:last-child {
		margin-bottom: 0;
	}

	& .buttonsFooter button img {
		margin-right: 1.5rem;
	}

	& .buttonsFooter button:last-child {
		& img {
			margin-left: 1.8rem;
			margin-right: 0;
		}
	}

	& .LogosFooter {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	& .LogosFooter div {
		margin-right: 2.5rem;
	}

	& .LogosFooter div:last-child {
		margin-right: 0;
	}

	& .LogosFooter p {
		font-size: 1.1rem;
	}

	& .LogosFooter img {
		cursor: pointer;
	}

	@media (max-width: 650px) {
		padding: 3rem 0;
		flex-direction: column;
		justify-content: center;
		flex-wrap: nowrap;

		& .addressFooter {
			margin-bottom: 3rem;
		}

		& .LogosFooter {
			margin-top: 3rem;
		}
	}
`;
