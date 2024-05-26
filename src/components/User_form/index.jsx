import React, { useEffect, useState } from 'react'
import { Button, Typography } from '@mui/material'
import FormControlLabel from '@mui/material'
import Radio from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../../redux/StateProvider'
import axios from 'axios'
import { Form_check_input, Submit_, User_footer, User_form_questions, User_form_section, User_title_section, Form_check, User_form_submit, User_form_div } from './style'


export const User_form = () => {
    const quest = []
    const post_answer = []
    const navigate = useNavigate()
    const [answer, SetAnswer] = useState([])
    const [{ questions, doc_name, doc_desc }, dispatch] = useStateValue()

    const select = (que, option) => {
        let k = answer.findIndex((ele) => (ele.question === que))
        answer[k].answer = option
        SetAnswer(answer)
    }
    useEffect(() => {
        questions.map((q) => {
            answer.push({
                'question': q.questionText,
                'answer': ''
            })
        })
        console.log(questions)
        questions.map((q, qindex) => {
            quest.push({ 'header': q.questionText, 'key': q.questionText })
        })
    }, [])
    const post_answer_data = []

    const selectinput = (que, option) => {
        let k = answer.findIndex((ele) => (ele.question === que))
        answer[k].answer = option
        SetAnswer(answer)
    }

    const selectCheck = (e, que, option) => {
        let d = []
        let k = answer.findIndex((ele) => (ele.question === que))
        if (answer[k].answer) {
            d = answer[k].answer.split(',')
        }
        if (e === true) {
            d.push(option)
        }
        else {
            let n = d.findIndex((el) => (el.option === option))
            d.splice(option)
        }
        answer[k].answer = d.join(',')
        SetAnswer(answer)
    }
    const submit = () => {
        answer.map((ele) => {
            post_answer_data[ele.question] = ele.answer
        })
        axios.post(`http://localhost:4444/student_response/${doc_name}`, {
            'column': quest,
            'answer_data': [post_answer_data]
        })
        navigate('/submitted')
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
                            <User_form_questions>
                                <Typography style={{ fontSize: '15px', fontWeight: '400', letterSpacing: '.1px', lineHeight: '24px', paddingBottom: '8px' }}>{qindex + 1}. {question.questionText}</Typography>
                                {
                                    question.options.map((ques, index) => (
                                        <div key={index} style={{ marginBottom: '5px' }}>
                                            <div style={{ display: 'flex' }}>
                                                <Form_check>
                                                    {
                                                        question.qustionType === 'radio' ? (
                                                            <label>
                                                                <Form_check_input
                                                                    type={'radio'}
                                                                    name={qindex}
                                                                    value={ques.optionText}
                                                                    required={question.required}
                                                                    style={{ marginLeft: '5px', marginRight: '5px' }}
                                                                    onChange={(e) => { selectCheck(e.target.checked, question.questionText, ques.optionText) }}
                                                                />{ques.optionText}
                                                            </label>) :
                                                            question.qustionType === 'text' ? (
                                                                <label>
                                                                    <Form_check_input
                                                                        type={'text'}
                                                                        name={qindex}
                                                                        value={ques.optionText}
                                                                        required={question.required}
                                                                        style={{ marginLeft: '5px', marginRight: '5px' }}
                                                                        onChange={(e) => { selectinput(question.questionText, e.target.value) }}
                                                                    />
                                                                    {ques.optionText}
                                                                </label>
                                                            ) :
                                                                (
                                                                    <label>
                                                                        <Form_check_input
                                                                            type={question.qustionType}
                                                                            name={qindex}
                                                                            value={ques.optionText}
                                                                            required={question.required}
                                                                            style={{ marginLeft: '5px', marginRight: '5px' }}
                                                                            onChange={() => { select(question.questionText, ques.optionText) }}
                                                                        />{ques.optionText}
                                                                    </label>
                                                                )

                                                    }
                                                </Form_check>
                                            </div>
                                        </div>
                                    ))
                                }
                            </User_form_questions>
                        ))
                    }
                    <User_form_submit>
                        <Button variant='contained' color='primary' onClick={submit} style={{ fontSize: '14px' }}>Submit</Button>
                    </User_form_submit>
                    <User_footer>
                        ННГУ 2024
                    </User_footer>
                </User_form_section>
            </User_form_div>
        </Submit_>
    )
}
