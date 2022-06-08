import * as React from 'react';
import ReactDOM = require('react-dom');

const useName = () => {
  const [name, setname] = React.useState<String>('😉');

  const nameUpdate = () => {
    ReactDOM.unstable_batchedUpdates(async () => {
      await setname(name === '😉' ? '😚' : name === '😚' ? '🥰' : '😉');
    });
  };

  return [name, nameUpdate];
};

export default useName;
