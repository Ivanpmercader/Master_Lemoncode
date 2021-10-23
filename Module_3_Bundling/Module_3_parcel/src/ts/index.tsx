import '../css/mystyles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelloComponent } from '../components/helloComponent';
import { ImageComponent } from '../components/imageComponent';
import { NumberComponent } from '../components/numberComponent';

ReactDOM.render(
    <div>
    <HelloComponent/>
    <ImageComponent/>
    <NumberComponent/>
  </div>,
    document.getElementById('root')
);