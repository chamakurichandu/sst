import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import {userData} from "../../MOCK_DATA";
import ProtectedRoute from "./privateRoute";
import SideBar from "../views/sidenavbar/sidebar"; 
import LoginPage from "./loginpage";
import Registor from "./registor";
import UserManagement from "../views/adminSetting/userManagement"

export default class MainRoute extends Component {
    constructor(){
        super();
        this.state = {
            allUsers:userData,
            isAuthenticated:true,
            userEmail:'',
            userPassword:'',
            checkEmail:"slarham9@rediff.com",
            checkPassword:"1RcE0W",
            check:false,
            locate:"/dashboard",
            pathBool:false
        }
    }


   login = () => {
       this.setState({
        isAuthenticated:true
       })
    // setIsAuthenticated(true);
  };

   logout = () => {
    this.setState({
        isAuthenticated:false
       })
    // setIsAuthenticated(false);
  };
  componentDidMount(){
    debugger;
    const { checkEmail, checkPassword } = this.state;
    localStorage.setItem('tempEmailId',checkEmail);
    localStorage.setItem('tempPass',checkPassword);
    
    let userMailId = localStorage.getItem("tempEmailId");
    let userPasswword = localStorage.getItem("tempPass");

    if(userMailId !== undefined && userPasswword !== undefined){
      console.log('Correct');
      this.setState({
                  isAuthenticated:true
                })
    }else{
      console.log('Wrong');
    }
  }

  wrongEmailPassword = (a) =>{
    debugger;
    a = true;
    return a;
    console.log('warining hiited',a)
  }

  getPath=(path)=>{
    debugger;
    this.setState({
      pathBool:true,
      locate:path
    })
  }

    loginProcess = () =>{
            let getAllUsers = this.state.allUsers;
            console.log("allData",getAllUsers);
            for (var i=0; i<getAllUsers.length ; i++){
                if(this.state.checkEmail == getAllUsers[i].email && this.state.checkPassword ==  getAllUsers[i].password){
                    console.log('true');
                    console.log('checking i value true', getAllUsers[i].email)
                    this.setState({
                        isAuthenticated:true
                    })
                }
                else{
                    this.wrongEmailPassword();
                    console.log('false');
                    console.log('checking i value false', getAllUsers[i].email)
                }
            }
            console.log('checking',this.state.allowRoute)
        }

    loginAutenticate  = async (email,password) =>{
            var a = email;
            var b = password;
         await this.setState({ userEmail: a, userPassword:b }, () => {
                // console.log(this.state.userEmail, 'Email');
                // console.log(this.state.userPassword,'Password')
              }); 
    
    
    console.log('final Email',this.state.userEmail);
    console.log('final password',this.state.userPassword);
              this.loginProcess();
   
        }
        render(){
            return (
                <div>
                  <Router>
                    <Switch>
                     <Route path="/" exact>
                        {this.state.isAuthenticated ? (
                          <Redirect to="/dashboard" />
                        ) : (
                            <LoginPage authLogin={this.loginAutenticate} check={this.wrongEmailPassword}/>
                        )}
                      </Route>  
                       <ProtectedRoute
                        isAuthenticated={this.state.isAuthenticated}
                        path={this.state.pathBool ? this.state.locate : "/dashboard" }
                        logout={this.logout}
                        component={SideBar}
                        pathDynamic={this.getPath}
                      /> 
                       <ProtectedRoute
                        isAuthenticated={this.state.isAuthenticated}
                        path={this.state.locate}
                        logout={this.logout}
                        component={SideBar}
                        pathDynamic={this.getPath}
                      />  
                      <Route path="*">
                        <div>404 Not found </div>
                      </Route> 
                    </Switch>
                  </Router> 
                </div>
              );
        }
 
}

































// import React from 'react'
// import LoginPage from "./loginpage";
// import {BrowserRouter,Switch,Route} from "react-router-dom";
// export default function Login() {
//     const [userEmail,setUserEmail] = React.useState('');
//     const [userPassword,setUserPassword] = React.useState('');


//     const loginAutenticate = async (email,password) =>{
//         const Email = { userEmail: email };
//      await   setUserEmail(email);
//      await  setUserPassword(password);
//         console.log('userEmail',userEmail);
//         console.log('userpassword',userPassword);
//     }
//     return (
//         <div>
//             <BrowserRouter>
//             <div>
//               <Switch>
//                   <Route path="/login">
//                       <LoginPage authLogin={loginAutenticate}/>
//                   </Route>
//               </Switch>  
//             </div>
//         </BrowserRouter>
//         </div>
//     )
// }

// import React, { Component } from 'react';
// import LoginPage from "./loginpage";
// import {BrowserRouter,Switch,Route} from "react-router-dom";
// import {userData} from "../../MOCK_DATA";
// import SideBar from "../component/sidebar"; 
// export default class Login extends Component {
//     constructor(){
//         super()
//         this.state={
//             userEmail:"",
//             userPassword:"",
//             checkEmail:"slarham9@rediff.com",
//             allowRoute:false
//         }
//     }

//     loginProcess = () =>{
//         let getAllUsers = userData;
//         console.log("allData",getAllUsers);
        
//         for (var i=0; i<getAllUsers.length ; i++){
//             if(this.state.checkEmail == getAllUsers[i].email){
//                 console.log('true');
//                 console.log('checking i value true', getAllUsers[i].email)
//                 this.setState({
//                     allowRoute:true
//                 })
//             }
//             else{
//                 console.log('false');
//                 console.log('checking i value false', getAllUsers[i].email)
//             }
//         }
//         console.log('checking',this.state.allowRoute)
//     }


//     loginAutenticate  = async (email,password) =>{
//         var a = email;
//         var b = password;
//      await this.setState({ userEmail: a, userPassword:b }, () => {
//             // console.log(this.state.userEmail, 'Email');
//             // console.log(this.state.userPassword,'Password')
//           }); 

//           this.loginProcess();
//     }
//   render() {
      
//     return (
//         <div>
//         <BrowserRouter>
//         <div>
//           <Switch>
//               <Route path="/login">
//                   <LoginPage authLogin={this.loginAutenticate}/>
//               </Route>
             
//               <Route path="/side">
//                   <SideBar/>
//               </Route>
              
               
              
//           </Switch>  
//         </div>
//     </BrowserRouter>
//     </div>
//     );
//   }
// }

