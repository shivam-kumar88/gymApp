import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image, TextInput } from 'react-native'





export default function Login({navigation}) {
    //console.log(authentication.login_stat)
    return (
        <View style={{flex:1, backgroundColor:'white', justifyContent:'center',}}>
            <ImageBackground source={require('../Assets/pictures/login_background.jpg')} resizeMode='cover' 
                style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <View style={style.content}>
                    <Text style={{color:'black', fontSize:25, fontWeight:'800'}}>Login</Text>
                    <View style={{width:'100%'}}>
                        <Text style={{color:'black', fontSize:20, fontWeight:'600'}}>User Name</Text>
                        <View style={{backgroundColor:'white', width:'100%', height:40, borderRadius:10,
                            opacity:.9, flexDirection:'row', alignItems:'center'}}>
                                <Image source={require('../Assets/logos/account-box.png')}/>
                                <TextInput 
                                    style={{width:'80%'}}
                                    placeholder='enter your user name'
                                />
                        </View>
                        <Text style={{color:'black', fontSize:20, fontWeight:'600', marginTop:15}}>Password</Text>
                        <View style={{backgroundColor:'white', width:'100%', height:40, borderRadius:10,
                            opacity:.9, flexDirection:'row', alignItems:'center'}}>
                                <Image source={require('../Assets/logos/lock.png')}/>
                                <TextInput 
                                    style={{width:'80%'}}
                                    placeholder='enter your Password'
                                    secureTextEntry= {true}
                                />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => authentication.loggedin()}>
                        <Text style={{fontSize:20, color:'black', fontWeight:'700'}}>Login</Text>
                    </TouchableOpacity>
                </View>
                
            </ImageBackground>
        </View>
    )
}

const style = StyleSheet.create({
    content:{
        width:'90%',
        paddingHorizontal:30,
        padding:20,
        backgroundColor:'grey',
        opacity:.7,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        height:45,
        width:150,
        backgroundColor:'#d43541',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    }
})