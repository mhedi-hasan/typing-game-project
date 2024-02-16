function hideElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
  }
  function showElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
  }
  
  function removesBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-400");
  }
  function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("bg-orange-400");
  }
  
  function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
  }
  function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
  }
  
  function getElementTextById(elementId){
    const element=document.getElementById(elementId);
    const text=element.innerText;
    return text;
  }
  
  function getARandomAlphabet() {
    // get or create an alphabet
    const alphabetString = "qwertyuiopasdfghjklzxcvbnm/";
    const alphabets = alphabetString.split("");
    // console.log(alphabets)
  
    //get a random index between 0-26
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
  
    const alphabet = alphabets[index];
    // console.log(alphabet);
    return alphabet;
  }
  