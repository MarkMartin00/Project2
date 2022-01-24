
const url = window.location.origin + ('/api');

let button = document.getElementById('btn');

let button1 = document.getElementById('btn1')

button.addEventListener("click", addUser);
button1.addEventListener("click", findUser);


function addUser() {

    console.log("clicked")

    const postUrl = url + "/users/add";

    let ifirstName = document.getElementById('firstName').value;
    let ilastName = document.getElementById('lastName').value;
    let iusername = document.getElementById('username').value;
    let ipassword = document.getElementById('password').value;

    let user = {
        firstName: ifirstName,
        lastName: ilastName,
        username: iusername,
        password: ipassword,
    }

    console.log(user);

    const request = {

        method: 'POST', 
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(postUrl, request)
        .then(res => res.json())
        .then(res => console.log(res));
}


function findUser() {

    console.log("clicked")

    let iusername = document.getElementById('username').value;
    let ipassword = document.getElementById('password').value;


    const getUrl = url + `/users/find/${iusername}`;

    const request = {

        method: 'GET',
        // body: iusername,
        // headers: {
        //     'Content-Type': 'application/json'
        // }

    }

    

    fetch(getUrl, request)
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(data => {

            if ((data.password)===ipassword)
                console.log(data.password)
            else
                console.log("Invalid username or password")


        });

    

}