import { FiStar, FiSettings } from 'react-icons/fi'
import { AiOutlineEye } from 'react-icons/ai'
import { IconButton } from '@mui/material'
import { IoMdolderOpen } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { useParams } from 'react-router-dom'
import { Form_header, Form_header_left, Form_name, Form_header_Right } from './style'

export const FormHeader = ({ flag, setflag }) => {
    const navigate = useNavigate()
    const { id } = useParams()
    //console.log(id)
    //const [{ doc_name }, dispatch] = useStateValue()
    return (
        <Form_header>
            <Form_header_Right>
                <IconButton>
                    <ColorLensIcon size="small" />
                </IconButton>
                <IconButton disabled={flag} onClick={() => { navigate(`/response/${id}`) }}>
                    <AiOutlineEye />
                </IconButton>
            </Form_header_Right>
        </Form_header>
    )

}