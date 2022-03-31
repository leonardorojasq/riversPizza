import CrudTableRow from './CrudTableRow'
const About = ({data}) => {
  return (
    data.lenght === 0 ?(
      <tr>
        <td colSpan="5">Sin Datos</td>
      </tr>
 ):(
      data.map((el) => <CrudTableRow key={el.id} el={el}/>)
)
  )
}

export default About