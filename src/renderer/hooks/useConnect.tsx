import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateEnvAction, updateLuxAction } from 'renderer/store/stateSlice';

const useConnect = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const socket = io('http://localhost:8080');

  //   const onConnect = () => {
  //     console.log('Connected');
  //   };
  //   const onDisconnect = () => {
  //     console.log('Disconnected');
  //   };
  //   const onStateChanges = (data: any) => {
  //     if ('temperature' in data) {
  //       dispatch(updateOutTempAction(data.temperature.data));
  //     }
  //   };
  //   socket.emit('register_consumer');

  //   socket.on('connect', onConnect);
  //   socket.on('disconnect', onDisconnect);
  //   socket.on('state_changes', onStateChanges);

  //   return () => {
  //     socket.off('connect', onConnect);
  //     socket.off('disconnect', onDisconnect);
  //     socket.off('state_changes', onStateChanges);
  //   };
  // }, []);
  useEffect(() => {
    // window.electron.ipcRenderer.sendMessage(
    //   'launch-app',
    //   'env-sensor',
    //   'python',
    //   '/home/retrofit/build/Environment_sensor_fot_jetson_nano_rev3/BME280-test.py',
    // );
    // window.electron.ipcRenderer.sendMessage(
    //   'launch-app',
    //   'env-lux',
    //   'python',
    //   '/home/retrofit/build/Environment_sensor_fot_jetson_nano_rev3/TSL2591.py',
    // );
  }, []);

  useEffect(() => {
    const handleEnvUpdate = (payload: any) => {
      dispatch(
        updateEnvAction({
          outTemp: payload.temp,
          humidity: payload.hum,
        }),
      );
    };
    const handleLuxUpdate = (payload: any) => {
      dispatch(updateLuxAction(payload));
    };

    if (window.electron) {
      window.electron.ipcRenderer.on('env-sensor', handleEnvUpdate);
      window.electron.ipcRenderer.on('env-lux', handleLuxUpdate);
    }
  }, [window.electron]);
};

export default useConnect;
