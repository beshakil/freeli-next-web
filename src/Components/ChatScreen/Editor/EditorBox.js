/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useEffect, useState, useRef } from 'react';
// import { EditorState,Editor, convertToRaw, ContentState, Modifier } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import { Picker } from 'emoji-mart';
import FileUpload from '../FileUpload';
// import VoiceSMS from '../VoiceSMS';
import PrivateChat from '../PrivateChat';
import { Tooltip } from 'react-tooltip'
import { Editor, EditorState } from 'draft-js';


function EditorBox({ privateSms, setPrivateSms }) {

    // const [editorState, seteditorState] = useState('');
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );
    const [wrongText, setWrongText] = useState(false);
    const [clear_text_icon, set_clear_text_icon] = useState(false);
    const [clearText, setClearText] = useState(false);
    const [emojiPopup, setEmojiPopup] = useState(false);
    const [attachFile, setAttachFile] = useState(false);
    const [voiceSms, setVoiceSms] = useState(false);
    const [attachPrivateFile, setAttachPrivateFile] = useState(false);

    const onEditorStateChange = (event) => {
        seteditorState(event);
        set_clear_text_icon(true)
    }
    console.log(editorState)
    // Rest of your code...

    const clearS = () => {
        const newState = EditorState.createEmpty()
        setWrongText(false)
        seteditorState(EditorState.moveFocusToEnd(newState));
        set_clear_text_icon(false)
    }
    return (
        <>
            <Tooltip id="rightSection_tooltip" place="top" type="dark" />
            <div id="bottomBox" className="bottom_bar group_conv">

                <div className="send_msg_info"></div>
                <div className="privateMsg_btn" data-for="rightSection_tooltip" data-tip="Send a private message to selected user[s]" onClick={() => setPrivateSms(true)}>Private</div>
                <Tooltip placement="top" overlay={<span>Click voice to text. 'send', == message send, 'clear' == clear text, 'Enter' == new line</span>}>
                    <div className="voiceIcon1MsgBox"></div>
                </Tooltip>
                <div className="emojiContainer"></div>
                {/* <Editor
                    toolbarHidden
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    placeholder="message"
                    onEditorStateChange={(event) => onEditorStateChange(event)}
                    onBlur={() => setWrongText(false)}
                    spellCheck={true}
                /> */}
                <Editor
                    toolbarHidden
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    placeholder="message"
                    spellCheck={true}
                    editorState={editorState} 
                    onChange={setEditorState} />
                {clear_text_icon && <span className="clearAllSrcTestMain" onClick={() => clearS()} data-for="top_head" data-tip="Clear Search"></span>}
                {/* <span className="clearAllSrcTestMain" data-for="rightSection_tooltip" data-tip="Clear Search"  ></span> */}
                <div className="msg_bottom_bar online">
                    <div className="send_msg_opt">
                        <div className="microphone_audio_on" data-for="rightSection_tooltip" data-tip="Send a voice message." onClick={() => setVoiceSms(!voiceSms)} ></div>
                        <div className="attachment_selector" data-for="rightSection_tooltip" data-tip="Attach files" onClick={() => setAttachFile(!attachFile)}  ></div>
                        <div className="emojiPlus" data-for="rightSection_tooltip" data-tip="Insert emoji" onClick={() => setEmojiPopup(!emojiPopup)}></div>
                        <div className="msgSend_btn" data-for="rightSection_tooltip" data-tip="Click to send"  ></div>
                    </div>
                </div>
            </div>
            {
                emojiPopup &&
                <div className="emojiContainer" >
                    <Picker />
                </div>
            }
            {
                attachFile && <FileUpload setAttachFile={setAttachFile} />
            }
            {/* {
                voiceSms && <VoiceSMS setVoiceSms={setVoiceSms} />
            } */}
            {
                privateSms && <PrivateChat
                    setPrivateSms={setPrivateSms}
                    attachPrivateFile={attachPrivateFile}
                    setAttachPrivateFile={setAttachPrivateFile} />
            }
        </>
    )
}

export default EditorBox;