import tw from "twin.macro";
import styled from "styled-components";

export const HomeWrapper = styled.main`
	${tw`flex flex-col items-center justify-center h-screen max-h-screen overflow-hidden`};
	background-color: #111010;
	font-family: "Roboto", sans-serif;
`;

export const Heading = styled.h1`
	${tw`text-white text-6xl font-bold mt-48 mb-4`};
`;

export const FieldsContainer = styled.div`
	${tw`flex flex-col items-center justify-center h-full w-full`}
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
	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const CreateWishButton = styled.button`
	${tw`rounded-lg px-6 py-2 text-white font-bold mt-6`};
	background-color: #0070f3;
`;

export const WishText = styled.h1`
	${tw`text-white lg:text-6xl font-bold text-3xl`};
	animation: zoom 2s ease-in-out infinite;
	@keyframes zoom {
		0% {
			transform: scale(1, 1);
		}
		50% {
			transform: scale(1.25, 1.25);
		}
		100% {
			transform: scale(1, 1);
		}
	}
`;

export const ConfettiHolder = styled.canvas`
	${tw`absolute top-0 left-0 `};
`;

export const Name = styled.span`
	${tw`text-blue-600 lg:text-6xl font-bold text-3xl`};
`;

export const ButtonsContainer = styled.div`
	${tw`flex items-center`};
`;

export const ShareButton = styled(CreateWishButton)`
	${tw`mr-4 z-10 flex items-center px-4`}
`;

export const CopyLinkButton = styled(ShareButton)``;

export const Icon = styled.span`
	${tw`px-2 text-lg`}
`;

export const CreateNewButton = styled(ShareButton)``;

export const WishMessage = styled.p`
	${tw`text-gray-200 text-center italic mt-4 mb-4 px-2`};
`;
