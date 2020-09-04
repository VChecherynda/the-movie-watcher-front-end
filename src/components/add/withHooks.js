import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { saveSearchWord } from "@store/modules/movies/reducer";

const withHooks = WrappedComponent => {
  const Wrapped = props => {
    const [listLabel, setListLabel] = useState("File name");
    const inputRef = useRef(null);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.accept = ".txt";
      }
    }, [inputRef.current]);

    const changed = e => {
      setListLabel(e.target.files[0].name);
    };

    return (
      <WrappedComponent
        changed={changed}
        inputRef={inputRef}
        listLabel={listLabel}
        {...props}
      />
    );
  };

  return Wrapped;
};

export default withHooks;
