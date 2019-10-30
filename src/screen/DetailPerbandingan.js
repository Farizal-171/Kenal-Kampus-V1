import React from 'react';
import { 
	ScrollView, 
	View, 
	TouchableOpacity, 
	Animated, 
	Image, 
	TextInput, 
	StatusBar 
} from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import Icon from 'react-native-ionicons';

class DetailPerbandingan extends React.Component {
	render(){
		return(
			<Box f={1} bg='#0484F7'>
				<StatusBar backgroundColor="#0484F7" barStyle="light-content" />
				<Box dir='row' pl={20} pr={20} pt={20} pb={20} style={{ justifyContent: 'space-between' }}>
					<Box dir='row' center>
						<Icon name='ios-arrow-back' color='#ffffff' size={24} onPress={ () => this.props.navigation.goBack()} />
						<Box ml={20}>
							<Text color='#ffffff' size={14}>HASIL PERBANDINGAN</Text>
						</Box>
					</Box>
					<Image source={require('../assets/images/bg/Login.png')} style={{ width: 30, height: 30 }} />
				</Box>	

				<Box f={1} bg='#ffffff' style={{ borderTopRightRadius: 40, borderTopLeftRadius: 40 }}>
					<ScrollView >
						<Box f={1} bg='#ffffff' mt={10} pl={20} pr={20} pb={60} style={{ borderTopRightRadius: 40, borderTopLeftRadius: 40 }}>
							<Box mt={25}>
								<Box dir='row' style={{ justifyContent: 'space-between' }}>
									<Box w='48%'>
										<Image source={require('../assets/images/bg/Login.png')} style={{ width: 50, height: 50 }} />
										<Text size={13} color='#0484F7' mt={5} bold>Universitas Negeri Malang</Text>
										<Text size={12} color='#444444' bold>Akreditasi A</Text>
									</Box>
									<Box w='48%'>
										<Image source={require('../assets/images/bg/Login.png')} style={{ width: 50, height: 50 }} />
										<Text size={13} color='#0484F7' mt={5} bold>Universitas Muhammadiyah Malang</Text>
										<Text size={12} color='#444444' bold>Akreditasi A</Text>
									</Box>
								</Box>
								<Box mt={15} dir='row' style={{ justifyContent: 'space-between' }}>
									<Box w='48%'>
										<Text size={10} color='#a5a5a5'>Lokasi</Text>
										<Text size={12} color='#444444'>Jl. Cintaku Padamu purwosari pandaan malang jatim</Text>
									</Box>
									<Box w='48%'>
										<Text size={10} color='#a5a5a5'>Lokasi</Text>
										<Text size={12} color='#444444'>Jl. Cintaku Padamu purwosari pandaan malang jatim</Text>
									</Box>
								</Box>
								<Box mt={15} dir='row' style={{ justifyContent: 'space-between' }}>
									<Box w='48%'>
										<Text size={10} color='#a5a5a5'>Lokasi</Text>
										<Text size={12} color='#444444'>Jl. Cintaku Padamu purwosari pandaan malang jatim</Text>
									</Box>
									<Box w='48%'>
										<Text size={10} color='#a5a5a5'>Lokasi</Text>
										<Text size={12} color='#444444'>Jl. Cintaku Padamu purwosari pandaan malang jatim</Text>
									</Box>
								</Box>
								<Box mt={15} dir='row' style={{ justifyContent: 'space-between' }}>
									<Box w='48%'>
										<Text size={10} color='#a5a5a5'>Lokasi</Text>
										<Text size={12} color='#444444'>Jl. Cintaku Padamu purwosari pandaan malang jatim</Text>
									</Box>
									<Box w='48%'>
										<Text size={10} color='#a5a5a5'>Lokasi</Text>
										<Text size={12} color='#444444'>Jl. Cintaku Padamu purwosari pandaan malang jatim</Text>
									</Box>
								</Box>
							</Box>	
						</Box>
					</ScrollView>
					<Box bg="#0484F7" center style={{ position: 'absolute', bottom: 0, width: '100%' }}>
						<TouchableOpacity style={{ paddingVertical: 14, width: '100%' }}>
							<Text size={14} color="#ffffff" center bold>LIHAT PELUANG</Text>
						</TouchableOpacity>
					</Box>
				</Box>
	    	</Box>
		)
	}
}

export default DetailPerbandingan;
