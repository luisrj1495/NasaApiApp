import React,{Component} from 'react'
import Button from 'material-ui/Button';



export default class Fotos extends Component{
	constructor(){
		super()
		this.state={
			imagenesNasa:{},
			loading:true
		}
	}


	componentWillMount() {
	    fetch('https://api.nasa.gov/planetary/apod?api_key=YFvShd9ALvyxYJp0PUahWW1izCcfm6mI3bYWMtXT')
	      .then((response) => {
	        return response.json()
	      })
	      .then((APODNasa) => {
					console.log(APODNasa);
	        this.setState({ imagenesNasa: APODNasa,loading:false })
	      })

	  }


	render(){


		return(
			<div>

				<Button variant="raised" color="primary">
		Hello World
	</Button>

			</div>

			)
	}
}
