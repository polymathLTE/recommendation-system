import React from 'react'

export default function Section({ children , border}) {
    return (
        <section className={`mt-5 mx-auto w-[640px] max-w-full p-5 rounded-lg bg-[#ffffff] ${border && "border-t-8 border-slate-700"}`}>
            {children}
        </section>
    )
}
