import React, { Component } from 'react'

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: 'PRIPYAT'
        }
    }

    onChangeHandler = (event) => {
        let term = event.target.value;
        this.setState({term});
    }

    render() {
        return (
           <div>
                <div className="search-bar">
                    <input placeholder="Search for videos" onChange={this.onChangeHandler} />
                    <button onClick={() => this.props.onClick(this.state.term)}>SEARCH</button>
                    <div className="related-videos">
                        Videos You Might Like
                    </div>
                </div>
           </div>
        )
    }
}