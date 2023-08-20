import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

export default function InfoMessage(props) {
    const [messageData, setMessageData] = useState('')
    const [length, setLength] = useState(400)
    useEffect(() => {
        setMessageData(props.message)
    }, [props.message])

    const ReadMore = ()=>{
        setLength(length+300)
    }
    return (
        <div className="contentOfPr">
            <h1 className="p_name fw-bold">{props.name}</h1>
            <h4 className="p_title">{props.designation}</h4>
            <p
                className="p_msg text-justify"
                id="speech_18"
                style={{ textAlign: "justify" }}
            >
                {messageData.slice(0, length)}
                {
                    messageData.length <= length ? '':
                    <Button
                    variant="link"
                    data-target="18"
                    className="link-success text-decoration-none p-0"
                    id="readMoreSpeech"
                    onClick={ReadMore}
                >...Read more</Button>
                }
            </p>
        </div>
    )
}
