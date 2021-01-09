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
    constructor() {
        super();
        this.state = {
          rotation:0,
          selectedPlanetName: 'Earth',
          selectedPlanetDescription: "The third planet from the sun, Earth is a waterworld with two-thirds of the planet covered by ocean. It's the only world known to harbor life",
          modelName:'sphere.obj',
          textureName:'earth.png',
          selectedPlanetScale:[0.9,0.9,0.9],
          rotateSaturn:0,
        }
      }
     
      componentDidMount() {
     this.rotate();
      }
    
      rotate() {
        this.setState({
      rotation:this.state.rotation + 0.3,
        });
        if(this.state.rotation > 360)
        {
          this.setState({rotation: 1,});
        }
    
        requestAnimationFrame(this.rotate.bind(this));
      }
  
  
    changePlanet(selection){
        let planetName;
        let planetDescription;
        let planetTextureName;
        let planetModelName;
        let planetScale;

        switch(selection) {

            case 1:
                 planetName="Mercury",
                 planetDescription ="Mercury is the closest planet to the sun, and it's also the smallest, only a little bit larger than Earth's moon. Because its so close to the sun (about two-fifths the distance between Earth and the sun).",
                 planetTextureName = "mercury.jpg",
                 planetModelName= "sphere.obj",
                 planetScale= [0.4,0.4,0.4];
              break;
              case 2:
                planetName="Venus",
                planetDescription ="The second planet from the sun, Venus is Earth's twin in size. Radar images beneath its atmosphere reveal that its surface has various mountains and volcanoes.",
                planetTextureName = "venus.jpg",
                planetModelName= "sphere.obj",
                planetScale= [0.7,0.7,0.7];
             break;
             case 3:
                planetName="Earth",
                planetDescription ="The third planet from the sun, Earth is a waterworld with two-thirds of the planet covered by ocean. It's the only world known to harbor life",
                planetTextureName = "earth.png",
                planetModelName= "sphere.obj",
                planetScale= [0.9,0.9,0.9];
             break;
             case 4:
                planetName="Mars",
                planetDescription ="The fourth planet from the sun is Mars, and it's a cold, desert-like place covered in dust. This dust is made of iron oxides, giving the planet its iconic red hue. Mars shares similarities with Earth",
                planetTextureName = "mars.jpg",
                planetModelName= "sphere.obj",
                planetScale= [0.6,0.6,0.6];
             break;
             case 5:
                planetName="Jupiter",
                planetDescription ="The fifth planet from the sun, Jupiter is a giant gas world that is the most massive planet in our solar system — more than twice as massive as all the other planets combined, according to NASA. Its swirling clouds are colorful due to different types of trace gases.",
                planetTextureName = "jupiter.jpg",
                planetModelName= "sphere.obj",
                planetScale= [1.2,1.2,1.2];
             break;
             case 6:
                planetName="Saturn",
                planetDescription ="The sixth planet from the sun, Saturn is known most for its rings. When polymath Galileo Galilei first studied Saturn in the early 1600s, he thought it was an object with three parts: a planet and two large moons on either side.",
                planetTextureName = "saturn.jpg",
                planetModelName= "Saturn.obj",
                planetScale= [1.3,1.3,1.3];
                this.setState({rotateSaturn :30});
             break;
             case 7:
                planetName="Uranus",
                planetDescription ="The seventh planet from the sun, Uranus is an oddball. It has clouds made of hydrogen sulfide, the same chemical that makes rotten eggs smell so foul. It rotates from east to west like Venus.",
                planetTextureName = "uranus.jpg",
                planetModelName= "sphere.obj",
                planetScale= [1.1,1.1,1.1];
             break;
             case 8:
                planetName="Neptune",
                planetDescription ="The eighth planet from the sun, Neptune is about the size of Uranus and is known for supersonic strong winds. Neptune is far out and cold. The planet is more than 30 times as far from the sun as Earth. Neptune was the first planet predicted to exist by using math, before it was visually detected.",
                planetTextureName = "neptune.jpg",
                planetModelName= "sphere.obj",
                planetScale= [1,1,1];
             break;
             
        }
        this.setState({selectedPlanetName:planetName});
        this.setState({selectedPlanetDescription:planetDescription});
        this.setState({selectedPlanetScale:planetScale});
        this.setState({textureName:planetTextureName});
        this.setState({modelName:planetModelName});
    }



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
        source={{obj:asset(this.state.modelName)}}
        texture={asset(this.state.textureName)}
        style = {{transform:[
          {translate:[-4,-2,-5]},
          {scale:this.state.selectedPlanetScale},
          {rotateX:this.state.rotateSaturn},
          {rotateY: this.state.rotation}
         
        ]}}
        />


</View>

<View>

 <Text style={{
     fontSize:0.3,
     textAlign: 'center'
 }}> {this.state.selectedPlanetName} </Text>
 
 <Text  style={{
     margin:0.1,
     fontSize:0.2,
     width:2,
 }}>{this.state.selectedPlanetDescription} </Text>
</View>

<View  style={{
     flexDirection: 'column',
     height:4,
     justifyContent: 'space-between'
 }}>
 
 <VrButton onClick = {()=> this.changePlanet(1)} > 
     <Text style={styles.buttonText}>Mercury </Text>
 </VrButton>
 <VrButton onClick = {()=> this.changePlanet(2)}> 
     <Text style={styles.buttonText}>Venus </Text>
 </VrButton>

 <VrButton onClick = {()=> this.changePlanet(3)}> 
     <Text style={styles.buttonText}>Earth </Text>
 </VrButton>

 <VrButton onClick = {()=> this.changePlanet(4)}> 
     <Text style={styles.buttonText}>Mars </Text>
 </VrButton>

 <VrButton onClick = {()=> this.changePlanet(5)}> 
     <Text style={styles.buttonText}>Jupiter </Text>
 </VrButton>

 <VrButton onClick = {()=> this.changePlanet(6)}> 
     <Text style={styles.buttonText}>Saturn </Text>
 </VrButton>

 <VrButton onClick = {()=> this.changePlanet(7)}> 
     <Text style={styles.buttonText}>Uranus </Text>
 </VrButton>


 <VrButton onClick = {()=> this.changePlanet(8)}> 
     <Text style={styles.buttonText}>Neptune </Text>
 </VrButton>


</View>
        </View>
    )
}

}