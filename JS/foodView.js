import { clearChildren } from "./app.js"

const randomize = function(list) {
    console.log(list)
    //console.log(list.length + " list lngth")
    
    randomNumber = Math.floor(Math.random() * list.length)
        //console.log(randomNumber)

    let generatedCuisine = list[randomNumber]
    
    // for (let i in possibleFoodNum) {
    //     if (generatedCuisine===i) {
    //         randomize(list)
    //     }
        possibleFoodNum.push(generatedCuisine);
    // }
    // console.log(possibleFoodNum)
    // console.log(generatedCuisine)
    return generatedCuisine

}
let randomNumber;

let possibleFoodNum = []
let foodByCategory = []
let foodName;
// let spokeName = function () {
//     foodName = randomize(foodByCategory);
//     // activityNameElement.innerText = activityName; 
//     return foodName;
//     }

    const removeSpecialChar = function (finalCuisineList) {
                  
        for (let i = 0; i < finalCuisineList.length; i++) {
            finalCuisineList[i] = finalCuisineList[i].replaceAll('&amp;' , 'and'); 
            console.log(finalCuisineList[i])
        }
    }

const foodSection = function(food) {

    const mainElement = document.createElement("div");
    mainElement.classList.add("main-container")

    const foodElement = document.createElement("div");
    foodElement.classList.add("food-container")
    mainElement.appendChild(foodElement)

    const foodHeader = document.createElement("p")
    foodHeader.classList.add("dropdown-header")
    foodHeader.innerText="Restaurant"
    foodElement.appendChild(foodHeader)

    const foodDropdownLabel = document.createElement("select")
    foodDropdownLabel.classList.add("food-dropdown")
    foodElement.appendChild(foodDropdownLabel)

    const defaultCuisineDropdown = document.createElement("option")
    defaultCuisineDropdown.selected = true
    defaultCuisineDropdown.innerText = "Select a cuisine"
    foodDropdownLabel.appendChild(defaultCuisineDropdown)

    const mainSpinnerContainer = document.createElement("div")
    mainSpinnerContainer.setAttribute("id","main-spinner-container-food")
    mainSpinnerContainer.classList.add("main-spinner-container") 
    foodElement.appendChild(mainSpinnerContainer);
    const secondarySpinnerContainer = document.createElement("div")
    secondarySpinnerContainer.classList.add("secondary-spinner-container") 
    mainSpinnerContainer.appendChild(secondarySpinnerContainer);
    const spinnerSection1 = document.createElement("span")
    spinnerSection1.classList.add("spinner-section-1")
    secondarySpinnerContainer.appendChild(spinnerSection1);  
    const spinnerSection1Text = document.createElement("p")
    spinnerSection1Text.classList.add("spin-labels")
    spinnerSection1.appendChild(spinnerSection1Text);
    const spinnerSection2 = document.createElement("span")
    spinnerSection2.classList.add("spinner-section-2") 
    secondarySpinnerContainer.appendChild(spinnerSection2);
    const spinnerSection2Text = document.createElement("p")
    spinnerSection2Text.classList.add("spin-labels")
    spinnerSection2.appendChild(spinnerSection2Text);
    const spinnerSection3 = document.createElement("span")
    spinnerSection3.classList.add("spinner-section-3") 
    secondarySpinnerContainer.appendChild(spinnerSection3);
    const spinnerSection3Text = document.createElement("p")
    spinnerSection3Text.classList.add("spin-labels")
    spinnerSection3.appendChild(spinnerSection3Text);
    const spinnerSection4 = document.createElement("span")
    spinnerSection4.classList.add("spinner-section-4") 
    secondarySpinnerContainer.appendChild(spinnerSection4);
    const spinnerSection4Text = document.createElement("p")
    spinnerSection4Text.classList.add("spin-labels")
    spinnerSection4.appendChild(spinnerSection4Text);


    const foodButton = document.createElement("button")
    foodButton.classList.add("generate-button")
    foodButton.innerText = "SPIN"
    mainSpinnerContainer.appendChild(foodButton)

            //Pop-up box functionality
            const selectionPopUp = document.createElement("div")
            selectionPopUp.classList.add("selection-pop-up-food")
            selectionPopUp.setAttribute("id", "selection-pop-up-food")
            mainSpinnerContainer.appendChild(selectionPopUp);
        
            const selectionPopUpOverlay = document.createElement("div")
            selectionPopUpOverlay.classList.add("selection-pop-up-overlay-food")
            selectionPopUp.appendChild(selectionPopUpOverlay);
        
            const selectionPopUpContentDiv = document.createElement("div")
            selectionPopUpContentDiv.classList.add("selection-pop-up-content-div-food")
            selectionPopUpOverlay.appendChild(selectionPopUpContentDiv);
        
            const selectionPopUpCloseButton = document.createElement("button")
            selectionPopUpCloseButton.classList.add("selection-pop-up-close-button-food")
            selectionPopUpCloseButton.innerText = "x"
            selectionPopUpContentDiv.appendChild(selectionPopUpCloseButton);
        
        
            const togglePopUp = function () {
                const selectionPopUpContent = document.createElement("div")
                selectionPopUpContent.classList.add("selection-pop-up-content-food")
                selectionPopUpContent.innerText = possibleFoodNum[choice];
                selectionPopUpContentDiv.appendChild(selectionPopUpContent);
        
                selectionPopUp.classList.toggle("active") 
                console.log(possibleFoodNum[choice])
            } 
        
            selectionPopUpCloseButton.addEventListener("click", () => {
                togglePopUp()
            });
    
    let cuisine = []
    // console.log(restaurant_name)
    food.result.data.forEach(foods => {
        cuisine.push(foods.cuisines);

    });
   
    let newCuisine = [];
  
    for (let i in cuisine) {          //change to forEach
        for (let j in cuisine[i]) {
            newCuisine.push(cuisine[i][j]);
  
        }
    }
    let finalCuisineList = Array.from(new Set(newCuisine))   //removes duplicates
    removeSpecialChar(finalCuisineList);
    console.log(finalCuisineList);
    //moves duplicates
  
    

    //create dropdown options
    for (let i = 0; i < finalCuisineList.length; i++) {
        const option = finalCuisineList[i];
        const dropdown = document.createElement("option");
        dropdown.innerText = option;
        dropdown.value = option;
        foodDropdownLabel.appendChild(dropdown)        
    }
   

    let foodByCategory = []
  

    let foodName;
    
    foodDropdownLabel.addEventListener("change", () => {
            // wheelAnimation();
            foodByCategory = [] 
            
            food.result.data.forEach(foods => {
                if(foods.cuisines != null) {
                    foods.cuisines.forEach(cuisine => {
                        if(cuisine === foodDropdownLabel.value) {      //find alternative to event.target.value
                            foodByCategory.push(foods.restaurant_name)
                            //moviesByYoutube.push(movie.)
                        }
                    })
                }
              })
            possibleFoodNum = [];
            foodName = randomize(foodByCategory);
            spinnerSection1Text.innerText = foodName;
            // foodByCategory = foodByCategory.splice(foodName,randomNumber);
            foodName = randomize(foodByCategory); 
            spinnerSection2Text.innerText = foodName;
            // foodByCategory = foodByCategory.splice(foodName,randomNumber);
            foodName = randomize(foodByCategory);
            spinnerSection3Text.innerText = foodName; 
            // foodByCategory = foodByCategory.splice(foodName,randomNumber);
            foodName = randomize(foodByCategory);
            spinnerSection4Text.innerText = foodName; 
          });
        console.log(foodByCategory)
        // alert("You chose " + event.target.value)
    
    var choice = Math.floor(Math.random() * 4);
    foodButton.addEventListener("click", () => { 
        console.log(foodName)
          //test to make sure selected is not default value. if to diff just switch back to label & input 
        spinFunction(choice); 
        
        console.log(possibleFoodNum);
        console.log(choice);
        console.log(possibleFoodNum[choice]);
       
       
        // activityElement.appendChild(activityNameElement)    
    
        
    }); 
    // let selectionPopUp;
    // const toggleSelection = function () {
    //     selectionPopUp = document.createElement("div")
    //     selectionPopUp.classList.add("selection-pop-up")
    //     selectionPopUp.innerText = possibleFoodNum[choice];
    //     mainSpinnerContainer.appendChild(selectionPopUp);


    //     selectionPopUp.classList.toggle("generate-button");
     
    //     // selectionPopUp.addEventListener("click", () => {
    //     // setTimeout(selectionPopUp.remove(),5000);
            
    //     // });
     
    // }




    const spinFunction = function () {
        // let x = 1024; 
        // let y = 9999; 
        // var deg = Math.floor(Math.random() * (x-y)) + y;
        var deg = 1215 + Math.floor(Math.random() * 10) * 360 + choice * 90 + Math.random() * 88 - 44;
        secondarySpinnerContainer.style.transform = "rotate("+deg+"deg)"

        const element = document.getElementById("main-spinner-container-food");
        element.classList.remove('animate')
        setTimeout(function() {
            element.classList.add('animate')
            togglePopUp()
            // toggleSelection();

        }, 5000)
    }

      
       
    
    
    
  

    return mainElement
    
    

}

export {foodSection}