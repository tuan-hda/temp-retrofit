import { Route } from 'react-router-dom';
import Apps from 'renderer/pages/Apps';
import Car from 'renderer/pages/Car';
import Dial from 'renderer/pages/Dial';
import Message from 'renderer/pages/Message';
import Music from 'renderer/pages/Music';
import Nav from 'renderer/pages/Nav';

const routerConfig = (
  <>
    <Route path="/nav" element={<Nav />} />
    <Route path="/apps" element={<Apps />} />
    <Route path="/music" element={<Music />} />
    <Route path="/dial" element={<Dial />} />
    <Route path="/message" element={<Message />} />
    <Route path="/" element={<Car />} />
  </>
);

export default routerConfig;
