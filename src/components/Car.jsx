import "./Car.css"
const Car = (props) => {
    const {id, make, model, color, registration, year, price} = props.myCar

  return (

    
    <table className="car-table">
    <thead className="column-name">
        <tr >
            <th>ID</th>
            <th>MAKE</th>
            <th>MODEL</th>
            <th>COLOR</th>
            <th>REG</th>
            <th>YEAR</th>
            <th>PRICE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{id}</td>
            <td>{make}</td>
            <td>{model}</td>
            <td>{color}</td>
            <td>{registration}</td>
            <td>{year}</td>
            <td>{price}</td>
        </tr>
    </tbody>
</table>
  )
}

export default Car
