import React from "react";
import leftPic from "../../assets/images/left.svg";
import rightPic from "../../assets/images/right.svg";
import ClickBtn from "../common/ClickBtn";
import { scrollTo } from "../../helpers/router";

const BottomTop = () => {
    return (
        <div className='bottom-top'>
            <div className='bg-shape'>
                <img
                    src={leftPic}
                    data-parallax='{"x": -150}'
                    alt='shape'
                    className='shape-left'
                />
                <img
                    src={rightPic}
                    data-parallax='{"x": 150}'
                    alt='shape'
                    className='shape-right'
                />
            </div>
            <div>
                <div className='bottom-top-inner row align-items-center'>
                    <div className='left-area'>
                        <div className='bottomTop-heading pixFadeUp'>
                            <h2 className='title'>
                                Thank You For Visiting
                                <br />
                                My Web.
                            </h2>

                            <p>感謝您的造訪。</p>
                        </div>
                    </div>
                    <div className='right-area'>
                        <ClickBtn
                            width='180px'
                            type='secBtn'
                            text={"Back To Top"}
                            fontSize='20px'
                            onClick={() => scrollTo(0, 600, `.banner`)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomTop;
