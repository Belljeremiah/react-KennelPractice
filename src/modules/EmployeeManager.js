const employeeFetchURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${employeeFetchURL}/employees/${id}`).then(result => result.json())
    },
    getAllEmployees() {
        return fetch(`${employeeFetchURL}/employees`).then(result => result.json())
    },
    delete(id) {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
    },
    post(newEmployee) {
        return fetch(`${employeeFetchURL}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }).then(data => data.json())
    },
    getWithAnimals(id) {
        return fetch(`${employeeFetchURL}/employees/${id}?_embed=animals`)
        .then(result => result.json())
    }
}