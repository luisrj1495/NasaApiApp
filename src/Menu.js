import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'
import nasaLogo from './nasaLogo.png';

export default class Menu extends Component{

	render(){
		return(
			<header>
				  <nav>
				    <div className="nav-wrapper blue darken-1">
				      <a href="#" className="brand-logo right"><img alt="logo" src={nasaLogo} /></a>
				      <ul id="nav-mobile" className="left hide-on-med-and-down">
				        {this.props.data.map((value,index)=>{
				        	return(<li key={index}><NavLink to={value.url}>{value.nombre}</NavLink></li>)
				        })}
				      </ul>
				    </div>
				  </nav>
			</header>


			)
	}
}
