import React from 'react';
import { View, Text } from 'react-native';
import { 
	createSwitchNavigator,
	createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-ionicons';

import SplashScreen from '../screen/SplashScreen';
import LoginUser from '../screen/LoginUser';
import RegisterUser from '../screen/RegisterUser';
import Home from '../screen/Home';
import Jelajahi from '../screen/Jelajahi';
import Perbandingan from '../screen/Perbandingan';
import Profile from '../screen/Profile';
import Qualifed from '../screen/Qualifed';
import QualifedK from '../screen/QualifedK';
import DetailBerita from '../screen/DetailBerita';
import DetailKampus from '../screen/DetailKampus';
import ProgramStudy from '../screen/ProgramStudy';
import CreateArtikel from '../screen/CreateArtikel';
import DetailPerbandingan from '../screen/DetailPerbandingan';

class Router extends React.Component {
	render(){
		return(
			<AppNavigator />
		)
	}
}

const AuthStack = createStackNavigator({
	LoginUser: LoginUser,
	RegisterUser: RegisterUser,
},{
	defaultNavigationOptions: {
		header: null
	}
});

const HomeStack = createBottomTabNavigator({
	Jelajahi: {
  		screen: Jelajahi,
  		navigationOptions:{
    		tabBarLabel: 'Jelajahi',
    		tabBarIcon: ({ tintColor }) => (
      			<Icon name="md-add" size={25} color={tintColor} style={{ marginTop: 9 }} />
    		)
 		}
	},
	Home: {
    	screen: Home,
    	navigationOptions:{
      		tabBarLabel: 'Cari Kampus',
      		tabBarIcon: ({ tintColor }) => (
        		<Icon name="ios-search" size={25} color={tintColor} style={{ marginTop: 9 }} />
      		)
   		}
  	},
	Perbandingan: {
    	screen: Perbandingan,
    	navigationOptions:{
      		tabBarLabel: 'Perbandingan',
      		tabBarIcon: ({ tintColor }) => (
        		<Icon name="md-add" size={25} color={tintColor} style={{ marginTop: 9 }} />
      		)
   		}
  	},
  	Profile: {
      	screen: Profile,
      	navigationOptions:{
          	tabBarLabel: 'Profile',
          	tabBarIcon: ({ tintColor }) => (
            	<Icon name="md-add" size={25} color={tintColor} style={{ marginTop: 9 }} />
          	)
      	}
    },
},{
	defaultNavigationOptions: {
		header: null
	},
	tabBarOptions: {
    	activeTintColor: '#0484F7',
    	inactiveTintColor: '#cccccc',
      	labelStyle: {
        	fontSize: 10,
      	},
    	style:{
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    		backgroundColor: '#ffffff',
    		height: 52,
    		paddingBottom: 8,
    		borderTopWidth: 0,
    		elevation: 60
    	}
  	}
});

const ComponentStack = createStackNavigator({
  	Home: HomeStack,
  	DetailBerita: DetailBerita,
  	DetailKampus: DetailKampus,
  	ProgramStudy: ProgramStudy,
  	CreateArtikel: CreateArtikel,
    Qualifed: Qualifed,
    QualifedK: QualifedK,
    DetailPerbandingan: DetailPerbandingan,
},{
  	defaultNavigationOptions: {
    	header: null
  	}
})

const AppNavigator = createSwitchNavigator({
  Splash: SplashScreen,
	Auth: AuthStack,
	Homes: HomeStack,
	Component: ComponentStack,
},{
	initialRouteName: 'Splash'
});

export default createAppContainer(AppNavigator);
