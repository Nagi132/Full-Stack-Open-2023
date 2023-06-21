import { useState, useEffect } from 'react'
import axios from 'axios'

import CountryDetails from './components/CountryDetails'

const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        const mappedData = response.data.map(({ name, capital, area, languages, flags }) => ({
          name: name.common,
          capital: capital,
          area: area,
          languages: languages,
          flag: flags.png
        }));
        setCountries(mappedData);
      })
  }, [])

  const handleChange = (event) => setQuery(event.target.value)

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <p>
        find countries <input value={query} onChange={handleChange} />
      </p>
      {filteredCountries.length > 10 && (
        <div>Too many matches, specify another filter</div>
      )}
      {
        filteredCountries.length <= 10 &&
        filteredCountries.length > 1 &&
        filteredCountries.map(country => (
          <div key={country.name}>{country.name}</div>
        ))}
      {filteredCountries.length === 1 && (<CountryDetails country={filteredCountries[0]} />
      )}
    </div>
  )
}

export default App
