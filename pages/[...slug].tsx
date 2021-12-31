import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
//@ts-ignore
import ConfettiGenerator from "confetti-js";
import copy from "copy-to-clipboard";
import { BsFillShareFill, BsCheck } from "react-icons/bs";
import { MdCreate } from "react-icons/md";
import { BiCopy } from "react-icons/bi";

import useColor from "../hooks/useColor";
import { confettiConfig } from "../utils/ConfettiUtils";
import Footer from "../components/Footer";
import { getGreetingMessage } from "../utils/WishUtils";
import {
	ButtonsContainer,
	ConfettiHolder,
	CopyLinkButton,
	CreateNewButton,
	HomeWrapper,
	Icon,
	Name,
	ShareButton,
	WishMessage,
	WishText,
} from "../styles/styledComponents";

const Wish = () => {
	const router = useRouter();
	const { slug } = router.query;
	const { currentColor } = useColor();
	const name = slug ? slug[0]?.toString() : "";
	const [isCopied, setIsCopied] = React.useState(false);
	const canShare =
		typeof window !== "undefined" &&
		typeof window.navigator.share === "function";

	useEffect(() => {
		const confetti = new ConfettiGenerator(confettiConfig);
		confetti.render();
		return () => confetti.clear();
	}, []);

	const shareWish = async () => {
		if (typeof window !== "undefined") {
			try {
				await window.navigator.share({
					title: document.title,
					text: "Happy New Year Wishes here!",
					url: window.location.href,
				});
			} catch (e) {
				console.error(e);
			}
		}
	};

	const copyToClipboard = () => {
		copy(window.location.href);
		setIsCopied(true);
	};

	const goToHomePage = () => router.push("/");

	return (
		<>
			<Head>
				<title>Happy New Year {name} - By Anil</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<HomeWrapper theme={currentColor}>
				<ConfettiHolder id='confetti-holder'></ConfettiHolder>
				<WishText>
					Happy New Year <Name>{name}!</Name>
				</WishText>
				<WishMessage>{getGreetingMessage()} </WishMessage>
				<ButtonsContainer>
					{canShare ? (
						<ShareButton onClick={shareWish}>
							<Icon>
								<BsFillShareFill />
							</Icon>
							Share
						</ShareButton>
					) : (
						<CopyLinkButton onClick={copyToClipboard}>
							{!isCopied ? (
								<>
									<Icon>
										<BiCopy />
									</Icon>
									Copy
								</>
							) : (
								<>
									<Icon>
										<BsCheck />
									</Icon>
									Copied!
								</>
							)}
						</CopyLinkButton>
					)}
					<CreateNewButton onClick={goToHomePage}>
						<Icon>
							<MdCreate />
						</Icon>{" "}
						Create New Wish
					</CreateNewButton>
				</ButtonsContainer>
				<Footer />
			</HomeWrapper>
		</>
	);
};

export default Wish;
