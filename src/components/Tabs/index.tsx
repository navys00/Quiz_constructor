import React from 'react'
import { Paper } from '@mui/material'
import { makeStyles } from '@mui/material'
import { Tabs } from '@mui/material'
import { Tab } from '@mui/material'
import { PaperDiv, TabDiv, TabsDiv } from './style'


export const CenteredTabs = () => {
    return (
        <div >
            <PaperDiv>
                <TabsDiv centered textColor='primary' indicatorColor='primary'>
                    <TabDiv label="Вопросы" />
                    <TabDiv label="Ответы" />
                </TabsDiv>
            </PaperDiv>
        </div>
    )
}
