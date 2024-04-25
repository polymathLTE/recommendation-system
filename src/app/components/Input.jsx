"use client"

import React from 'react'
import Section from './Section'
import Fieldset from './Fieldset'
import { recommender } from '../recommender'
import { useAppContext } from '../context'

export default function Input() {
    const { setRecommendation, setModal } = useAppContext()

    const perception = []
    const input = []
    const processing = []
    const understanding = []

    function onsubmit(e) {
        e.preventDefault()

        setRecommendation(recommender({
            perception: perception,
            input: input,
            processing: processing,
            understanding: understanding
        }))
        setModal(true)
    }

    return (
        <form
            className='p-5 bg-slate-300'
            onSubmit={onsubmit}
        >

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
                    label1={"Experimenting with it hands-on ."}

                    input2Id={"perception1_reflective"}
                    input2Value={"reflective"}
                    label2={"Reflecting on it before taking action ."}
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
                    label1={"Taking an active role in discussions and decision-making ."}

                    input2Id={"perception2_reflective"}
                    input2Value={"reflective"}
                    label2={"Observing and thinking before participating ."}
                    onchange={(value) => processing.push(value)}
                />
            </Section>
            <Section>
                <Fieldset
                    question={'In a learning environment, do you prefer'}
                    name={"perception3"}
                    input1Id={"perception3_active"}
                    input1Value={"active"}
                    label1={"Engaging in discussions and group activities ."}

                    input2Id={"perception3_reflective"}
                    input2Value={"reflective"}
                    label2={"Spending time reflecting on the material independently ."}
                    onchange={(value) => processing.push(value)}
                />
            </Section>

            {/* Input */}
            <Section>
                <Fieldset
                    question={'When solving problems, do you tend to rely more on'}
                    name={"perception12"}
                    input1Id={"perception12_sensing"}
                    input1Value={"sensing"}
                    label1={"Facts and pratical experience ."}

                    input2Id={"perception4_intuitive"}
                    input2Value={"intuitive"}
                    label2={"Creative insights and possibilities."}
                    onchange={(value) => perception.push(value)}
                />
            </Section>
            <Section>
                <Fieldset
                    question={'When presented with a problem, do you tend to approach it by focusing on:'}
                    name={"perception4"}
                    input1Id={"perception4_sensing"}
                    input1Value={"sensing"}
                    label1={"The details and practical aspects ."}

                    input2Id={"perception4_intuitive"}
                    input2Value={"intuitive"}
                    label2={"Abstract concepts and possibilities."}
                    onchange={(value) => perception.push(value)}
                />
            </Section>
            <Section>
                <Fieldset
                    question={'When faced with new information, do you first look for:'}
                    name={"perception5"}
                    input1Id={"perception5_sensing"}
                    input1Value={"sensing"}
                    label1={"Practical applications and real-world examples ."}

                    input2Id={"perception5_intuitive"}
                    input2Value={"intuitive"}
                    label2={"Theoretical concepts and possibilities."}
                    onchange={(value) => perception.push(value)}
                />
            </Section>

            {/* Processing */}
            <Section>
                <Fieldset
                    question={'When learning new information, do you find it more helpful to see:'}
                    name={"perception6"}
                    input1Id={"perception6_visual"}
                    input1Value={"visual"}
                    label1={"Visual representations (charts, graphs)."}

                    input2Id={"perception6_verbal"}
                    input2Value={"verbal"}
                    label2={"Read and hear verbal explanations."}
                    onchange={(value) => input.push(value)}
                />
            </Section>
            <Section>
                <Fieldset
                    question={'When studying, do you often use visual aids like:'}
                    name={"perception7"}
                    input1Id={"perception7_visual"}
                    input1Value={"visual"}
                    label1={"Diagrams, charts, or mind maps."}

                    input2Id={"perception7_verbal"}
                    input2Value={"verbal"}
                    label2={"Reading and summarizing information in your own words."}
                    onchange={(value) => input.push(value)}
                />
            </Section>
            <Section>
                <Fieldset
                    question={'When explaining a concept to others, do you find it easier to use:'}
                    name={"perception8"}
                    input1Id={"perception8_visual"}
                    input1Value={"visual"}
                    label1={"Visual aids and diagrams."}

                    input2Id={"perception8_verbal"}
                    input2Value={"verbal"}
                    label2={"Articulate your thoughts verbally and provide detailed explanations."}
                    onchange={(value) => input.push(value)}
                />
            </Section>

            {/* Understanding */}
            <Section>
                <Fieldset
                    question={'Do you prefer to learn information:'}
                    name={"perception9"}
                    input1Id={"perception9_sequential"}
                    input1Value={"sequential"}
                    label1={"Step by step in a logical order."}

                    input2Id={"perception9_global"}
                    input2Value={"global"}
                    label2={"By making connections between different concepts."}
                    onchange={(value) => understanding.push(value)}
                />
            </Section>
            <Section>
                <Fieldset
                    question={'When tackling a complex task, do you like to:'}
                    name={"perception10"}
                    input1Id={"perception10_sequential"}
                    input1Value={"sequential"}
                    label1={"Break it down into smaller, manageable steps."}

                    input2Id={"perception10_global"}
                    input2Value={"global"}
                    label2={"Look at the big picture and understand the overall concept first."}
                    onchange={(value) => understanding.push(value)}
                />
            </Section>
            <Section>
                <Fieldset
                    question={'When working on a project, do you prefer:'}
                    name={"perception11"}
                    input1Id={"perception11_sequential"}
                    input1Value={"sequential"}
                    label1={"Following a structured plan and completing tasks in a linear fashion."}

                    input2Id={"perception11_global"}
                    input2Value={"global"}
                    label2={"Adapting to changes and approaching tasks with flexibility."}
                    onchange={(value) => understanding.push(value)}
                />
            </Section>

            <div className='mt-5 mx-auto w-[640px] max-w-full'>
                <button
                    type='submit'
                    className='rounded-lg px-6 py-3 bg-slate-700 text-white'
                >
                    Submit
                </button>
            </div>
        </form>
    )
}
