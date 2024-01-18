"use client"

import React from 'react'
import Section from './Section'
import Fieldset from './Fieldset'
import { recommender } from '../recommender'

export default function Input() {
    const perception = []
    const input = []
    const processing = []
    const understanding = []

    function onsubmit() {
        console.log({
            perception: perception,
            input: input,
            processing: processing,
            understanding: understanding
        })

        // console.log(recommender({
        //     perception: perception,
        //     input: input,
        //     processing: processing,
        //     understanding: understanding
        // }))

        recommender({
            perception: perception,
            input: input,
            processing: processing,
            understanding: understanding
        })
    }

    return (
        <div className='p-5 bg-slate-300'>
            <Section border={true}>
                <p className='text-[#202124] text-3xl leading-normal'>
                    Questionnaire for Felder and silvermann learning model classification
                </p>
            </Section>

            {/* Perception */}
            <Section>
                <Fieldset
                    question={'When faced with a new concept, do you prefer'}
                    name={"perception1"}
                    input1Id={"perception1_active"}
                    input1Value={"active"}
                    label1={"Experimenting with it hands-on (active)."}

                    input2Id={"perception1_reflective"}
                    input2Value={"reflective"}
                    label2={"Reflecting on it before taking action (reflective)."}
                    onchange={(value) => processing.push(value)}
                    perception={perception}
                />
            </Section>
            <Section>
                <Fieldset
                    question={'In group activities, do you enjoy'}
                    name={"perception2"}
                    input1Id={"perception2_active"}
                    input1Value={"active"}
                    label1={"Taking an active role in discussions and decision-making (active)."}

                    input2Id={"perception2_reflective"}
                    input2Value={"reflective"}
                    label2={"Observing and thinking before participating (reflective)."}
                    onchange={(value) => processing.push(value)}
                />
            </Section>
            <Section>
                <Fieldset
                    question={'In a learning environment, do you prefer'}
                    name={"perception3"}
                    input1Id={"perception3_active"}
                    input1Value={"active"}
                    label1={"Engaging in discussions and group activities (active)."}

                    input2Id={"perception3_reflective"}
                    input2Value={"reflective"}
                    label2={"Spending time reflecting on the material independently (reflective)."}
                    onchange={(value) => processing.push(value)}
                />
            </Section>
            {/* Input */}
            <Section>
                <Fieldset
                    question={'When presented with a problem, do you tend to approach it by focusing on:'}
                    name={"perception4"}
                    input1Id={"perception4_sensing"}
                    input1Value={"sensing"}
                    label1={"The details and practical aspects (sensing)."}

                    input2Id={"perception4_intuitive"}
                    input2Value={"intuitive"}
                    label2={"Abstract concepts and possibilities (intuitive)."}
                    onchange={(value) => perception.push(value)}
                />
            </Section>
            <Section>
                <Fieldset
                    question={'When faced with new information, do you first look for:'}
                    name={"perception5"}
                    input1Id={"perception5_sensing"}
                    input1Value={"sensing"}
                    label1={"Practical applications and real-world examples (sensing)."}

                    input2Id={"perception5_intuitive"}
                    input2Value={"intuitive"}
                    label2={"Theoretical concepts and possibilities (intuitive)."}
                    onchange={(value) => perception.push(value)}
                />
            </Section>
            <Section>
                <Fieldset
                    question={'When learning new information, do you find it more helpful to see:'}
                    name={"perception6"}
                    input1Id={"perception6_visual"}
                    input1Value={"visual"}
                    label1={"Visual representations (charts, graphs) (visual)."}

                    input2Id={"perception6_verbal"}
                    input2Value={"verbal"}
                    label2={"Read and hear verbal explanations (verbal)."}
                    onchange={(value) => input.push(value)}
                />
            </Section>
            <Section>
                <Fieldset
                    question={'When studying, do you often use visual aids like:'}
                    name={"perception7"}
                    input1Id={"perception7_visual"}
                    input1Value={"visual"}
                    label1={"Diagrams, charts, or mind maps (visual)."}

                    input2Id={"perception7_verbal"}
                    input2Value={"verbal"}
                    label2={"Reading and summarizing information in your own words (verbal)."}
                    onchange={(value) => input.push(value)}
                />
            </Section>
            <Section>
                <Fieldset
                    question={'When explaining a concept to others, do you find it easier to use:'}
                    name={"perception8"}
                    input1Id={"perception8_visual"}
                    input1Value={"visual"}
                    label1={"Visual aids and diagrams (visual)."}

                    input2Id={"perception8_verbal"}
                    input2Value={"verbal"}
                    label2={"Articulate your thoughts verbally and provide detailed explanations (verbal)."}
                    onchange={(value) => input.push(value)}
                />
            </Section>
            <Section>
                <Fieldset
                    question={'Do you prefer to learn information:'}
                    name={"perception9"}
                    input1Id={"perception9_sequential"}
                    input1Value={"sequential"}
                    label1={"Step by step in a logical order (sequential)."}

                    input2Id={"perception9_global"}
                    input2Value={"global"}
                    label2={"By making connections between different concepts (global)."}
                    onchange={(value) => understanding.push(value)}
                />
            </Section>
            <Section>
                <Fieldset
                    question={'When tackling a complex task, do you like to:'}
                    name={"perception10"}
                    input1Id={"perception10_sequential"}
                    input1Value={"sequential"}
                    label1={"Break it down into smaller, manageable steps (sequential)."}

                    input2Id={"perception10_global"}
                    input2Value={"global"}
                    label2={"Look at the big picture and understand the overall concept first (global)."}
                    onchange={(value) => understanding.push(value)}
                />
            </Section>
            <Section>
                <Fieldset
                    question={'When working on a project, do you prefer:'}
                    name={"perception11"}
                    input1Id={"perception11_sequential"}
                    input1Value={"sequential"}
                    label1={"Following a structured plan and completing tasks in a linear fashion (sequential)."}

                    input2Id={"perception11_global"}
                    input2Value={"global"}
                    label2={"Adapting to changes and approaching tasks with flexibility (global)."}
                    onchange={(value) => understanding.push(value)}
                />
            </Section>

            <div className='mt-5 mx-auto w-[640px] max-w-full'>
                <button
                    className='rounded-lg px-6 py-3 bg-slate-700 text-white'
                    onClick={() => onsubmit()}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}
