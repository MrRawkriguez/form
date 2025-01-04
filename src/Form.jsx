import './Form.css'
import React from 'react';
import ReactDOM from 'react-dom/client';

function form () {

    /*function handleSubmit(event) {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        const email = formData.get("email")
        console.log(email)
        formEl.reset()
    }*/

    function signUp(formData) {
        const email = formData.get("email")
        const password = formData.get(password)
        console.log(email)
        console.log(password)
    }

    return (
        <section>
            <h1>Signup Form</h1>
            <form action={signUp} /*onSubmit={handleSubmit} method='POST'*/>
                <label htmlFor="email">Email : </label>
                <input type="email" id="email" name="email" className="input" placeholder="bob@bob.com" />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" className="input" />
                <br />
                <button>Submit</button>
            </form>
        </section>
    )
}

export default form