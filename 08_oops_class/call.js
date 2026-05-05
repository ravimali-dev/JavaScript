// function SetUsername(username){
//     this.username = username
// }

// function createUser(username, email, password){
//     SetUsername.call(this, username) // ✅ fix
    
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);

class React {
        constructor(){
            this.library = "React"
            this.server = "https://localhost:300"

            //requirement
            document
                .querySelector('button')
                .addEventListener('click', this.handleClick.bind(this))

        }
        handleClick(){
            console.log("button clicked");
            console.log(this.server);
        }
    }

    const app = new React();
    // app.handleClick()