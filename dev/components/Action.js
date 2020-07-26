import React from 'react'
const Action=(props)=>(
        <div>
            <button className="bigbutton"
            onClick={props.handlePickOne}
            disabled={!props.hasOption}
            >
            What should i do?</button>
        </div>
    )

export default Action