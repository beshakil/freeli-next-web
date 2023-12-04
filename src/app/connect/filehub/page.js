"use client"
import React, { useState, useEffect } from 'react';
import OutsideClickHandler from "react-outside-click-handler";
import '../filehub/TagFile.css'
import TagRelatedPopup from '@/Components/FilehubPage/TagRelatedPopup';
import FileHubHead from '@/Components/FilehubPage/fileHubHead';
import Tags from '@/Components/FilehubPage/tagsComponent';
import TagFilesComponent from '@/Components/FilehubPage/tagFilesComponent';
import LinkComponent from '@/Components/FilehubPage/linkComponent';

function FileHub(props) {
    const [fileViewType, setfileViewType] = useState('tagPanel');
    const [tagPopupShow, setTagPopupShow] = useState(false);

    return (
        <>
            <OutsideClickHandler
                onOutsideClick={() => setTagPopupShow(false)}
            >
                {tagPopupShow ? <TagRelatedPopup
                    tagPopupShow={tagPopupShow}
                    setTagPopupShow={setTagPopupShow}
                /> : ''}
            </OutsideClickHandler>
            <div className="right_container tagFileArea">
                <FileHubHead
                    fileViewType={fileViewType}
                    setfileViewType={setfileViewType}
                />
                {fileViewType === 'tagPanel' ?
                    <Tags
                        tagPopupShow={tagPopupShow}
                        setTagPopupShow={setTagPopupShow}
                    />
                    : ''}
                {fileViewType === 'all_files_in_hub' ?
                    <TagFilesComponent
                        tagPopupShow={tagPopupShow}
                        setTagPopupShow={setTagPopupShow}
                    />
                    : ''}
                {fileViewType === 'all_links' ?
                    <LinkComponent
                        tagPopupShow={tagPopupShow}
                        setTagPopupShow={setTagPopupShow}
                    />
                    : ''}

            </div>
        </>
    );
}


export default FileHub;