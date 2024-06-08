import React, { useEffect, useState } from 'react'
import { Button, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { User_form_section, User_title_section, Form_check, User_form_submit, User_form_div } from './style'
import { Single_question } from './Single_question'
import { AddNewAnswers } from '../../redux/Slice'
import uuid from 'react-uuid'
import { Background } from '../Questions_form/style'
export const User_form = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const answer_id = uuid()
    const answers = []
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
            open: null,
            required: null
        }]
    )

    useEffect(() => {

        fetch(`http://localhost:4444/get_data/${id}`)
            .then(async res => {
                const data = await res.json()
                setDoc_name(data.document_name)
                setDoc_desc(data.doc_desc)
                setquestion(data.questions || [])
            })

    }, [])

    const submit = () => {
        answers.map((item) => (
            item.Required === true && (item.Answer === "") ?
                console.log(item) : ''
        ))

        // dispatch(AddNewAnswers({ id, answer_id, doc_name, answers }))
        // navigate("/suggested", { replace: true })
    }

    return (
        <Background>
            <User_form_div>
                <User_form_section>
                    <User_title_section>
                        <Typography style={{ fontSize: '26px' }}>{doc_name}</Typography>
                        <Typography style={{ fontSize: '15px' }}>{doc_desc}</Typography>
                    </User_title_section>
                    {
                        questions.map((question, qindex) => (
                            <Single_question quest={question} quest_number={qindex} answer={answers} />
                        ))
                    }
                    <User_form_submit>
                        <Button variant='contained' onClick={submit} style={{ fontSize: '14px', backgroundColor: 'green' }}>Submit</Button>
                    </User_form_submit>

                </User_form_section>
            </User_form_div>
        </Background>
    )
}
