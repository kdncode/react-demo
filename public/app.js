class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello zzz {this.props.name} - {this.props.grade} </h1>
                <p>{this.props.children}</p>
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
