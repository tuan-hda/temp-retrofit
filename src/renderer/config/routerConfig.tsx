import { Route } from 'react-router-dom';
import Apps from 'renderer/pages/Apps';
import Car from 'renderer/pages/Car';
import Dial from 'renderer/pages/Dial';
import Music from 'renderer/pages/Music';
import Nav from 'renderer/pages/Nav';

const routerConfig = (
  <>
    <Route path="/" element={<Nav />} />
    <Route path="/apps" element={<Apps />} />
    <Route path="/music" element={<Music />} />
    <Route path="/dial" element={<Dial />} />
    <Route path="/car" element={<Car />} />
  </>
);

export default routerConfig;
