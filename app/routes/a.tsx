import { Box } from "@radix-ui/themes";

export default function A() {
  return (
    <div>
      <Box>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
      </Box>
    </div>
  );
}

function Spacer() {
  return (
    <div>
      Spacer
      <br />
      <div>A</div>
      <div>B</div>
      <div>C</div>
      <div>D</div>
      <div>C</div>
      <div>E</div>
      <div>F</div>
      <div>G</div>
      <div>H</div>
      <br />
      <br />
      <br />
    </div>
  );
}
