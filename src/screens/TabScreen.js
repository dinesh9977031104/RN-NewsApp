import React, { Component } from 'react';
// import { Container, Header, Content, Left, Body, Right, Title, Tab, Tabs } from 'native-base';

import {
  View,
  Text,
  SafeAreaView,
  ScrollView
} from 'react-native';


import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';
import Tab5 from './tabs/tab5';
import Tab6 from './tabs/tab6';

import { COLORS } from '../constants/theme';
import  TabButton  from '../constants/TabButton';

const TabScreen = () => {

  const [selectedTab, setSelectedTab] = React.useState(0)

  function renderHeader() {
    return (
      <SafeAreaView style={{
        height: 85,
        backgroundColor: COLORS.primary,
        alignItems: 'center'
      }}>
          <View style={{
            flex: 1,
            alignItems: 'center',
            marginTop:12
          }}>
            <Text style={{
              color: COLORS.white, fontSize: 20, marginTop:8, alignItems:'center', justifyContent:'center'
            }}>NEWS APP</Text>

          </View>
         
       

      </SafeAreaView>
    )
  }


  function renderTopBarSection() {
    return (
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      >
      <View style={{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
      }}>

       
        <TabButton
          containerStyle={{
            width: 100
          }}
          lable='General'
          selected={selectedTab == 0}
          onPress={() => setSelectedTab(0)}
        />

        <TabButton
          containerStyle={{
            width: 100
          }}
          lable='Business'
          selected={selectedTab == 1}
          onPress={() => setSelectedTab(1)}
        />

        <TabButton
          containerStyle={{
            width: 110
          }}
          lable='Technology'
          selected={selectedTab == 2}
          onPress={() => setSelectedTab(2)}
        />

        {/* //new */}
        <TabButton
          containerStyle={{
            width: 130
          }}
          lable='Entertainment'
          selected={selectedTab == 3}
          onPress={() => setSelectedTab(3)}
        />
        <TabButton
          containerStyle={{
            width: 100
          }}
          lable='Sports'
          selected={selectedTab == 4}
          onPress={() => setSelectedTab(4)}
        />
        <TabButton
          containerStyle={{
            width: 150
          }}
          lable='Science & Nature'
          selected={selectedTab == 5}
          onPress={() => setSelectedTab(5)}
        />
        {/* end */}
        
      </View>
      </ScrollView>

    )
  }

  function renderNewsSection(){

    if(selectedTab == 0){
      return(
        <Tab1/>
      )
    }else if(selectedTab == 1){
      return(
        <Tab2/>
      )
    }else if(selectedTab == 2){
      return(
        <Tab3/>
      )
    }else if(selectedTab == 3){
      return(
        <Tab4/>
      )
    }

    else if(selectedTab == 4){
      return(
        <Tab5/>
      )
    }

    else if(selectedTab == 5){
      return(
        <Tab6/>
      )
    }
   
  }



  return (
    <View style={{ 
      flex: 1,
      }}>
      {/* header */}
      {renderHeader()}

      <View style={{
        marginTop: -20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingLeft:16,
        paddingTop:16,
        paddingRight:16,
        backgroundColor:COLORS.white
      }}>

        {renderTopBarSection()}
      </View>

      <View style={{
        flex:1,
       // marginRight:16,
       justifyContent:'center',
       alignItems:'center'
       
      }}>
      {renderNewsSection()}

      </View>
    </View>
  );

}

export default TabScreen;