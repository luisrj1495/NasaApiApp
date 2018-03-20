import React,{Component} from 'react'
import { Switch, Route } from 'react-router-dom';
import Inicio from './Inicio'
import Asteroides from './Asteroides'
import Fotos from './Fotos'

export default class Contenedor extends Component{

	render(){
		return(
				<Switch>
			      <Route exact path="/" component={Inicio} />
			      <Route exact path="/asteroides" component={Asteroides} />
			      <Route exact path="/fotos" component={Fotos} />
			    </Switch>
			)
	}
}
