export const validateSubject = (
  subjectLine: string
): [boolean, string | undefined] => {
  let error = undefined;
  if (!(subjectLine.length > 5 && subjectLine.length < 15)) {
    error =
      "Subject line must min of 5 characters and maximum of 15 characters";
    return [false, error];
  }
  return [true, error];
};

export const validateReason = (
  reasonForContact: string
): [boolean, string | undefined] => {
  let error = undefined;
  if (reasonForContact === "reason for confession") {
    error = "Please select the reason for you confession";
    return [false, error];
  }
  return [true, error];
};
