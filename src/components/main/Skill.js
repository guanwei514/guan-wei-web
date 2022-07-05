import React from "react";
import { useTranslation } from "../../langs/useTranslation";
import Tooltip from "@mui/material/Tooltip";
import c3Logo from "../../assets/images/c3.png";
import caddLogo from "../../assets/images/cadd.png";
import ethercatLogo from "../../assets/images/ethercat.png";
import gitLogo from "../../assets/images/git.png";
import matlabLogo from "../../assets/images/matlab.png";
import netLogo from "../../assets/images/net.png";
import sqlLogo from "../../assets/images/sql.png";
import vueLogo from "../../assets/images/vue.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import downBg from "../../assets/images/down-bg.png";

const Skill = (props) => {
    const { t } = useTranslation("skill");
    const toolsSet1 = [
        { src: caddLogo, name: "C++" },
        { src: c3Logo, name: "C#" },
        { src: netLogo, name: ".Net Core" },
        { src: matlabLogo, name: "Matlab" },
        { src: gitLogo, name: "Git" },
        { src: vueLogo, name: "Vue" },
    ];
    const toolsSet2 = [
        { src: sqlLogo, name: "SQL Server" },
        { src: ethercatLogo, name: "Ethercat" },
    ];
    return (
        <div className='skill section'>
            <div className='title'>
                <div className='title-inner'>{t("mySkills")}</div>
            </div>
            <div className='subtitle'>{t("subtitle")}</div>
            <div className='main-area'>
                <div className='skill-left'>
                    <div className='skill-area'>
                        <div className='skill-name'>C# / WPF / .NET CORE</div>
                        <div className='skill-bar-outer'>
                            <div className='skill-bar-value1'></div>
                        </div>
                    </div>
                    <div className='skill-area'>
                        <div className='skill-name'>C / C++</div>
                        <div className='skill-bar-outer'>
                            <div className='skill-bar-value2'></div>
                        </div>
                    </div>
                    <div className='skill-area'>
                        <div className='skill-name'>System Control</div>
                        <div className='skill-bar-outer'>
                            <div className='skill-bar-value3'></div>
                        </div>
                    </div>
                    <div className='skill-area'>
                        <div className='skill-name'>English Ability</div>
                        <div className='skill-bar-outer'>
                            <div className='skill-bar-value4'></div>
                        </div>
                    </div>
                </div>
                <div className='skill-right'>
                    <div className='skill-right-title'>{t("tools")}</div>
                    <div className='skill-right-body tools'>
                        <div className='tools1'>
                            {toolsSet1.length > 0 &&
                                toolsSet1.map((e) => (
                                    <Tooltip
                                        title={e.name}
                                        placement='top'
                                        key={e.name}
                                    >
                                        <img
                                            src={e.src}
                                            alt={e.name}
                                        />
                                    </Tooltip>
                                ))}
                        </div>
                        <div className='tools2'>
                            {toolsSet2.length > 0 &&
                                toolsSet2.map((e) => (
                                    <Tooltip
                                        title={e.name}
                                        placement='top'
                                        key={e.name}
                                    >
                                        <img
                                            src={e.src}
                                            alt={e.name}
                                        />
                                    </Tooltip>
                                ))}
                        </div>
                    </div>
                    <div className='skill-right-title'>{t("certificates")}</div>
                    <div className='skill-right-body certificates'>
                        <div className='skill-right-text'>
                            <FiberManualRecordIcon />
                            System Architect, High Tech Institute, The
                            Netherlands ( 05/11/2021 )
                        </div>
                        <div className='skill-right-text'>
                            <FiberManualRecordIcon />
                            Passive Damping for High Tech Systems, High Tech
                            Institute ( 29/07/2021 )
                        </div>
                        <div className='skill-right-text'>
                            <FiberManualRecordIcon />
                            TOEIC 830 ( L : 435 / R : 395 ) ( 23/04/2017 )
                        </div>
                        <div className='skill-right-text'>
                            <FiberManualRecordIcon />
                            Certified LabVIEW Associate Developer (CLAD) (
                            03/19/2015 )
                        </div>
                    </div>
                    <div className='skill-right-title'>{t("patent")}</div>
                    <div className='skill-right-body patent'>
                        <div className='skill-right-text'>
                            <FiberManualRecordIcon />
                            1704434 - Drilling System And Method Thereof (
                            11/09/2020 ) ( Taiwan )
                        </div>
                    </div>
                </div>
            </div>
            <div className='down-bg'>
                <img
                    className='normal'
                    src={downBg}
                    alt='down-bg'
                    data-parallax='{"y": 200}'
                />
                <img
                    className='rwd'
                    src={downBg}
                    alt='down-bg'
                    data-parallax='{"y": 380}'
                />
            </div>
        </div>
    );
};
export default Skill;
