/* code goes here */
document.addEventListener("DOMContentLoaded", e => {
  expect(document.querySelector("div#hidden-div").innerText).to.equal('301');
})