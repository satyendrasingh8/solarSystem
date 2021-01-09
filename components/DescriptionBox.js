import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
 StyleSheet,
 VrButton
} from 'react-vr';

export default class Descriptions extends React.Component {

render() {
    const styles = StyleSheet.create({
        buttonText :{
   margin:0,
   fontSize:0.3,
   textAlign:'center',
   backgroundColor: '#CF3C7E',
        }
    })
    return (
        <View  style = {{transform:[
            {translate:[0,-3,0]},
            {rotateX:-90}
           ],
        flexDirection: 'row'
        }
           }>

<View>
<Model
        source={{obj:asset('sphere.obj')}}
        texture={asset('earth.png')}
        style = {{transform:[
          {translate:[-4,-2,-5]},
         
        ]}}
        />


</View>

<View>

 <Text style={{
     fontSize:0.3,
     textAlign: 'center'
 }}> Earth </Text>
 
 <Text  style={{
     margin:0.1,
     fontSize:0.2,
     width:2,
 }}>The third planet from the sun, Earth is a waterworld, 
     with two-thirds of the planet covered by ocean. It's the only
      world known to harbor life </Text>
</View>

<View  style={{
     flexDirection: 'column',
     height:4,
     justifyContent: 'space-between'
 }}>
 
 <VrButton> 
     <Text style={styles.buttonText}>Mercury </Text>
 </VrButton>
 <VrButton> 
     <Text style={styles.buttonText}>Venus </Text>
 </VrButton>

 <VrButton> 
     <Text style={styles.buttonText}>Earth </Text>
 </VrButton>

 <VrButton> 
     <Text style={styles.buttonText}>Mars </Text>
 </VrButton>

 <VrButton> 
     <Text style={styles.buttonText}>Jupiter </Text>
 </VrButton>

 <VrButton> 
     <Text style={styles.buttonText}>Saturn </Text>
 </VrButton>

 <VrButton> 
     <Text style={styles.buttonText}>Uranus </Text>
 </VrButton>


 <VrButton> 
     <Text style={styles.buttonText}>Neptune </Text>
 </VrButton>


</View>
        </View>
    )
}

}