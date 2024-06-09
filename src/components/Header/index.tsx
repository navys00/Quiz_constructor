import React, { useState } from 'react'
import { Search, HeaderDiv, Logo, Right, SearchDiv } from './style'
import SummarizeIcon from '@mui/icons-material/Summarize';
import { IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import logo from '../../images/logo.png'
export const Header = ({ searchValue, handleChangeValue }: any) => {


    return (
        <HeaderDiv>
            <Logo>
                <img src={logo}></img>
            </Logo>
            <SearchDiv>
                <input value={searchValue} onChange={handleChangeValue} style={{ height: '30px', borderRadius: '16px', border: '0px solid' }} placeholder='введите запрос' type='text'></input>
            </SearchDiv>
            <Right>

            </Right>

        </HeaderDiv>
    )
}
