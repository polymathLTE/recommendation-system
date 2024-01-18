"use client"

import React from 'react'
import { useAppContext } from '../context'

export default function Output() {
    const { recommendation, modal, setModal } = useAppContext()

    return modal && (
        <div className='p-5 bg-slate-300 fixed w-full min-h-screen top-0 left-0 h-full'>
            <div className=' mt-5 mx-auto w-[640px] max-w-full p-5 rounded-lg bg-[#ffffff] border-t-8 border-slate-700'>
                <h1 className='text-4xl text-center leading-relaxed capitalize'>Felder and silvermann learning model Recommendation</h1>

                <div className='mt-12'>
                    <div className='grid gap-5'>
                        {recommendation?.map((item, index) => (
                            <p
                                key={index}
                                className='text-lg leading-relaxed'
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
