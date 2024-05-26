import styled from "styled-components"
import Summarize from "@mui/icons-material/Summarize"
import SearchIcon from '@mui/icons-material/Search';
export const HeaderDiv = styled.div`
background-color:#9932CC;
    position:sticky;
    margin:0px 10px;
    padding: 5px 0px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-radius:16px;
`
export const Icon = styled(Summarize)`
    width:40px !important;
    height:40px !important;
`
export const SearchDiv = styled.div`
display:flex;
align-items:center;

`
export const Search = styled(SearchIcon)`
width:40px !important;
height:40px !important;
`
export const Info = styled.div`
`
export const Right = styled.div`
`