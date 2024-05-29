import { FiStar, FiSettings } from 'react-icons/fi'
import { AiOutlineEye } from 'react-icons/ai'
import { IconButton } from '@mui/material'
import { IoMdolderOpen } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material'
import { useStateValue } from '../../redux/StateProvider'
import { Form_header, Form_header_left, Form_name, Form_header_Right } from './style'

export const FormHeader = () => {
    const navigate = useNavigate()
    //const [{ doc_name }, dispatch] = useStateValue()
    return (
        <Form_header>
            <Form_header_left>
                <Form_name type='text' placeholder='Untitled form' ></Form_name>

                <FiStar style={{ marginRight: '10px' }} />
                <span style={{ fontSize: '12px', fontWeight: '600' }}>All changes saved</span>
            </Form_header_left>
            <Form_header_Right>
                <IconButton>
                    <ColorLensIcon size="small" />
                </IconButton>
                <IconButton onClick={() => { navigate('/response') }}>
                    <AiOutlineEye />
                </IconButton>
                <IconButton>
                    <FiSettings />
                </IconButton>
            </Form_header_Right>
        </Form_header>
    )

}