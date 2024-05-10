import React from "react"

function Box({id,handleRemove,width=5,height=5,backgroundColor="blue"}){
    return (
        <div>
            <div style={{height: `${height}em`,width: `${width}em`,backgroundColor}}/>
            <button onClick={()=>handleRemove(id)}>Remove The Box!</button>
        </div>
    )
}
export default Box