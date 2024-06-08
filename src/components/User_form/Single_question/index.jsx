import React, { useState } from 'react'
import { TextField_input, Form_check_input, Submit_, User_footer, User_form_questions, User_form_section, User_title_section, Form_check } from '../style'
import { Typography } from '@mui/material'
import uuid from 'react-uuid'
import { validate } from '../../../validators/validator';
export let tmp;
export const Single_question = ({ quest, quest_number, answer }) => {

    const [currentAnswer, setCurrent] = useState({ 'Number_Question': quest_number + 1, 'Question': quest.questionText, 'Number_Ans': [], 'Answer': [], 'Required': quest.required })
    const [error, setError] = useState(false)
    const [text, settext] = useState('')
    const unique_number = uuid()
    answer[quest_number] = currentAnswer

    const handle = (e, optionText, option_number, QText, QNumber) => {
        const { type, name, value, checked } = e.target;

        if (type === 'checkbox') {
            setCurrent(prev => {

                const updatedAnswer = checked ? {
                    ...prev,
                    Number_Question: QNumber,
                    Question: QText,
                    Number_Ans: [...prev.Number_Ans, option_number],
                    Answer: [...prev.Answer, optionText],
                    Required: quest.required
                } : {
                    ...prev,
                    Number_Question: QNumber,
                    Question: quest.questionText,
                    Number_Ans: prev.Number_Ans.filter(item => item !== option_number),
                    Answer: prev.Answer.filter(item => item !== optionText),
                    Required: quest.required
                };
                answer[quest_number] = updatedAnswer;
                console.log(updatedAnswer);

                return updatedAnswer;
            });


        } else if (type === 'radio') {

            setCurrent(prev => {
                const updatedAnswer = {
                    ...prev,
                    Answer: optionText,
                    Number_Ans: option_number,
                    Required: quest.required
                };

                answer[quest_number] = updatedAnswer;
                console.log(updatedAnswer);

                return updatedAnswer;
            });
        } else {
            if (!validate(value)) {
                setError(true)
            }
            else {
                setError(false)
                settext(value);
                setCurrent(prev => {
                    const updatedAnswer = {
                        ...prev,
                        Answer: value,
                        Number_Ans: '',
                        Required: quest.required
                    };

                    answer[quest_number] = updatedAnswer;
                    //console.log(updatedAnswer);

                    return updatedAnswer;
                });
            }

        }
    }

    return (
        <User_form_questions>
            <Typography style={{ fontSize: '15px', fontWeight: '400', letterSpacing: '.1px', lineHeight: '24px', paddingBottom: '8px' }}>{quest_number + 1}. {quest.questionText}</Typography>
            {quest.required ? <Typography style={{ fontSize: '12px', fontWeight: '400', letterSpacing: '.1px', lineHeight: '24px', paddingBottom: '8px', color: 'red' }}>Обязательный вопрос</Typography> : ''}
            {
                quest.options.map((ques, index) => (
                    <div style={{ marginBottom: '5px' }}>
                        <div style={{ display: 'flex' }}>
                            <Form_check>
                                {quest.qustionType !== 'text' ? (<label>
                                    <Form_check_input
                                        type={quest.qustionType}
                                        name={unique_number}
                                        required={ques.required}
                                        style={{ marginLeft: '5px', marginRight: '5px' }}
                                        onChange={(e) => { handle(e, ques.optionText, index + 1, quest.questionText, quest_number + 1) }}
                                    />{quest.qustionType === 'text' ? '' : ques.optionText}
                                </label>) : <TextField_input onChange={(e) => { handle(e, ques.optionText, index + 1, quest.questionText, quest_number + 1) }} color='success' error={error} value={text} variant="standard">ffff</TextField_input>}
                            </Form_check>
                        </div>
                    </div>
                ))
            }

        </User_form_questions>
    )

}
