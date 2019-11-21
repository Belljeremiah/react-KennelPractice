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
    }
}