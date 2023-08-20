import React from 'react'
import { Link } from 'react-router-dom'
import { news } from '../../../../Data/LatestsNew'
export default function LatestNotice() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row align-items-center" style={{ backgroundColor: "#f1f8e9" }}>
          <div
            className="col-md-2 py-2 text-center"
            style={{ backgroundColor: "#b1dae7" }}
          >
            <small>Latest Notice</small>
          </div>
          <marquee
            className="col-md-10 py-2"
            // scrolldelay={150}
            style={{ backgroundColor: "#f1f8e9" }}
          // onmouseover="this.stop();"
          // onmouseout="this.start();"
          >
            {
              news.map((item, idx) =>
                <>
                  &nbsp;
                  <i className="fa-regular fa-circle-dot fa-sm fa-fade text-danger"></i>
                  &nbsp;
                  <Link className='text-decoration-none text-primary-hover' to="https://lhmrschoolandcollege.edu.bd/all/notice/view/264"
                  ><span className="marquee  text-black"
                  ><b
                  >{item.title}</b
                      ></span
                    ></Link
                  >
                </>
              )
            }
          </marquee>
        </div>
      </div>
    </div>
  )
}
