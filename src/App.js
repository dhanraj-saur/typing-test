import logo from './logo.svg';
import './App.css';
import ChangingColorButton from './Components/Buttons/ChangingColorButton';
import TypingBox from './Components/TypingBox/TypingBox';
import Header from './Components/Header/Header';
import Score from './Components/Score/Score';
// import { Route, Routes } from 'react-router-dom';
// import { useRoutes } from 'react-router-dom';

const App = () => {

  // const routes = useRoutes([
  //   { path: '/', element: <TypingBox /> },
  //   { path: '/Score', element: <Score /> },
    
  // ]);

  // return routes;


  return (
    <div className="App">
      <Header />
      <TypingBox/>
     
      {/* <Routes>
        <Route path="/" element={<TypingBox />} />
        <Route path="/Score" element={<Score />} />
      </Routes> */}
      <ChangingColorButton />

    </div>
  );
}

export default App;
