import React from "react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

import { urls } from "../../constants/urls";

import {
	FooterContainer,
	FooterText,
	Hyperlink,
	SocialMediaHandlesContainer,
	SocialMediaHanldesWrapper,
	SocialMedialHandle,
} from "./styledComponents";

export const Footer = () => {
	const { github, twitter, linkedin } = urls;
	return (
		<FooterContainer>
			<FooterText>
				Made with ❤️ by{" "}
				<Hyperlink target='_blank' href={github}>
					Anil Peddireddy
				</Hyperlink>
			</FooterText>
			<SocialMediaHanldesWrapper>
				Let's connect on
				<SocialMediaHandlesContainer>
					<SocialMedialHandle target='_blank' href={github}>
						<BsGithub />
					</SocialMedialHandle>
					<SocialMedialHandle target='_blank' href={twitter}>
						<BsTwitter />
					</SocialMedialHandle>
					<SocialMedialHandle target='_blank' href={linkedin}>
						<BsLinkedin />
					</SocialMedialHandle>
				</SocialMediaHandlesContainer>
			</SocialMediaHanldesWrapper>
			<FooterText>©️ Anil Peddireddy {new Date().getFullYear()}</FooterText>
		</FooterContainer>
	);
};
