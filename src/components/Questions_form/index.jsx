import React from 'react'
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ShortTextIcon from '@mui/icons-material/ShortText';
import SubjectIcon from '@mui/icons-material/Subject';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BsFileText, BsTrash } from 'react-icons/bs'
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Accordion, AccordionSummary, Switch, Select, AccordionDetails, Button, IconButton, Typography, FormControlLabel, MenuItem, FormControl } from '@mui/material';
import { FcRightUp } from "react-icons/fc"
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import { Add_footer, Add_question, Add_question_body, Add_question_bottom, Add_question_bottom_left, Add_question_top, MenuItem_, Points, Question, Question_FormDiv, Question_Form_top, Question_Form_top_desc, Question_Form_top_name, Question_boxes, Question_edit, Question_title_section, Save_form, Saved_question, Section, Select_, Text_input, Top_header } from './style';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { ActionTypes } from '../../redux/store';
import { useStateValue } from '../../redux/StateProvider';

export const Question_Form = () => {
    const { id } = useParams()
    //const dispatch = useDispatch()
    const [{ }, dispatch] = useStateValue()
    //console.log(id)
    const [questions, setquestion] = useState(
        [{
            questionText: "what is 2+2",
            qustionType: "radio",
            options: [
                { optionText: "2" },
                { optionText: "Berlin" },
                { optionText: "4" },

            ],
            answer: false,
            answerKey: "",
            points: 0,
            open: true,
            required: false
        }]
    )

    useEffect(() => {
        axios.get(`http://localhost:4444/data/${id}`)
            .then(res => {
                console.log(res.data.ques_data)
                setDoc_name(res.data.ques_data.document_name)
                setDoc_desc(res.data.ques_data.document_desc)
                setquestion(res.data.ques_data.questions)
                dispatch({
                    type: ActionTypes.SET_DOC_NAME,
                    doc_name: res.data.ques_data.document_name
                })
                dispatch({
                    type: ActionTypes.SET_DOC_DESC,
                    doc_desc: res.data.ques_data.document_desc
                })
                dispatch({
                    type: ActionTypes.SET_QUESTION,
                    questions: res.data.ques_data.questions
                })
            })
            .catch(err => {
                console.log(err)
                //alert('не удалось загрузить анкету')
            })
    }, [])

    const [doc_name, setDoc_name] = useState('Untitled document')
    const [doc_desc, setDoc_desc] = useState('Add description')

    const ChangeQuestion = (text, i) => {
        let newQuestion = [...questions]
        newQuestion[i].questionText = text
        setquestion(newQuestion)

    }
    const addQuestionType = (i, type) => {
        let question = [...questions]
        question[i].qustionType = type
        setquestion(question)
    }

    const ChangeOptionValue = (text, i, j) => {
        let optionQuestion = [...questions]
        optionQuestion[i].options[j].optionText = text
        setquestion(optionQuestion)
    }
    const deleteOption = (i, j) => {
        let RemoveOptionQuestion = [...questions]
        if (RemoveOptionQuestion[i].options.length > 1) {
            RemoveOptionQuestion[i].options.splice(j, 1)

        }
        setquestion(RemoveOptionQuestion)
    }

    const setquestionAnswer = (answer, i) => {
        let question = [...questions]
        question[i].answerKey = answer
        setquestion(question)
    }

    const setquestionPoints = (points, i) => {
        let question = [...questions]
        question[i].points = points
        setquestion(question)
    }

    const doneAnswer = (i) => {
        let question = [...questions]
        question[i].answer = !question[i].answer
        setquestion(question)
    }

    const AddAnswer = (i) => {
        let question = [...questions]
        question[i].answer = !question[i].answer
        setquestion(question)
    }

    const AddOption = (i) => {
        let OptionQuestion = [...questions]
        if (OptionQuestion[i].options.length < 5) {
            OptionQuestion[i].options.push({ optionText: "Option" + (OptionQuestion[i].options.length + 1) })
        }
        else {
            alert('превышено максимальное количество вопросов')
        }
        setquestion(OptionQuestion)
    }

    const copyQuestion = (i) => {
        expandCloseAll()
        const question = [...questions]
        const newQuestion = { ...question[i] }
        setquestion([...questions, newQuestion])
    }
    const deleteQuestion = (i) => {
        const question = [...questions]
        if (questions.length > 1) {
            question.splice(i, 1)
        }
        setquestion(question)
    }

    const requiredQuestion = (i) => {
        const reqQuestion = [...questions]
        reqQuestion[i].required = !reqQuestion[i].required
        setquestion(reqQuestion)
    }
    const AddNewQuestion = () => {
        expandCloseAll()
        setquestion([...questions, {
            questionText: 'Question', qustionType: "radio", options: [
                { optionText: "Option1" }],
            open: true,
            required: false
        }])
    }

    // const onDragEnd = (result) => {
    //     if (!result.destination) {
    //         return
    //     }
    //     let quest = [...questions]
    //     const item = reorder(
    //         quest,
    //         result.source.index,
    //         result.destination.index
    //     )
    //     setquestion(item)
    // }

    // const reorder = (list, startIndex, endIndex) => {
    //     const result = Array.from(list)
    //     const [removed] = result.splice(startIndex, 1)
    //     result.splice(endIndex, 0, removed)
    //     return result
    // }

    const expandCloseAll = () => {
        let question = [...questions]
        for (let i = 0; i < question.length; i++) {
            question[i].open = false
        }
        setquestion(question)
    }

    const comittoDB = async (id) => {
        //console.log(questions)
        dispatch({
            type: ActionTypes.SET_QUESTION,
            questions: questions
        })
        await axios.post(`http://localhost:4444/add_questions/${id}`, {
            "document_name": doc_name,
            "doc_desc": doc_desc,
            'questions': questions
        })
    }

    const handleExpand = (i) => {
        let question = [...questions]
        for (let j = 0; j < question.length; j++) {
            if (i === j) {
                question[i].open = true
            }
            else {
                question[j].open = false
            }

        }
        setquestion(question)
    }

    const questionUI = () => {
        return questions.map((ques, index) => (

            <Accordion onChange={() => { handleExpand(index) }} expanded={questions[index].open} >
                <AccordionSummary
                    elevation={1}
                    style={{ width: '100%' }}
                >
                    {!questions[index].open ? (
                        <Saved_question>
                            <Typography style={{ fontSize: "15px", fontWeight: "400", letterSpacing: '.1px', lineHeight: "24px", paddingBottom: '8px' }}>
                                {index + 1}.{questions[index].questionText}
                            </Typography>
                            {ques.options.map((option, index2) => (
                                <div key={index2}>
                                    <div style={{ display: 'flex' }}>
                                        <FormControlLabel style={{ marginLeft: "5px", marginBottom: "5px" }} disabled control={<input type={ques.qustionType}
                                            color="primary" style={{ marginRight: "3px" }} />} label={ //required={ques.type} вернуть в input если что 
                                                <Typography style={{ fontSize: "13px", fontWeight: "400", letterSpacing: '.2px', lineHeight: "20px", color: '#202124' }}>
                                                    {ques.options[index2].optionText}
                                                </Typography>
                                            } />
                                    </div>

                                </div>
                            ))}

                        </Saved_question>
                    ) : (
                        <div></div>
                    )}
                </AccordionSummary>


                <Question_boxes>
                    {!questions[index].answer ? (
                        <Add_question>
                            <Add_question_top>
                                <Question type="text" placeholder='Question' value={ques.questionText} onChange={(e) => { ChangeQuestion(e.target.value, index) }}></Question>
                                <CropOriginalIcon style={{ color: '#5f6368' }} />
                                <Select_ style={{ color: '#5f6368', fontSize: "13px" }}>
                                    <MenuItem_ id='text' value="Text" onClick={() => { addQuestionType(index, 'text') }} ><SubjectIcon style={{ marginRight: "10px" }} />Paragraph</MenuItem_>
                                    <MenuItem_ id='checkbox' value="checkbox" onClick={() => { addQuestionType(index, 'checkbox') }}><CheckBoxIcon style={{ marginRight: "10px", color: "#70757a" }} />CheckBox</MenuItem_>
                                    <MenuItem_ id='radio' value="Radio" style={{ height: "36px" }} onClick={() => { addQuestionType(index, 'radio') }}><RadioButtonUncheckedIcon style={{ marginRight: "10px", color: "#70757a" }} />Multiple choice</MenuItem_>
                                </Select_>
                            </Add_question_top>
                            {ques.options.map((op, j) => (
                                <Add_question_body key={j}>
                                    {
                                        (ques.qustionType != "text") ?
                                            <input type={ques.qustionType} style={{ marginRight: "10px" }} /> :
                                            <ShortTextIcon style={{ marginRight: "10px" }} />
                                    }
                                    <div>
                                        <input type='text' placeholder='option' value={ques.options[j].optionText} onChange={(e) => { ChangeOptionValue(e.target.value, index, j) }}></input>
                                    </div>

                                    <IconButton onClick={() => { deleteOption(index, j) }} aria-label='delete'>
                                        <CloseIcon />
                                    </IconButton>
                                </Add_question_body>
                            ))}
                            {ques.options.length < 5 ? (
                                <Add_question_body>
                                    <FormControlLabel disabled control={
                                        (ques.qustionType !== 'text') ?
                                            <input type={ques.qustionType} color='primary' style={{ marginLeft: '10px', marginRight: '10px' }} disabled /> :
                                            <ShortTextIcon style={{ marginRight: '10px' }} />
                                    } label={
                                        <div>
                                            <Text_input type='text' style={{ fontSize: '13px', width: '60px' }} placeholder='Add other'></Text_input>
                                            <Button onClick={() => { AddOption(index) }} size='small' style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }}>Add option</Button>
                                        </div>
                                    }
                                    />


                                </Add_question_body>
                            ) : ""}



                            <Add_footer>
                                <Add_question_bottom_left>
                                    <Button onClick={() => { AddAnswer(index) }} size='small' style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }}>
                                        <FcRightUp style={{ border: '2px solid #4285f4', padding: '2px', marginRight: '8px' }} />
                                        Answer key
                                    </Button>
                                </Add_question_bottom_left>
                                <Add_question_bottom>
                                    <IconButton onClick={() => { copyQuestion(index) }} aria-label='copy'>
                                        <FilterNoneIcon />
                                    </IconButton>
                                    <IconButton onClick={() => { deleteQuestion(index) }} aria-label='delete'>
                                        <BsTrash />
                                    </IconButton>
                                    <span style={{ color: '#5f6368', fontSize: '13px' }}>Required</span><Switch name='checkedA' color='primary' onClick={() => { requiredQuestion(index) }} checked={questions[index].required}></Switch>
                                    <IconButton>
                                        <MoreVertIcon />
                                    </IconButton>
                                </Add_question_bottom>
                            </Add_footer>
                        </Add_question>) : (

                        <Add_question >
                            <Top_header>
                                Choose correct answer
                            </Top_header>
                            <Add_question_top>
                                <Question type="text" placeholder='Question' value={ques.questionText} disabled></Question>
                                <Points type="number" min={0} step={1} placeholder='0' onChange={(e) => { setquestionPoints(e.target.value, index) }}></Points>
                            </Add_question_top>
                            {ques.options.map((op, j) => (
                                <Add_question_body key={j} style={{ marginLeft: '8px', marginBottom: '10px', marginTop: '5px' }}>
                                    <div key={j}>
                                        <div style={{ display: 'flex' }}>
                                            <div className='form-check'>
                                                <label style={{ fontSize: '13px' }} onClick={() => { setquestionAnswer(ques.options[j].optionText, index) }}>
                                                    {(ques.qustionType !== 'text') ?
                                                        <input
                                                            style={{ marginRight: '10px', marginBottom: '10px', marginTop: '5px' }}
                                                            type={ques.qustionType}
                                                            name={ques.questionText}
                                                            value="option 3"
                                                            className='form-check-input'
                                                            required={ques.required}
                                                        /> : <ShortTextIcon style={{ marginRight: '10px' }} />}
                                                    {ques.options[j].optionText}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </Add_question_body>
                            ))}
                            <Add_question_body >
                                <Button size='small' style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }}>
                                    <BsFileText style={{ fontSize: '20px', marginRight: '8px' }} />
                                    Add answer feedback
                                </Button>
                            </Add_question_body>
                            <Add_question_bottom>
                                <Button onClick={() => { doneAnswer(index) }} variant='outlined' color='primary' style={{ textTransform: 'none', color: '#4285f4', fontSize: '12px', fontWeight: '600' }}>
                                    Done
                                </Button>
                            </Add_question_bottom>
                        </Add_question>
                    )}

                    {!ques.answer ? (<Question_edit>
                        <AddCircleOutlineIcon onClick={AddNewQuestion} style={{ padding: '8px 5px', color: '#5f6368' }} />
                        {/* <OndemandVideoIcon/> */}
                        <CropOriginalIcon style={{ padding: '8px 5px', color: '#5f6368' }} />
                        <TextFieldsIcon style={{ padding: '8px 5px', color: '#5f6368' }} />
                    </Question_edit>) : ''}
                </Question_boxes>


            </Accordion >

        ))
    }
    return (
        <>
            <Question_FormDiv>
                <br></br>
                <Section>
                    <Question_title_section>
                        <Question_Form_top>
                            <Question_Form_top_name type='text' placeholder='untitled document' onChange={(e) => { setDoc_name(e.target.value) }} />
                            <Question_Form_top_desc type='text' placeholder='form description' onChange={(e) => { setDoc_desc(e.target.value) }} />
                        </Question_Form_top>
                    </Question_title_section>

                    {questionUI()}
                    <Save_form>
                        <Button variant='contained' color='primary' onClick={() => { comittoDB(id) }}>Save</Button>
                    </Save_form>
                </Section>
            </Question_FormDiv>
        </>
    )
}








