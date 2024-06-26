import './App.css';
// import Cards from './components/Cards';
import Testimonial from './components/Testimonial';
import reviews from '../src/data'

function App() {
  return (
    <div className="App">
     <Testimonial reviews={reviews}/>
     {/* <Cards/> */}
    </div>
  );
}

export default App;
