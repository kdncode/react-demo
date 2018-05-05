class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello zzz {this.props.name} - {this.props.grade} </h1>
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
        <App name="ReactJS Only" grade="2nd"/>
        <App name="AngularJS Only" grade="5th"/>
    </div>,
    document.getElementById("root") );
