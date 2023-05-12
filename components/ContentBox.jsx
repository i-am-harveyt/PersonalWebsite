import { Container } from "@chakra-ui/react";

export default function ContentBox({ children }) {
	return (
		<Container padding={"1rem"}>
			{children}
		</Container>
	);
}
