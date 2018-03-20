import React,{Component} from 'react'
import { Switch, Route } from "react-router-dom"
import Principal from '.Principal'
import Asteroides from './Asteroides'
import Fotos from './Fotos'

export default class Contenedor extends Component{

	render(){
		return(
				<Switch>
			      <Route exact path="/" component={Principal} />
			      <Route path="/asteroides" component={Asteroides} />
			      <Route path="/fotos" component={Fotos} />
			    </Switch>

			)
	}
}