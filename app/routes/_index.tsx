import { Heading } from "@radix-ui/themes";
import { type MetaFunction } from "@remix-run/node";
import { Link } from "~/components/link";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Template" },
    { name: "description", content: "Welcome to this Remix fork!" },
  ];
};

export default function Index() {
  return (
    <>
      <Heading as="h1">Bird Personality Test</Heading>

      <br />
      <br />
      <Link to="/test">Take the test</Link>
    </>
  );
}
