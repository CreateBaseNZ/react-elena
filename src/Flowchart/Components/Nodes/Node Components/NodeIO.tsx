import React from "react";
import styled from "styled-components";

interface NodeIOProps {
  className?: string;
  inputs?: string[];
  outputs?: string[];
}

const UnstyledNodeIO = (props: NodeIOProps) => {
  return (
    <div className={props.className}>
      <ul>
        {props.inputs &&
          props.inputs.map((input, index) => {
            return (
              <li key={index}>
                {input}
                <select>
                  <option value="default">default</option>
                </select>
              </li>
            );
          })}
      </ul>
      <ul>
        {props.outputs &&
          props.outputs.map((output, index) => {
            return (
              <li key={index}>
                {output}
                <select>
                  <option value="default">default</option>
                </select>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

const NodeIO = styled(UnstyledNodeIO)`
  width: 100%;

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

    & div {
      margin: auto;
    }

    & select {
      cursor: pointer;
    }
  }
`;

export default NodeIO;
