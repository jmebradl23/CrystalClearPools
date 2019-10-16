import React from 'react';
import { tsPropertySignature } from '@babel/types';

function Button (props) {
  return (
    <div>
        <button className="contact">{props.text}</button>
    </div>
  );
}

export default App;