function app() {
  const checkedButton = document.querySelector("#shopping-item-checkbox");
  const notCompletedIcon = checkedButton.querySelector("#not-completed-icon");
  const completedIcon = checkedButton.querySelector("#completed-icon");
  const loadingSpinnerIcon = checkedButton.querySelector(
    "#loading-spinner-icon"
  );

  const MARK_AS_DONE_CLASS = "checkbox-done";
  const HIDDEN_CLASS = "hidden";
  const DEFAULT_LABEL = "Mark clean your room as done";

  const checkBoxButtonStatus = document.querySelector(
    "#shopping-item-checkbox-status"
  );

  function resetIcons() {
    notCompletedIcon.classList.remove(HIDDEN_CLASS);
    completedIcon.classList.add(HIDDEN_CLASS);
    loadingSpinnerIcon.classList.add(HIDDEN_CLASS);
    checkedButton.classList.remove(MARK_AS_DONE_CLASS);
    checkedButton.setAttribute("aria-label", DEFAULT_LABEL);
  }

  function handleMarkAsDone() {
    notCompletedIcon.classList.add(HIDDEN_CLASS);
    loadingSpinnerIcon.classList.remove(HIDDEN_CLASS);
    checkBoxButtonStatus.setAttribute("aria-live", "polite");

    setTimeout(() => {
      loadingSpinnerIcon.classList.add(HIDDEN_CLASS);
      completedIcon.classList.remove(HIDDEN_CLASS);
      checkedButton.classList.add(MARK_AS_DONE_CLASS);
      checkedButton.setAttribute(
        "aria-label",
        "Mark clean your room as not done"
      );
    }, 3000);
  }

  function handleMarkAsNotDone() {
    completedIcon.classList.add(HIDDEN_CLASS);
    loadingSpinnerIcon.classList.remove(HIDDEN_CLASS);
    checkBoxButtonStatus.setAttribute("aria-live", "polite");

    setTimeout(() => {
      loadingSpinnerIcon.classList.add(HIDDEN_CLASS);
      notCompletedIcon.classList.remove(HIDDEN_CLASS);
      checkedButton.classList.remove(MARK_AS_DONE_CLASS);
      checkedButton.setAttribute("aria-label", DEFAULT_LABEL);
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
  resetIcons(); // Reset initial state on page load
}

app();
