import React from 'react';
import {View,Text,Image,Paragraph, Header,TextInput, StyleSheet,ImageBackground,StatusBar} from 'react-native';
import Scroll from './Scroll';


const Home =()=>{


return (
  <View style={styles.header} >
<ImageBackground
style={styles.background}
 source={require('./scr/topbg.png')}/>  

<View  style={styles.one} >
<Image  style={styles.a}
 source={require('./scr/trees.png')}   
 />
 <Text  style={{ fontSize:12,fontWeight: "bold",color:'orange', left:30,right:23, top:23 }} > Trees </Text>
</View>



<View  style={styles.two} > 

<Image  style={styles.b}
 source={require('./scr/reuse.png')}   
 />
 <Text  style={{ fontSize:12,fontWeight: "bold",color:'orange', left:28,right:23, top:23 }} > Reuse </Text>

</View>


<View  style={styles.three}> 
<Image  style={styles.c}
 source={require('./scr/reuse.png')}   
 />
 <Text  style={{ fontSize:12,fontWeight: "bold",color:'orange', left:17,right:23, top:23 }} > Total Point </Text>

  </View>


<View  style={styles.four}>    
<Image  style={styles.d}
 source={require('./scr/plastic-offset.png')}   
 />
 <Text  style={{ fontSize:12,fontWeight: "bold",color:'orange', left:10, right:6, top:23 }} > Plastic Offset </Text>

</View>

<View  style={styles.five} >
<Image  style={styles.e}
 source={require('./scr/plastic-offset.png')}   
 />
 <Text  style={{ fontSize:12,fontWeight: "bold",color:'orange', left:17, right:6, top:23 }} > CO2 Offset </Text>
 
</View>


<View style={styles.square} >

<Image  style={{left:17, right:6, top:11, width: 55, height:55  }}   source={require('./scr/car.png')} />

<Text style={{ fontSize:11, textAlign: 'center'  }}  >
 The best online grocery store in India. 
</Text>

</View>
<View style={{top:-150,width:7, height:8 }}>
<Image source={require('./Bottom/dummy-image.png')} />
</View>




<View style={styles.bottom} >
<View>
<Image  style={{ height:23, width:23, left: 32, top:4 }}   source={require('./Bottom/home.png')}  />
<Text  style={{fontSize:12, color:'orange', left:23,right:23 }} > Home </Text>
</View>

<View>
<Image style={{ height:23, width:23, right: 10, top:-35, left: 110, bottom:23 }}  source={require('./Bottom/location.png')}  />
<Text style={{fontSize:11, left:98, right:200, top:-36, bottom:2 }}> Find Us </Text>
</View>

<View>
<Image  style={{ height:26, width:26, right: 2, top:-75, left: 170, bottom:23 }}  source={require('./Bottom/bonus.png')}  />
<Text  style={{fontSize:12, left:163, right:300, top:-79, bottom:2 }} > Bonus   </Text>
</View>

<View>
<Image style={{ height:26, width:26, right: -7, top:-117, left: 230, bottom:23 }} source={require('./Bottom/voucher.png')}  />
<Text  style={{fontSize:11, left:220, right:300, top:-120, bottom:2 }} > Voucher   </Text>
</View>

<View>
<Image style={{ height:26, width:26, right: -7, top:-156, left: 290, bottom:23 }} source={require('./Bottom/more.png')}  />
<Text style={{fontSize:11, left:288, right:300, top:-158, bottom:2 }} > More </Text>
</View>
</View>
</View>

)
}

const styles= StyleSheet.create({
header:{
flex:1,
backgroundColor:'white',
paddingTop:70,

},

background:{
flex:1,
justifyContent: 'center',
backgroundPosition: "top",
height:320,
width:360
},

one:{
left: 210,
top: 15,
  right: 300,
width: 100,
height: 100,
 borderRadius: 150 / 2,
backgroundColor: 'white',
},
two:{
left: 40,
  top: -80,
  right: 20,
width: 100,
    height: 100,
    borderRadius: 150 / 2,
    backgroundColor: 'white',
},
three:{
left: 125,
  top: -80,
  right: 110,
width: 100,
    height: 100,
    borderRadius: 150 / 2,
    backgroundColor: 'white',
},
four:{
  left: 20,
  top: -90,
  right: 100,
width: 100,
    height: 100,
    borderRadius: 150 / 2,
    backgroundColor: 'white'
},
five:{
  left: 210,
  top: -170,
  right: 100,
width: 100,
    height: 100,
    borderRadius: 150 / 2,
    backgroundColor: 'white'
},
a:{
height:40,
width: 40,
left:28,
right: 26,
top: 22,

},
b:{
height:40,
width: 40,
left:28,
right: 26,
top: 22 

},
c:{
height:40,
width: 40,
left:28,
right: 26,
top: 22 

},
d:{
height:40,
width: 40,
left:28,
right: 26,
top: 22 
}
,
e:{
height:40,
width: 40,
left:28,
right: 26,
top: 22,
shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1, 
},
square:{
width: 300,
    height: 80,
    backgroundColor: "white",
    left:30,
    right:20,
    top:-165,
    bottom:23,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 4,
    borderRadius: 20,
    flexDirection: "row"
},
bottom:{
  
width: 360,
    height: 50,
    backgroundColor: "white",
    left:1,
    right:27,
    top:60,
    bottom:2,
    shadowColor: '#000',
    shadowOffset: { width: 12, height: 16 },
    shadowOpacity: 5,
    shadowRadius: 16,
    elevation: 7,
    borderRadius: 12,
    

}

});

export default Home;

