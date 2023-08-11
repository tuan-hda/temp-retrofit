import { Route, Routes } from 'react-router-dom';
import { routerConfig } from './config';
import MainLayout from './layout/MainLayout';
import './App.css';
import { useConnect } from './hooks';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
const App = () => {
  useConnect();

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {routerConfig}
      </Route>
    </Routes>
  );
};

export default App;
