function formatName(user) {
    return user.firstName + ' ' + user.lastName
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
}

const element = {
    <h1>
        Hello, {formatName(user)}!
    </h1>
}

ReactDOM.render(
    element,
    document.getElementById('root')
)

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>
}

const element = <h1>Hello, world!</h1>

const element = <div tabIndex="0"></div>;
const element = <img src={user.avatarUrl}></img>
const element = <img src={user.avatarUrl}></img>

const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);

const title = response.potentiallyMaliciousInput;
// this is safe;
const element = <h1>{title}</h1>

const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);

const element = React.createElement(
    'h1',
    {
        className: 'greeting'
    },
    'Hello, world!'
)

// Note: this structure is simplified
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
}
