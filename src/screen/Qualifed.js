import React from 'react';
import { 
	ScrollView, 
	View, 
	TouchableOpacity, 
	Animated, 
	Image, 
	TextInput 
} from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import Icon from 'react-native-ionicons';

class Qualifed extends React.Component {
	render(){
		return(
			<Box f={1} bg='#ffffff'>
				<ScrollView style={{ width: '100%' }}>
					<Box>
						<Image source={require('../assets/images/bg/Login.png')} style={{ width: '100%', height: 400 }} />
						<Box position='absolute' bg='rgba(4, 132, 247, 0.5)' w='100%' h={400}>
							<Box w='100%' h={200} center>
								<Image source={require('../assets/images/icons/star.png')} style={{ width: 80, height: 80 }} />
							</Box>
						</Box>
					</Box>
		      		<Box pb={20} style={{ paddingLeft: '5%', paddingRight: '5%', marginTop: -200 }}>
		      			<Box style={{ backgroundColor: '#ffffff', borderRadius: 10, padding: 20, shadowOffset:{width: 5, height: 3}, shadowColor: 'black', shadowOpacity: 0.3, elevation: 7 }}>
		      				<Text style={{ fontSize: 18 }}>Registrasi</Text>
		      				<Box style={{ backgroundColor: '#2D9CDB', width: '50%', height: 1, marginTop: 20 }}></Box>
		      				<TextInput
		      					placeholder="Asal Kampus"
		      					style={{ width: '100%', backgroundColor: '#dedede', borderRadius: 5, paddingLeft: 15, paddingRight: 15, paddingTop: 8, paddingBottom: 8, marginTop: 20 }}
		      				/>
		      				<TextInput
		      					placeholder="Nomor Induk Mahasiswa"
		      					style={{ width: '100%', backgroundColor: '#dedede', borderRadius: 5, paddingLeft: 15, paddingRight: 15, paddingTop: 8, paddingBottom: 8, marginTop: 20 }}
		      				/>
		      				<Box></Box>
		      				<TextInput
		      					placeholder="Confirmasi Password"
		      					secureTextEntry={true}
		      					style={{ width: '100%', backgroundColor: '#dedede', borderRadius: 5, paddingLeft: 15, paddingRight: 15, paddingTop: 8, paddingBottom: 8, marginTop: 15 }}
		      				/>
		      			</Box>
	      				<Box style={{ backgroundColor: '#2D9CDB', borderRadius: 50, marginTop: 20 }}>
	      					<TouchableOpacity style={{ paddingTop: 10, paddingBottom: 10, width: '100%', alignItems: 'center' }} onPress={()=> this.props.navigation.navigate('QualifedK')}>
	      						<Text style={{ color: '#ffffff', fontSize: 15 }}>SELANJUTNYA</Text>
	      					</TouchableOpacity>
	      				</Box>
		      		</Box>
				</ScrollView>
	    	</Box>
		)
	}
}

export default Qualifed;
