import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
	const bgBody = useColorModeValue("gray.200", "gray.800");
	const bgContent = useColorModeValue("gray.300", "gray.700");
	const fontColor = useColorModeValue(
		"rgba(0, 0, 0, 0.80)", // WhiteAlpha.100
		"rgba(255, 255, 255, 0.80)" // WhiteAlpha.800
	);
	return (
		<>
			<Box position={"absolute"} h={"100vh"} w={"100vw"} bgColor={bgBody}>
				<Navbar />
				<Container
					marginTop={"6rem"}
					maxWidth={"90vw"}
					borderRadius={"lg"}
					bgColor={bgContent}
					color={fontColor}
					padding={0}
				>
					{children}
					<Footer />
				</Container>
			</Box>
		</>
	);
}
