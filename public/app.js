function getName(name){
    alert(name);
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.getInfo = this.getInfo.bind(this);
        this.state = { totalStudents: 10 }
        this.addStudent = this.addStudent.bind(this);
    }

    addStudent() {
        this.setState( { totalStudents: this.state.totalStudents + 1 } );
    }

    getInfo() {
        alert(this.props.children);
    }

    getInitialState(){
        return {num: 0}
    }

    changeStage() {
        this.setState({ num: this.state.num + 1 })
    }

    render() {
        return(
            <div>
                <h1>Hello Class { this.props.name } - { this.props.grade } </h1>
                <p>Total Students: { this.state.totalStudents } </p>
                <p>{ this.props.children }</p>
                <button onClick={ this.getInfo }>Get Info</button>
                <button onClick={ () => { getName(this.props.name) } }>Get Name</button>
                <button onClick={ this.addStudent }>Add Student</button>
                <button onClick={ this.changeStage }>Change Stage {this.state.num}</button>

                {/* Nested component */}
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
        );
    }
}

ReactDOM.render( 
    <div>
        <App name="ReactJS Only" grade="2nd">$19.99</App>
        <App name="AngularJS Only" grade="5th">$39.99</App>
    </div>,
    document.getElementById("root") );