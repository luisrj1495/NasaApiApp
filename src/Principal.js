import React,{Component} from 'react'
import Menu from './Menu'

export default class Principal extends Component{
	constructor(){
		super()
		this.state={
			valMenu:['Inicio','Asteroides','Foto del día']
			imagenesNasa:{}
		}
	}

componentWillMount() {
    fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY')
      .then((response) => {
        return response.json()
      })
      .then((empleados) => {
        this.setState({ imagenesNasa: empleados })
      })
  }

	render(){
		return(
			<div>
				<Menu  valores={this.state.valMenu}/>

			</div>

			)
	}
}