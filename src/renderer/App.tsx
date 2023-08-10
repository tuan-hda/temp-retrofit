import { Route, Routes } from 'react-router-dom';
import { routerConfig } from './config';
import MainLayout from './layout/MainLayout';
import './App.css';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {routerConfig}
      </Route>
    </Routes>
  );
};

export default App;
