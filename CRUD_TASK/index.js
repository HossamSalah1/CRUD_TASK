var employeeName =document.getElementById("uName");
var employeeEmail =document.getElementById("uEmail");
var employeePhone =document.getElementById("uPhone");
var addBtn=document.getElementById("addBtn");
var updateBtn=document.getElementById("updateBtn");

console.log(addBtn);
console.log(updateBtn);

// var searchInput=document.getElementById("searchInput")

var listEmployee=[];
if(localStorage.getItem("users") != null){
    listEmployee=JSON.parse(localStorage.getItem("users"));
    displayUser(listEmployee);
}

function addEmployee(){
    var employee =
    {
        name:employeeName.value,
        email:employeeEmail.value,
        phone:employeePhone.value
        
    }
    listEmployee.push(employee);
    localStorage.setItem("users",JSON.stringify(listEmployee));
    displayUser(listEmployee);
    clearInput();
}

function clearInput(){

    employeeName.value="";
    employeeEmail.value="";
    employeePhone.value="";
}

function displayUser(arr){
    var user=``;
    for(var i=0;i < arr.length ;i++){
        user+=`<tr>
                    <td>"${arr[i].name}"</td>
                    <td>"${arr[i].email}"</td>
                    <td>"${arr[i].phone}"</td>
                    <td><button onclick="setFormForUpdate(${i})">update</button></td>
                    <td><button onclick="deleteUser(${i})">delete</button></td>
                    
                </tr>`;
    }
    document.getElementById("tablebady").innerHTML=user;
}

function deleteUser(userindex){

    listEmployee.splice(userindex,1);
    localStorage.setItem("users",JSON.stringify(listEmployee));
    displayUser(listEmployee);

}



function searchUser(term){
    var searchUser=[];
    for (let i = 0; i < listEmployee.length; i++) {

        if (listEmployee[i].name.toLowerCase().includes(term.toLowerCase())==true ) {
            
            searchUser.push(listEmployee[i]);

        }
    

        
    }
    console.log(searchUser);
    displayUser(searchUser)
}

// searchUser(searchInput.value)

function setFormForUpdate(i){

    // addBtn.classList.add();
    // updateBtn.classList.replace("display:none","display:block");
    employeeName.value=listEmployee[i].name;
    employeeEmail.value=listEmployee[i].email;
    employeePhone.value=listEmployee[i].phone;


}


function updateUser(index){
    
    var employee =
    {
        name:employeeName.value,
        email:employeeEmail.value,
        phone:employeePhone.value
        
    }
    listEmployee.splice(index,1,employee)
    localStorage.setItem("users",JSON.stringify(listEmployee));
    displayUser(listEmployee);
    clearInput();

}