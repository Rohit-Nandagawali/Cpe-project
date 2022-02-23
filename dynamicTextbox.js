
// selecting elements using quesry selector and storing them 
const questionsdropdown = document.querySelector(".quedropdown")
var textForQuestion1 = document.querySelector(".answerForQuestion1");
var textForQuestion2 = document.querySelector(".answerForQuestion2");
var textForQuestion3 = document.querySelector(".answerForQuestion3");

// declaring function that is called by <select>
function getSubjects(questionSelected) {
     //    'question' has the index of selected index of question example: first question= question1
     var question = questionSelected.options[questionSelected.selectedIndex].value;
    //  console.log(question);

    if (question!="0") {
        // if question is selected
        if (question=="question1") {
            questionsdropdown.classList.remove("is-invalid");
            textForQuestion1.style.display="flex";
            
        } 
        else if(question=="question2"){
            questionsdropdown.classList.remove("is-invalid");  
            textForQuestion1.style.display="flex";  

        }
        else if(question=="question3"){
            questionsdropdown.classList.remove("is-invalid"); 
            textForQuestion1.style.display="flex"; 

        }
       
    } else {
        // if question is not selected

        textForQuestion1.style.display="none";
        textForQuestion1.style.display="none";  
        textForQuestion1.style.display="none"; 

        // console.log(forms.questions);
        questionsdropdown.classList.add("is-invalid");

        
    }
}
