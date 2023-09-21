import React from "react";
import { useRef } from "react";

export interface TextAreaProps {
  textArea: string;
  onChangeTextArea: (newValue: string) => void;
}
export const TextArea: React.FC<TextAreaProps> = ({
  textArea,
  onChangeTextArea,
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeTextArea(event.target.value);
    return inputRef.current?.value;
  };
  return (
    <>
      <div className="confessions__row">
        <textarea
          className="confessions textArea"
          value={textArea}
          onChange={(event) => handleChange(event)}
        ></textarea>
      </div>
    </>
  );
};
