import React from 'react';

const NavContainer = () => {
    return (
        <div className="row ">
            <a
                href="https://lhmrschoolandcollege.edu.bd/all/notice"
                className="card col-md-4 p-2 text-decoration-none"
                style={{
                    backgroundColor: "#f1f8e9",
                    border: "6px solid #fff",
                    borderRadius: "5px",
                    color:"#19686d",
                }}
            >
            <div className="text-center p-2">
                <i className="fa-solid fa-bullhorn fa-2xl"></i>
                <br />
                <span
                    className="d-block text-uppercase py-2 link"
                    style={{ fontWeight: "700" }}
                >Notice</span
                >
            </div>
            </a>
            <a
                href=""
                className="card col-md-4 p-2 text-decoration-none"
                style={{
                    backgroundColor: "#f1f8e9",
                    border: "6px solid #fff",
                    borderRadius: "5px",
                    color:"#19686d",
                }}
            >
                <div className="text-center p-2">
                    <i className="fa-solid fa-square-poll-horizontal fa-2xl"></i>
                    <br />
                    <span
                        className="d-block text-uppercase py-2"
                        style={{fontWeight:"700"}}
                    >Results</span
                    >
                </div>
            </a>
             <a
                href=""
                className="card col-md-4 p-2 text-decoration-none"
                style={{
            backgroundColor: "#f1f8e9",
            border: "6px solid #fff",
            borderRadius: "5px",
            color: "#19686d"
                }}
            >
                <div className="text-center p-2">
                    <i className="fa-solid fa-table fa-2xl"></i>
                    <br />
                    <span
                        className="d-block text-uppercase py-2 text-decoration-none"
                        style={{fontWeight:"700"}}
                    >Routine</span
                    >
                </div>
            </a>
            <a
                href=""
                className="card col-md-4 p-2 text-decoration-none"
                style={{
                    backgroundColor: "#f1f8e9",
                    border: "6px solid #fff",
                    borderRadius: "5px",
                    color: "#19686d"
                        }}
            >
                <div className="text-center p-2">
                    <i className="fa-solid fa-landmark fa-2xl"></i>
                    <br />
                    <span
                        className="d-block text-uppercase py-2"
                        style={{fontWeight:"700"}}
                    >Departments</span
                    >
                </div>
                </a>
                 <a
                href=""
                className="card col-md-4 p-2 text-decoration-none"
                style={{
                    backgroundColor: "#f1f8e9",
                    border: "6px solid #fff",
                    borderRadius: "5px",
                    color: "#19686d"
                        }}
            >
                <div className="text-center p-2 text-decoration-none">
                    <i className="fa-solid fa-person-chalkboard fa-2xl"></i>
                    <br />
                    <span
                        className="d-block text-uppercase py-2"
                        style={{fontWeight:"700"}}
                    >Teachers</span
                    >
                </div>
                </a>
                <a
                href=""
                className="card col-md-4 p-2 text-decoration-none"
                style={{
                    backgroundColor: "#f1f8e9",
                    border: "6px solid #fff",
                    borderRadius: "5px",
                    color: "#19686d"
                        }}
            >
                <div className="text-center p-2">
                    <i className="fa-solid fa-people-group fa-2xl"></i>
                    <br />
                    <span
                        className="d-block text-uppercase py-2"
                        style={{fontWeight: "700"}}
                    >Students</span
                    >
                </div>
            </a>
            <a
                href="https://live.academyims.com/Student_Portal"
                className="card col-md-4 p-2 text-decoration-none"
                style={{
                    backgroundColor: "#f1f8e9",
                    border: "6px solid #fff",
                    borderRadius: "5px",
                    color: "#19686d"
                        }}
            >
                <div className="text-center p-2">
                    <i className="fa-solid fa-money-check fa-2xl"></i>
                    <br />
                    <span
                        className="d-block text-uppercase py-2"
                        style={{fontWeight: "700"}}
                    >Payment</span
                    >
                </div>
            </a>
        </div >
    );
};

export default NavContainer;