import ContentBox from "@/components/ContentBox";
import Title from "@/components/Title";
import { Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Title>說明</Title>
      <ContentBox>
        <Text fontSize={"xl"}>This is Harvey Tung's Website!</Text>
      </ContentBox>
    </>
  );
}
