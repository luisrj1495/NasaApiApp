import React,{Component} from 'react'


export default class ImagenDia extends Component{

  render(){
    const {url,nombreImagen,onClick}=this.props
    return(
        <div>
          <h4 className="truncate">{nombreImagen}</h4>
           <img className="responsive-img" src={url} onClick={onClick}/>
        </div>

    )
  }


}
