import React from 'react'
import { GalleryButton, TemplateBody, TemplateLeft, TemplateRight, TemplateSection, TemplateSpan, TemplateTop, Card, CardImage, CardTitle } from './style'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import example1 from '../../images/2662342.png'

import uuid from 'react-uuid'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
export const Template = () => {
    const navigate = useNavigate()
    const createform = () => {
        const id = uuid()
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
            </TemplateBody>
        </TemplateSection>
    )
}
