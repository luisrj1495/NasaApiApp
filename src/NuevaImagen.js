import React,{Component} from 'react'


export default class NuevaImagen extends Component{

  render(){
    const {url,nameImage}=this.props
    return(
      <div>
         <h4 className="truncate">{nameImage}</h4>
         <img className="responsive-img" src={url} />
      </div>

    )
  }
}
