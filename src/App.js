
import './App.css';
import ContextCounter from './components/contextCounter/ContextCounter';
import ReduxCounter from './components/reduxCounter/ReduxCounter';
import CountProvider from './context/Context';


function App() {
  return (
    <CountProvider>
      <div className="App">
        <ReduxCounter/>
        <ContextCounter/>
      </div>
    </CountProvider>
    
  );
}

export default App;
