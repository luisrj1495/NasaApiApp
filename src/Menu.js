import React,{Component} from 'react'
import { Link } from "react-router-dom"

export default class Menu extends Component{

	render(){
		return(
			<header>
				  <nav>
				    <div className="nav-wrapper">
				      <a href="#" className="brand-logo right">Logo</a>
				      <ul id="nav-mobile" className="left hide-on-med-and-down">
				        {this.props.valores.map((value,index)=>{
				        	return( <li><a href="sass.html">{value}</a></li>)
				        })}

				        <li><Link to="/">Inicio</Link></li>
				        <li><Link to="/asteroides">Asteroides</Link></li>
				        <li><Link to="/fotos">Fotos</Link></li>
				      </ul>
				    </div>
				  </nav>

			</header>

			)
	}
}