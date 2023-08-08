function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill out all fields before submitting.");
      return false;
    }
    
    // Here, you can add code to handle form submission to a backend server or do any other action.
    // For this example, we'll just prevent the form submission.
    alert("Form submitted successfully!"); // Remove this line once you add the backend handling.
    return false;
  }
  