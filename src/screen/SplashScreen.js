import React from 'react';
import { ScrollView, View, TouchableOpacity, Animated, Image, TextInput, StatusBar } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

class SplasScreen extends React.Component {

	componentDidMount = async () => {
  		setTimeout(() => {
  			this.props.navigation.navigate('Auth')
        }, 4000)
  	}

	render(){
		return(
			<Box f={1} bg='#ffffff' center>
				<StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
				<Text>SplasScreen</Text>
	    	</Box>
		)
	}
}

export default SplasScreen;
