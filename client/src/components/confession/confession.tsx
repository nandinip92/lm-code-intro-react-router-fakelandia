import React, { useEffect, useState } from "react";
import { Subject } from "./subject";
import { ReasonForContact } from "./reason-for-contact";
import { TextArea } from "./text-area";
import { validateSubject, validateReason } from "./validate/validate-fields";

export const Confession: React.FC<{ onSubmit?: () => void }> = ({
  onSubmit,
}) => {
  const [subjectLine, setSubjectLine] = useState("");
  const [reasonForContact, setReasonForContact] = useState(
    "reason for confession"
  );
  const [valid, setValid] = useState(false);
  const [textArea, setTextArea] = useState("");

  const validate = () => {
    const isValidSubject = validateSubject(subjectLine);
    const isValidResaon = validateReason(reasonForContact);
    return isValidSubject[0] && isValidResaon[0];
  };

  useEffect(() => {
    const isValid = validate();
    console.log("isValid--->", isValid);
    setValid(isValid);
  }, [subjectLine, reasonForContact]);

  const submitForm = () => {
    onSubmit && onSubmit();
  };
  return (
    <>
      <h3>
        Its very difficult to catch people commiting misdemeanours so we
        appriciate it when citizens confess to use directly
      </h3>
      <h3>
        However, if you are just having a hard day and need to vent then your
        are welcome to contact us here too. Up to you
      </h3>
      <div className="confessions">
        <Subject subjectLine={subjectLine} onChangeField={setSubjectLine} />
        <ReasonForContact
          reasonForContact={reasonForContact}
          onChangeField={setReasonForContact}
        />
        <TextArea textArea={textArea} onChangeTextArea={setTextArea} />
        <button
          className="submit_button"
          type="submit"
          title="Submit"
          value="Confess"
          onClick={submitForm}
          disabled={!valid}
        >
          Confess
        </button>
      </div>
    </>
  );
};
