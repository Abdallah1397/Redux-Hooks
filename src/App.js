import './App.css';
import CounterWithReduxHooks from './components/counter-with-redux-hooks';
import Counter from './components/counter-without-redux';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <CounterWithReduxHooks />
    </div>
  );
}

export default App;
