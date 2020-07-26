const app={
    title:'indecision app',
    subtitle:'put your decision on hands of computer',
    options:[]
}
function onFormSubmit(e){
    e.preventDefault()
    const option=e.target.elements.option.value
    if(option){
        app.options.push(option)
        e.target.elements.option.value=''
        Reactrendering()
    }
}
function clearAll(e){
    e.preventDefault()
    app.options=[]
    Reactrendering()
}
const picker=()=>{
    const randomNumber=Math.floor(Math.random() * app.options.length)
    alert(app.options[randomNumber])
}
const target=document.getElementById('test')
function Reactrendering(){
    const templateOne=(
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here is your options':'No Options'}</p>
            <button onClick={clearAll}>Clear All</button>
            <button disabled={app.options.length===0} onClick={picker}>What should i do?</button>
            <ol>
            {app.options.map((option)=><li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
        )
    ReactDOM.render(templateOne,target)
    }
Reactrendering()