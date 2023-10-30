import { useState } from "react"



export default function DragExample() {
    const [data1, setData1] = useState("hi")
    const [data2, setData2] = useState("")
    return (
        <>
            <p className="font-bold">Drag example</p>
            <p>type something in the second div and drag it into the first</p>
            <div
                onDragStart={(event) => {
                    console.log(event)
                    event.dataTransfer.setData('text/plain', data1)
                }}
                onDragOver={(event) => {
                    event.preventDefault()
                }}
                onDrop={(event) => {
                    event.preventDefault()
                    console.log(event)
                    const data = event.dataTransfer.getData('text/plain');
                    console.log(data)
                    setData1(data)
                    setData2("")

                }}
                className=" bg-slate-500 w-8 h-8" draggable="true">
                {data1}

            </div>

            <div
                onDragStart={(event) => {
                    console.log(event)
                    event.dataTransfer.setData('text/plain', data2)
                }}
                onDragOver={(event) => {
                    event.preventDefault()
                }}
                onDrop={(event) => {
                    event.preventDefault()
                    console.log(event)
                    const data = event.dataTransfer.getData('text/plain');
                    console.log(data)
                    setData1("")
                    setData2(data)

                }}
                className="w-12 h-12 flex content-center bg-slate-500" draggable="true" >
                <input
                    className="w-12 bg-slate-500"
                    value={data2}
                    onInput={e => {
                        const value = e.currentTarget.value;
                        setData2(value)
                    }}
                >
                </input>
            </div>
        </>

    )
}