import React, { useEffect, useState } from 'react'
import { Button, Typography } from '@mui/material'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Submit_, User_form_section, User_title_section, User_form_div } from './style'
import uuid from 'react-uuid'
export const Suggested = () => {
    const { id } = useParams()
    const answer_id = uuid()
    const [doc_name, setDoc_name] = useState('Новая форма')
    const [doc_desc, setDoc_desc] = useState('Описание')
    const [questions, setquestion] = useState(
        [{
            questionText: "what is 2+2",
            qustionType: "radio",
            options: [
                { optionText: "2" },
                { optionText: "Berlin" },
                { optionText: "4" },

            ],
            open: true,
            required: false
        }]
    )

    useEffect(() => {

        fetch(`http://localhost:4444/get_data/${id}`)
            .then(async res => {
                const data = await res.json()
                setDoc_name(data.document_name)
                setDoc_desc(data.doc_desc)
                setquestion(data.questions)
            })

    }, [])
    return (
        <Submit_>
            <User_form_div>
                <User_form_section>
                    <User_title_section>
                        <Typography style={{ fontSize: '40px', marginBottom: '10px' }}>{doc_name}</Typography>
                        <Typography style={{ fontSize: '16px', marginBottom: '10px' }}>Ответ записан</Typography>
                        <Link style={{ fontSize: '16px' }} to="/">Перейти на главную страницу</Link>
                    </User_title_section>
                </User_form_section>
            </User_form_div>
        </Submit_>
    )
}