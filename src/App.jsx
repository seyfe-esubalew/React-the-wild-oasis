import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const Button = styled.button`
  background-color: purple;
  border: none;
  border-radius: 7px;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;
function App() {
  return (
    <div>
      <H1>The Wild Oasis</H1>
      <Button>Check In</Button>
      <Input type="number" placeholder="Number of guests" />
    </div>
  );
}
export default App;
