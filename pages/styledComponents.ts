import tw from "twin.macro";
import styled from "styled-components";

export const HomeWrapper = styled.main`
	${tw`flex flex-col items-center justify-center min-h-screen`};
	background-color: ${({ theme }) => theme.color};
	font-family: "Roboto", sans-serif;
`;

export const Heading = styled.h1`
	${tw`text-white text-6xl font-bold mt-16 mb-0`};
`;

export const FieldsContainer = styled.div`
	${tw`flex flex-col items-center justify-center mt-16 mb-auto w-full`}
`;

export const CreateWishText = styled.h2`
	${tw`text-2xl font-bold`};
	color: #0070f3;
	font-family: "Patua One";
`;

export const NameInput = styled.input`
	${tw`p-2 rounded h-12 w-2/5 border-t-0 border-r-0 border-l-0 bg-gray-800 text-white bg-transparent mt-6 focus:outline-none`};
	font-family: "Patua One";
	border: 1px solid white;
`;

export const ColorSelectorContainer = styled.div`
	${tw`flex`}
`;

export const ColorSelector = styled.form`
	${tw`rounded-lg`}
`;

export const Color = styled.input`
	${tw`cursor-pointer mx-2 py-2 appearance-none`};
	border-radius: 100%;
	background-color: ${(props) => props.color};
	box-shadow: 0px 3px 10px
		${(props) => (props.color === "#111010" ? `#ffffff` : props.color)};
	width: 18px;
	height: 18px;
	&:checked {
		box-shadow: 0 0 0 2px ${(props) => props.color};
		border: 2px solid white;
		width: 20px;
	}
`;

export const SelectColorText = styled.p`
	${tw`text-lg font-semibold text-white mt-8 mb-4`};
`;
