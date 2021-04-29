import React from 'react';
import styled from "styled-components";
import { DockMenu } from './DockMenu';
import { DockSearch } from './DockSearch';
import { DockTitle } from './DockTitle';

interface DockProps {
    className?: string
}

function UnstyledDock(props : DockProps) {
    return (
        <div className={props.className}>
            <DockTitle />
            <DockSearch />
            <DockMenu />
        </div>
    )
}

export const Dock = styled(UnstyledDock)`

    display: flex;
    flex-direction: column;

    overflow: hidden;
    width: 20%;
    height: 100%;
    background-color: grey;
`