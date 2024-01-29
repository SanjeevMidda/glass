import './index.css';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <div className="sectionContainer">
        <Section width="200px" height="200px" title="A"/>
        <Section width="400px" height="400px" title="B"/>
        <Section width="800px" height="800px" title="C"/>
      </div>
    </div>
  );
}

export default App;
