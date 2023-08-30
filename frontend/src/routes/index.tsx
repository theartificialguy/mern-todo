import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Navigation from './navigation';

const Main = () => {
  return (
    <BrowserRouter>
        <Navigation />
    </BrowserRouter>
  )
}

export default Main