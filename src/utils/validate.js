export const checkValiddata = (email,password ,name, signInForm = true) => {

const isEmailValid = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

if(!isEmailValid) return "Email ID is not value";
if(!isPasswordValid) return "Password is not valid" ;
if(!signInForm && !isNameValid) return "Name is not valid" ;

return null;


}