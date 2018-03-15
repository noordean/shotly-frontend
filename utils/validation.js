export function hasEmptyField(formObject) {
  let isEmpty = false;
  Object.keys(formObject).forEach((formField) => {
    if (formObject[formField].trim().length === 0) {
      isEmpty = true;
      return;
    }
  });

  return isEmpty;
}
