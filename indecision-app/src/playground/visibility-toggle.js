class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            visible: false
        };
    }
    toggle() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toogle</h1>
                <button onClick={this.toggle}>{this.state.visible ? 'Hide' : 'Show'}</button>
                <p>{this.state.visible && 'Hello World!!!'}</p>
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



// let showContent = false;
// const toggle = () => {
//     showContent = !showContent;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggle}>{showContent ? 'Hide' : 'Show'}</button>
//             {showContent && <p>Hello world!!!</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// const appRoot = document.getElementById('app');
// render();