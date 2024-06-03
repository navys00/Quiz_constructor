import { AccordionDetails, MenuItem, Select } from "@mui/material"
import styled from "styled-components"

export const Question_FormDiv = styled.div`
    background-color:#f4f4f9;
    height:100%;
    padding-bottom:30px;
`
export const Section = styled.div`
    margin:auto;
    width:50%;
`
export const Question_title_section = styled.div`
`
export const Question_Form_top = styled.div`
    background-color:white;
    border-top:8px solid rgb(103,58,183);
    border-radius:8px;
    padding:30px 25px;
    text-transform:capitalize;
`

export const Question_Form_top_name = styled.input`
    color:black;
    height:35px;
    border-bottom:1px solid #f4f4f9;
    outline:none;
    border:none;
    width:100%;
    line-height:135%;
    line-height:40px;
    font-weight:400;
    font-size:32px;
    font-family:Google Sans, Roboto,Arial, sans-serif;
    box-sizing:border-box;
`
export const Question_Form_top_desc = styled.input`
box-sizing:border-box;
margin-top:10px;
font-family:Google Sans, Roboto,Arial, sans-serif;
font-size:13px;
font-weight:400;
line-height:40px;
width:100%;
border:none;
outline:none;
border-bottom:1px solid #f4f4f9;
color:black;
height:20px;

`

export const Saved_question = styled.div`

   
`
export const Question_boxes = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
`

export const Add_question = styled(AccordionDetails)`
    background-color:white;
    border-radius:8px;
    padding:25px 22px;
    text-transform:capitalize;
    display:flex;
    flex-direction:column;
    padding-top:0px;
    width:93%;
    margin-left:10px;
`
export const Add_question_top = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
`
export const Add_question_body = styled.div`
width:100%;
    display:flex;
    align-items:center;
`

export const Question = styled.input`
    border:0;
    box-sizing:border-box;
    font-family:Google Sans, Roboto,Arial,sans-serif;
    font-size:15px;
    font-weight:400;
    flex:1;
    line-height:40px;
    width:40%;
    border;none;
    outline:none;
    color:black;
    height:40px;
    margin-right:10px;
    line-height:10px;
    padding:10px;
    &:focus{
        border-bottom:1px solid rgb(103,58,183);
        background-color:#f4f4f9;
    }
    &:hover{
        border-bottom:1px solid rgb(103,58,183);
        background-color:#f4f4f9;
    }
`
export const Option = styled.input`
border:0;
width:100%;
    &:focus{
        border-bottom:1px solid rgb(103,58,183);
        background-color:#f4f4f9;
    }
    &:hover{
        border-bottom:1px solid rgb(103,58,183);
        background-color:#f4f4f9;
    }
`

export const Select_ = styled(Select)`
    color: #70757a !important;
    height:40px;
    width:230px;
    padding:5px 15px;
    color:black;
    margin-left:10px;
    margin-right:10px;
    border:1.5px solid #f4f4f9;
    border-radius:3px;
    background:transparent;
`
export const MenuItem_ = styled(MenuItem)`

    
`
export const Text_input = styled.input`
    outline:none;
    border:none;
    height:40px;
    width:490px;
    font-family:Roboto,Arial,sans-serif;
    font-size:13px;
    font-weight:400;
    letter-spacing:.2px;
    color:202124;
    &:focus{
        border-bottom:1.5px solid rgb(103,58,183);
    }
`

export const Add_footer = styled.div`
    display:flex;
    justify-content:space-between;
`
export const Add_question_bottom = styled.div`
margin-top:12px;
border-top:1px solid rgba(118,118,118,0.3);
display:flex;
justify-content:flex-end;
align-items:center;
`

export const Add_question_bottom_left = styled.div`
margin-top:12px;
display:flex;
border-top:1px solid rgba(118,118,118,0.3);
justify-content:flex-end;
align-items:center;
`
export const Question_edit = styled.div`
    background-color:#f4f4f9;
    display:flex;
    flex-direction:column;
    margin-right:12px;
    margin-top:10px;
    margin-bottom:0;
    padding:1px;
    border-radius:3px;
    height:150px;
    width:35px;

`

export const Top_header = styled.div`

`

export const Points = styled.input`
box-sizing: border-box;
font-family: 'Google Sans', Roboto , Arial, sans-serif;
font-size: 15px;
font-weight: 400;
width:8%;
border:1px solid blue;
outline: none;
color: black;
height:40px;
margin-right: 10px;
line-height: 10px;
padding:4px;
`

export const Save_form = styled.div`
font-size:14px;
`