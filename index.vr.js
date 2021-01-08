import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  Animated,
  PointLight,
  VrButton
} from 'react-vr';

export default class solarSystemVR extends React.Component {
  constructor() {
    super();
    this.state = {
      rotation:0,
      antirotation:360, 
    }
  }
 
  componentDidMount() {
 this.rotate();
  }

  rotate() {
    this.setState({
  rotation:this.state.rotation + 1,
    });
    if(this.state.rotation > 360)
    {
      this.setState({rotation:1,});
    }
    requestAnimationFrame(this.rotate.bind(this));
  }
 

  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <PointLight intensity={1} style={{color:'white',transform:[{translate:[0,0,0]}]}} />
        <Model
        source={{obj:asset('sphere.obj')}}
        texture={asset('sun.jpg')}
        style = {{transform:[
          {translate:[-40,0,0]},
          {scale:[5,5,5]},
          {rotateY: this.state.rotation}
        ]}}
        />

<Model
        source={{obj:asset('sphere.obj')}}
        texture={asset('mercury.jpg')}
        lit
        style = {{transform:[
          {translate:[-20,0,-50]},
          {scale:[0.8,0.8,0.8]},
          {rotateY: this.state.rotation},
        ]}}
        />
        <Model
        source={{obj:asset('sphere.obj')}}
        texture={asset('venus.jpg')}
        lit
        style = {{transform:[
          {translate:[-20,0,-50]},
          {scale:[1.2,1.2,1.2]},
        ]}}
        />
        <Model
        source={{obj:asset('sphere.obj')}}
        texture={asset('earth.jpg')}
        lit
        style = {{transform:[
          {translate:[0,0,-50]},
          {scale:[1.4,1.4,1.4]},
          {rotateY: this.state.rotation}
        ]}}
        />
        <Model
        source={{obj:asset('sphere.obj')}}
        texture={asset('mars.jpg')}
        lit
        style = {{transform:[
          {translate:[20,0,-50]},
          {scale:[0.9,0.9,0.9]},
          {rotateY: this.state.rotation}
        ]}}
        />
        <Model
        source={{obj:asset('sphere.obj')}}
        texture={asset('jupiter.jpg')}
        lit
        style = {{transform:[
          {translate:[50,0,-50]},
          {scale:[4.5,4.5,4.5]},
          {rotateY: this.state.rotation}
        ]}}
        />
        <Model
        source={{obj:asset('Saturn.obj')}}
        texture={asset('saturn.jpg')}
        lit
        style = {{transform:[
          {translate:[100,0,-50]},
          {scale:[3.5,3.5,3.5]},
          {rotateY: this.state.rotation},
          {rotateX:-20},
          {rotateY:20},
          {rotateZ:15}
        ]}}
        />
        <Model
        source={{obj:asset('sphere.obj')}}
        texture={asset('uranus.jpg')}
        lit
        style = {{transform:[
          {translate:[150,0,-50]},
          {scale:[1.8,1.8,1.8]},
          
        ]}}
        />
        <Model
        source={{obj:asset('sphere.obj')}}
        texture={asset('neptune.jpg')}
        lit
        style = {{transform:[
          {translate:[250,0,-50]},
          {scale:[2.8,2.8,2.8]},
          {rotateY: this.state.rotation}
        ]}}
        />
        
      </View>
    );
  }
};

AppRegistry.registerComponent('solarSystemVR', () => solarSystemVR);
