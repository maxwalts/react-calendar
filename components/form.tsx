import { useState } from "react"


export default function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    async function handleSubmit() {

        console.log(name)
        console.log(email)

        // see what body takes in the docs. string is one option, so we must stringify it

        const res = await fetch("/api", {
            method: 'post',
            body: JSON.stringify({ name, email })
        })

        if (!res.ok) {
            console.error("error posting form", res)
        }
        else {
            console.log("success", res)
        }

    }

    return (
        <>
            <p className="font-bold">Form example</p>
            <form
                method="post"
                onSubmit={handleSubmit}
                className="bg-slate-200 text-black p-2 flex flex-col gap-2 max-w-sm mx-auto">
                <input className="rounded p-1" value={name} onChange={e => setName(e.target.value)} />
                <input type="email" className="rounded p-1" value={email} onChange={e => setEmail(e.target.value)} />

                <button className="bg-slate-300 rounded" type="submit">
                    Submit
                </button>
            </form>
        </>
    )

}