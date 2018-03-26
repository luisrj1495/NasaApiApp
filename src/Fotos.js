import React,{Component} from 'react'
import VideoNasa from './VideoNasa'
import NuevaImagen from './NuevaImagen'



export default class Fotos extends Component{
	constructor(){
		super()
		this.state={
			loading:true,
			newImageInfo:{}
		}

		this.getValue=this.getValue.bind(this)
	}


		componentWillMount (newDate=''){
			
			fetch(`https://api.nasa.gov/planetary/apod?date=${newDate}&api_key=YFvShd9ALvyxYJp0PUahWW1izCcfm6mI3bYWMtXT`)
				.then((response) => {
					return response.json()
				})
				.then((APODNasaNew) => {
					console.log(APODNasaNew)
					this.setState({ newImageInfo: APODNasaNew, loading:false })

				})


		}

		getValue (event){
			let newDate=event.target.value
			this.componentWillMount(newDate)
		}


	render(){

		const {newImageInfo,loading}=this.state

		return(

	<div className="container">
				{
					loading ? (
					<div className="row center-align">
						<div className="preloader-wrapper big active center-align">
						 <div className="spinner-layer spinner-blue">
							 <div className="circle-clipper left">
								 <div className="circle"></div>
							 </div><div className="gap-patch">
								 <div className="circle"></div>
							 </div><div className="circle-clipper right">
								 <div className="circle"></div>
							 </div>
						 </div>
				   		</div>
				   	</div>
				 ): 
				newImageInfo.media_type!=='image' ? (
					<div>
						<VideoNasa url={newImageInfo.url} videoName={newImageInfo.title} />
					</div>  ):
					(<div>
						<NuevaImagen url={newImageInfo.url} nameImage={newImageInfo.title} />
						
					</div>)
				}

				<div className="row">
					<h5>Seleccione una fecha diferente</h5>

					<div className="col s4">
						<input type="date" onChange={this.getValue}/>
					</div>
				</div>

			
</div>




			)
	}
}
