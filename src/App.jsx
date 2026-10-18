
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Sample from './Sample';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
