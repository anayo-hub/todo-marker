function app() {
  const checkedButton = document.querySelector("#shopping-item-checkbox");
  const notCompletedIcon = checkedButton.querySelector("#not-completed-icon");
  const completedIcon = checkedButton.querySelector("#completed-icon");
  const loadingsSpinnerIcon = checkedButton.querySelector(
    "#loading-spinner-icon"
  );

  const MARK_AS_DONE_CLASS = "checkbox-done";

  const HIDDEN_CLASS = "hidden";

  const checkBoxButtonStatus = document.querySelector(
    "#shopping-item-checkbox-status"
  );

  function handleMarkAsDone() {
    notCompletedIcon.classList.add(HIDDEN_CLASS);

    loadingsSpinnerIcon.classList.remove(HIDDEN_CLASS);

    checkBoxButtonStatus.ariaLabel = "loading please wait...";

    setTimeout(() => {
      loadingsSpinnerIcon.classList.add(HIDDEN_CLASS);

      completedIcon.classList.remove(HIDDEN_CLASS);

      checkedButton.ariaLabel = checkedButton.ariaLabel.replace(
        "as done",
        "as not done"
      );

      checkBoxButtonStatus.ariaLabel =
        "Successfully marked clean your room as done";

      checkedButton.classList.add(MARK_AS_DONE_CLASS);
    }, 3000);
  }

  function handleMarkAsNotDone() {
    completedIcon.classList.add(HIDDEN_CLASS);

    loadingsSpinnerIcon.classList.remove(HIDDEN_CLASS);

    checkBoxButtonStatus.ariaLabel = "loading please wait...";

    setTimeout(() => {
      loadingsSpinnerIcon.classList.add(HIDDEN_CLASS);

      notCompletedIcon.classList.remove(HIDDEN_CLASS);

      checkedButton.ariaLabel = checkedButton.ariaLabel.replace(
        "as not done",
        "as done"
      );

      checkBoxButtonStatus.ariaLabel =
        "Successfully marked clean your room as done";
    }, 3000);
  }

  function handleMarkDoneOrNotDone() {
    const markAsDone = checkedButton.classList.contains(MARK_AS_DONE_CLASS);

    if (markAsDone) {
      handleMarkAsNotDone();
    } else {
      handleMarkAsDone();
    }
  }

  checkedButton.addEventListener("click", handleMarkDoneOrNotDone);
}

app();
