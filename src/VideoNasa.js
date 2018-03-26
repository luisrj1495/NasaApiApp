import React,{Component} from 'react'


export default class VideoNasa extends Component{

  render(){
    const {url,videoName}=this.props
    return(
        <div>
	        <div className="row">
	    		<h4 className="center-align truncate">{videoName}</h4>
	    	</div>
       		
	    	<div className="row">

	    		<div className="col s12">
	    			<div class="video-container">
       				 <iframe width="100%" height="500" src={url} frameborder="0" allowfullscreen></iframe>
     				 </div>
	    			
	    		</div>
	    		

	    	</div>
       		 
        </div>

    )
  }


}
