const volunteerButton = document.getElementById('volunteerButton');
const contactForm = document.getElementById('contactForm');
const interactiveElement = document.getElementById('interactiveElement');

// Event listener for "Volunteer Now" button
volunteerButton.addEventListener('click', function() {
  // Display the contact form
  contactForm.style.display = 'block';
});

// Additional interactive element
// For example, a button to change the background color
const changeColorButton = document.createElement('button');
changeColorButton.textContent = 'Change Color';
changeColorButton.addEventListener('click', function() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  interactiveElement.style.backgroundColor = randomColor;
});

// Append the additional interactive element to the page
interactiveElement.appendChild(changeColorButton);