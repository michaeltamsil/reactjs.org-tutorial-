function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    )
    return (
        <ul>{listItems}</ul>
    )
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
)


const todoItems = todos.map((todo) =>
    <li key={todo.id}>
        {todo.text}
    </li>
)


const todoItems = todos.map((todo, index) =>
    // Only do this if items have no stable IDs
    <li key={index}>
        {todo.text}
    </li>
)


//incorrect Key Usage
function ListItem(props) {
    const value = props.value;
    return (
        // Wrong! There is no need to specify the key here:
        <li>
            {value}
        </li>
    )
}

function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Wrong! The key should have been specified here:
        <ListItem key={number.toString()} value={number} />
    )
    return (
        <ul>
            {listItems}
        </ul>
    )
}


const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    documeng.getElementById('root')
)


function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    )

    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    )

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}

const posts = [
    {
        id: 1,
        title: 'Hello World',
        content: 'Welcome to learning React!'
    },{
        id: 2,
        title: 'Installation',
        content: 'You can install React from npm.'
    }
]

ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
)


function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {
                numbers.map((number) =>
                    <ListItem key={number.toString()} value={number} />
                )
            }
        </ul>
    )
    const listItems = numbers.map((number) =>{
        return (
            <ListItem key={number.toString()}
                value={number} />
        )
    })
    return (
        <ul>
            {listItems}
        </ul>
    )

}
