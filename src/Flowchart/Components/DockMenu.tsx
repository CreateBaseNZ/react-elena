import React from 'react'
import styled from 'styled-components'
import { GenericNode } from './nodes/GenericNode'

interface DockMenuProps {
    className?: string
}

function UnstyledDockMenu(props : DockMenuProps) {
    return (
        <div className={props.className}>
            <ul>
                <li>
                    <GenericNode />
                </li>
                <li>
                    <GenericNode />
                </li>
            </ul>
        </div>
    )
}

export const DockMenu = styled(UnstyledDockMenu)`

    background-color: darkgray;
    flex-grow: 1;
    overflow-y: scroll;
    scrollbar-width: none;

    align-items: center;

    & ul {
        margin: 5px;
        padding: 0;

        list-style-type: none;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    & li {
        padding: 0.5rem;
    }
`