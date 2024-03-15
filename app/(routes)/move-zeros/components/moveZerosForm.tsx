"use client"

import { useState } from "react"

import { moveZeros } from "@/_lib/moveZeros";

export function MoveZerosForm() {
    const [userInput, setUserInput] = useState("");
    const [output, setOutput] = useState("");

    function handleUserInput() {
        const array = userInput.split(/[\s,.]/gi);

        const result = moveZeros(array);

        setOutput(result.toString())
    }

    return (
        <>
            <div className="flex mb-10">
                <input className="text-black mr-5 p-2 outline-none" onChange={(e) => setUserInput(e.target.value)} />

                <button onClick={handleUserInput} className="custom-gradient-border px-5 py-2">Move zeros</button>
            </div>

            <div>{`Result: [${output || "empty"}]`}</div>
        </>
    )
}