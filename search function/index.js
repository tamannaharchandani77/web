const posts = document.querySelector('#posts')
const search = document.querySelector('#search')
let globalData;

search.addEventListener('input',()=>{
    console.log(search.value);
    let searchText = search.value.trim();
    let filtered = globalData.filter((elem)=>{
      return elem.title.includes(searchText) || elem.body.includes(searchText)
       
    })
    posts.innerHTML = '' 
    // fetchposts ke wjh se sab neeche append hote jaarhe the seach value ke alava wale
    displayPosts(filtered)  
})

function fetchPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
        .then((data)=>{
            displayPosts(data);
            globalData = data;
        })
}

function displayPosts(data){
    console.log(data)
    data.forEach((elem)=>{
        const div = document.createElement('div');
        div.innerHTML = `<h2>${elem.title}</h2><p>${elem.body}</p>`
        console.log(div)
        // const h2 = document.createElement('h2')
        // h2.innerHTML = `${elem.title}`
        // const p = document.createElement('p')
        // p.innerHTML = `${elem.body}`

        // div.appendChild(h2)
        // div.appendChild(p)

        posts.appendChild(div)
    })
}

fetchPosts()

