import React from 'react'
import { Header } from '../../components/Header'
import { CenteredTabs } from '../../components/Tabs'
import { Question_Form } from '../../components/Questions_form'
import { FormHeader } from '../../components/FormHeader'
export const Form = () => {
    return (
        <>
            <FormHeader />
            <Question_Form />
        </>
    )
}