class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello zzz</h1>
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
        <App />
        <App />
    </div>,
    document.getElementById("root") );
