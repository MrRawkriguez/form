import './Form.css';
import React from 'react';

function Form() {

    function signUp(formData) {
        const data = Object.fromEntries(formData)
        const dietaryRestrictions = formData.getAll("dietaryRestrictions")
        const allData = {
            ...data,
            dietaryRestrictions
        }
        console.log(allData)

        /*const email = formData.get("email");
        const password = formData.get("password");
        const description = formData.get("description");
        const employmentStatus = formData.get("employmentStatus");
        const dietaryRestrictions = formData.getAll("dietaryRestrictions");
        const favColor = formData.get("favColor");

        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Description:", description);
        console.log("Employment Status:", employmentStatus);
        console.log("Dietary Restrictions:", dietaryRestrictions);
        console.log("Favorite Color:", favColor);*/
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formEl = event.currentTarget;
        const formData = new FormData(formEl);
        signUp(formData);
        formEl.reset();
    }

    return (
        <section>
            <h1>Signup Form</h1>
            <form action={signUp} onSubmit={handleSubmit} method="POST">
                <label htmlFor="email">Email: </label>
                <input defaultValue="HulkHogan@Hulkamania.com" type="email" id="email" name="email" className="input" placeholder="bob@bob.com" />

                <label htmlFor="password">Password: </label>
                <input defaultValue="LegDrop123" type="password" id="password" name="password" className="input" />

                <label htmlFor="description">Description:</label>
                <textarea defaultValue="This is a description brother" name="description" id="description"></textarea>

                <fieldset>
                    <legend>Employment Status:</legend>
                    <label>
                        <input type="radio" name="employmentStatus" value="unemployed" />
                        Unemployed
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" value="part-time" />
                        Part-time
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
                        Full-time
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Dietary Restrictions:</legend>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="kosher" />
                        Kosher
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="vegan" />
                        Vegan
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
                        Gluten-free
                    </label>
                </fieldset>

                <label htmlFor="favColor">What is your favorite color?</label>
                <select id="favColor" name="favColor" defaultValue="blue" required>
                    <option value="" disabled>-- Choose A Color --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>

                <button>Submit</button>
            </form>
        </section>
    );
}

export default Form;
