import React from 'react'
import styled from 'styled-components'

interface GenericNodeProps {
    className?: string
}

function UnstyledGenericNode(props : GenericNodeProps) {
    return (
        <div className={props.className}>
            <h4>
                Generic
            </h4>
        </div>
    )
}

export const GenericNode = styled(UnstyledGenericNode)`
    height: 50px;
    width: 60%;
    border-style: solid;
    border-color: blue;
    margin: auto;
    display: flex;

    align-items: center;
    justify-content: center;
    cursor: move;
    
    & h4{
        margin: 0;
    }

    
`