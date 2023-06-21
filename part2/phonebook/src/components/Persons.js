import Person from './Person'

const Persons = ({ persons, filter }) => {
  return persons
    .filter(person => person.name.toLowerCase().includes(filter))
    .map(({ name, number }) =>
      <Person name={name} number={number} />
    )
}

export default Persons