import React, { Component } from 'react'

import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppy from 'react-icons/lib/fa/floppy-o'

class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false
        }
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
    }

    edit() {
        this.setState({
            editing: true
        })
    }
    remove() {
        alert('removing note')
    }
    save() {
        alert(this._newText.value)
    }

    renderForm() {
        return (
            <>
                <div className="note">
                    <form>
                        <textarea ref={input => this._newText = input} />
                        <button><FaFloppy /></button>
                    </form>
                </div>
            </>
        )
    }


    renderDisplay() {
        return (
            <React.Fragment>
                <div className="note">
                    <p>{this.props.children}</p>
                    <span>
                        <button onClick={this.edit} id="edit" ><FaPencil />></button>
                        <button onClick={this.remove} id="remove"><FaTrash /></button>
                    </span>
                </div>
            </React.Fragment>
        )
    }
    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay()

        // if (this.state.editing) {
        //     return this.renderForm();
        // } else {
        //     return this.renderDisplay();
        // }
    }
}

export default Note;
