import styled from "styled-components";
import StorageIcon from '@mui/icons-material/Storage';
export const Main_Body = styled.div`
    background-color:white;
    margin-left:160px;
    margin-right:160px;
    
`
export const Container = styled.div`
height:200px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:0px 10px 0px 10px;
`

export const Main_BodyTop = styled.div`
    display:flex;
    margin-top:15px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`
export const Main_BodyTopLeft = styled.div`
    font-size:16px;
    font-weight:500;
`
export const Main_BodyTopCneter = styled.div`
    font-size:16px;
    margin-right:125px;
    display:flex;
    box-sizing:content-box;
    align-items:center;
    border-radius:6px;
`
export const Main_BodyTopRight = styled.div`
    display:flex;
    align-items:center;
`
export const Main_BodyDocs = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:flex-start;
    margin-top:20px;
    
`
export const DocCard = styled.div`
display:flex;
flex-direction:column;
box-sizing:border-box;
cursor:pointer;
&:hover{
    border:1px solid #6e2594;
}

`
export const DocCardImg = styled.img`
    box-sizing:border-box;
    height:150px;
    width:170px;
    
`
export const DocCardContent = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    
    align-items:center;
    flex-direction:row;
`
export const DocContent = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin-top:5px;


`
export const DocContentLeft = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;


`
export const Storage = styled(StorageIcon)`
    color:white;
    font-size:16px;
    background-color:#6e2594;
    padding:3px;
    margin-right:3px;
    border-radius:3px;
`