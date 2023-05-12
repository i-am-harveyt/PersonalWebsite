import ContentBox from "@/components/ContentBox";
import Title from "@/components/Title";
import { ListItem, OrderedList, Text } from "@chakra-ui/react";

export default function about_me() {
  return (
    <>
      <Title>About Me</Title>
      <ContentBox>
        <Text fontSize={"lg"}>
          I'm Harvey, currently studying in NTU, the department of Sociology.
          <br />A social science student that obsessed in Programming.
        </Text>

        <Text fontSize={"xl"}>Skills</Text>
        <OrderedList>
          <ListItem>
            <Text fontSize={"lg"}>Java Programming</Text>
          </ListItem>
          <ListItem>
            <Text fontSize={"lg"}>Python Programming</Text>
          </ListItem>
          <ListItem>
            <Text fontSize={"lg"}>C++ Programming</Text>
          </ListItem>
          <ListItem>
            <Text fontSize={"lg"}>Frontend Programming</Text>
          </ListItem>
        </OrderedList>
        <Text fontSize={"xl"}>Projects</Text>
        <OrderedList>
          <ListItem>
            <a href="https://github.com/i-am-harveyt/Board.App">Board</a>, a
            minimal microblog website written in Java Servlet.
          </ListItem>
          <ListItem>
            <a href="https://github.com/i-am-harveyt/PersonalWeb">
              My Personal website
            </a>
            , written in React.js, but I really want to rewrite it, maybe in
            July, 2023.
          </ListItem>
          <ListItem>
            <a href="https://github.com/i-am-harveyt/PD_Final">
              Will to Graduate
            </a>
            , a game written in C++.
          </ListItem>
          <ListItem>
            <a href="https://github.com/i-am-harveyt/BasicDSinCpp">
              Data Structure in C++
            </a>
            , to implement data structures and algorithms in C++.
          </ListItem>
        </OrderedList>
        <Text fontSize={"xl"}>Entertainment?</Text>
        <OrderedList>
          <ListItem>
            <a href="https://github.com/i-am-harveyt/MyLeetCodePractice">
              LeetCode Practice
            </a>
            , mainly written in C++ and Go.
          </ListItem>
          <ListItem>
            <a href="https://github.com/i-am-harveyt/NvimConfigInLua">
              Neovim Config
            </a>
            , written in Lua.
          </ListItem>
        </OrderedList>
      </ContentBox>
    </>
  );
}
