import React,{Component} from 'react'
import ImagenDia from './ImagenDia'
import NuevaImagen from './NuevaImagen'




export default class Fotos extends Component{
	constructor(){
		super()
		this.state={
			imagenesNasa:{},
			loading:true,
			newImageInfo:{}
		}
		this.getValue=this.getValue.bind(this)
		this.updateApiWithNewDate=this.updateApiWithNewDate.bind(this)
		this.saveImage=this.saveImage.bind(this)
	}


	componentWillMount() {
	    fetch('https://api.nasa.gov/planetary/apod?api_key=YFvShd9ALvyxYJp0PUahWW1izCcfm6mI3bYWMtXT')
	      .then((response) => {
	        return response.json()
	      })
	      .then((APODNasa) => {
					// console.log(APODNasa);
	        this.setState({ imagenesNasa: APODNasa,loading:false })
	      })



	  }

		updateApiWithNewDate(newDate){
			console.log(`https://api.nasa.gov/planetary/apod?date=${newDate}&api_key=YFvShd9ALvyxYJp0PUahWW1izCcfm6mI3bYWMtXT`);
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
			console.log(event)
			let newDate=event.target.value
			this.updateApiWithNewDate(newDate)
		}

		saveImage(event){
			img = event.url;
			console.log(event.url);
			window.newW = open (img);
			newW.document.execCommand("SaveAs")
			newW.close()
		}


	render(){
		const {imagenesNasa,newImageInfo,loading}=this.state


		return(

	<div>
				{
					loading ? (
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
				 ): Object.keys(newImageInfo).length === 0?<div><ImagenDia url={imagenesNasa.url} nombreImagen={imagenesNasa.title} onClick={()=>{this.saveImage}}/></div>  :(
						<div>

						<NuevaImagen url={newImageInfo.url} nameImage={newImageInfo.title} />
					</div>
					)
				}
<input type="date" onChange={this.getValue}/>
</div>




			)
	}
}
