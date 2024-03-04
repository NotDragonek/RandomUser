window.onload = function(){

const btn = document.getElementById('ClickMe');


    function wykonajDzialanie(data){
        let name = data.results[0].name

        const newDiv = document.createElement("div");

        newDiv.innerHTML = `
        Name: ${name.first} and Surname: ${name.last} <br>
        Street: ${data.results[0].location.street.name} and House number: ${data.results[0].location.street.number} <br>
        Email: ${data.results[0].email}<br>
        Img:<br>
        <img src="${data.results[0].picture.large}" alt="zdjecie osobowe"></img>
        `
        document.querySelector('main').appendChild(newDiv)
        
        console.log(data.results[0].picture.medium)
    }

btn.addEventListener('click',() =>{

    fetch("https://randomuser.me/api")
        .then(respone => respone.json())
        .then(data => wykonajDzialanie(data))
    
})
}