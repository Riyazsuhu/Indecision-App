import React from 'react'
import Option from './Option'
const Options = (props)=>(
        <div>
            <div className="widget-header">
                <h3 className="widget-header-title">Your Options</h3>
                <button 
            className="button button-link" 
            onClick={props.handleRemoveAll}>Remove All</button>
            </div>
            {props.options.length === 0 && <p className="message">Please enter option to start.</p>}
            {props.options.map((option,index)=> (
            <Option 
            key={option} 
            option={option}
            index={index+1}
            handleDeleteOption={props.handleDeleteOption}
            />))}
        </div>
    )
export default Options