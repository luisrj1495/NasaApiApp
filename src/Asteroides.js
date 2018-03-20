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
					console.log(response);
	        return response.json()
	      })
	      .then((nearAsteroides) => {
					console.log(nearAsteroides);
	        this.setState({ imagenesNasa: nearAsteroides,loading:false })
	      })

	  }

	render(){
		const {imagenesNasa, loading}=this.state
		if (!loading) {
				console.log(imagenesNasa.near_earth_objects["0"].name)
		}
		return(
			<div>
				{!loading ? <TablaAsteroides/>: 'loading' }


			</div>


			)
	}
}
