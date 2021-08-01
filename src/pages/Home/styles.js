// Importações necessárias
import styled from "styled-components";

// ---------- Header ----------
export const Header = styled.header`
	width: 100vw;
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
