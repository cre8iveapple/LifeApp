
  async function fetchPersons() {
    const { data: Persons } = await client.models.Person.list();
    await Promise.all(
      Persons.map(async (Person) => {
        return Person;
      })
    );
    console.log(Persons);
    setPersons(Persons);
  }

  async function createPerson(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const { data: newPerson } = await client.models.Person.create({
        filter: form.get("filter"),
    });

    console.log(newPerson);

    fetchPersons();
    event.target.reset();
  }

  async function deletePerson({ id }) {
    const toBeDeletedPerson = {
      id: id,
    };

    const { data: deletedPerson } = await client.models.Person.delete(
      toBeDeletedPerson
    );
    console.log(deletedPerson);

    fetchPersons();
  }

  export {fetchPersons, createPerson, deletePerson}