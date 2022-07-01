import React, { useState } from 'react';
import classes from "./App.css"

function Input() {

    const [defaul, setDefaul] = useState({
        name: "",
        password: "",
    })

    const changeInput = (e) => {
        setDefaul({
            ...defaul,
            [e.target.name]: e.target.value
        }
        );
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(defaul);

    }
    return (

        <div className="container">
 <div class="form-group">

            <form onSubmit={submit}>
                <input
                class="form-control"
                    name="name"
                    placeholder='name'
                    type="text"
                    onChange={changeInput}
                    value={defaul.name}
                />
                <input
                class="form-control"
                    name="password"
                    placeholder='password please'
                    type="text"
                    onChange={changeInput}
                    value={defaul.password}
                />
            
                <button 
                class="btn btn-primary"
                type='submit'>Нажать</button>
            </form>

        </div>


        </div>
       
    );
}

export default Input;