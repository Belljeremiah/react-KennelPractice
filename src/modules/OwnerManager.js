const ownerFetchURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${ownerFetchURL}/owners/${id}`).then(result => result.json())
    },
    getAllOwners() {
        return fetch(`${ownerFetchURL}/owners`).then(result => result.json())
    },
    delete(id) {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
    }
}