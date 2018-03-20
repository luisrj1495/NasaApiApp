import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';
import Principal from './Principal'
import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<Principal />
	</BrowserRouter> ,
  document.getElementById('root')
);
