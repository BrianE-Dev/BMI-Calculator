console.log("BMI Calculator");
    function bmi_calc(){
    const pName = document.getElementById("p_pname").value;
    const weightKg = parseFloat(document.getElementById("weight").value);
    const heightM = parseFloat(document.getElementById("height").value);
    const bmi = weightKg / (heightM * heightM);

    const isUnderWeight = bmi <= 18.5;
    const isNormal = bmi >= 18.5 && bmi < 25;
    const isOverWeight = bmi  == 25 || bmi > 25;
    const isHighRisk = weightKg >= 90 || bmi == isOverWeight;
        isHighRisk ? window.alert("You are at High Risk") : "";
    console.log(`User BMI: ${bmi}`);
    console.log(`Underweight: ${isUnderWeight}`);
    console.log(`Normal Weight: ${isNormal}`);
    console.log(`Overweight: ${isOverWeight}`);
    console.log(`High Risk: ${isHighRisk}`);
    document.getElementById("result").innerHTML = 
                `
                <div class="${isUnderWeight ? "u_weight" : isNormal ? "n_weight" : "o_weight"}">
                  Hello ${pName}, your BMI is ${bmi.toFixed(2)}
                </div>
                
                `;
};

