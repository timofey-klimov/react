import { Container } from 'components/Container';
import './App.css';
import { TheHeader } from 'components/TheHeader';
import { SearchComponent } from 'components/SearchComponent';

function App() {
  return (
    <Container>
      <TheHeader/>
      <SearchComponent hasError onSubmit={function (text: string): void {
      } } />
    </Container>
  );
}

export default App;
