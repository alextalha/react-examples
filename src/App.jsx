import React, { useState } from 'react'


const App = () => {

    const  [todo, setTodo] = useState()

    const [todos,setTodos] = useState([
        {id:1 , title: 'Ir ao Mercado' , done:false },
        {id:2 , title: 'Ir ao Mercado' , done:false },
        {id:3 , title: 'Ir ao Mercado' , done:false }
    ])

    const handleFormSubmit = e => {
        e.preventDefault()
        setTodos([...todos, todo])

    }

    const handleInputChange = e => {

        setTodo({
            ...todo,
            id : todos.length+1,
            title: e.target.value,
            done:false,
        })
    }



    return(
        <div>{ todos.map( (i) => <div key={i.id}>{i.title}</div>)}
        
        <br />
        <hr />
        <br />

        <form onSubmit={handleFormSubmit}>
            <input onChange={handleInputChange} type="text" name="todo" id="title" placeholder="Nova Tarefa ..."/>
            <button>Adicionar</button>
        </form>
        </div>

        )
    
}

export default App;


