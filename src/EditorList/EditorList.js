import React, { useState, useEffect } from "react";
import { Wrapper, Item } from "./styled";
import { EditorComp } from "./components/EditorComp";

export const EditorList = () => {
  const [list, setList] = useState([
    {
      title: "1",
      text: "lorem ipsum",
    },
  ]);

  const addForm = () => {
    const form = {
      title: list.length + 1,
      text: "",
    };
    setList((prevValue) => [...prevValue, form]);
  };

  const removeItem = (index) => {
    setList((prevList) => {
      const updatedList = [...prevList];
      updatedList.splice(index, 1); // Remove the element at the specified index
      return updatedList;
    });
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  const forms = list.map((item, index) => (
    <Item>
      <EditorComp
        key={index}
        initialValue={item.text}
        onChange={(newVal) => (item.text = newVal)}
      />
      <button onClick={() => removeItem(index)}>Remove</button>
    </Item>
  ));

  return (
    <Wrapper>
      {forms}
      <button onClick={() => addForm()}>Add</button>
      <pre>{JSON.stringify(list, 0, 2)}</pre>
    </Wrapper>
  );
};
