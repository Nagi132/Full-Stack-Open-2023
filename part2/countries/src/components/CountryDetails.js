const CountryDetails = ({ country }) => {
    return <>
        <h1>
            {country.name}
        </h1>
        <div>capital {country.capital}</div>
        <div>area {country.area}</div>
        <h2>languages:</h2>
        <ul>
            {Object.values(country.languages).map((language, index) => (
                <li key={index}>{language}</li>
            ))}
        </ul>
        <img
            src={country.flag}
            alt={`${country.name} flag`}
            style={{ width: '150px', height: '100px' }} />
    </>
}

export default CountryDetails;