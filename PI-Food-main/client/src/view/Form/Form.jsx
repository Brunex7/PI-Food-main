import axios from "axios";
import { useState } from "react";

const Form = ()=>{

    const [form, setForm] = useState({
        name:"",
        summary:"",
        healthScore:"",
        steps:""
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({...form, [property]:value})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/recipes", form)
        .then(res=>alert(res))
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" />
            </div>

            <div>
                <label>Summary: </label>
                <input type="text" value={form.summary} onChange={changeHandler} name="summary" />
            </div>

            <div>
                <label>Health Score: </label>
                <input type="text" value={form.healthScore} onChange={changeHandler} name="healthScore" />
            </div>

            <div>
                <label>Steps: </label>
                <input type="text" value={form.steps} onChange={changeHandler} name="steps" />
            </div>

            <button type="submit">CREATE</button>
        </form>
    )
}

export default Form;