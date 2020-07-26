class VisibilityToggle extends React.Component{
    constructor(props){
        super(props)
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this)
        this.state={
            bool:true
        }
    }
    render(){
        return (
            <div>
                <h1>visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.bool ? 'Show details':'Hide details'}</button>
                {!this.state.bool && <p>Show some info</p>}
            </div>
        )
    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
            return {
                bool:!prevState.bool
            }
        })
    }
}
ReactDOM.render(<VisibilityToggle />,document.querySelector('#app'))