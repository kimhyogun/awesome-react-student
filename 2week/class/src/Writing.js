import React, { Component } from "react"
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"


class Writing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            content: "",
            isWritingTitleFocused: false,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.save(this.state)
        this.setState({
            title: "",
            content: ""
        })
    }

    handleFocus = (e) => {
        if (!this.state.isWritingTitleFocused) {
            this.setState({
                isWritingTitleFocused: true
            })
        }
    }



    render() {

        const writingTitleProps = {
            title: this.state.title,
            handleChange: this.handleChange,
            handleFocus: this.handleFocus
        }

        const writingContentProps = {
            content: this.state.content,
            handleChange: this.handleChange
        }

        const { handleSubmit } = this

        const WritingTitle = (props) => (
            <div className='input-field'>
                <input
                    type='text'
                    name='title'
                    value={props.title}
                    onChange={props.handleChange}
                // onFocus={props.handleFocus}
                />
            </div>
        )

        const WritingContent = (props) => (
            <div className='input-field'>
                <input
                    type='text'
                    name='content'
                    value={props.content}
                    onChange={props.handleChange}
                />
            </div>
        )

        const { isWritingTitleFocused } = this.state

        return (
            <div>
                <form>
                    <WritingTitle {...writingTitleProps} />
                    {isWritingTitleFocused && <WritingContent />}
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default Writing