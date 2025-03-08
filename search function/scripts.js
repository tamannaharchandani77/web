const promise1 = fetch('https://reqres.in/api/users')
    .then((resp)=>resp.json())
    .then((data)=>console.log(data))