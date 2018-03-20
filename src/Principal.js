import React,{Component} from 'react'
import Menu from './Menu'
import Contenedor from './Contenedor'

export default class Principal extends Component{
	constructor(){
		super()
		this.state={
			valMenu:[{nombre:'Inicio',url:'/'},
							{nombre:'Asteroides',url:'/asteroides'},
							{nombre:'Fotos',url:'/fotos'}]
		}
	}


	render(){
				const {valMenu}=this.state
		return(
			<div>
				<Menu data={valMenu}/>
				<Contenedor />

			</div>

			)
	}
}
