import './App.css'
import ResortsContainer from "./Components/ResortsContainer";
import listings from './data/data';

function App() {


  return (

    <>

    <h1>Resorts Lite</h1>
    <ResortsContainer data={listings} />
    
    </>
  
  );
}

export default App
