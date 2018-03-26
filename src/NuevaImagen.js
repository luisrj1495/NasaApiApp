import React,{Component} from 'react'
import Button from 'material-ui/Button';
import {FacebookShareButton, FacebookIcon} from 'react-share'



export default class NuevaImagen extends Component{

  render(){
    const {url,nameImage}=this.props
    return(

    		<div>
    			<div className="row">
    				 <h4 className="center-align truncate">{nameImage}</h4>
    			</div>

    			<div className="row">

    				<div className="offset-s6  col s3 right-align">
    					<FacebookShareButton
		            url={url}
		            >
			          <Button variant="raised" color="primary">
			     		 	Compartir
			    		</Button>
         			</FacebookShareButton>

    				</div>
    				<div className="col s3 right-align">
    				<a href={url} download> 
			         	 <Button variant="raised" color="primary">
			     		 	Descargar Imagen
			    		</Button>
			         </a>
    				</div>
    			</div>


    			<div className="row">
    				<div className="col s12">
    					<img className="responsive-img" src={url} />
   					</div>
    			</div>




    		</div>
    			
    	





    )
  }
}
