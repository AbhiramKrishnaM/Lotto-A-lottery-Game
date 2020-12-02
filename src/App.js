import Lottery from './Components/Lottery'
import './css/App.css';

function App() {
  return (
    <div className="App">
     <Lottery />
     <Lottery title="Mini Lotto" maxBalls={3} maxNum={10}/>
    </div>
  );
}

export default App;
