

// const weightValue=document.getElementById('weight-input').value;
// const heightValue=document.getElementById('height-input').value;

// const genderValue=document.querySelector('input[name="radio-button"]:checked');
// if (genderValue.value=='Male'){
//     console.log(genderValue.value);
//     }else if(genderValue.value=='Female') {
//         console.log(genderValue.value)
//     }


  
const submitBtn=document.getElementById('submit-btn');

submitBtn.onclick=function (){
    var ageValue=document.getElementById('age-input').value;
    var weightValue=document.getElementById('weight-input').value;
    var heightValue=document.getElementById('height-input').value;
    var genderValue=document.querySelector('input[name="radio-button"]:checked').value;

    var activity = document.getElementById("list");
    var activityValue = activity.options[activity.selectedIndex].value;

    console.log(ageValue);
    console.log(weightValue);
    console.log(heightValue);
    console.log(genderValue);
    console.log(activityValue);
}
