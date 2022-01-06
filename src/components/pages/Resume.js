import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io"
import { FaReact, FaHtml5, FaCss3,} from "react-icons/fa"
import {BsBootstrap} from "react-icons/bs"
import {SiJquery, SiGraphql,  } from "react-icons/si"
import {DiMongodb, DiMysql} from "react-icons/di"
import sequelizeIcon from '../../images/sequelize.svg'
import handlebarsIcon from '../../images/handlebarsdotjs.svg'
import resume from '../../images/developer-resume-1-5.pdf'

export default function Resume(){
    return(
        <div className="container-fluid">
            <div className="row justify-content-center align-top">
                <div className="col-xs-12 col-sm-6 text-center">
                <h3>Front-End Skills</h3>
                <br />
                <Tooltip title = "Javascript">
                <i className="skill-icon" alt= "Javascript"><IoLogoJavascript /></i>
                </Tooltip>
                <Tooltip title = "React">
                <i className="skill-icon" alt="ReactJS"><FaReact /></i>
                </Tooltip>
                <Tooltip title = "HTML">
                <i className="skill-icon" alt="HTML"><FaHtml5  /></i>
                </Tooltip>
                <Tooltip title = "Css">
                <i className="skill-icon" alt="CSS"><FaCss3  /></i>
                </Tooltip>
                <Tooltip title = "Bootstrap">
                <i className="skill-icon" alt="Bootstrap"><BsBootstrap  /></i>
                </Tooltip>
                <Tooltip title = "JQuery">
                <i className="skill-icon" alt= "JQuery"><SiJquery  /></i>
                </Tooltip>
                <br/>
                <br/>
            </div>
            <div className="col-xs-12 col-sm-6 text-center">
                <h3> Back-End Skills</h3>
                <br />
                <Tooltip title = "Node">
                <i className="skill-icon" alt= "Node"><IoLogoNodejs /></i>
                </Tooltip>
                <Tooltip title = "MongoDB">
                <i className="skill-icon" alt= "Mongo"><DiMongodb /></i>
                </Tooltip>
                <Tooltip title = "MySQL">
                <i className="skill-icon" alt= "MySQL"><DiMysql /></i>
                </Tooltip>
                <Tooltip title = "GraphQL">
                <i className="skill-icon" alt= "GraphQL"><SiGraphql /></i>
                </Tooltip>
                <Tooltip title="Sequelize">
                <img src={sequelizeIcon} className="svg-icon" alt= "Sequelize" ></img>
                </Tooltip>
                <Tooltip title="Handlebars">
                <img src={handlebarsIcon} className="svg-icon" alt= "Handlebars" ></img>
                </Tooltip>
                <br/>
                <br/>
            </div>

            <div className="col-xs-12 col-sm-6 text-center">
                <h3>Education</h3>
                <br />
                <ul className="resume-ul">
                    <li>Full-Stack Certificate, University of Richmond, 2021</li>
                    <li>PhD, Religious Studies, University of Virginia, 2020</li>
                    <li>MA, Religious Studies, University of Virginia, 2013</li>
                    <li>BA, English and Religious Studies, Kenyon College, 2008</li>
                    <br/>
                    <br/>
                </ul>
            </div>


            <div className="col-xs-12 col-sm-6 text-center">
                <h3>Professional Experience</h3>
                <br />
                <ul className="resume-ul">
                    <li>Editor, University of Virginia, 2013-2021</li>
                    <li>Special Projects Coordinator, University of Virginia, 2018-2021</li>
                    <li>Adjunct Professor, University of Virginia, 2017-2021</li>
                    <li>Program Coordinator, University of Virginia, 2013-2016</li>
                    <br/>
                    <br/>
                </ul>
            </div>

            <div className="container-fluid">
            <div className="row justify-content-center align-top">
            <div className="col-lg text-center resume">
            <a href={resume} target="blank">View Full Resume</a>
            </div>
</div>
</div>
            </div>
        </div>
        




    )
}





