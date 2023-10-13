import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 1.2rem 1.5rem;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Buttons</Heading>

        <Button>Check In</Button>
        <Button>Check Out</Button>

        <Heading as="h3">Forms</Heading>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}
export default App;
