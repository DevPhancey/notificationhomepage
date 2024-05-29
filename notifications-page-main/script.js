document.addEventListener('DOMContentLoaded', (event) => {
  // Select the anchor link
  const clickLink = document.querySelector('.click')

  // Add an event listener for the click event
  clickLink.addEventListener('click', (event) => {
    // Prevent the default action of the anchor link
    event.preventDefault()

    // Select all the div elements with the class 'profile'
    const profileDivs = document.querySelectorAll('.profile')

    // Loop through each div and change its background color to white
    profileDivs.forEach((div) => {
      div.style.backgroundColor = 'background-color: hsl(210, 60%, 98%)'
    })
  })
})
