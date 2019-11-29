const ownerFetchURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${ownerFetchURL}/owners/${id}`).then(result => result.json())
    },
    getAllOwners() {
        return fetch(`${ownerFetchURL}/owners`).then(result => result.json())
    },
    deleteOwner(id) {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
    },
    post(newOwner) {
        return fetch(`${ownerFetchURL}/owners`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOwner)
        }).then(data => data.json())
    }
}