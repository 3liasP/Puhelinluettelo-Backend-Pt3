// Yhden henkilön renderöivä komponentti
const Person = ({ name, number, deletePerson }) => {
    return (
		<tr>
			<td>{name}</td><td>{number}</td><td><button onClick={deletePerson}>delete</button></td>
		</tr>
    )
}

// Kaikki henkilöt renderöivä komponentti
const Persons = (props) => {
    return (
      <div>
		<table>
			<tbody>
				{props.persons.map(person =>
				<Person
					key={person.name}
					name={person.name}
					number={person.number}
					deletePerson={()=> props.deletePerson(person.id)}
				/>
				)}
			</tbody>
		</table>
      </div>
    )
  }

  export default Persons