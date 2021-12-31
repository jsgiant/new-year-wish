import tw from "twin.macro";
import styled from "styled-components";

export const ColorSelectorWrapper = styled.div`
	${tw`flex`}
`;

export const ColorSelectorForm = styled.form`
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
	font-family: "Patua One";
`;
