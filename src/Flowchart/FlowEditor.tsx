import React from 'react'
import styled from 'styled-components'
import { Dock } from './Components/Dock'
import { DragDropEditor } from './Components/DragDropEditor'

interface FlowEditorProps {
    className?: string;
}

function UnstyledFlowEditor(props : FlowEditorProps) {
    return (
        <div className={props.className}>
            <Dock />
            <DragDropEditor />
        </div>
    )
}

export const FlowEditor = styled(UnstyledFlowEditor)`
    height: 50vh;
    width: 50vw;
    display: flex;
`