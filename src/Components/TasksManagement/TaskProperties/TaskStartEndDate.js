"use client";
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import range from "lodash/range";
import { getMonth, getYear } from 'date-fns';
import { VscCalendar } from 'react-icons/vsc';


const TaskStartEndDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState('')
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);
    const [showEnter, setShowEnter] = useState(true);
    const [showEnter2, setShowEnter2] = useState(true);

    // Dummy data for demonstration purposes
    const years = range(2000, getYear(new Date()) + 10, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return (
        <>
            <div className='date_area'>
                <p className='date_label'>Start Date</p>
                <div
                    onMouseEnter={() => setShowEnter(false)}
                    onMouseLeave={() => setShowEnter(true)}
                    className='date_area_div'>
                    <DatePicker
                        className={error1 === true ? "start_Date_task errorDate Focus" : "start_Date_task Focus"}
                        dateFormat="MMMM dd, yyyy"
                        placeholderText="Start date"
                        renderCustomHeader={({
                            date,
                            changeYear,
                            changeMonth,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,
                        }) => (
                            <div className="CalendarDiv"
                            >
                                <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                    {"<"}
                                </button>
                                <div >
                                    <select
                                        value={getYear(date)}
                                        onChange={({ target: { value } }) => changeYear(value)}
                                    >
                                        {years.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        value={months[getMonth(date)]}
                                        onChange={({ target: { value } }) =>
                                            changeMonth(months.indexOf(value))
                                        }
                                    >
                                        {months.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                    {">"}
                                </button>
                            </div>
                        )}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}


                    />
                    {showEnter ?
                        <span style={{ top: '24px', right: '16px' }} className='newCalenderIcon' ></span>
                        :
                        <span style={{ right: '14px', top: '35px', display: 'block' }} className='removeFile' ></span>
                    }
                </div>
            </div>
            <div className='date_area'>
                <p className='date_label'>Due Date</p>
                <div
                    onMouseEnter={() => setShowEnter2(false)}
                    onMouseLeave={() => setShowEnter2(true)}
                    className='date_area_div'>

                    <DatePicker
                        className={error2 === true ? "start_Date_task errorDate Focus" : "start_Date_task Focus"}
                        dateFormat="MMMM dd, yyyy"
                        placeholderText="Due date"

                        renderCustomHeader={({
                            date,
                            changeYear,
                            changeMonth,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,
                        }) => (
                            <div className="CalendarDiv"

                            >
                                <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                    {"<"}
                                </button>
                                <div >
                                    <select
                                        value={getYear(date)}
                                        onChange={({ target: { value } }) => changeYear(value)}
                                    >
                                        {years.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>

                                    <select
                                        value={months[getMonth(date)]}
                                        onChange={({ target: { value } }) =>
                                            changeMonth(months.indexOf(value))
                                        }
                                    >
                                        {months.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                    {">"}
                                </button>
                            </div>
                        )}

                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                    />
                    {showEnter2 ?
                        <span style={{ top: '24px', right: '16px' }} className='newCalenderIcon' ></span>
                        :
                        <span style={{ right: '14px', top: '35px', display: 'block' }} className='removeFile' ></span>
                    }
                </div>
            </div>
        </>
    );
};

export default TaskStartEndDate;