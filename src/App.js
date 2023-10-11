import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder=" search here!" />
    </div>
  );
}

const SearchBar = styled.input`
  width: 800px;
  height: 100px;
  font-size: 50px;
`;

export default App;
