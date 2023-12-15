function validateEmail(email){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0_9.-]+\.[a-zA-Z]{2,}$/;

    if(emailPattern.test(email)){
        return "VAlid Email id";
    }else{
        return"Invalid Email id"; 
    }
}

const email1 = "test01@gmail.com";
const email2 = "Student01@gmail.com";
const email3 = "test01@gmail.com";
console.log(validateEmail(email1));
console.log(validateEmail(email2));
console.log(validateEmail(email3));
