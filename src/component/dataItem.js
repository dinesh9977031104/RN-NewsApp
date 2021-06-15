import React, { Component } from 'react';
 import { ListItem, Left, Right, Thumbnail, Body, View, Text, Button } from 'native-base';
import TimeAgo from './time';

import { COLORS } from '../constants/theme';


class DataItem extends Component {

  constructor(props) {
    super(props);
    this.data = props.data;
  }

  handlePress = () => {
    const { url, title } = this.data;
    this.props.onPress({ url, title });
  }

  render() {

    

    return (

      <ListItem thumbnail 
      onPress={this.handlePress}
      style={{
        flexDirection:'column',
        height:280,
        marginRight:16,
        elevation:20,
        borderRadius:8,
        marginTop:6,
        marginBottom:6,
        backgroundColor:COLORS.white,
        
      }}>
        
          <Thumbnail 
          style={{ height:120, width:'100%', borderTopLeftRadius:8, borderTopRightRadius:8}}
          square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=' }} />
        
        
        <View style={{
          margin:12
        }}>
        <Text style={{marginBottom:6}} numberOfLines={2}>{this.data.title}</Text>
          <Text note numberOfLines={2}>{this.data.description}</Text>
        </View>
          
          <View style={{  flexDirection: 'row', marginTop: 8 }}>
              <Text note>{this.data.source.name}</Text>
              <TimeAgo time={this.data.publishedAt}/>
          </View>
    
      </ListItem>
    );
  }
}

export default DataItem;