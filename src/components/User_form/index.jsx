import React, { useEffect, useState } from 'react'
import { Button, Typography } from '@mui/material'
import FormControlLabel from '@mui/material'
import Radio from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useStateValue } from '../../redux/StateProvider'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { Form_check_input, Submit_, User_footer, User_form_questions, User_form_section, User_title_section, Form_check, User_form_submit, User_form_div } from './style'
import { Single_question } from './Single_question'
import { tmp } from './Single_question'
import { AddNewAnswers } from '../../redux/Slice'
import uuid from 'react-uuid'
export const User_form = () => {
    const quest = []
    const post_answer = []
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

    const submit = () => {
        dispatch(AddNewAnswers({ id, answer_id, doc_name, answers }))
    }

    return (
        <Submit_>
            <User_form_div>
                <User_form_section>
                    <User_title_section>
                        <Typography style={{ fontSize: '26px' }}>{doc_name}</Typography>
                        <Typography style={{ fontSize: '15px' }}>{doc_desc}</Typography>
                    </User_title_section>
                    {
                        questions.map((question, qindex) => (
                            <Single_question quest={question} quest_number={qindex} answer={answers} />
                            // <User_form_questions>
                            //     <Typography style={{ fontSize: '15px', fontWeight: '400', letterSpacing: '.1px', lineHeight: '24px', paddingBottom: '8px' }}>{qindex + 1}. {question.questionText}</Typography>
                            //     {
                            //         question.options.map((ques, index) => (
                            //             <div key={index} style={{ marginBottom: '5px' }}>
                            //                 <div style={{ display: 'flex' }}>
                            //                     <Form_check>
                            //                         {
                            //                             question.qustionType === 'radio' ? (
                            //                                 <label>
                            //                                     <Form_check_input
                            //                                         type={'radio'}
                            //                                         name={qindex}
                            //                                         value={ques.optionText}
                            //                                         required={question.required}
                            //                                         style={{ marginLeft: '5px', marginRight: '5px' }}
                            //                                         onChange={(e) => { selectCheck(e.target.checked, question.questionText, ques.optionText) }}
                            //                                     />{ques.optionText}
                            //                                 </label>) :
                            //                                 question.qustionType === 'text' ? (
                            //                                     <label>

                            //                                         <Form_check_input
                            //                                             type={'text'}
                            //                                             name={qindex}
                            //                                             value={''}
                            //                                             required={question.required}
                            //                                             style={{ marginLeft: '5px', marginRight: '5px' }}
                            //                                             onChange={(e) => { selectinput(question.questionText, e.target.value) }}
                            //                                         />

                            //                                     </label>
                            //                                 ) :
                            //                                     (
                            //                                         <label>
                            //                                             <Form_check_input
                            //                                                 type={question.qustionType}
                            //                                                 name={qindex}
                            //                                                 value={ques.optionText}
                            //                                                 required={question.required}
                            //                                                 style={{ marginLeft: '5px', marginRight: '5px' }}
                            //                                                 onChange={() => { select(question.questionText, ques.optionText) }}
                            //                                             />{ques.optionText}
                            //                                         </label>
                            //                                     )

                            //                         }
                            //                     </Form_check>
                            //                 </div>
                            //             </div>
                            //         ))
                            //     }
                            // </User_form_questions>
                        ))
                    }
                    <User_form_submit>
                        <Button variant='contained' color='primary' onClick={submit} style={{ fontSize: '14px' }}>Submit</Button>
                    </User_form_submit>

                </User_form_section>
            </User_form_div>
        </Submit_>
    )
}
