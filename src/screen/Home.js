import React from 'react';
import { 
	ScrollView, 
	View, 
	TouchableOpacity, 
	Animated, 
	Image, 
	TextInput, 
	TouchableHighlight,
	StatusBar
} from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import Icon from 'react-native-ionicons';

var Fonts = require('../assets/fonts/Fonts');

HEADER_MAX_HEIGHT = 280
HEADER_MIN_HEIGHT = 60
PROFILE_MIN_HEIGHT = 40
PROFILE_MAX_HEIGHT = 45

class Home extends React.Component {
	constructor(props){
    	super(props)
    	this.state = {scrollY : new Animated.Value(0)}
  	}

	render(){
		const headerHeight = this.state.scrollY.interpolate({
	      	inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
	      	outputRange:[HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
	      	extrapolate: 'clamp'
	    });

	    const profileHeight = this.state.scrollY.interpolate({
	      	inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
	      	outputRange:[PROFILE_MAX_HEIGHT, PROFILE_MIN_HEIGHT],
	      	extrapolate: 'clamp'
	    });

	    const textOpacity = this.state.scrollY.interpolate({
	      	inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
	      	outputRange:[1, 0],
	      	extrapolate: 'clamp'
	    });

    	const inputWidth = this.state.scrollY.interpolate({
      		inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      		outputRange:[ '100%', '83%'],
      		extrapolate: 'clamp'
    	});

		const inputTop = this.state.scrollY.interpolate({
      		inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      		outputRange:[ 25, 10],
      		extrapolate: 'clamp'
    	});

    	const headerRadius = this.state.scrollY.interpolate({
          	inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
          	outputRange:[ 30, 0],
          	extrapolate: 'clamp'
      	});

    	const inputPadding = this.state.scrollY.interpolate({
          	inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
          	outputRange:[ 70, 60 ],
          	extrapolate: 'clamp'
      	});

    	const profileTop = this.state.scrollY.interpolate({
          	inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
          	outputRange:[ 15, 10 ],
          	extrapolate: 'clamp'
      	});

		return(
			<Box f={1} bg='#f1f1f1'>
				<StatusBar backgroundColor="#0484F7" barStyle="light-content" />
				<Animated.View style={{ borderBottomRightRadius: headerRadius, borderBottomLeftRadius: headerRadius, alignItems: 'center', paddingHorizontal: 20, height: headerHeight, backgroundColor: "#0484F7", position: 'absolute', width: '100%', zIndex: 1 }}>
          			<Animated.View style={{ position: 'absolute', width: profileHeight, height: profileHeight, top: profileTop, right: '5%' }}>
						<Image source={require('../assets/images/bg/Login.png')} style={{ borderWidth: 2, borderColor: '#ffffff', flex: 1, height: null, width: null, backgroundColor: '#ffffff', borderRadius: 10000 }} />
					</Animated.View>
					<Animated.View style={{ position: 'absolute', bottom: inputTop, marginLeft: '5%', width: '100%', }}>
						<Animated.View style={{ opacity: textOpacity }}>
              				<Box dir="row" mt={20} center style={{ justifyContent: 'space-between' }}>
								<Text size={17} color="#ffffff" bold>KenalKampus</Text>
				               	<Icon 
					                name="ios-notifications"
					                size={28}
					                color="#ffffff"
					                style={{ marginRight: 60 }}
				               	/>
              				</Box>
							<Text size={13} mt={50} color="#ffffff" style={Fonts.nunitoB}>Hallo Wildan!</Text>
							<Text size={23} mt={10} color="#ffffff" style={{ lineHeight: 28 }} bold>Kampus mana yang Ingin kamu Cari?</Text>
						</Animated.View>
						<Animated.View style={{ width: inputWidth, height: inputPadding }}>
							<Box dir="row" mt={20} bg="#0076DF" style={{ borderRadius: 6, width: '100%' }}>
								<TextInput
									placeholderTextColor="#F2F2F2"
									placeholder="Ketik Kota / Nama Kampus"
									style={{ color: '#ffffff', width: '80%', paddingHorizontal: 15, }}
								/>
								<Box center style={{ width: '20%' }}>
									<Icon name="ios-search" color="#ffffff" size={22} />
								</Box>
							</Box>
						</Animated.View>
					</Animated.View>
        		</Animated.View>  

		        <ScrollView 
		          	style={{ flex: 1 }}
		          	scrollEventThrottle={16}
		          	onScroll={Animated.event(
		            	[{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
		          	)}
		        >
	          		<Box pt={20} pb={30} style={{ marginTop: HEADER_MAX_HEIGHT, }}>
	          			<Box>
	          				<Box ml={20} mb={10}>
		            			<Text size={14} style={Fonts.nunitoB}>Rekomendasi Kampus</Text>
	          				</Box>
		            		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
		            			<Box ml={20} bg='#ffffff' w={130} radius={4} h={130} pl={10} pr={10} center>
		            				<Image source={require('../assets/images/bg/Login.png')} style={{ width: 55, height: 55 }} />
		            				<Text size={11} mt={10} style={Fonts.nunitoS} center>Universitas Negeri Malang</Text>
		            			</Box>
		            			<Box ml={20} bg='#ffffff' w={130} radius={4} h={130} pl={10} pr={10} center>
		            				<Image source={require('../assets/images/bg/Login.png')} style={{ width: 55, height: 55 }} />
		            				<Text size={11} mt={10} style={Fonts.nunitoS} center>Universitas Negeri Malang</Text>
		            			</Box>
		            			<Box ml={20} bg='#ffffff' w={130} radius={4} h={130} pl={10} pr={10} center>
		            				<Image source={require('../assets/images/bg/Login.png')} style={{ width: 55, height: 55 }} />
		            				<Text size={11} mt={10} style={Fonts.nunitoS} center>Universitas Negeri Malang</Text>
		            			</Box>
		            		</ScrollView>
	          			</Box>

	          			<Box pl={20} pr={20} mt={20}>
		            		<Text size={14} style={Fonts.nunitoB}>Kampus Terdekat</Text>
		            		<Box dir='row' mt={5} style={{ justifyContent: 'space-between' }} center>
		            			<Box dir='row' center>
		            				<Icon name='md-pin' size={12} color='#0484F7' />
		            				<Text size={11} ml={5} color='#A5A5A5' center>Alun alun Malang</Text>
		            			</Box>
		            			<TouchableOpacity>
		            				<Text color='#0484F7' size={13}>Ganti Lokasi</Text>
		            			</TouchableOpacity>
		            		</Box>
		            		<Box>
		            			<TouchableHighlight onPress={ () => this.props.navigation.navigate('DetailKampus') } style={{ marginTop: 20, borderRadius: 4 }}>
			            			<Box dir='row' radius={4} p={10} bg='#ffffff'>
			            				<Box w='25%' center>
				            				<Image source={require('../assets/images/bg/Login.png')} style={{ width: 55, height: 55 }} />
			            				</Box>
			            				<Box w='75%' pl={5}>
			            					<Text w='100%' size={12} style={Fonts.nunitoS}>Universitas Brawijaya Malang</Text>
			            					<Box dir='row' mt={3}>
					            				<Icon name='md-pin' size={16} color='#0484F7' />
					            				<Text size={11} ml={5} color='#0484F7' center>Malang, Jawa Timur</Text>
					            			</Box>
					            			<Box dir='row' w='100%' mt={10} style={{ alignItems: 'center' }}>
					            				<Text size={15} color='#444444' bold>0,4 Km</Text>
					            				<Text size={11} ml={5} color='#a5a5a5' center>Malang, Jawa Timur</Text>
					            			</Box>
			            				</Box>
			            			</Box>
		            			</TouchableHighlight>
		            			<TouchableHighlight onPress={ () => this.props.navigation.navigate('DetailKampus') } style={{ marginTop: 20, borderRadius: 4 }}>
			            			<Box dir='row' radius={4} p={10} bg='#ffffff'>
			            				<Box w='25%' center>
				            				<Image source={require('../assets/images/bg/Login.png')} style={{ width: 55, height: 55 }} />
			            				</Box>
			            				<Box w='75%' pl={5}>
			            					<Text w='100%' size={12} style={Fonts.nunitoS}>Universitas Brawijaya Malang</Text>
			            					<Box dir='row' mt={3}>
					            				<Icon name='md-pin' size={16} color='#0484F7' />
					            				<Text size={11} ml={5} color='#0484F7' center>Malang, Jawa Timur</Text>
					            			</Box>
					            			<Box dir='row' w='100%' mt={10} style={{ alignItems: 'center' }}>
					            				<Text size={15} color='#444444' bold>0,4 Km</Text>
					            				<Text size={11} ml={5} color='#a5a5a5' center>Malang, Jawa Timur</Text>
					            			</Box>
			            				</Box>
			            			</Box>
		            			</TouchableHighlight>
		            			<TouchableHighlight onPress={ () => this.props.navigation.navigate('DetailKampus') } style={{ marginTop: 20, borderRadius: 4 }}>
			            			<Box dir='row' radius={4} p={10} bg='#ffffff'>
			            				<Box w='25%' center>
				            				<Image source={require('../assets/images/bg/Login.png')} style={{ width: 55, height: 55 }} />
			            				</Box>
			            				<Box w='75%' pl={5}>
			            					<Text w='100%' size={12} style={Fonts.nunitoS}>Universitas Brawijaya Malang</Text>
			            					<Box dir='row' mt={3}>
					            				<Icon name='md-pin' size={16} color='#0484F7' />
					            				<Text size={11} ml={5} color='#0484F7' center>Malang, Jawa Timur</Text>
					            			</Box>
					            			<Box dir='row' w='100%' mt={10} style={{ alignItems: 'center' }}>
					            				<Text size={15} color='#444444' bold>0,4 Km</Text>
					            				<Text size={11} ml={5} color='#a5a5a5' center>Malang, Jawa Timur</Text>
					            			</Box>
			            				</Box>
			            			</Box>
		            			</TouchableHighlight>
		            		</Box>
	          			</Box>
	          		</Box>
	        	</ScrollView>
	    	</Box>
		)
	}
}

export default Home;