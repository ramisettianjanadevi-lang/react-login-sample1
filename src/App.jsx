
import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Sample from './Sample';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
