"use client";
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import OutsideClickHandler from 'react-outside-click-handler';

const TaskCheckList = () => {
  const [checkListPopup, setCheckListPopup] = useState(false);
  const [checklistItems, setChecklistItems] = useState([
    { id: '657a9cd67e968a1456a4ffc3', text: 'ythjtyh', completed: false },
    { id: '657a9cf97e968a1456a4ffe0', text: 'grtrt', completed: false },
  ]);
  const [editItemId, setEditItemId] = useState(false);

  const [newText, setNewText] = useState('');

  const handleCheckboxChange = (itemId) => {
    setChecklistItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleEditItem = (itemId) => {
    setEditItemId(!editItemId);
  };

  const handleRemoveItem = (itemId) => {
    setChecklistItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleAddItem = () => {
    if (newText.trim() !== '') {
      const newItem = {
        id: `item_${Date.now()}`,
        text: newText,
        completed: false,
      };

      setChecklistItems((prevItems) => [...prevItems, newItem]);
      setNewText('');
    }
  };

  const progress = 50; // Set the progress percentage
  const checkedItems = 1; // Set the number of checked items
  const totalItems = 2; // Set the total number of checklist items


  const [taskCheckListFilterPopup, setTaskCheckListFilterPopup] = useState(false);
  const [activeOption, setActiveOption] = useState('all');

  const handleOptionClick = (value) => {
    setActiveOption(value);
    // Perform additional actions based on the selected option if needed
  };

  const options = [
    { label: 'Show all', value: 'all' },
    { label: 'Created by me', value: 'createdByMe' },
    { label: 'Created by others', value: 'createdByOthers' },
  ];


  return (
    <div>
      {
        checkListPopup === true ?
          <>
            <div className="checkList_first_row">
              <div className="checkList_head_text">
                {
                  taskCheckListFilterPopup === true ?
                    <OutsideClickHandler onOutsideClick={() => setTaskCheckListFilterPopup(false)}>
                      <ul className="userActionPopup showAll checklistPopup">
                        {options.map((option) => (
                          <li key={option.value} className={option.value === activeOption ? 'active' : ''} >
                            {option.label}
                          </li>
                        ))}
                        <li className="exportChecklist">
                          <a
                            download={`Test One Task_checklist.csv`}
                            id="csvFile"
                            target="_self"
                            href="blob:https://cacdn01.freeli.io/e21a9949-48c4-487e-8b1d-e8377b7de1db"
                          >
                            Export Checklist
                          </a>
                        </li>
                      </ul>
                    </OutsideClickHandler>
                    : ""
                }
                <span onClick={() => setTaskCheckListFilterPopup(true)} style={taskCheckListFilterPopup ? { pointerEvents: 'none' } : {}} className="TaskChecklistFilter" data-tip="Click to filter checklists"></span>
                <span className="ChecklistHead" style={{ marginLeft: '35px' }} >Checklist</span>
              </div>

              <div className="yourProgress taskProgress">{`${progress}% Complete`}</div>
              <div className="progress_bar taskBar">
                <div style={{ height: '10px', width: '100%', backgroundColor: 'rgb(227, 242, 254)', borderRadius: '13px' }}>
                  <div style={{ height: '100%', width: `${progress}%`, backgroundColor: 'rgb(166, 208, 104)', borderRadius: '13px', textAlign: 'right' }}>
                    <span style={{ padding: '10px', color: 'black', fontWeight: '900' }}></span>
                  </div>
                </div>
              </div>
              <div className="checkList_fr_left taskCount">
                <div className="checkList_items">
                  <span className="checkList_checked_items">{`${checkedItems}`}</span>/{`${totalItems}`}
                </div>
              </div>
              <span className="downArrowSpan" style={{ marginLeft: 'auto' }} onClick={() => setCheckListPopup(false)}>
                <MdOutlineKeyboardArrowDown className={`text-[#318fff] text-[25px] ${checkListPopup === true ? 'rotate-180' : ''}`}/>
              </span>
            </div>
            <div className="checkList_area taskCheckListDiv">
              {checklistItems.map((item) => (
                <div className="checklistArea" draggable="true" key={item.id}>
                  <div className="markCheckList">
                    <input
                      type="checkbox"
                      className="checklistMarker"
                      id={`chkbox_${item.id}`}
                      checked={item.completed}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </div>
                  <div className="checklist_label">
                    <p className="labelText" id={`itemtitle_${item.id}`} contentEditable={editItemId ? false : true}>
                      {item.text}
                    </p>
                  </div>
                  <div className="checklistAction">
                    <div className="editFile" onClick={() => handleEditItem(item.id)}></div>
                    <div className="removeFile block" onClick={() => handleRemoveItem(item.id)}></div>
                  </div>
                </div>
              ))}
              <div className="inputvalAtewa">
                <div className="inputCheckBoxVal">
                  <input
                    className="addCheckbox checklist"
                    id="checkListInput"
                    placeholder="Enter a checklist item"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                  />
                  <span
                    className="checkList_plusIcon"
                    data-for="checkList_tooltip"
                    data-tip="Click to create checklist"
                    onClick={handleAddItem}
                  >
                    <i className="fa fa-plus custom_icon"></i>
                  </span>
                </div>
              </div>
            </div>
          </> :
          <div className="yourNotes" onClick={() => setCheckListPopup(!checkListPopup)}>
            <div className="notes_label_area">
              <p className="notes_label">Checklist</p>
              <span className="downArrowSpan">
                <MdOutlineKeyboardArrowDown className={`text-[#318fff] text-[25px] }`} />
              </span>
            </div>
          </div>


      }
      {/*       
      {
        checkListPopup &&
        
      } */}

    </div>
  );
};

export default TaskCheckList;