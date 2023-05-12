import ContentBox from "@/components/ContentBox";
import Title from "@/components/Title";
import { Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export default function contact_me() {
	return (
		<>
			<Title>Contact Me!</Title>
			<ContentBox>
				<UnorderedList>
					<ListItem>
						<Text fontSize={"lg"}>
							Email:{" "}
							<Link href="mailto: haoting.tung@gmail.com">
								haoting.tung@gmail.com
							</Link>
						</Text>
					</ListItem>
					<ListItem>
						<Text fontSize={"lg"}>
							Facebook:{" "}
							<Link href="https://www.facebook.com/HarveyT.H.T/" isExternal>
								童晧庭
							</Link>
						</Text>
					</ListItem>
					<ListItem>
						<Text fontSize={"lg"}>
							Instagram:{" "}
							<Link href="https://www.instagram.com/iam_harveyt/" isExternal>
								Harvey
							</Link>
						</Text>
					</ListItem>
				</UnorderedList>
			</ContentBox>
		</>
	);
}
