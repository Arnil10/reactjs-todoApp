import React from "react"
import { useState } from "react"
import { useRef } from "react";

export default function Todoinput(props) {
    const {handleAddTodo,todoValue,setTodoValue} = props
    
    const buttonRef = useRef(null);

    function handleKeyPress(e) {
        if(e.key === "Enter") {
            buttonRef.current.click();
        }
    }

    return (
        <header>
            <input value={todoValue} onChange={(e)=>{ setTodoValue(e.target.value)}} onKeyDown={handleKeyPress} placeholder="Enter todo..." />
            <button ref={buttonRef} onClick={() => {
                
                handleAddTodo(todoValue)
                setTodoValue('')
            }} >Add</button>
        </header>
    )
}