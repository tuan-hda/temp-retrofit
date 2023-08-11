import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateOutTempAction } from 'renderer/store/stateSlice';
import { io } from 'socket.io-client';

const useConnect = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io('http://localhost:8080');

    const onConnect = () => {
      console.log('Connected');
    };
    const onDisconnect = () => {
      console.log('Disconnected');
    };
    const onStateChanges = (data: any) => {
      if ('temperature' in data) {
        dispatch(updateOutTempAction(data.temperature.data));
      }
    };
    socket.emit('register_consumer');

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('state_changes', onStateChanges);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('state_changes', onStateChanges);
    };
  }, []);
};

export default useConnect;
