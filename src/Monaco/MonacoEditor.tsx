import Editor from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import React, { useState } from "react";

const MonacoEditor = () => {
  const [code, setCode] = useState("");

  const handleValueChange = (
    value: string | undefined,
    event: monaco.editor.IModelContentChangedEvent
  ) => {
    if (value) {
      setCode(value);
    }
  };

  return <Editor onChange={handleValueChange} />;
};

export default MonacoEditor;
