"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import OutsideClickHandler from "react-outside-click-handler";
import classNames from "classnames";
import SweetAlert from "react-bootstrap-sweetalert";
// import Notifications from './Popups/Notifications';
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
// import AdminLeftLists from './Admin/AdminLeftLists';
// import LeftBarFilterPopup from "../components/Popups/LeftBarFilterPopup";
import { MdAdminPanelSettings } from "react-icons/md";
import Image from "next/image";
import userImage from '../../../public/media/images/img.png'
import { MdAddCircle } from "react-icons/md";
import ComingSoon from "../Popups/ComingSoon";
import LeftBarSettings from "../Popups/LeftBarSettings";
import LeftBarFilterPopup from "../Popups/LeftBarFilterPopup";
// import ProfileNav from "../Popups/ProfileNav";


function LeftSideBar(props) {

  const [collapsed, setCollapsed] = useState(true);
  const [leftSearch, setLeftSearch] = useState(false);
  const [leftFilterVal, setLeftVal] = useState("");
  const [profileNavShow, setProfileNavShow] = useState(false);
  const [leftBarFilterPopup, setLeftBarFilterPopup] = useState(false);

  const [leftBarSettings, setLeftBarSettings] = useState(false);
  const [pinConList, setPinConList] = useState(false);
  const [comingSoon, setComingSoon] = useState(false);
  const leftSearchBlur = (e) => {
    if (e.target.value === "") {
      setLeftSearch(false);
    }
  };
  const filterLeftSide = (e) => {
    let text = e.target.value;
    setLeftVal(text);
  };
  const [noResult, setNoResult] = useState(false);

  const inputForLeftFilter = useRef(null);
  const clearFilterLeft = () => {
    setLeftVal("");
    setLeftSearch(false);
  };

  const [filterOption, setFilterOption] = useState(false);
  const showFilterOption = async () => {
    if (filterOption) {
      setFilterOption(false);
    } else {
      setFilterOption(true);
    }
  };

  const filterOnlyMyRooms = () => {
    setFilterOption(false);
  };
  const filterOthersRooms = () => {
    setFilterOption(false);
  };

  const pathname = usePathname()

  const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            updateThemeClass(storedTheme);
        }
    }, []);

    const updateThemeClass = (type) => {
        if (typeof document !== 'undefined') {
            const items = document.getElementById('root');
            if (items) {
                if (type === 'dark') {
                    items.classList.add('dark');
                } else {
                    items.classList.remove('dark');
                }
            }
        }
    };

    const selectTheme = (type) => {
        localStorage.setItem('theme', type);
        setTheme(type);
        updateThemeClass(type);
    };


  return (
    <>
      <div className="left_container">
        <div className="left_top_bar maiLeftBar">
          <div className="logoSection">
            <Link className="freeli_logo" href="/connect">
            </Link>
          </div>
          <div className="filtrSection">
            <Image className="userLogo" src={userImage} alt="userImage"></Image>
            <div
              className="userInfo_area"
              onClick={() => setProfileNavShow(!profileNavShow)}>
              <p className="userName_area">Manzurul alam</p>
              <p className="userName_company">ITL</p>
            </div>
            <span onClick={() => setLeftBarSettings(!leftBarSettings)} style={leftBarSettings ? { pointerEvents: 'none' } : {}} className="flipNavIcon tooltip4"></span>
          </div>

          {leftBarSettings &&
            <OutsideClickHandler
              onOutsideClick={() => setLeftBarSettings(false)} >
              <LeftBarSettings selectTheme={selectTheme} theme={theme} />
            </OutsideClickHandler>
          }

          {leftBarFilterPopup &&
            <OutsideClickHandler
              onOutsideClick={() => setLeftBarFilterPopup(false)}>
              <LeftBarFilterPopup />
            </OutsideClickHandler>
          }
          <div className="middleSection">
            <div className="dashboardBtnArea">
              <div className="dashboardIcon"></div>
              <div className="dashboarText">Dashboard</div>
            </div>
          </div>
          <div className="leftBtn_area">
            <Link href="/connect/filehub" className="nodecoration">
              <li
                className="Rectangle-btn filehub">
                <div className="fileHubIconForLeft"></div>
                <div className="textLabel">File Hub</div>
                <div className="taskIconForRight"></div>
              </li>
            </Link>
            
            <div
              onClick={() => { setComingSoon(true) }}
              className="nodecoration">
              <li
                className="Rectangle-btn calendar">
                <div className="calendarIconForLeft"></div>
                <div className="textLabel">Calendar</div>
                <div className="taskIconForRight"></div>
              </li>
            </div>

            <Link
              href="/connect/tasks"
              className="nodecoration">
              <li className="Rectangle-btn tasks">
                <div className="taskIconForLeft"></div>
                <div className="textLabel">Tasks</div>
                <div className="taskIconForRight"></div>
              </li>
            </Link>

            <div
              onClick={() => { setComingSoon(true) }}
              className="nodecoration">
              <li
                className="Rectangle-btn profile">
                <div className="profileIcomForLeft"></div>
                <div className="textLabel">Profile</div>
                <div className="taskIconForRight"></div>
              </li>
            </div>
          </div>

          {
            pathname === "/admin/user-management" || pathname === "/admin/team-management" || pathname === "/admin/room-category" || pathname === "/admin/shared-team-tags" ?
              "" : <div className="leftSearchCon">
                <div className="leftSearchLeft">
                  <span className="leftSearchActionBtn"></span>
                  <input
                    value={leftFilterVal}
                    onChange={(event) => filterLeftSide(event)}
                    className="leftSearchInput"
                    type="text"
                    onBlur={leftSearchBlur}
                    placeholder="Search"
                    autoFocus
                  />
                  <span
                    ref={inputForLeftFilter}
                    className="leftSearchCloseBtn remove"
                    onClick={clearFilterLeft}
                  ></span>
                </div>
                <div
                  className="leftSearchRight"
                  style={leftBarFilterPopup ? { pointerEvents: 'none' } : {}}
                  onClick={() => { setLeftBarFilterPopup(true); }}></div>
              </div>}
          <li
            className={classNames("conv_list strict flagPanel")}>
            All Flagged Messages
          </li>
          <TotalUnreadReplyBar />
        </div>
        {
          pathname === "/admin/user-management" || pathname === "/admin/team-management" || pathname === "/admin/room-category" || pathname === "/admin/shared-team-tags" ?
            <div className="left_adminList">
              <Link href="/">
                <p className="list_container_title bactToAll" style={{ marginTop: '0px', marginBottom: "0px", marginLeft: "5px" }}>
                  <span className="backTomain"></span>
                  <MdAdminPanelSettings className="absolute left-5 text-xl" />
                  Admin settings</p>
              </Link>
              <div className="borderLine"></div>
              <div className="group_container adminLists">
                <ul className="list_container settingsList">

                  <li className={` ${pathname === "/admin/user-management" ? "selected conv_list" : "conv_list"}`}>
                    <Link href="/admin/user-management">
                      User management
                    </Link>
                  </li>
                  <li className={` ${pathname === "/admin/team-management" ? "selected conv_list" : "conv_list"}`}>
                    <Link href="/admin/team-management">
                      Team management
                    </Link>
                  </li>
                  <li className={` ${pathname === "/admin/room-category" ? "selected conv_list" : "conv_list"}`}>
                    <Link href="/admin/room-category">
                      Room categories
                    </Link>
                  </li>
                  <li className={` ${pathname === "/admin/shared-team-tags" ? "selected conv_list" : "conv_list"}`}>
                    <Link href="/admin/shared-team-tags">
                      Shared team tags
                    </Link>
                  </li>
                  <li className="conv_list">Subscription and billing</li>
                </ul>
              </div>
            </div>
            :
            <div className="group_container ">
              <ul className="list_container pinned_list">
                <h3
                  className="list_container_title pinBar"
                  onClick={() => setPinConList(!pinConList)}>
                  Pinned
                  <span className="downArrow" style={ pinConList ? { transform: 'rotate(0deg)' } : { transform: 'rotate(180deg)' } }>
                    {collapsed === true ? (
                      <FiChevronUp size={24} color="#ffffff" />
                    ) : (
                      <FiChevronDown size={24} color="#ffffff" />
                    )}
                  </span>
                </h3>
                {
                  pinConList &&
                  <>
                    <li className="conv_list own selected online">
                      <span className="conv_list_title">
                        Shakil Ahmed (You)
                      </span>
                      <span className="conv_list_Opt"></span>
                    </li>
                    <li className="conv_list own online">
                      <span className="conv_list_title">
                        Shakil Ahmed (You)
                      </span>
                      <span className="conv_list_Opt"></span>
                    </li>
                  </>
                }

              </ul>
              <ul className={classNames("list_container create_conv_list")}>
                <h3 className="list_container_title create_conv ">
                  <span> Rooms</span>
                  <MdAddCircle
                    style={{
                      float: "right",
                      position: "relative",
                      fontSize: "26px",
                    }}
                    className="my_room" />
                  <span className="roomsInfo"></span>
                </h3>
                <li className="conv_list own selected online">
                  <span className="conv_list_title">
                    Shakil Ahmed (You)
                  </span>
                  <span className="conv_list_Opt"></span>
                </li>
                <li className="conv_list offline">
                  <span className="conv_list_title">
                    Shakil Ahmed (You)
                  </span>
                  <span className="conv_list_Opt"></span>
                </li>
                <li className="conv_list online">
                  <span className="conv_list_title">
                    Shakil Ahmed (You)
                  </span>
                  <span className="conv_list_Opt"></span>
                </li>
              </ul>
              {filterOption &&
                <OutsideClickHandler onOutsideClick={showFilterOption}>
                  <ul className="filtering_option">
                    <li
                      className={classNames(
                        "optionalList moreOpt_list",
                        props.activeOnlyMyConvdata ? "active" : "inactive"
                      )}
                      onClick={filterOnlyMyRooms}
                    >
                      Rooms created by me
                    </li>
                    <li
                      className={classNames(
                        "optionalList moreOpt_list",
                        props.activeOnlyOtherConvdata ? "active" : "inactive"
                      )}
                      onClick={filterOthersRooms}
                    >
                      Rooms created by others
                    </li>
                  </ul>
                </OutsideClickHandler>
              }
            </div>
        }

      </div>
      {
        comingSoon && <ComingSoon setComingSoon={setComingSoon} />
      }
    </>
  );
}

function TotalUnreadReplyBar(props) {
  return (
    <>
      <div className="threadMsgBar threadedMessages">
        <div className="thread_button"></div>
        <span className="threadMsgText">Threaded Messages</span>
        <span className="unreadCounter">{"10"}</span>
      </div>
    </>
  );
}

export default LeftSideBar;
