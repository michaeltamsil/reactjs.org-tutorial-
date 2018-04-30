import React from 'react';

// This is comment ....

class MyComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            title: 'World'
        };
    }

    componentDidMount() {
        console.log('MyComponent is mounted!')
    }

    clickHandler(Title) {
        this.setState({ title })
    }

    render() {
        let { title } = this.state;

        return (
            <div>
                <h1>Hello, { title}!</h1>
                <button onClick={() => this.clickHandler('React')}>
                    Change Title
                </button>
            </div>
        );
    }
}
export default MyComponent
