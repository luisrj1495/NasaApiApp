import React,{Component} from 'react'
import TablaAsteroides from './TablaAsteroides'

export default class Asteroides extends Component{
	constructor(){
		super()
		this.state={
			imagenesNasa:{},
			loading:true
		}
}

	componentWillMount() {
	    fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=YFvShd9ALvyxYJp0PUahWW1izCcfm6mI3bYWMtXT')
	      .then((response) => {

	        return response.json()
	      })
	      .then((nearAsteroides) => {

	        this.setState({ imagenesNasa: nearAsteroides,loading:false })
	      })

	  }

	render(){
		const {imagenesNasa, loading}=this.state
		return(
			<div>
				{!loading ? <TablaAsteroides datos={imagenesNasa.near_earth_objects}/>: 'loading' }
			</div>


			)
	}
}
