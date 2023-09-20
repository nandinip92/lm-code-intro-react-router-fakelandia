import { useState } from "react";
import { Subject } from "./subject";
import { ReasonForContact } from "./reason-for-contact";

export const Confession = () => {
  const [subjectLine, setSubjectLine] = useState("");
  const [reasonForContact, setReasonForContact] = useState(
    "reason for confession"
  );
  const [textArea, setTextArea] = useState("");
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

      <Subject subjectLine={subjectLine} onChangeField={setSubjectLine} />
      <ReasonForContact
        reasonForContact={reasonForContact}
        onChangeField={setReasonForContact}
      />
      {/*<TextArea onChangeTextArea={setTextArea} */}
    </>
  );
};
