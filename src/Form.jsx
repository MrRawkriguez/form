import './Form.css'

function form () {

    function handleSubmit(event) {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        const email = formData.get("email")
        console.log(email)
        formEl.reset()
    }

    return (
        <section>
            <h1>Signup Form</h1>
            <form onSubmit={handleSubmit} method='POST'>
                <label htmlFor="email">Email : </label>
                <input type="email" id="email" name="email" class="input" placeholder="bob@bob.com" />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" class="input" />
                <br />
                <button>Submit</button>
            </form>
        </section>
    )
}

export default form