import auth from '@react-native-firebase/auth'
import Snackbar from 'react-native-snackbar'
import database from '@react-native-firebase/database'

export const signUp =(data)=>async(dispatch) =>{
    console.log(data)
    const {name,instaUserName,bio,email,password,country,image} =data

    auth().createUserWithEmailAndPassword(email,password)
    .then((data)=>{
        console.log(data)
        console.log("User Creation was Success")

        database()
        .ref('/users/'+data.user.uid)
        .set({
            name,
            instaUserName,
            country,
            image,
            bio,
            uid:data.user.uid
        })
        .then(()=>console.log("Data set Success."))
        Snackbar.show({
            text:'Account Created',
            textColor:'white',
            backgroundColor:'#1b262c'
        })
    })
    .catch((error)=>{
        console.log(error)
        Snackbar.show({
            text:'Signup failed',
            textColor:'white',
            backgroundColor:'red'
        })
    })
}


export const signIn =(data)=>async(dispatch)=>{
    console.log(data)
    const {email,password} =data

    auth()
    .signInWithEmailAndPassword(email,password)
    .then(()=>{
        console.log("Sign In Success.")
        Snackbar.show({
            text:'Account Signin',
            textColor:'white',
            backgroundColor:"#1b262c"
        })
    })
    .catch((error)=>{
        console.log(error)
        Snackbar.show({
            text:'SignIn Failed',
            textColor:'white',
            backgroundColor:"red"
        })
    })
}

export const signOut =()=>async(dispatch)=>{
    auth()
    .signOut()
    .then(()=>{
        Snackbar.show({
            text:'Signout Success',
            textColor:'white',
            backgroundColor:"#1b262c"
        })
    })
    .catch((error)=>{
        console.log(error)
        Snackbar.show({
            text:'Signout Failed',
            textColor:'white',
            backgroundColor:"red"
        })
    })
}