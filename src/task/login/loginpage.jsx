import React from 'react'
import { userData } from "../../MOCK_DATA";
import "./login.css";
import { Formik, validateYupSchema } from 'formik';

export default function LoginPage(props) {
    const [firstName, setFirstName] = React.useState('');
    const [firstNameError, setFirstNameError] = React.useState('* Enter Your Firstname');
    const [firstNameBool,setfirstNameBool] = React.useState(false);
    const [lastName, setLastName] = React.useState('');
    const [lastNameError, setLastNameError] = React.useState('* Enter Your Lastname');
    const [lastNameBool,setLastNameBool] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [emailErrorreg, setEmailError] = React.useState('* Enter Your Email');
    const [emailBoolreg,setemailRegBool] = React.useState(false);
    const [gender, setGender] = React.useState('');
    const [genderCheckMale, setGenderCheckMale] = React.useState(false);
    const [genderCheckFemale, setGenderCheckFemale] = React.useState(false);
    const [genderError, setGenderError] = React.useState('* Enter Your Gender');
    const [genderdBool,setgenderBool] = React.useState(false);
    const [passsword, setPasssword] = React.useState('');
    const [passwordErrorReg, setPosswordError] = React.useState('* Enter Your Password');
    const [passwordBoolReg,setpasswordBoolReg] = React.useState(false);
    const [loginEmail, setloginEmail] = React.useState('');
    const [emailError] = React.useState('* Enter Email');
    const [emailValidError] = React.useState('* Enter Valid Email');
    const [emailBool,setemailBool] = React.useState(false);
    const [emailValidBool ,setemailValidBool] = React.useState(false);
    const [loginPassword, setloginPassword] = React.useState('');
    const [passwordError] = React.useState('* Enter Password');
    const [passwordBool,setpasswordBool] = React.useState(false);
    const [emailPassBool,setemailPassBool] = React.useState(false);
    const [emailPassword] = React.useState('* Your Email or Password is Wrong');
    const [passWarnBool,setpassWarnPassBool] = React.useState(false);
    const [passWarn,setPassWarn] = React.useState('* Your email should contains min 6 charectors');



    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleMale = async (e) =>  {
        var genders = document.getElementsByName("Male");
        console.log("genders",genders[0].checked);
        if(genders[0].checked == true){
          await  setGender("Male");
        }
        else{
           await setGender("");
        }
        console.log("check gender", gender)
        // setGender(e.target.value);
        console.log("value radio",e.target.value)
    }

    const handleFemale = async (e) => {
        var genders = document.getElementsByName("Male");
        console.log("genders",genders[1].checked);
        if(genders[1].checked == true){
          await  setGender("Female");
        }
        else{
           await setGender("");
        }
        console.log("check gender", gender)
        // setGender(e.target.value);
        console.log("value radio",e.target.value)
        // setGender(e.target.value)
    }

    const handlePassword = (e) => {
        setPasssword(e.target.value);
    }

    const handleLoginEmail = (e) =>{
        setloginEmail(e.target.value);
    }

    const handleLoginPassword =  (e) =>{
        setloginPassword(e.target.value);  
        let getPassword = e.target.value;
        if(getPassword.length > 2 && getPassword.length <7){
            setpassWarnPassBool(true);
            console.log('login')
        }
        setInterval(() => {
            setpassWarnPassBool(false);
        }, 3000);
        
       
        console.log('current value',loginPassword);
    }

    const validateLogin =()=>{
        let formValid=true;
        let regx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(loginEmail);
        if(loginEmail==""){
            setemailBool(true);
            setemailValidBool(false);  
            formValid = false 
           
        }else{
            setemailBool(false);
        }
        if(!regx){
            setemailBool(true);
        }
        else{
            setemailBool(false);
        }
        if(loginPassword==""){
            setpasswordBool(true);
            formValid = false 
        }else{
            setpasswordBool(false);
        }  
        console.log('regx',regx);
        return formValid;
        
    }

    const validateRegistor =()=>{
        let formValid=true ;
        let regx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
        if(firstName ==""){
            setfirstNameBool(true);
            formValid = false 
        }else{
            setfirstNameBool(false);
        }
        if(lastName==""){
            setLastNameBool(true);
            formValid = false 
        }else{
            setLastNameBool(false);
        }  
        if(email ==""){
            setemailRegBool(true);
            formValid = false 
        }else{
            setemailRegBool(false);
        }
        if(!regx){
            setemailRegBool(true);
        }
        else{
            setemailRegBool(false);
        }
        if(gender==""){
            setgenderBool(true);
            formValid = false 
        }else{
            setgenderBool(false);
        }  
        if(passsword ==""){
            setpasswordBoolReg(true);
            formValid = false 
        }else{
            setpasswordBoolReg(false);
        }
        return formValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateing = validateRegistor()
        if(validateing){
            const id = Math.floor(Math.random() * 10000) + 1;
            var dummy = {
                "id": id,
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
                "gender": gender,
                "password": passsword
            }
    
            userData.push(dummy);
            alert('Successfully Registered!');
            console.log('userData', userData);
        }
        setFirstName('');
        setLastName('');
        setEmail('');
        setGender('');
        setPasssword('');
        
       console.log('validate Registor',validateing);
    }

    
    const handleLoginSubmit = (e,a) =>{
        e.preventDefault();
        const validateing = validateLogin()
        var demo = props.check();
        console.log('emailpasscheck', demo)
        if(validateing){
            props.authLogin(loginEmail,loginPassword);
        }
        if(demo && loginEmail!=="" && loginPassword!==""){
            setemailPassBool(true);
        }
        else{
            setemailPassBool(false);
        }
       console.log('validate Email',validateing);
       setloginEmail('');
       setloginPassword('');
       console.log('emailpass',emailPassBool);
    }
    return (
        <section className="gradient">
        <div>
            <div className="container">
                <div className="row top-align">
                    <div className="col-md-6 check" data-aos="fade-right"  data-aos-delay="300">
                    <div className="login"> 
                    <form onSubmit={handleLoginSubmit}>
                    <div >
                    <p>Login</p>
                    <div className="inputs-cover">
                    <input type="text" placeholder="Email" value={loginEmail} onChange={handleLoginEmail} className="login-inputs"/>
                <div className="errors">{emailBool ? emailError : null}</div>
                <div className="errors">{emailValidBool ? emailValidError : null}</div>
                    <input type="password" placeholder="Password" value={loginPassword}  onChange={handleLoginPassword}/>
                   <div className="errors"> {passwordBool ? passwordError : null}</div>
                   <div className="errors"> {passWarnBool ? passWarn : null}</div>
                    <button className="btn">Login</button>
                    <div className="errors"> {emailPassBool ? emailPassword : null}</div>
                    </div>
                    </div>
                    </form>
                </div>
                    </div>
                    <div className="col-md-6 test" data-aos="fade-left" data-aos-delay="300">
                    <div className="registor-cover">
                    <div id="registor">
                <p>Registor</p>
                <div className="registor-inputs-cover">
                <form onSubmit={handleSubmit}>
               
                    <input type="text" placeholder="Firstname" value={firstName} onChange={handleFirstName} className="fileds" />
                   <div className="errors"> {firstNameBool ? firstNameError : null}</div>
                    <input type="text" placeholder="Lastname" value={lastName} onChange={handleLastName} className="fileds" />
                    <div className="errors">{lastNameBool ? lastNameError : null}</div>
                    <input type="text" placeholder="Email" value={email} onChange={handleEmail} className="fileds" />
                    <div className="errors">{emailBoolreg ? emailErrorreg : null}</div>
                    <p>Please select your gender:</p>
                    <input type="radio" id="male" name="Male" value={gender}  onChange={handleMale} />
                    <label for="male"  className="mr-3 radio-gender">Male</label>
                    <input type="radio" id="female" name="Male"  value={gender}  onChange={handleFemale} />
                    <label for="female"  className="radio-gender">Female</label>
                    <div className="errors">{genderdBool ? genderError : null}</div>
                    <input type="password" placeholder="Password" value={passsword} onChange={handlePassword} className="fileds"/>
                    <div className="errors">{passwordBoolReg ? passwordErrorReg : null}</div>
                    <button className="btn">Submit</button>
                   
                </form>
                </div>
                </div>
                </div>
                    </div>
                </div>
            </div>
            
        </div>
        </section>
    )
}
