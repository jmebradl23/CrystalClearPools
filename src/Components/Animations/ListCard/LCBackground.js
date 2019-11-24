import React from 'react';
import BigTitle from './LCTitle';
import DisplayOver from './LCContentContainer';
import Hover from './LCHover';
import Content from './LCText';
import ImgCover from './LCImgCover';
import './LCBackground.css';

function LCBackground (props) {

    console.log(props)

    return (
        <div className="lcBackground">
            <ImgCover>
                <DisplayOver>
                    <BigTitle title={props.title}></BigTitle>
                    <Hover>
                        <Content text={props.text}></Content>
                    </Hover>
                </DisplayOver>
            </ImgCover>
        </div>
    )
}

export default LCBackground;