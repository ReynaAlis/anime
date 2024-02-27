const mainData = () => {
    fetch('https://animedb-21a06-default-rtdb.firebaseio.com/db.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
        })
}

mainData()