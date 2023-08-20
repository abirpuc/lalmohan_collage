import React from 'react'
import FacultyNotice from '../FacultyNotice/FacultyNotice'
import GovNotice from '../GovNotice/GovNotice'

export default function NoticeBoard() {
    return (
        <div id="notice">
            <div className="container">
                <div className="divtitle">
                    <h2 style={{ textAlign: "left", color: "#19686d" }}>
                        <i className="fa-solid fa-thumbtack"></i> Notice Board
                    </h2>
                    <p className="borde"></p>
                </div>
                <div className="row">
                    <FacultyNotice/>
                    <GovNotice/>
                </div>
            </div>
        </div>
    )
}
