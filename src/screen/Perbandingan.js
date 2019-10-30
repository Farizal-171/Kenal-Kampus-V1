import React from 'react';
import { ScrollView, View, TouchableOpacity, Animated, Image, TextInput } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

class Perbandingan extends React.Component {
	render(){
		return(
			<Box f={1} bg='#ffffff'>
				<Image source={require('../assets/images/bg/Login.png')} style={{ width: '100%', height: 400 }} />
				<Box position='absolute' p={20} w='100%' bg='#ffffff' style={{ zIndex: 1, bottom: 0, borderTopRightRadius: 40, borderTopLeftRadius: 40 }}>
					<Text size={18} bold>Ayo kita lihat data kampus Lebih dalam</Text>
					<TextInput
      					placeholder="Ketik Nama Kampur pertama"
                                    returnKeyType = 'next'
      					style={{ width: '100%', backgroundColor: '#dedede', borderRadius: 5, paddingLeft: 15, paddingRight: 15, paddingTop: 8, paddingBottom: 8, marginTop: 15 }}
      				/>
					<TextInput
      					placeholder="Ketik Nama Kampur Kedua"
                                    returnKeyType = 'next'
      					style={{ width: '100%', backgroundColor: '#dedede', borderRadius: 5, paddingLeft: 15, paddingRight: 15, paddingTop: 8, paddingBottom: 8, marginTop: 15 }}
      				/>
      				<Box style={{ backgroundColor: '#0484F7', borderRadius: 50, marginTop: 20 }}>
      					<TouchableOpacity onPress={ () => this.props.navigation.navigate('DetailPerbandingan') } style={{ paddingTop: 10, paddingBottom: 10, width: '100%', alignItems: 'center' }}>
      						<Text style={{ color: '#ffffff', fontSize: 15 }}>LIHAT DATA</Text>
      					</TouchableOpacity>
      				</Box>
 				</Box>
	    	</Box>
		)
	}
}

export default Perbandingan;
