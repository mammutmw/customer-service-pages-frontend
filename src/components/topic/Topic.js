import React from 'react'
import "./Topic.scss"

//Skapa action list
import "@ingka/action-list/style.scss";
import "@ingka/focus/style.scss";
import "@ingka/switch/style.scss";
import "@ingka/svg-icon/style.scss";
import "@ingka/aspect-ratio-image/style.scss";
import "@ingka/button/style.scss";
import "@ingka/forms/style.scss";
import ActionList, { ActionListItem } from '@ingka/action-list';


const Topic = ({ label, caption }) => {
    return (
        <ActionList id="table" className="item1">
            <ActionListItem
                variation="navigational"
                label={label}
                caption={caption}
                className="item2"
            />
        </ActionList>
    )
}

export default Topic
