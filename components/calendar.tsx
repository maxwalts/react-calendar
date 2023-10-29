"use client"
import { useState, useEffect } from "react"

function getDateOfFirst(selectedDate: Date) {
    const newDate = new Date(selectedDate.toString())
    newDate.setDate(1)
    // console.log(newDate.getDay())
    return newDate
}

function getCellDay(dateOfFirst: Date, row: number, col: number) {
    {/* we want to get the day of firstDate minus dayofFirst plus rownum + col * 7 */ }
    const dayOfFirst: number = dateOfFirst.getDay()
    var isSelectedMonth = true;
    const d = new Date(dateOfFirst.getFullYear(), dateOfFirst.getMonth(), 1 - dayOfFirst + row + col * 7)

    if (d.getMonth() != dateOfFirst.getMonth()) {
        isSelectedMonth = false;
    }
    return { date: d.getDate(), month: d.getMonth(), year: d.getFullYear(), isSelectedMonth }
}

function getDaysInMonth(month: number, year: number) {
    return new Date(year, month + 1, 0).getDate();
}

export default function Calendar() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    const [dateOfFirst, setDateOfFirst] = useState<Date | null>(null)
    const [daysInMonth, setDaysInMonth] = useState<number | null>(null)

    function handleIncrementMonth() {
        const newDate = new Date(selectedDate.toString())
        const currMonth = newDate.getMonth()
        newDate.setMonth((currMonth + 1))
        // console.log("In Increment", { newDate })
        setSelectedDate(newDate)
    }

    function handleDecrementMonth() {
        const newDate = new Date(selectedDate.toString())
        const currMonth = newDate.getMonth()
        newDate.setMonth((currMonth - 1))
        // console.log({ newDate })
        setSelectedDate(newDate)
    }


    function handleDaySelect(year: number, month: number, date: number) {
        const d = new Date(year, month, date)

        setSelectedDate(d)
    }

    useEffect(() => {
        // console.log("you are selecting", selectedDate)
        const dateOfFirst = getDateOfFirst(selectedDate)
        setDateOfFirst(dateOfFirst)
        const daysInMonth = getDaysInMonth(selectedDate.getMonth(), selectedDate.getFullYear())
        setDaysInMonth(daysInMonth)
    }, [selectedDate])

    const btnClass = "bg-blue-500 hover:bg-blue-700 text-white font-semibold px-1 rounded min-w-fit"
    return (
        <div className="bg-slate-50 rounded-lg p-4 border m-8">
            <div className="header text-center min-w-max">

                <div className="font-bold">{`${selectedDate.toDateString().split(" ")[1]} ${selectedDate.toDateString().split(" ")[3]}`}</div>

                <table className="mx-auto">
                    <thead>
                        <tr>
                            <th colSpan={2}>
                                <button className={btnClass} onClick={handleDecrementMonth}>
                                    {`<`}
                                </button>
                            </th>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tues</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th colSpan={2}>
                                <button className={btnClass} onClick={handleIncrementMonth}>
                                    {`>`}
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dateOfFirst && [0, 1, 2, 3, 4, 5].map((j) => (
                            <tr key={`row_${j}`}>
                                <td colSpan={2}></td>
                                {[0, 1, 2, 3, 4, 5, 6].map((i) => {
                                    const cellDayObject = getCellDay(dateOfFirst, i, j)
                                    return <td key={`cell_${i}_${j}`}>
                                        <DateCellButton
                                            onClick={() => {
                                                setSelectedDate(new Date(cellDayObject.year, cellDayObject.month, cellDayObject.date))
                                            }}
                                            cellDayObject={cellDayObject}
                                            selectedDate={selectedDate}
                                        />
                                    </td>
                                })
                                }
                                <td colSpan={2}></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

function DateCellButton({ onClick, cellDayObject, selectedDate }: DateCellButtonProps) {
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        // console.log({ cellDayObject, selectedDate })
        setIsSelected(cellDayObject.date == selectedDate.getDate() && cellDayObject.month == selectedDate.getMonth())
    }, [cellDayObject, selectedDate])

    return (
        <button
            onClick={onClick}
            className={`hover:transition-all duration-200 text-center hover:font-bold hover:cursor-pointer border w-12 h-12 rounded ${!cellDayObject.isSelectedMonth && "text-slate-400"} ${isSelected ? "bg-blue-400 font-bold border-blue-700 border-2" : "bg-white hover:bg-blue-100"}`}
        >
            {cellDayObject.date}
        </button >
    )

}