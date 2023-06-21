const PersonForm = ({ name, number, handleNewNameChange, handleNewNumberChange, handleAddNewPerson }) => {
    return (
        <form onSubmit={handleAddNewPerson}>
            <div>
                name: 
                <input value={name} onChange={handleNewNameChange} />
            </div>
            <div>
                number: {' '}
                <input value={number} onChange={handleNewNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}


export default PersonForm