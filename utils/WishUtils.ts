import { greetingMessages } from "../constants/wishMessages";

export const getGreetingMessage = (): string => {
	const randomNumber = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min)) + min;
	};
	return greetingMessages[randomNumber(0, greetingMessages.length)];
};
