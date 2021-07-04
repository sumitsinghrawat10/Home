import React from 'react';
import {View,Text,ScrollView,Image} from 'react-native';


const Scroll=()=>{

return (
<View>
<Text style={{fontSize:18, textAlign: 'left'}} >Products </Text>
<ScrollView horizontal={true}
          pagingEnabled={true} 
          showsHorizontalScrollIndicator={true}>
 
    
 
    <Image source={require('./Bottom/dummy-image.png')} />
 
    <Image source={require('./Bottom/dummy-image.png')} />
 
    <Image source={require('./Bottom/dummy-image.png')} />
 
    <Image source={require('./Bottom/dummy-image.png')} />
 
    <Image source={require('./Bottom/dummy-image.png')} />
 
    <Text style={{fontSize:20, textAlign: 'center'}} >Scroll View Ends Here.</Text>
 
</ScrollView>

</View>
)

}

export default Scroll;