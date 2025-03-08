const users = document.querySelector('#users')
const search = document.querySelector('#search')
const ascending = document.querySelector('.Ascending')
const descending = document.querySelector('.Descending')
let globalData;

ascending.addEventListener('click',()=>{
    globalData.sort((a,b)=>{
        return a.first_name.localeCompare(b.first_name)
        
    })
    users.innerHTML = ''
    displayData(globalData)
})

descending.addEventListener('click',()=>{
    globalData.sort((a,b)=>{
        return b.first_name.localeCompare(a.first_name)
    })
    users.innerHTML = ''
    displayData(globalData)
})

// async function fetchUsers(){
//         fetch('https://reqres.in/api/users')
//         .then((response)=>response.json())
//         .then((value)=>{
//             globalData = value.data;
//             displayData(value.data)
//         })
// }

// wait krega, jisko rukna h woh either await likho ya .then me
async function fetchUsers(){
    const response = await fetch('https://reqres.in/api/users')
    const value = await response.json()
    displayData(value.data)
    globalData = value.data
}

fetchUsers()


function displayData(data){
    data.forEach((elem)=>{
        const div = document.createElement('div')
        div.innerHTML = `<img src ="${elem.avatar}"><h2>${elem.first_name}${' '}${elem.last_name}</h2>`
        users.appendChild(div)
    })
}

