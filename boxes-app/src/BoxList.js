import React, { useState } from "react"
import { v4 as uuid } from 'uuid'//for NewBoxForm

function BoxList() {
    const [boxes, setBoxes] = useState([])
    function add(boxObj){setBoxes(boxes => [...boxes, boxObj])}
    function remove(id){setBoxes(boxes => boxes.filter(box => box.id !== id))}
    function NewBoxForm({ createBox }) {
        const [formData, setFormData] = useState({height: "",width: "",backgroundColor: ""})
        function handleChange(evt){
            const { name, value } = evt.target
            setFormData(formData => ({...formData,[name]: value}))
        }
        function gatherInput(evt){
            evt.preventDefault()
            createBox({ ...formData, id: uuid() })
            setFormData({ height: "", width: "", backgroundColor: "" })
        }
        return (
            <div>
                <form onSubmit={gatherInput}>
                    <div>
                        <label htmlFor="height">Height</label>
                        <input onChange={handleChange} type="text" name="height" value={formData.height} id="height"/>
                    </div>
                    <div>
                        <label htmlFor="width">Width</label>
                        <input onChange={handleChange} type="text" name="width" id="width" value={formData.width}/>
                    </div>
                    <div>
                        <label htmlFor="backgroundColor">Background Color</label>
                        <input onChange={handleChange} type="text" name="backgroundColor" value={formData.backgroundColor} id="backgroundColor"/>
                    </div>
                    <button id="newBoxButton">Add a new box!</button>
                </form>
            </div>
        )
    }
    return (
        <div>
            <NewBoxForm createBox={add} />
            {boxes.map(box=>(
                <div key={box.id}>
                    <div style={{height:`${box.height}em`,width:`${box.width}em`,backgroundColor:box.backgroundColor}}/>
                    <button onClick={()=>remove(box.id)}>Remove The Box!</button>
                </div>
            ))}
        </div>
    )
}
export default BoxList
