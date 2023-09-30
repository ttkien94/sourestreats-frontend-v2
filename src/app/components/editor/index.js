import React, { useImperativeHandle, useRef, forwardRef } from "react";
import PropTypes from "prop-types";
// import { createReactEditorJS } from "react-editor-js";

// const ReactEditorJS = createReactEditorJS();

const LPEEditor = forwardRef((props, ref) => {
  // const { tools, placeholder, defaultValue } = props;

  const editorCore = useRef(null);

  // const handleInitialize = React.useCallback((instance) => {
  //   editorCore.current = instance;
  // }, []);

  const handleSave = React.useCallback(async () => {
    const savedData = await editorCore.current.save();

    return savedData;
  }, []);

  useImperativeHandle(ref, () => ({
    handleSave() {
      handleSave && handleSave();
    },
    getBlocks: () => {
      return handleSave();
    },
  }));

  return (
    // <ReactEditorJS
    //   tools={tools}
    //   placeholder={placeholder}
    //   onInitialize={handleInitialize}
    //   defaultValue={defaultValue}
    // />
    <div></div>
  );
});

LPEEditor.propTypes = {
  tools: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  // defaultValue: PropTypes.object,
};

LPEEditor.defaultProps = {
  tools: {},
  placeholder: "",
  // defaultValue: {},
};

export default LPEEditor;
