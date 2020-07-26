import React from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import OptionModal from './OptionModal'
export default class IndecisionApp extends React.Component{
        state={
            options:[],
            selectedOption:undefined
        }
    handlePickOne=()=>{
        const randomNum=Math.floor(Math.random()*this.state.options.length)
        this.setState(()=>({selectedOption:this.state.options[randomNum]}))
    }
    handleRemoveAll=()=>{
        this.setState(()=>({options:[]}))
    }
    handleDeleteOption=(optionToRemove)=>{
        this.setState((prevState)=>({options:prevState.options.filter((option)=>optionToRemove!==option)}))
    }
    handleAddOption=(option)=>{
        if(!option){
            return 'Enter the valid value for add option'
        }else if(this.state.options.indexOf(option)>-1){
            return 'This option is already exist'
        }
        this.setState((prevState)=>({options : prevState.options.concat(option)}))
    }
    handleSelectedOption=()=>{
        this.setState(()=>({selectedOption:undefined}))
    }
    componentDidMount(){
        try{
            const options=JSON.parse(localStorage.getItem('options'))
            if(options){
                this.setState(()=>({options}))
            }
        }catch(e){
            //do nothing
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            localStorage.setItem('options',JSON.stringify(this.state.options))
        }
    }
    componentWillUnmount(){
        console.log('Component Will unmount')
    }
    render(){
        return (
            <div>
                <Header name={this.props.title} subtitle={this.props.subtitle}/>
                <div className="container">
                    <Action 
                    hasOption={this.state.options.length>0}
                    handlePickOne={this.handlePickOne}
                    />
                    <div className="widget">
                        <Options 
                        options={this.state.options}
                        handleRemoveAll={this.handleRemoveAll}
                        handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                        handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                selectedOption={this.state.selectedOption}
                handleSelectedOption={this.handleSelectedOption}
                />
            </div>
        )
    }
}
IndecisionApp.defaultProps={
    title:'Indecision App',
}