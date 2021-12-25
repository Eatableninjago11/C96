import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import Constants from 'expo-constants';
import db from '../config';

export default class Search extends Component{
  constructor(){
  super();
  this.state={
    searchInput:"",
    searchArtist:"",
    searchSong:"",
    searchLevel:"",

    searchArtist2:"",
    searchSong2:"",
    searchLevel2:"",
}

}

  searchSong = async () =>{
    var text = this.state.searchInput.toUpperCase();
    var searchText = text.split("");
    const query = await db.collection("songs").where("name","==",text).get()
    query.docs.map((doc)=>{
      var data = doc.data()
      data?(
      this.setState({searchArtist:data.artist, searchSong:data.name, searchLevel:data.level}))
      :
      alert("sorry, we couldn't find the song")
    })
    
  }

  searchBand = async () =>{
    var text = this.state.searchInput.toUpperCase();
    var searchText = text.split("");
    const query = await db.collection("songs").where("artist","==",text).get()
    query.docs.map((doc)=>{
      var data = doc.data()
      data?(
      this.setState({searchArtist2:data.artist, searchSong2:data.name, searchLevel2:data.level}))
      :
      alert("sorry, we couldn't find the song")
    })
    
  }



  render(){

    
    console.log(this.state.searchSong)
    
    return(
      <View>
      <View><Text style={{  
    alignSelf:"center",
    fontSize:30,
    fontWeight:"bolder",}}>Rock Song Finder</Text></View>
      
      <View style={{flexDirection:"row",flex:1}}>
      <TextInput 
      placeholder="Song name" 
      placeholderTextColor="gray" 
      style={{
        backgroundColor:"lightblue",width:300,height:35,borderRadius:20, alignSelf:"center", marginTop:30,alignContent:"center",borderWidth:1}} 
      onChangeText={(text)=>{this.setState({searchInput:text})}} />

      <TouchableOpacity style={{marginTop:30}} onPress={()=>{this.searchSong()}}
      ><Image source={require("../search-product.png")} style={{width:40, height:30,}}/></TouchableOpacity>
      </View>

      <View style={styles.displaytext}>
      <Text style={styles.text}>Song name: {this.state.searchSong}</Text>
      <Text style={styles.text}>Band name: {this.state.searchArtist}</Text>
      <Text style={styles.text}>Level: {this.state.searchLevel}</Text>
      </View>

      <View style={{flexDirection:"row",flex:1}}>
      <TextInput 
      placeholder="Band name" 
      placeholderTextColor="gray" 
      style={{
        backgroundColor:"lightblue",width:300,height:35,borderRadius:20,  marginTop:30,alignContent:"center",borderWidth:1}}
       onChangeText={(text)=>{this.setState({searchInput:text})}}  />  

        <TouchableOpacity style={{marginTop:30,}} onPress={()=>{this.searchBand()}}>
        <Image source={require("../search-product.png")} style={{width:40, height:30,}}/>
        </TouchableOpacity>
        </View>

      <View style={styles.displaytext}>
      <Text style={styles.text}>Song name: {this.state.searchSong2}</Text>
      <Text style={styles.text}>Band name: {this.state.searchArtist2}</Text>
      <Text style={styles.text}>Level: {this.state.searchLevel2}</Text>
      </View>

      </View>
    )
  }
}




const styles = StyleSheet.create({
  displaytext:{
    marginTop:55,
    borderWidth:0.6,
    backgroundColor:"lightblue",
    borderRadius:30,
  },
  text:{
    marginLeft:17,
    fontSize:18
  }
});