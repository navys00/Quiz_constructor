import React from 'react'
import { DocCard, DocCardContent, DocCardImg, DocContent, DocContentLeft, Main_Body, Main_BodyDocs, Main_BodyTop, Main_BodyTopCneter, Main_BodyTopLeft, Main_BodyTopRight, Storage } from './style'
import StorageIcon from '@mui/icons-material/Storage';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { IconButton } from '@mui/material';
import MoreVert from '@mui/icons-material/MoreVert';
import example3 from '../../images/example3.jpg'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const MainBody = () => {
    const navigate = useNavigate()
    const [files, setFiles] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4444/get_all_filenames')
            .then(res => {
                setFiles(res.data)
                //console.log(res.data)
            })
            .catch(err => {
                console.warn(err)
                alert('ошибка при получении данных')
            })
    }, [])

    return (
        <Main_Body>
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
                {files.map((item, key) => (
                    <>
                        <div>
                            <DocCard onClick={() => { navigate(`/form/${item}`) }} >
                                <DocCardImg src={example3} />
                            </DocCard>
                            <DocCardContent>
                                <DocContent>
                                    <DocContentLeft>
                                        <Storage></Storage>
                                        <span style={{ width: '100px' }}>{item}</span>
                                        <MoreVert />
                                    </DocContentLeft>
                                </DocContent>
                            </DocCardContent>
                        </div>
                    </>
                ))}
            </Main_BodyDocs>

        </Main_Body>
    )
}

//onClick={()=>{`/form/${id}`}}