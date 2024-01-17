"use client"
import React from 'react'

export default function Fieldset({ question, name, input1Id, input1Value, label1, input2Id, input2Value, label2, onchange }) {
    return (
        <fieldset>
            <legend className='text-lg'>
                {question}
            </legend>
            <div className='ms-1 mt-4 flex place-items-center gap-3'>
                <input type="radio" name={name} id={input1Id} value={input1Value} onChange={(e) => {
                    onchange(e.target.value)
                }} />
                <label htmlFor={input1Id}>
                    {label1}
                </label>
            </div>
            <div className='ms-1 mt-2 flex place-items-center gap-3'>
                <input type="radio" name={name} id={input2Id} value={input2Value} onChange={(e) => {
                    onchange(e.target.value)
                }} />
                <label htmlFor={input2Id}>
                    {label2}
                </label>
            </div>
        </fieldset>
    )
}
