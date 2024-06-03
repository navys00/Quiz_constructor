import React, { useState, useEffect } from 'react'
import { Form_check_input, Submit_, User_footer, User_form_questions, User_form_section, User_title_section, Form_check, User_form_submit, User_form_div } from '../style'
import { Button, Typography } from '@mui/material'
import uuid from 'react-uuid'
export let tmp;
export const Single_question = ({ quest, quest_number, answer }) => {

    const [currentAnswer, setCurrent] = useState({ 'Number_Question': quest_number + 1, 'Question': quest.questionText, Number_Ans: [], Answer: [] })

    const [text, settext] = useState('')
    const unique_number = uuid()

    const handle = async (e, optionText, option_number, QText, QNumber) => {
        const { type, name, value, checked } = e.target;

        if (type === 'checkbox') {
            setCurrent(prev => {

                const updatedAnswer = checked ? { // Проверяем флажок
                    ...prev,
                    Number_Question: QNumber,
                    Question: QText,
                    Number_Ans: [...prev.Number_Ans, option_number], // Добавляем данные
                    Answer: [...prev.Answer, optionText],
                } : {
                    ...prev,
                    Number_Question: QNumber,
                    Question: quest.questionText,
                    Number_Ans: prev.Number_Ans.filter(item => item !== option_number), // Фильтруем данные
                    Answer: prev.Answer.filter(item => item !== optionText),
                };
                answer[quest_number] = updatedAnswer; // Обновляем answer
                console.log(updatedAnswer); // Логируем актуальное состояние

                return updatedAnswer; // Возвращаем актуальное состояние
            });


        } else if (type === 'radio') {

            setCurrent(prev => {
                const updatedAnswer = {
                    ...prev,
                    Answer: optionText,
                    Number_Ans: option_number,
                };

                answer[quest_number] = updatedAnswer;
                console.log(updatedAnswer);

                return updatedAnswer;
            });
        } else {
            settext(value);
            setCurrent(prev => {
                const updatedAnswer = {
                    ...prev,
                    Answer: value,
                    Number_Ans: '',
                };

                answer[quest_number] = updatedAnswer;
                console.log(updatedAnswer);

                return updatedAnswer;
            });
        }
    }

    return (
        <User_form_questions>
            <Typography style={{ fontSize: '15px', fontWeight: '400', letterSpacing: '.1px', lineHeight: '24px', paddingBottom: '8px' }}>{quest_number + 1}. {quest.questionText}</Typography>
            {
                quest.options.map((ques, index) => (
                    <div style={{ marginBottom: '5px' }}>
                        <div style={{ display: 'flex' }}>
                            <Form_check>
                                <label>
                                    <Form_check_input
                                        type={quest.qustionType}
                                        name={unique_number}
                                        value={text}

                                        required={ques.required}
                                        style={{ marginLeft: '5px', marginRight: '5px' }}
                                        onChange={(e) => { handle(e, ques.optionText, index + 1, quest.questionText, quest_number + 1) }}
                                    />{quest.qustionType === 'text' ? '' : ques.optionText}
                                </label>
                            </Form_check>
                        </div>
                    </div>
                ))
            }

        </User_form_questions>
    )

}
