import React from 'react'
import { GalleryButton, TemplateBody, TemplateLeft, TemplateRight, TemplateSection, TemplateSpan, TemplateTop, Card, CardImage, CardTitle } from './style'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import example1 from '../../images/forms-blank-googlecolors.png'
import example2 from '../../images/example2.png'
import uuid from 'react-uuid'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
export const Template = () => {
    const navigate = useNavigate()
    const createform = () => {
        const id = uuid()
        // const question_list = [{
        //     questionText: "Question",
        //     qustionType: "radio",
        //     options: [
        //         { optionText: "Option" }
        //     ],
        //     answer: false,
        //     answerKey: "",
        //     points: 0,
        //     open: true,
        //     required: false
        // }]
        // await axios.post(`http://localhost:4444/add_questions/${id}`, {
        //     "document_name": "untitled_form",
        //     "doc_desc": "Add_description",
        //     'questions': question_list
        // })
        navigate(`/form/${id}`)
    }


    return (
        <TemplateSection>
            <TemplateTop>
                <TemplateLeft>
                    <TemplateSpan>Start new Form</TemplateSpan>
                </TemplateLeft>
                <TemplateRight>
                    <GalleryButton>
                        Template Gallery
                        <UnfoldMoreIcon fontSize='small' />
                    </GalleryButton>
                    <IconButton>
                        <MoreVertIcon fontSize='small' />
                    </IconButton>
                </TemplateRight>
            </TemplateTop>
            <TemplateBody>
                <Card onClick={createform}>
                    <CardImage src={example1} alt='no image' />
                    <CardTitle>Add new form</CardTitle>
                </Card>
                {/* <Card>
                    <CardImage src={example2} alt='no image' />
                    <CardTitle>Blank2</CardTitle>
                </Card>
                <Card>
                    <CardImage src={example1} alt='no image' />
                    <CardTitle>Blank3</CardTitle>
                </Card> */}
            </TemplateBody>
        </TemplateSection>
    )
}
