import React from 'react';
import { tsPropertySignature } from '@babel/types';

function Button (props) {
  return (
    <div>
        <button className="default-btn">{props.text}</button>
    </div>
  );
}

export default App;