let emailCollectorForm = document.getElementById("email-collector")
emailCollectorForm.addEventListener("submit", event => {
  event.preventDefault()
  console.log("FIRE")

  let ourFormData = new FormData(event.target)
  let userName = ourFormData.get("firstName")
  let userEmail = ourFormData.get("emailAddress")
  let updatedHtmlContent = `
  
  <h2>Thanks, ${userName}</h2>
      <p>We're connected!</p>
      <p class="fine-print">Newsletter will be sent to ${userEmail}</p>`

  let ourMainContent = document.getElementById("main-content")
  ourMainContent.innerHTML = updatedHtmlContent
})
