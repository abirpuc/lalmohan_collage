import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../../Context/ContextProvider'
export default function InstituteInfo() {
    const {user} = useContext(AuthContext)
    const [logoUrl, setLogoUrl] = useState('')

    useEffect(()=>{
        setLogoUrl(`src/assets/logo/${user[0]?.logo}`)
    },[user])
    return (
        <div>
            <Container className="d-flex justify-content-around align-items-center my-3">
                <img src={logoUrl} alt="" width="120px" />
                <Link className="text-center text-decoration-none" to="/">
                    <h1 className='text-xl fw-bold' style={{ color: '#19686d' }}>{user[0]?.institute_name}</h1>
                    <h5 className="text-md" style={{ color: "#19686d", fontWeight: 'bold' }}>
                    {user[0]?.address}
                    </h5>
                </Link>
            </Container>
        </div>
    )
}
