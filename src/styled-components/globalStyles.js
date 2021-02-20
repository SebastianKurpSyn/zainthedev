import styled from 'styled-components';
import { motion } from 'framer-motion';

const variants = {
	hidden: { opacity: 0, scale: 0.6 },
	visible: { opacity: 1, scale: 1 },
};

export const PortfolioSection = styled(motion.div).attrs(() => ({
	initial: 'hidden',
	variants,
}))`
	display: flex;
	height: 100vh;
	width: 100%;
`;

export const ColumnWrapper = styled(motion.div)`
	display: flex;
	width: 30%;
	flex-direction: column;
	align-items: center;
	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const TextColumnWrapper = styled(ColumnWrapper)`
	width: 30%;
	border-radius: 10px;
	box-shadow: 0px 0px 5px 0px #e1ce7a;
	padding-top: 20px;
	padding-bottom: 20px;
	background: #2c363f;
	@media (max-width: 1440px) {
		width: 40%;
	}
	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const Heading = styled(motion.h1)`
	place-self: center;
	font-weight: 500;
	font-size: 4rem;
	text-shadow: 0px 0px 6px #1b998b;
	@media (max-width: 768px) {
		width: inherit;
		text-align: center;
	}
`;

export const Subheading = styled(motion.h2)`
	width: 80%;
	font-weight: 500;
	font-size: 2rem;
	padding-bottom: 7px;
	text-align: center;
`;

export const Button = styled.button`
	display: flex;
	place-content: space-evenly;
	align-items: center;
	width: 300px;
	border: solid 1px #f1fbff;
	border-radius: 5px;
	outline: none;
	padding-top: 6px;
	padding-bottom: 6px;
	font-size: 1.5rem;
	font-weight: 500;
	text-align: center;
	color: white;
	background: rgba(204, 90, 113, 0.7);
	cursor: pointer;
	user-select: none;
	:hover {
		background: rgba(204, 90, 113, 1);
	}
	@media (max-width: 768px) {
		width: 80%;
	}
`;
