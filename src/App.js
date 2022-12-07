import './App.css';
import image from './imageOne.jpg';
import imageTwo from './imageTwo.jpg';
import { List } from './presentsList';



function App() {
  return (
    <div className='app'>
      <div className='container'>
        <img src={ image } width="400px" alt="shopping"/>
      </div>
      <div className='container'>
        <h1>To buy presents for:</h1>
      </div>
      <List />
      <div className='container'>
        <img src={ imageTwo } width="400px" alt="shopping man"/>
      </div>
    </div>
  );
}

export default App;
