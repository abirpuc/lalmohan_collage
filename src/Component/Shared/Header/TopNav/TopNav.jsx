import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPhoneSquareAlt, FaRegEnvelope } from "react-icons/fa";
import { AuthContext } from '../../../../Context/ContextProvider';
export default function TopNav({user}) {
    console.log(user)
    return (
        <div>
            <div className="top-nav" style={{ backgroundColor: '#19686d' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="nav-item text-sm">
                                <ul className="nav text-sm">
                                    <li className="nav-link" style={{color: "#ffffff"}}>
                                        <span>EIIN No. {user[0]?.EIIN_number}</span>
                                    </li>
                                    <li className="nav-link d-flex align-items-center" style={{color: "#ffffff"}}>
                                        {/* <i
                                            style={{color: "#ffffff"}}
                                            className="fa fa-envelope"
                                            aria-hidden="true"
                                        ></i> */}
                                        <FaRegEnvelope/>
                                        <span
                                        ><Link
                                            href="/cdn-cgi/l/email-protection"
                                            className="text-decoration-none text-light m-2"
                                            data-cfemail="452d24282c282426242120283c7577052228242c296b262a28"
                                        >{user[0]?.email}</Link
                                            ></span
                                        >&nbsp;&nbsp;
                                    </li>
                                    <li className="nav-link d-flex" style={{color: "#ffffff"}}>
                                    <FaPhoneSquareAlt/>
                                        {/* <i
                                            style={{color: "#ffffff"}}
                                            className="fa fa-phone-square"
                                            aria-hidden="true"
                                        ></i> */}
                                        <span>01716154201</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <ul style={{ float: "right" }} className="nav">
                                <li className="nav-item">
                                    <Link
                                        style={{ color: "#ffffff" }}
                                        className="nav-link"
                                        href="https://live.academyims.com/Student_Portal"
                                    >Payment
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{ color: "#ffffff" }} className="nav-link" href="contact.php">
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        href="https://live.academyims.com"
                                        className="nav-link"
                                        style={{ color: "#ffffff" }}
                                    >Log in</Link
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
