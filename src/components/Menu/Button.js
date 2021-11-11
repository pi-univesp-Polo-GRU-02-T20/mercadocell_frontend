import React, {useContext} from 'react';
import './Button.css';
import StoreContext from '../Store/Context';

export function Button() {

  const { setToken } = useContext(StoreContext);

  return (
      <button className='btn' onClick={() => setToken(null)}>Sair</button>
  );
}


