function activeInfo(index) {
  /* Getting the elements by their id. */
  const appointmentInfo = document.getElementById("appointment-info");
  const clientInfo = document.getElementById("client-info");
  const appointmentHistory = document.getElementById("appointment-history");
  const aiBtn = document.getElementById("aiBtn");
  const ciBtn = document.getElementById("ciBtn");
  const ahBtn = document.getElementById("ahBtn");

  // list of items
  const item1 = document.getElementById("item1");
  const item2 = document.getElementById("item2");
  const item3 = document.getElementById("item3");

  /* Removing the class d-none from the appointmentInfo element and adding the class d-block to it. It
   is also adding the class d-none to the clientInfo and appointmentHistory elements. It is also
   adding the class text-muted to the aiBtn element. */
  if (index == 1) {
    appointmentInfo.classList.remove("d-none");
    appointmentInfo.classList.add("d-block");
    clientInfo.classList.add("d-none");
    appointmentHistory.classList.add("d-none");
    aiBtn.classList.add("text-muted");
    ciBtn.classList.remove("text-muted");
    ahBtn.classList.remove("text-muted");
    item1.classList.remove("bg-light");
    item1.classList.remove("border-0");
    // hide the background and remove the border of unselected navigation or items
    item2.classList.add("bg-light");
    item2.classList.add("border-0");
    item3.classList.add("bg-light");
    item3.classList.add("border-0");
  } else if (index == 2) {
    appointmentInfo.classList.remove("d-block");
    appointmentHistory.classList.add("d-none");
    appointmentInfo.classList.add("d-none");
    clientInfo.classList.remove("d-none");
    clientInfo.classList.add("d-block");
    aiBtn.classList.remove("text-muted");
    ahBtn.classList.remove("text-muted");
    ciBtn.classList.add("text-muted");
    item1.classList.add("bg-light");
    item1.classList.add("border-0");
    item3.classList.add("bg-light");
    item3.classList.add("border-0");
    item2.classList.remove("bg-light");
    item2.classList.remove("border-0");
  } else {
    appointmentInfo.classList.remove("d-block");
    appointmentInfo.classList.add("d-none");
    aiBtn.classList.remove("text-muted");
    clientInfo.classList.remove("d-block");
    clientInfo.classList.add("d-none");
    ciBtn.classList.remove("text-muted");
    appointmentHistory.classList.remove("d-none");
    appointmentHistory.classList.add("d-block");
    ahBtn.classList.add("text-muted");
    aiBtn.classList.remove("text-muted");
    ciBtn.classList.remove("text-muted");
    item1.classList.add("bg-light");
    item1.classList.add("border-0");
    item2.classList.add("bg-light");
    item2.classList.add("border-0");
    item3.classList.remove("bg-light");
    item3.classList.remove("border-0");
  }
}
