class TimeC extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.refreshEverySecond.bind(this);
        this.state = {
            time: undefined,
        };
    }
    refreshEverySecond() {
        setInterval(() => {
          this.setState({
            time : new Date().toLocaleTimeString()
          })
        },1000)
    }
    render () {
        return (
            <div id="myTime">
                <h2>Hello Edwin</h2>
                <h1>{this.state.time}</h1>
            </div>
        );
    }
}

ReactDOM.render(<TimeC />,  document.getElementById('app'));