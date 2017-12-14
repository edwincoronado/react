let showContent = false;
const toggle = () => {
    showContent = !showContent;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle}>{showContent ? 'Hide' : 'Show'}</button>
            {showContent && <p>Hello world!!!</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
render();