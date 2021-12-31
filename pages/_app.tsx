import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

import useColor from "../hooks/useColor";
import { variants } from "../utils/MotionUtils";

function MyApp({ Component, pageProps }: AppProps) {
	const { currentColor } = useColor();

	return (
		<motion.div initial='pageInitial' animate='pageAnimate' variants={variants}>
			<ThemeProvider theme={currentColor}>
				<Component {...pageProps} />
			</ThemeProvider>
		</motion.div>
	);
}

export default MyApp;
