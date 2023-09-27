import React, { useContext, useState } from "react";
import { Subject } from "./subject";
import { ReasonForContact } from "./reason-for-contact";
import { TextArea } from "./text-area";
import { MisdemeanourKind } from "../../types/misdemeanour.types";
import { validateSubject, validateReason } from "./validate/validate-fields";
import { misdemeanourListContext } from "../misdemeanour/misdemeanour-page";

export const Confession: React.FC<{ onSubmit?: () => void }> = ({
  onSubmit,
}) => {
  const misdemeanoursList = useContext(misdemeanourListContext);
  console.log("--->Confession: misdemeanoursList", misdemeanoursList);
  const [subjectLine, setSubjectLine] = useState("");
  const [reasonForContact, setReasonForContact] = useState<
    MisdemeanourKind | string
  >("reason for confession");
  const [textArea, setTextArea] = useState("");
  const [postIsSuccess, setPostIsSuccess] = useState<string | undefined>(
    undefined
  );

  const validate = () => {
    const isValidSubject = validateSubject(subjectLine);
    const isValidResaon = validateReason(reasonForContact);
    return isValidSubject[0] && isValidResaon[0];
  };

  const isValid = validate();

  const submitForm = async () => {
    onSubmit && onSubmit();
    const confessForm = {
      subject: subjectLine,
      reason: reasonForContact, // either a MisdemeanourKind OR the string `just-talk`
      details: textArea,
    };
    try {
      const apiResponse = await fetch("http://localhost:8080/api/confess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(confessForm),
      });
      const json = await apiResponse.json();
      console.log("Fetch POST response--->", json);
      if (json.success === true && json.justTalked === false) {
        console.log(json.message);
        misdemeanoursList.push({
          citizenId: Math.floor(11 + Math.random() * 37 * Math.random() * 967),
          misdemeanour: reasonForContact as MisdemeanourKind,
          date: new Date().toLocaleDateString(),
        });
        setPostIsSuccess(json.message);
        console.log("ML--->", misdemeanoursList);
      }
    } catch (error) {
      console.log(`ERROR:${error}`);
    }
    //clearAll();
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
      {postIsSuccess !== undefined && (
        <p className="postMessage">{postIsSuccess}</p>
      )}
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
          disabled={!isValid}
        >
          Confess
        </button>
      </div>
    </>
  );
};
