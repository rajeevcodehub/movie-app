
function validation (email, password) {
    let errorMessage = ""
    const emailValidator = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    if(!emailValidator){
        return "Email Not Valid";
    }
    const passwordValidator = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    if(!passwordValidator){
        return "Password Not Valid";
    }

    return null;
   
}

export default validation;