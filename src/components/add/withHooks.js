import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { uploadMovieList } from "@store/modules/movies/middleware";

const withHooks = WrappedComponent => {
  const Wrapped = props => {
    const [listLabel, setListLabel] = useState("File name");
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.accept = ".txt";
      }
    }, [inputRef.current]);

    const changed = e => {
      setListLabel(e.target.files[0].name);
    };

    const upload = async e => {
      e.preventDefault();
      const file = inputRef.current.files[0];
      const formData = new FormData();
      await formData.append("file", file);
      dispatch(uploadMovieList(formData));
    };

    return (
      <WrappedComponent
        changed={changed}
        upload={upload}
        inputRef={inputRef}
        listLabel={listLabel}
        {...props}
      />
    );
  };

  return Wrapped;
};

export default withHooks;
