const promise = fetch('https://reques.in/api/users')
    .then((resp)=>resp.json)
    .then((data)=>console.log(data))