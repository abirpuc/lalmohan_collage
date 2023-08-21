import React from 'react'

export default function AcademicCalendar() {
  return (
    <div id="calender">
    <div className="container">
      <div className="row">
        <h1 className="title text-left pb-2 py-5">
          <i className="fa-solid fa-calendar-days"></i> Academic Calendar
        </h1>
        <div className="col-md-8 offset-md-2">
          <div className="accordion pb-5" id="accordionExample"></div>
        </div>
      </div>
    </div>
  </div>
  )
}
