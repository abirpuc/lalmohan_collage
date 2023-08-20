import React from 'react'

export default function DirectorImage(props) {
   
    return (
        <img
            src={`src/assets/speech/${props.image}`}
            alt="speech"
            className="img-fluid mx-auto d-block"
            style={{ maxWidth: "300px" }}
        />
    )
}
