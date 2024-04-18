import './App.css';
import {  MovieList } from './components/MovieList';
import { Tittle } from './components/Navbar';
// import { ReviewForm } from './components/ReviewForm';

function App() {
  return (
    <div className="App bg-amber-100 min-h-screen">
      <Tittle/>
      
      <MovieList />
      {/* <ReviewForm/> */}
    </div>
  );
}

export default App;












