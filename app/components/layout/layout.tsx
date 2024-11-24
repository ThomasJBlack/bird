import { Box, Container, Flex, ThemePanel } from "@radix-ui/themes";
import { PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Box position="fixed" width="100%" height="50px">
        <Container size="3">
          <Header />
        </Container>
      </Box>

      <Flex direction="column">
        <Container size="3">
          <Box
            className="border-x"
            style={{
              minHeight: "calc(100vh - 50px - 50px)",
            }}
          >
            <Box mt="50px" p="4">
              <main>{children}</main>
            </Box>
            <ThemePanel />
          </Box>
        </Container>
      </Flex>
      <Container size="3">
        <Flex height="50px" align="center" className="border">
          <Footer />
        </Flex>
      </Container>
    </>
  );
}
