import React,{Component} from 'react'

export default class TablaAsteroides extends Component{

  render(){
    const {datos} = this.props
    return(
      <table className="highlight centered">
        <thead>
          <tr>
              <th>Nombre</th>
              <th>Diámetro estimado (Km)</th>
              <th>Fecha de determinación de la órbita</th>
              <th>Velocidad relativa</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((value,index) => {
            return(
          <tr key={index}>
              <td>{value.name}</td>
              <td>{value.estimated_diameter.kilometers.estimated_diameter_max}</td>
              <td>{value.orbital_data.orbit_determination_date}</td>
              <td>{value.close_approach_data.length===0?"--":value.close_approach_data[0].relative_velocity.kilometers_per_hour}</td>
          </tr>)
          })}
        </tbody>
      </table>

    )
  }
}
