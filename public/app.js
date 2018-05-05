function getName(name){
    alert(name);
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.getInfo = this.getInfo.bind(this);
    }

    getInfo(){
        alert(this.props.children);
    }

    render() {
        return(
            <div>
                <h1>Hello zzz {this.props.name} - {this.props.grade} </h1>
                <p>{this.props.children}</p>
                <button onClick={this.getInfo}>Get Info</button>
                <button onClick={ () => {getName(this.props.name)} }>Get Name</button>
                <Header1 />
            </div>
        );
    }
};

class Header1 extends React.Component{
    render() {
        return(
            <div>
                <p>This is a nested react</p>
            </div>
        )
    }
}

ReactDOM.render( 
    <div>
        <App name="ReactJS Only" grade="2nd">$19.99</App>
        <App name="AngularJS Only" grade="5th">$39.99</App>
    </div>,
    document.getElementById("root") );
