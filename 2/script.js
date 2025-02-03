document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('calbtn').addEventListener('click', calculateBMI);
});

function calculateBMI(){
    let weight = parseFloat(document.getElementById('weight').value)
    let height = parseFloat(document.getElementById('height').value)
    if(weight < 0 || height < 0){
        alert('weight or height cannot be less than 0')
        return;
    }
    let bmi = weight / (height * height)
    let result = 'noweight';
    if(bmi<18.5){
        result = 'Underweight'
    }
    else if(bmi>=18.5 && bmi<=24.9){
        result = 'Normal Weight'
    }
    else if(bmi>=25 && bmi<29.9){
        result = 'Overweight'
    }
    else if(bmi>=30){
        result = 'Obesity'
    }
    document.getElementById('bmi').textContent = bmi.toFixed(2)
    document.getElementById('bmi').style.display = 'inline';
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').textContent = result;

}