import { Center, Text, useColorModeValue } from "@chakra-ui/react";
export default function Footer() {
	return (
		<>
			<Center pos={"fixed"} left={0} bottom={0} w={"100%"} h={"3rem"}>
				<Text fontSize={"xs"}>Ⓒ HarveyTung 2023. All rights reserved</Text>
			</Center>
		</>
	);
}
