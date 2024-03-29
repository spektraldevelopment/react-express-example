import React, { Component } from 'react';

class List extends Component {

    //Init state
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    //Fetch the list on first mount
    componentDidMount() {
        this.getList();
    }

    getList = () => {
        fetch('/api/getList')
        .then((res) => {
            return res.json()
        })
        .then((list) => {
            this.setState({ list })
        })
    }

    render() {
        const { list } = this.state;

        return(
            <div className="App">
                <h1>List of Items</h1>
                {
                    list.length ? (
                    <div>
                        {/* Render the list of items */}
                        {list.map((item, i) => {
                        return(
                            <div key={i}>
                            {item}
                            </div>
                        );
                        })}
                    </div>
                    ) : (
                    <div>
                        <h2>No List Items Found</h2>
                    </div>
                    )
                }

            </div>
        );
    }

}

export default List;