function validateInputForm(form) {
  // ReqDate: required, mm/dd/yyyy format
  const reqDate = form.ReqDate.value.trim();
  const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
  if (!reqDate) {
    alert("Request Date is required.");
    return false;
  }
  if (!dateRegex.test(reqDate)) {
    alert("Request Date must be in mm/dd/yyyy format.");
    return false;
  }

  // EmpID: required, 6 alphanumeric characters, starting with capital letter, followed by 5 numbers
  const empID = form.EmpID.value.trim();
  const empIDRegex = /^[A-Z][0-9]{5}$/;
  if (!empID) {
    alert("Employee ID is required.");
    return false;
  }
  if (!empIDRegex.test(empID)) {
    alert("Employee ID must start with a capital letter followed by 5 digits (e.g., A12345).");
    return false;
  }

  // FName: required, must start with capital letter
  const fName = form.FName.value.trim();
  const nameRegex = /^[A-Z][a-zA-Z]*$/;
  if (!fName) {
    alert("First Name is required.");
    return false;
  }
  if (!nameRegex.test(fName)) {
    alert("First Name must start with a capital letter and contain only letters.");
    return false;
  }

  // LName: required, must start with capital letter
  const lName = form.LName.value.trim();
  if (!lName) {
    alert("Last Name is required.");
    return false;
  }
  if (!nameRegex.test(lName)) {
    alert("Last Name must start with a capital letter and contain only letters.");
    return false;
  }

  // ProbDesc: required
  const probDesc = form.ProbDesc.value.trim();
  if (!probDesc) {
    alert("Problem Description is required.");
    return false;
  }

  // All checks passed
  return true;
}
