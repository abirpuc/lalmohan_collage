import React from 'react'
import DirectorImage from './DirectorImage'
import InfoMessage from './InfoMessage'

export default function DirectorData({ director }) {
    return (
        <div className="row align-bottom my-4">
            {
                director.id % 2 === 0 ?
                    <>
                        <div className="col-sm-12 col-md-8 d-flex align-items-end">
                            <InfoMessage
                                name={director.name}
                                designation={director.designation}
                                message={director.message}
                            />
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <DirectorImage
                                image={director.pro_img}
                            />
                        </div>

                    </> :

                    <>
                        <div className="col-sm-12 col-md-4">
                            <DirectorImage
                                image={director.pro_img}
                            />
                        </div>
                        <div className="col-sm-12 col-md-8 d-flex align-items-end">
                            <InfoMessage
                                name={director.name}
                                designation={director.designation}
                                message={director.message}
                            />
                        </div>
                    </>
            }
        </div>
    )
}
