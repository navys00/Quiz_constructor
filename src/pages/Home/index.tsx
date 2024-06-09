import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { MainBody } from '../../components/MainBody'
import { Template } from '../../components/Template'

export const Home = () => {
    const [searchValue, setsearchValue] = useState('')
    const handleChangeValue = (e: any) => {
        setsearchValue(e.target.value)
    }
    return (
        <>
            <Header searchValue={searchValue} handleChangeValue={handleChangeValue} />
            <Template />
            <MainBody searchvalue={searchValue} />
        </>
    )
}

