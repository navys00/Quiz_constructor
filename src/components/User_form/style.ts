import styled from "styled-components"
import { TextField } from "@mui/material"

interface IProps {
    Error: boolean,
}

export const User_form_div = styled.div`
    background-color:rgb(203,255,198);
    display:flex;
    height:100%;
    padding:20px;
`
export const User_form_section = styled.div`
    margin:10px auto auto auto;
    width:44%;
    display:flex;
    flex-direction:column;
`
export const User_title_section = styled.div`
    background-color:white;
    border-top:8px solid green;
    border-radius:8px;
    padding:15px 25px;
    text-transform:capitalize;
    margin-bottom:8px;
`
export const User_form_questions = styled.div<IProps>`
background-color:white;
border:${props => (props.Error ? '2px solid red' : '')};
border-radius:8px;
padding:30px 25px;
text-transform:capitalize;
margin-bottom:8px;
`
export const Form_check = styled.div`
`
export const Form_check_input = styled.input`
`
export const TextField_input = styled(TextField)`
    
`
export const User_form_submit = styled.div`
    float:left;
`

export const User_footer = styled.div`
bottom:0;
text-align:center;
font-size:medium;
font-weight:500;
`