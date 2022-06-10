//1- Create an XMLHTTP Request object
const xhr = new XMLHttpRequest();

//2- Create a callback function.

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        let htmlContent = '<ul class="bulleted">';
        const employees = JSON.parse(xhr.responseText);
        console.log(employees);
        employees.forEach(employee => {
            if(employee.inOffice){
                htmlContent += `<li class='in'>${employee.name}</li>`;
            }else{
                htmlContent += `<li class='out'>${employee.name}</li>`;
            }
        });
        htmlContent +='</ul>';
        document.getElementById('employeeStatus').insertAdjacentHTML('afterbegin', htmlContent);
    }
};

//3- open request

xhr.open('GET', './data/employees.json');

//4- Send the Request
xhr.send();



