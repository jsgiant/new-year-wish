import tw from "twin.macro";
import styled from "styled-components";

export const FooterContainer = styled.footer`
	${tw`flex flex-col lg:flex-row text-white font-semibold items-center justify-between  bottom-0 absolute  w-full bg-gray-800 p-4`};
`;

export const FooterText = styled.p`
	${tw`text-white mb-2 lg:mb-0`}
`;

export const Hyperlink = styled.a`
	color: #0070f3;
`;

export const SocialMediaHanldesWrapper = styled.div`
	${tw`flex flex-col items-center justify-center mb-2 lg:mb-0`}
`;

export const SocialMediaHandlesContainer = styled.div`
	${tw`flex items-center mt-2 justify-center`}
`;

export const SocialMedialHandle = styled.a`
	${tw`px-2 text-2xl`}
`;
