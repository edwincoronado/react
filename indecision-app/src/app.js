// JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subtitle: 'This is some info'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Edwin',
    age: 26,
    location: 'San Diego'
};

function getLocation(location) {
    if (location)
        return <p> Location: {location} </p>; 
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);


var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);