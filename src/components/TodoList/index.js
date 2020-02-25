

import React, { Component } from 'react'

import TodoItems from '../TodoItems'

class TodoList extends Component {

    constructor(props){ 
        super(props)
        this.state = {
            tarefa : "",
            items:[]
        }

        this.addItem = this.addItem.bind(this)
        this.verLog = this.verLog.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }


    addItem(e){



        e.preventDefault();

        let state= this.state;

        if(this._tarefaInput.value !== ""){
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            };
          
            this.setState({items : [...state.items, newItem]})

            this.setState({tarefa : "" })
        }
    }

    verLog(e){

        console.log('items',this.state.items)

      
    }



    deleteItem(key){

        let state = this.state
        console.log("Item a ser deletado", key)
        console.log('state',state)

        let newItems = state.items.filter( (item) => {
            return (key !== item.key)

        })

        console.log('newItems',newItems)
        this.setState({
            items : newItems
        })
        

    }


    render() {
        return (
            <div>
             <form onSubmit={this.addItem}>
                 <input type="text" placeholder="Nova Tarefa" name="tarefa" value={this.state.tarefa} ref={ (event) => this._tarefaInput = event } onChange={ (ev) => this.setState({tarefa : ev.target.value})} />
                <button type="submit">Adicionar</button>
             </form>

            <button onClick={this.verLog}>Ver Log</button>   
                <TodoItems lista={this.state.items} delete={this.deleteItem}/>
            </div>
            
        )
    }
}


export default TodoList;