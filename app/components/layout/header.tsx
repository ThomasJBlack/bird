import { Flex, IconButton } from "@radix-ui/themes";
import { Link, NavLink } from "../link";
import { HomeIcon } from "@radix-ui/react-icons";
import { Link as RemixLink } from "@remix-run/react";

export default function Header() {
  return (
    <Flex justify="between" p="3" className="border">
      <Flex gap="2" align="center" position="relative">
        <RemixLink to="/">
          <IconButton size="1" radius="full" highContrast>
            <HomeIcon />
          </IconButton>
        </RemixLink>
        <NavLink to="/a">A</NavLink>
        <NavLink to="/b">B</NavLink>
      </Flex>
      <Flex gap="2" align="center">
        <Link to="/account">Account</Link>
      </Flex>
    </Flex>
  );
}
