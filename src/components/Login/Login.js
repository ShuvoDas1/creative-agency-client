import React from 'react';
import logo from '../../images/logos/logo.png';
import google from '../../images/icons/google.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';




const Login = () => {

    if(firebase.apps.length == 0){
        firebase.initializeApp(firebaseConfig);
    }

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)

    let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(idToken => {
             sessionStorage.setItem('token',idToken);
          }).catch(error => {
            console.log(error);
          });
    }

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const {displayName,email} =  result.user;
            const signInUser = {name:displayName,email}
            setLoggedInUser(signInUser);
            history.replace(from);
            setUserToken();
          })
          .catch(error => {
            console.log(error.message);
          });
    }

    return (
        <section>
            <div className='m-5  text-center'>
                <img src={logo} className='img-fluid' style={{ width: "100px", height: "50px" }}/>
            </div>
            <div className=' mt-2 m-auto p-5' style={{border:'1px solid lightGray', width:'400px',height:'300px'}}>
                <div className='text-center py-5'>
                    <h5 className='text-center'>Login With</h5>
                    <button className='btn btn-light my-3' onClick={handleSignIn} ><img src={google} className='img-fluid mr-4' style={{ width: "30px", height: "30px" }} alt=""/>Continue with Google</button>
                    <p><small>Don't have an account?  <Link to='/login'>Create an account</Link></small></p>
                </div>
            </div>
        </section>
    );
};

export default Login;