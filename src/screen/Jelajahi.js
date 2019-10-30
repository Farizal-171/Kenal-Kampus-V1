import React from 'react';
import { 
	ScrollView, 
	View, 
	TouchableOpacity, 
	Animated, 
	Image,
	StatusBar,
} from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import LinearGradient from 'react-native-linear-gradient';

class Jelajahi extends React.Component {
	constructor(props){
    	super(props)
    	this.state = {scrollY : new Animated.Value(0)}
  	}

	render(){
		return(
			<Box f={1} bg='#ffffff'>
				<StatusBar backgroundColor="#0484F7" barStyle="light-content" />
				<ScrollView>
					<Box p="sm">
						<Text size="md" color="#222222" bold>Discovery</Text>
						<Box mt={20}>
							<Image source={require('../assets/images/bg/Login.png')} style={{ width: '100%', height: 230, borderRadius: 15 }} />
							<LinearGradient colors={[ '#00000000', '#0000008f' ]} style={{ width: '100%', height: 230, borderRadius: 15, marginTop: -230, }}>
								<TouchableOpacity onPress={ () => this.props.navigation.navigate('DetailBerita') } style={{ width: '100%', height: 230 }}>
									<Box p={15} style={{ position: 'absolute', bottom: 0 }}>
										<Text size="base" color="#ffffff" style={{ lineHeight: 23 }} bold>Fakultas Teknik UM | Unggul dan Menjadi Rujukan</Text>
										<Box dir="row" mt={5} style={{ justifyContent: "space-between", }}>
											<Box dir="row" mt={5}>
												<Text size={12} color="#ffffff">Oleh - </Text>
												<Text size={12} color="#2D9CDB">Arif Ragil </Text>
											</Box>
											<Box>
												<Text size={12} color="#ffffff">12 Komentar</Text>
											</Box>
										</Box>
									</Box>
								</TouchableOpacity>
							</LinearGradient>
						</Box>
						<Box mt={20}>
							<Image source={require('../assets/images/bg/Login.png')} style={{ width: '100%', height: 230, borderRadius: 15 }} />
							<LinearGradient colors={[ '#00000000', '#0000008f' ]} style={{ width: '100%', height: 230, borderRadius: 15, marginTop: -230, }}>
								<TouchableOpacity style={{ width: '100%', height: 230 }}>
									<Box p={15} style={{ position: 'absolute', bottom: 0 }}>
										<Text size="base" color="#ffffff" style={{ lineHeight: 23 }} bold>Fakultas Teknik UM | Unggul dan Menjadi Rujukan</Text>
										<Box dir="row" mt={5} style={{ justifyContent: "space-between", }}>
											<Box dir="row" mt={5}>
												<Text size={12} color="#ffffff">Oleh - </Text>
												<Text size={12} color="#2D9CDB">Arif Ragil </Text>
											</Box>
											<Box>
												<Text size={12} color="#ffffff">12 Komentar</Text>
											</Box>
										</Box>
									</Box>
								</TouchableOpacity>
							</LinearGradient>
						</Box>
						<Box mt={20}>
							<Image source={require('../assets/images/bg/Login.png')} style={{ width: '100%', height: 230, borderRadius: 15 }} />
							<LinearGradient colors={[ '#00000000', '#0000008f' ]} style={{ width: '100%', height: 230, borderRadius: 15, marginTop: -230, }}>
								<TouchableOpacity style={{ width: '100%', height: 230 }}>
									<Box p={15} style={{ position: 'absolute', bottom: 0 }}>
										<Text size="base" color="#ffffff" style={{ lineHeight: 23 }} bold>Fakultas Teknik UM | Unggul dan Menjadi Rujukan</Text>
										<Box dir="row" mt={5} style={{ justifyContent: "space-between", }}>
											<Box dir="row" mt={5}>
												<Text size={12} color="#ffffff">Oleh - </Text>
												<Text size={12} color="#2D9CDB">Arif Ragil </Text>
											</Box>
											<Box>
												<Text size={12} color="#ffffff">12 Komentar</Text>
											</Box>
										</Box>
									</Box>
								</TouchableOpacity>
							</LinearGradient>
						</Box>
					</Box>
				</ScrollView>
	    	</Box>
		)
	}
}

export default Jelajahi;
