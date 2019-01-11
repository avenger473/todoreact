import React from 'react'

class AddItem extends React.Component
{   
    constructor(){
        super();
        this.state = { item: ''}
    }

    onChangeHandle= (event)=> {
        this.setState({
            item: event.target.value
        })
    }
    onSubmitHandle= (event)=> {
        event.preventDefault();
        console.log(this.state.item);
        this.props.addItem({task: this.state.item, id: Math.random()});
        this.setState({
            item: ''
        })

    }
    render()
    {
        return(
            <div className="row">
                <div className="input-field col s6 offset-s3">
                    <form onSubmit={this.onSubmitHandle}>
                    <input placeholder="To-Do Item" id="item" type="text" className="validate" onChange= {this.onChangeHandle} value={this.state.item}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddItem;