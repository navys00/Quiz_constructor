import styled from "styled-components";

export const TemplateSection = styled.div`
    background-color:#f4f4f9;
    padding-bottom:40px;
    padding-top:7px;

`
export const TemplateTop = styled.div`
    margin-left:180px;
    margin-right:180px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`
export const TemplateBody = styled.div`
display:flex;
justify-content:space-between;
`
export const TemplateLeft = styled.div`
`
export const TemplateRight = styled.div`
display:flex;
`
export const CardImage = styled.img`
    box-sizing:border-box;
    height:120px;
    width:160px;
    cursor:pointer;
    border-radius:2px;
    border:0.2px solid #fffdf7;
    &:hover {
        border:1px solid #6e2594;
    }
`
export const Card = styled.div`
margin: 15px 0px 0px 20px;
`
export const TemplateSpan = styled.span`
    fontSize:16px;
    color:#202124;
`
export const GalleryButton = styled.div`
    display:flex;
    justify-content:space-between;
    background:transparent;
    align-items:center;
`

export const CardTitle = styled.p`
    font-size:14px;
    margin-top:2px;
    color:#202124;
    font-weight:500;
`