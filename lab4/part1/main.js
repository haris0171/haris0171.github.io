const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText = 'It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']
const insertY= ['the soup kitchen', 'Disneyland', 'the White House']
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and slithered away']

// Event Handler
generateBtn.addEventListener('click', result );

// Completed result function
    function result(){
        let newStory = storyText
//Replaces placeholders with random select values
        const xItem = randomValueFromArray(insertX);
        const yItem = randomValueFromArray(insertY);
        const zItem = randomValueFromArray(insertZ);
//Replaces all previous placeholders in story with new ones
        newStory = newStory.replaceAll(':insertx:',xItem);
        newStory = newStory.replaceAll(':inserty:',yItem);
        newStory = newStory.replaceAll(':insertz:',zItem);

//If user enters custom name it will replace 'Bob' with custom name
        
        if (customName.value !== ''){
        const name = customName.value;
        newStory = newStory.replaceAll('Bob',name);
        }

        if (document.getElementById("uk").checked) {
//lbs to stone conversion
        const weight = `${Math.round(300/14)} stones`;
//convert farenheight to centigrade
        const temperature = `${Math.round((94-32)*(5/9))} celsius`;
        newStory = newStory.replaceAll('94 fahrenheit', temperature);
        newStory = newStory.replaceAll('300 pounds', weight);
}

//
        story.textContent = newStory;
        story.style.visibility = 'visible';
}
    
