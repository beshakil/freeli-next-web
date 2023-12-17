"use client"
import React, { useState, useRef } from 'react';
import DatePicker from "react-datepicker";
import range from "lodash/range";
import { getMonth, getYear } from 'date-fns';
import { VscCalendar } from 'react-icons/vsc';
import { MdDone } from 'react-icons/md';

const TrackHourPopup = ({ handleTrackHourPopupClose }) => {

    const [hour_breakdown, setHourBreakdown] = useState([
        {
            startDate: new Date(),
            endDate: '',
            forecastedHours: '',
            actualHours: '',
            note: ''
        },
    ]);

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

    const handleAddRow = () => {
        setHourBreakdown([
            ...hour_breakdown,
            { startDate: new Date(), endDate: '', forecastedHours: '', actualHours: '', note: '', showEnter: true, showEnter2: true },
        ]);
    };

    const handleRemoveRow = (index) => {
        if (hour_breakdown.length > 0) {
            const updatedHourBreakdown = [...hour_breakdown];
            updatedHourBreakdown.splice(index, 1);
            setHourBreakdown(updatedHourBreakdown);
        }
    };

    const handleShowEnterChange = (index, field) => {
        const updatedHourBreakdown = [...hour_breakdown];
        updatedHourBreakdown[index][field] = !updatedHourBreakdown[index][field];
        setHourBreakdown(updatedHourBreakdown);
    };

    return (

        <div className='trackCostPopUpCon'>
            <div className='costsPopUp'>
                <div className='TrackHoursPopUp'>
                    <div className="adminRightHead taskHeader" style={{ paddingLeft: '20px' }}>
                        <div className="backToMainProperties">
                            <span className="closeAdminPanel" onClick={handleTrackHourPopupClose}></span>
                            <span className="backtoProperties">Track Hours</span>
                        </div>
                        <div className="TrackHours_head">
                            <div className="TrackHours_head_text"></div>
                        </div>
                    </div>
                    <div className='Track_footer_upper'>
                        <div className='add_entryText !pb-0 !pt-2'>Add an entry below</div>
                        <div className='footer_up'>
                            <div
                                className='Track_col fd_bottom'
                                style={{ width: '38%', marginLeft: '0px' }}>
                                <p>From</p>

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
                                        <span style={{ top: '20px', right: '16px' }} className='newCalenderIcon' ></span>
                                        :
                                        <span style={{ right: '14px', top: '30px', display: 'block' }} className='removeFile' ></span>
                                    }
                                </div>
                            </div>
                            <div
                                className='Track_col td_bottom' style={{ width: '38%', marginLeft: '0px' }}>
                                <p>To</p>

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
                                            <div className="CalendarDiv">
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
                                        <span style={{ top: '20px', right: '16px' }} className='newCalenderIcon' ></span>
                                        :
                                        <span style={{ right: '14px', top: '30px', display: 'block' }} className='removeFile' ></span>
                                    }
                                </div>

                            </div>
                            <div className='Track_col' style={{ width: '12%', marginLeft: '0px' }}>
                                <p>Forcasted</p>
                                <input type='number'
                                    className='hours_count trackTime' placeholder='0'
                                />
                            </div>
                            <div className='Track_col' style={{ width: '12%', marginLeft: '0px' }}>
                                <p>Actual</p>
                                <input type='number'
                                    className='hours_count trackTime' placeholder='0'
                                />
                            </div>
                        </div>

                        <div className='Track_col editContant footer_down'>
                            <textarea
                                className="youtnotesTextArea"
                                name="notes"
                                id="notesTextArea"
                                placeholder="Add a note"
                            ></textarea>
                            <span className='removeFile'></span>
                        </div>
                        <div className='file_attachment_lebel !pt-0 -mt-4' onClick={handleAddRow}>
                            <div className='addBtn'>Add</div>
                        </div>
                    </div>
                    <div className="Track_body Track_body_hour bodyArea">

                        {hour_breakdown.length > 0 ?
                            <>
                                <div className='Track_body_headding hoursTrackHead'>
                                    <div className='Track_col' style={{ width: '3%' }}><MdDone size={14} color='#318fff' /></div>
                                    <div className='Track_col' style={{ width: '29%', marginLeft: '28px' }}>From</div>
                                    <div className='Track_col' style={{ width: '29%', paddingLeft: '9px' }}>To</div>
                                    <div className='Track_col' style={{ width: '12%', paddingLeft: '10px' }}>Forcasted</div>
                                    <div className='Track_col' style={{ width: '10%', paddingLeft: '15px' }}>Actual</div>
                                </div>
                                <div className='Track_fields' >
                                    {hour_breakdown.map((entry, index) => (
                                        <div key={index} className='Track_input_fields hoursTrackInner'>
                                            <div className='top_area'>
                                                <div className='Track_col formdate' style={{ width: '39%' }}>
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
                                                            <span style={{ top: '0px', right: '16px' }} className='newCalenderIcon' ></span>
                                                            :
                                                            <span style={{ right: '14px', top: '10px', display: 'block' }} className='removeFile' ></span>
                                                        }
                                                    </div>
                                                </div>
                                                <div className='Track_col todate'
                                                    style={{ width: '39%', marginLeft: '0px' }}>
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
                                                                <div className="CalendarDiv">
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
                                                            <span style={{ top: '0px', right: '16px' }} className='newCalenderIcon' ></span>
                                                            :
                                                            <span style={{ right: '14px', top: '10px', display: 'block' }} className='removeFile' ></span>
                                                        }
                                                    </div>
                                                </div>
                                                <div className='Track_col' style={{ width: '13%', marginLeft: '0px' }}>
                                                    <input
                                                        type='number'
                                                        name='forecasted_hours'
                                                        className='hours_count trackTime' placeholder='0'
                                                    />
                                                </div>
                                                <div className='Track_col' style={{ width: '10%', marginLeft: '0px' }}>
                                                    <input
                                                        type='number'
                                                        name='actual_hours'
                                                        className='hours_count trackTime' placeholder='0'
                                                    />
                                                    {/* <span className='hoursSpan trackH'>{element.actual_hours > 1 ? 'hrs' : 'hr'}</span> */}
                                                </div>
                                            </div>
                                            <div className='Track_col notesField'
                                                style={{ width: '100%', marginLeft: '0px', display: 'block' }}
                                            >
                                                <textarea
                                                    className="youtnotesTextArea"
                                                    name="notes"
                                                    placeholder="Add a note"
                                                ></textarea>
                                                {/* {element.note !== '' ?
                                            <span className='removeFile'
                                                style={{ display: 'block' }}
                                                onClick={() => handleNoteInput(i)}
                                            ></span> : ''
                                        } */}
                                            </div>
                                            {
                                                // i ?

                                                <div className="removeFile" onClick={handleRemoveRow}
                                                    style={{ display: 'block', top: '37%' }}
                                                ></div>
                                                // : null
                                            }
                                        </div>
                                    ))}
                                </div>
                            </> : <div className='notFoundRow'>Please add a row</div>

                        }
                    </div>
                    <div className="Track_footer_bottom Track_f_last" style={{ gap: '20px' }}>
                        <div className="Track_totalHoures_label">Total</div>
                        <div className="Track_totalHoures">
                            0hrs 0.00mins
                        </div>
                        <div className="Track_totalHoures" style={{ textAlign: 'left' }}>
                            0hrs 0.00mins
                        </div>
                    </div>
                    <div className="Track_body_headding foot_middle Track_hours" style={{ order: 4 }}>
                        <div className="Track_variance_text">variance</div>
                        <div className="Track_variance_amount">0hrs 0.00mins</div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default TrackHourPopup;