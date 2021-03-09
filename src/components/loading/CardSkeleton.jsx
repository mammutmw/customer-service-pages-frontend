import React from 'react';
import Skeleton from '@ingka/skeleton';
import "@ingka/skeleton/style.scss";
import '@ingka/variables/style.scss';

const CardSkeleton = (props) => {
    return (
        <a className="link">
            <div>
                <Skeleton/>
            </div>
            <div className="info">
                <div className="text-wrapper">
                    {props.label && <Skeleton width={props.labelWidth} height={props.labelHeight} className="label" />}
                    {props.title && <Skeleton width={props.titleWidth} height={props.titleHeight} className="title" />}
                    {props.body && <Skeleton width={props.bodyWidth} height={props.bodyHeight} className="body" />}
                </div>
            </div>
        </a>
    )
}

export default CardSkeleton;
