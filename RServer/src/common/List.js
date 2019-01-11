import React from 'react';
import AddItem from './AddItem';

class List extends React.Component
{
    constructor() {
        super();
        this.state = { todos : []};
    }

    addItem= (item)=>{
        
        let items = [...this.state.todos, item];
        this.setState({
            todos: items            
        }, ()=>{console.log(this.state.todos);})   
    }

    onClickHandle= (id)=>{

        let items= this.state.todos.filter(item =>{
            return item.id!==id
        })

        this.setState({
            todos: items
        })
        
    }

    render()
    {
        const itemList = this.state.todos.length?(this.state.todos.map( item => {
            return (
                <li className="collection-item left-align" key={item.id} onClick={()=>{this.onClickHandle(item.id)}}>{item.task}</li>
            )
        })):(
            <li className="collection-item left-align" >BHAI BHAI BHAI...CHILL!!! No Tasks</li>
        )
        return(
            <div className="row">
                <div className="col s6 offset-s3">
                    <ul className="collection">
                        {itemList}
                    </ul>
                </div>
                <AddItem addItem={this.addItem}/>
                
            </div>
        )
    }
}

export default List