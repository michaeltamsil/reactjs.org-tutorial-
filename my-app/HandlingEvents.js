<button onclick="activeLasers()">
    Active Lasers
</button>

<button onClick={activeLasers}>
    Active Lasers
</button>


function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    );
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        }

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.sate.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

ReactDOM.render(
    <Toggle />
    document.getElementById(`root`)
)
