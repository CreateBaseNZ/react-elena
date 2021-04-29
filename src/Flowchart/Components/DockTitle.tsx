import React from 'react'
import styled from 'styled-components'

interface DockTitleProps {
    className?: string
}

function UnstyledDockTitle(props : DockTitleProps) {
    return (
        <div className={props.className}>
            <h1>
                Drag and Drop
            </h1>
        </div>
    )
}

export const DockTitle = styled(UnstyledDockTitle)`

    background-color: lightgray;
    & h1 {
        margin: 0;
    }
`