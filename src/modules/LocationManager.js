const locationFetchURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${locationFetchURL}/locations/${id}`).then(result => result.json())
    },
    getAllLocations() {
        return fetch(`${locationFetchURL}/locations`).then(result => result.json())
    },
    delete(id) {
        return fetch(`http://localhost:5002/locations/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
    }
}