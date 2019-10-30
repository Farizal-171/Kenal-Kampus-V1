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
import { ListItem, CheckBox } from 'native-base';

class QualifedK extends React.Component {
	render(){
		return(
			<Box f={1} w='100%' bg='#ffffff' center>
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
		      				<Box mt={20}>
			      				<TextInput
			      					placeholder="Cari Nama Kampus"
			      					style={{ width: '100%', backgroundColor: '#dedede', borderTopRightRadius: 5, borderTopLeftRadius: 5, paddingHorizontal: 15, paddingVertical: 8, borderBottomWidth: 1, borderColor: '#848484' }}
			      				/>
			      				<Box w={45} h={45} position='absolute' center style={{ right: 0 }}>
			      					<Icon name='ios-search' size={24} color='#848484' />
			      				</Box>
		      				</Box>
		      				<ScrollView style={{ width: '100%', height: 200, }}>
		      					<Box pl={15} pr={15} bg='#dedede'>
			      					<Text size={14} mt={8}>Universitas Negeri Malang</Text>
			      					<Text size={14} mt={8}>Univ Muhammadiyah Malang</Text>
			      					<Text size={14} mt={8}>Politeknik Negeri Malang</Text>
			      					<Text size={14} mt={8}>Politeknik Negeri Surabaya</Text>
			      					<Text size={14} mt={8}>Universitas Negeri Malang</Text>
			      					<Text size={14} mt={8}>Univ Muhammadiyah Malang</Text>
			      					<Text size={14} mt={8}>Politeknik Negeri Malang</Text>
			      					<Text size={14} mt={8}>Politeknik Negeri Surabaya</Text>
		      					</Box>
		      				</ScrollView>
		      				<Box pt={10} bg='#dedede'>
		      					<Box pl={5} pt={10} pb={10} pr={15} dir='row' style={{ borderTopWidth: 1, borderColor: '#848484' }}>
		      						<CheckBox color='#848484' style={{ borderRadius: 6 }} />
		      						<Text ml={20} size={14}>Belum Terdaftar di Aplikasi</Text>
		      					</Box>
		      				</Box>
		      			</Box>
	      				<Box style={{ backgroundColor: '#2D9CDB', borderRadius: 50, marginTop: 20 }}>
	      					<TouchableOpacity style={{ paddingTop: 10, paddingBottom: 10, width: '100%', alignItems: 'center' }} onPress={()=> this.props.navigation.navigate('Profile')}>
	      						<Text style={{ color: '#ffffff', fontSize: 15 }}>UPGRADE PROFILE</Text>
	      					</TouchableOpacity>
	      				</Box>
		      		</Box>
				</ScrollView>
	    	</Box>
		)
	}
}

export default QualifedK;
