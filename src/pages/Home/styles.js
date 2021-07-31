// Importações necessárias
import styled from "styled-components";

// ---------- Header ----------
export const Header = styled.header`
	width: 100vw;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 1rem;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

export const HeaderComponent = styled.div`
	display: flex;
	align-items: center;

	input {
		width: 100%;
		outline: none;
		height: 2.3rem;
		font-weight: 400;
		font-size: 1.3rem;
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
