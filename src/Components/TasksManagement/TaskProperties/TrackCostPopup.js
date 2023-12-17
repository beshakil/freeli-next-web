"use client"
import React, { useState, useRef } from 'react';
import { MdAttachFile } from 'react-icons/md';
import CurrencyInput from 'react-currency-input-field';

const TrackCostPopup = ({ handleTrackCostPopupClose }) => {
    const defaultValue = 0;
    const is_edit = true;
    const staticCostBreakdown = [
        { cost_title: 'Sample Cost Title 1', forecasted_cost: 100, actual_cost: 90 },
        { cost_title: 'Sample Cost Title 2', forecasted_cost: 120, actual_cost: 110 },
        // Add more static data as needed
    ];

    const [costBreakdown, setCostBreakdown] = useState(staticCostBreakdown);

    const handleInputChange = (index, event) => {
        const updatedCostBreakdown = [...costBreakdown];
        updatedCostBreakdown[index].cost_title = event.target.value;
        setCostBreakdown(updatedCostBreakdown);
    };

    const handleCurrencyChange = (index, value, name) => {
        const updatedCostBreakdown = [...costBreakdown];
        updatedCostBreakdown[index][name] = value;
        setCostBreakdown(updatedCostBreakdown);
    };

    const handleRemoveClick = (index) => {
        const updatedCostBreakdown = [...costBreakdown];
        updatedCostBreakdown.splice(index, 1);
        setCostBreakdown(updatedCostBreakdown);
    };

    const handleAddRow = () => {
        const newCostBreakdown = [...costBreakdown, { cost_title: '', forecasted_cost: defaultValue, actual_cost: defaultValue }];
        setCostBreakdown(newCostBreakdown);
    };

    return (

        <div className='trackCostPopUpCon'>
            <div className='costsPopUp'>
                <div className='TrackHoursPopUp'>
                    <div className="adminRightHead taskHeader" style={{ paddingLeft: '20px' }}>
                        <div className="backToMainProperties">
                            <span className="closeAdminPanel" onClick={handleTrackCostPopupClose}></span>
                            <span className="backtoProperties">Track Costs</span>
                        </div>
                        <div className="TrackHours_head">
                            <div className="TrackHours_head_text"></div>
                        </div>
                    </div>
                    <div className="Track_body mainBody">
                        {costBreakdown.length > 0 ? (
                            <>
                                <div className='Track_body_heading'>
                                    <div className='Track_col' style={{ width: '57%', marginLeft: '3px' }}>Track your costs</div>
                                    <div className='Track_col' style={{ width: '9%', marginLeft: '-20px' }}>Forecasted</div>
                                    <div className='Track_col' style={{ width: '20%', marginLeft: '0px', textAlign: 'right', position: 'relative', right: '4px' }}>Actual</div>
                                </div>
                                <div className='Track_fields'>
                                    {costBreakdown.map((element, i) => (
                                        <div className='Track_input_fields' key={i}>
                                            <div className='Track_col' style={{ width: '60%' }}>
                                                <input
                                                    type='text'
                                                    placeholder='Actual cost title'
                                                    className={`track_inputBox ${element.cost_title.length > 0 ? 'cost_title' : ''}`}
                                                    name="cost_title"
                                                    value={element.cost_title}
                                                    onChange={(e) => handleInputChange(i, e)}
                                                />
                                            </div>
                                            <div className='Track_col' style={{ width: '20%', marginLeft: '12px' }}>
                                                <CurrencyInput
                                                    className={`track_inputBox ${element.forecasted_cost > 0 ? 'cost_title' : ''}`}
                                                    name="forecasted_cost"
                                                    placeholder="Add Amount"
                                                    decimalsLimit={2}
                                                    prefix="$"
                                                    defaultValue={defaultValue}
                                                    value={element.forecasted_cost}
                                                    onValueChange={(value, name) => handleCurrencyChange(i, value, name)}
                                                />
                                            </div>
                                            <div className='Track_col' style={{ width: '20%', marginLeft: '14px' }}>
                                                <CurrencyInput
                                                    className={`track_inputBox ${element.actual_cost > 0 ? 'cost_title' : ''}`}
                                                    name="actual_cost"
                                                    placeholder="Add Amount"
                                                    decimalsLimit={2}
                                                    defaultValue={defaultValue}
                                                    value={element.actual_cost}
                                                    prefix="$"
                                                    onValueChange={(value, name) => handleCurrencyChange(i, value, name)}
                                                />
                                            </div>

                                            <div className='icon_attachment' style={{ marginTop: '5px', marginLeft: '5px', width: '28px' }} onClick={() => { props.setPopup({ type: 'fileuploadpopup', data: true }); props.set_popup_action_data({}); }}>
                                                <span className='attachment_icon_file' >
                                                    <MdAttachFile className="file_Attachment" color='#0079d1' size={24} />
                                                </span>
                                            </div>

                                            <div className="removeFile trackCosts" style={{ top: '3px' }} onClick={() => handleRemoveClick(i)}></div>

                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className='notFoundRow'> Please add a row </div>
                        )}
                    </div>
                    <div className="Track_footer mainFooter">
                        <div className='add_entryText'>Add an entry below</div>
                        <div className='Track_input_fields' style={{ paddingRight: '8px' }}>
                            <div className='Track_col' style={{ width: '74%' }}>
                                <p>Track your costs</p>
                                <input
                                    type='text'
                                    placeholder='Cost title like food, travel etc'
                                    className='track_inputBox'
                                    name="cost_title"
                                    value="Sample Cost Title"
                                    onChange={() => { }}
                                    autoFocus
                                />
                            </div>
                            <div className='Track_col' style={{ width: '25%', marginLeft: '12px' }}>
                                <p>Forecasted</p>
                                <input
                                    className='track_inputBox cost_title'
                                    name="forecasted_cost"
                                    placeholder="Add Amount"
                                    value="$100.00"
                                    onChange={() => { }}
                                />
                            </div>
                            <div className='Track_col' style={{ width: '25%', marginLeft: '14px' }}>
                                <p>Actual</p>
                                <input
                                    className='track_inputBox cost_title'
                                    name="actual_cost"
                                    placeholder="Add Amount"
                                    value="$90.00"
                                    onChange={() => { }}
                                />
                            </div>
                            {is_edit && (
                                <div className='icon_attachment' style={{ marginTop: '26px', marginLeft: '5px' }} onClick={() => { }}>
                                    <span className='attachment_icon_file'>
                                        <MdAttachFile className="file_Attachment" color='#0079d1' size={24} />
                                    </span>
                                    <span className="numberCircle" style={{ marginTop: '-6px', marginLeft: '-2px' }}>
                                        <span className="attachmentCounter" style={{ marginLeft: '6px', marginRight: '6px' }}>
                                            {costBreakdown.length}
                                        </span>
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className='file_attachment_lebel !pt-0'>
                            {is_edit && (
                                <div className='addBtn' onClick={handleAddRow}>Add</div>
                            )}
                        </div>
                    </div>
                    <div className="footerBottom mainFooterBottom mainFooterBottom">
                        <div className="Track_body_headding foot">
                            <div className="Track_col" style={{ width: '56%' }}>Total</div>
                            <div className="Track_col" style={{ width: '19%', marginLeft: '-24px', textAlign: 'right' }}>$55</div>
                            <div className="Track_col" style={{ width: '20%', marginLeft: '14px', textAlign: 'right' }}>$55</div>
                        </div>
                        <div className="Track_body_headding foot_middle">
                            <div className="Track_variance_text">variance</div>
                            <div className="Track_variance_amount" style={{ marginRight: '38px' }}>$0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackCostPopup;