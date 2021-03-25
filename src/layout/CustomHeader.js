import React from 'react'
import {StyleSheet} from 'react-native'

import {
Body,
Right,Button,Icon,Title,Text,Header
}from 'native-base'

import {connect} from 'react-redux'
import propTypes from "prop-types"
import { signOut } from "../action/auth";


const CustomHeader =({signOut,authState,navigation})=>{
    return(
       <Header
         androidStatusBarColor="#0f4c75"
         style={{backgroundColor:"#0f4c75"}}
       >
           <Body>
              <Title>Insta App CDSTech</Title>
           </Body>
           <Right>
               {authState.isAuthenticated && (
                   <>
                   <Button
                    transparent
                    iconLeft
                    onPress={()=>navigation.navigate('AddPost')}
                    >
                     <Text style={{color:'#fccb9e'}}>Add Post</Text>
                   </Button>
                   <Button
                    transparent
                    iconLeft
                    onPress={()=>signOut()}
                    >
                        <Icon name="log-out-outline" style={{color:'red'}}/>
                   </Button>
                   </>
               )}
           </Right>
       </Header>
    )
}


const mapStateToProps =(state)=>({
    authState:state.auth
})

const mapDispatchToProps ={
    signOut
}


CustomHeader.prototypes ={
    signOut:propTypes.func.isRequired,
    authState:propTypes.object.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(CustomHeader)