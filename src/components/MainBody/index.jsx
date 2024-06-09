import React from 'react'
import { Container, DocCard, DocCardContent, DocCardImg, DocContent, DocContentLeft, Main_Body, Main_BodyDocs, Main_BodyTop, Main_BodyTopCneter, Main_BodyTopLeft, Main_BodyTopRight, Storage } from './style'
import StorageIcon from '@mui/icons-material/Storage';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { IconButton, MenuItem } from '@mui/material';
import MoreVert from '@mui/icons-material/MoreVert';
import example3 from '../../images/doc_icon.png'
import { BsTrash } from 'react-icons/bs'
import { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteDoc, fetchDocs, fetchQuestions } from '../../redux/Slice';
export const MainBody = ({ searchvalue }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //const [files, setFiles] = useState([])
    const [open, Setopen] = useState(false);
    const DeleteClick = (e, id) => {
        e.stopPropagation()
        dispatch(DeleteDoc(id))

    }
    var files = useSelector(state => state.questions.forms);

    useEffect(() => {
        dispatch(fetchDocs())

    }, [files])


    return (
        <Main_Body >
            <Main_BodyTop>
                <Main_BodyTopLeft>
                    rexent forms
                </Main_BodyTopLeft>
                <Main_BodyTopRight>
                    <Main_BodyTopCneter>owned by anyone <ArrowDropDownIcon /> </Main_BodyTopCneter>
                    <IconButton>
                        <StorageIcon style={{ fontSize: '16px', color: 'black' }} />
                    </IconButton>
                    <IconButton>
                        <FolderOpenIcon style={{ fontSize: '16px', color: 'black' }} />
                    </IconButton>

                </Main_BodyTopRight>
            </Main_BodyTop>
            <Main_BodyDocs>
                {files !== undefined ? files.filter(obj => {
                    const name = obj.document_name.toLowerCase()
                    return name.includes(searchvalue.toLowerCase())
                }).map((obj) => (
                    <Container >
                        <DocCard onClick={(e) => { e.stopPropagation(); navigate(`/response/${obj.doc_id}`) }}  >
                            <DocCardImg src={example3} />
                        </DocCard>
                        <DocCardContent>
                            <IconButton>
                                <CreateIcon
                                    onClick={(e) => { e.stopPropagation(); navigate(`/form/${obj.doc_id}`) }}
                                    style={{ borderRadius: '8px', backgroundColor: '#0072bc', color: 'white' }}>
                                </CreateIcon>
                            </IconButton>

                            <span style={{ width: '120px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} >{obj.document_name}</span>
                            <IconButton style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <BsTrash onClick={(e) => { DeleteClick(e, obj.doc_id) }} />
                            </IconButton>

                        </DocCardContent>
                    </Container>
                ))
                    : ''}

            </Main_BodyDocs>

        </Main_Body >
    )
}
