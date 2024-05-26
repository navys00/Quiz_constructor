import React from 'react'
import { Search, HeaderDiv, Info, Right, Icon, SearchDiv } from './style'
import SummarizeIcon from '@mui/icons-material/Summarize';
import { IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
export const Header = () => {

    return (
        <HeaderDiv>
            <Info>
                <IconButton> <Icon /></IconButton>
            </Info>
            <SearchDiv>
                <Search />
                <input placeholder='введите запрос' type='text'></input>
            </SearchDiv>
            <Right>
                <IconButton> <AppsIcon /></IconButton>
            </Right>

        </HeaderDiv>
    )
}
