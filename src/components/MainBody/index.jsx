import React from 'react'
import { Container, DocCard, DocCardContent, DocCardImg, DocContent, DocContentLeft, Main_Body, Main_BodyDocs, Main_BodyTop, Main_BodyTopCneter, Main_BodyTopLeft, Main_BodyTopRight, Storage } from './style'
import StorageIcon from '@mui/icons-material/Storage';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { IconButton, MenuItem } from '@mui/material';
import MoreVert from '@mui/icons-material/MoreVert';
import example3 from '../../images/bkBdwrhBfgM.jpg'
import { BsTrash } from 'react-icons/bs'
import { useEffect, useState } from 'react';
import { Menu } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteDoc, fetchDocs, fetchQuestions } from '../../redux/Slice';
export const MainBody = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //const [files, setFiles] = useState([])
    const [open, Setopen] = useState(false);
    const DeleteClick = (e, id) => {
        e.stopPropagation()
        dispatch(DeleteDoc(id))
        // await axios.delete(`http://localhost:4444/get_all_filenames/${id}`, {
        //     "id": id
        // })
        // files.filter(item => item !== id);
    }
    var files = useSelector(state => state.questions.forms);

    useEffect(() => {
        dispatch(fetchDocs())
        //console.log(fetchQuestions())
        // axios.get('http://localhost:4444/get_all_filenames')
        //     .then(async res => {
        //         const array = await res.data
        //         setFiles(array)
        //     })
        //     .catch(err => {
        //         console.warn(err)
        //         alert('ошибка при получении данных')
        //     })
    }, [files])
    //console.log(files)
    // const handleClick = (event) => {
    //     event.stopPropagation()
    // }


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
                {files !== undefined ? files.map((item, key) => (

                    <Container >
                        <DocCard onClick={(e) => { e.stopPropagation(); navigate(`/form/${item.doc_id}`) }}  >
                            <DocCardImg src={example3} />
                        </DocCard>
                        <DocCardContent>
                            <Storage style={{ backgroundColor: 'green' }}></Storage>
                            <span>{item.document_name}</span>
                            <IconButton onClick={(e) => { e.stopPropagation(); Setopen(!open) }}>
                                <MoreVert />
                            </IconButton>
                            <Menu open={open} onClose={() => { Setopen(!open) }}>
                                <MenuItem onClick={(e) => { DeleteClick(e, item.doc_id) }}>
                                    <BsTrash style={{ marginRight: '5px' }} />
                                    <span>Удалить</span>
                                </MenuItem>
                            </Menu>
                        </DocCardContent>
                    </Container>
                )) : ''}
            </Main_BodyDocs>

        </Main_Body>
    )
}

//onClick={()=>{`/form/${id}`}}