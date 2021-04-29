import React from 'react'
import styled from 'styled-components'

interface DragDropEditorProps {
    className?: string
}

function UnstyledDragDropEditor(props : DragDropEditorProps) {
    return (
        <div className={props.className}>
            
        </div>
    )
}

export const DragDropEditor = styled(UnstyledDragDropEditor)`
    width: 80%;
    height: 100%;
    background-color: black;
`