import React from 'react';
import { 
	ScrollView, 
	View, 
	TouchableOpacity, 
	Animated, 
	Image, 
	TextInput, 
	TouchableHighlight 
} from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import Icon from 'react-native-ionicons';
import { Container, Header, Content, Tab, Tabs, TabHeading } from 'native-base';

HEADER_MAX_HEIGHT = 280
HEADER_MIN_HEIGHT = 60
PROFILE_MIN_HEIGHT = 40
PROFILE_MAX_HEIGHT = 45

class DetailKampus extends React.Component {
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

	    const headerZIndex = this.state.scrollY.interpolate({
	      	inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
	      	outputRange:[0, 1],
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
          	outputRange:[ 35, 0],
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

    	const backgroundHeader = this.state.scrollY.interpolate({
          	inputRange: [0, 280 - 200],
          	outputRange:[ 'transparent', '#ffffff' ],
          	extrapolate: 'clamp'
      	});

		return(
			<Box f={1} bg='#ffffff'>
				<Animated.View style={{ alignItems: 'center', height: headerHeight, backgroundColor: "#78ACFB", position: 'absolute', width: '100%', }}>
	          		<Image source={require('../assets/images/bg/Login.png')} style={{ flex: 1, height: null, width: '100%',}} />
		        </Animated.View> 

		        <Animated.View style={{ backgroundColor: backgroundHeader, position: 'absolute', width: '100%', paddingHorizontal: 20, paddingVertical: 10, zIndex: 4 }} >
		        	<Box dir='row' style={{ justifyContent: 'space-between' }} center>
		        		<TouchableHighlight onPress={ () => this.props.navigation.goBack() } style={{ borderRadius: 100 }}>
			        		<Box bg="#ffffff" w={30} h={30} radius={100} center>
								<Icon name="ios-arrow-back" size={20} color="#222222" />
							</Box>
						</TouchableHighlight>
		        		<Image source={require('../assets/images/bg/Login.png')} style={{ width: 40, height: 40 }} />
		        	</Box>
		        </Animated.View>

		        <ScrollView 
		          	style={{ flex: 1 }}
		          	scrollEventThrottle={16}
		          	onScroll={Animated.event(
		            	[{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
		          	)}
		        >
		          	<Animated.View style={{ backgroundColor: '#ffffff', borderTopRightRadius: headerRadius, borderTopLeftRadius: headerRadius, paddingBottom: 80, paddingTop: 20, marginTop: HEADER_MAX_HEIGHT - 30, paddingHorizontal: '5%' }}>
		            	<Box dir="row" style={{ justifyContent: "space-between", width: '100%' }}>
							<Text size={20} style={{ width: '70%' }} mt={10} color="#222222" bold>Universitas Negeri Malang</Text>
							<Box dir="row" bg="#F2F2F2" mt={15} w={80} height={35} center style={{ borderRadius: 100 }}>
		  						<Icon 
		  							name="md-eye"
		  							color="#F2C94C"
		  							size={20}
		  						/>
		  						<Text color="#2D9CDB" ml={2} size={16} bold>120</Text>
		  					</Box>
						</Box>
						<Box dir="row" mt={10}>
							<Icon 
									name="md-pin"
									color="#a5a5a5"
									size={20}
								/>
							<Text size={14} ml={4} color="#A5A5A5">Malang, Jawa Timur</Text>
						</Box>

						<Box dir="row" mt={20} style={{ alignItems: 'center' }}>
							<Image source={require('../assets/images/bg/Login.png')} style={{ width: 35, height: 35, borderRadius: 100, borderWidth: 2, borderColor: '#ffffff' }} />
							<Image source={require('../assets/images/bg/Login.png')} style={{ width: 35, height: 35, borderRadius: 100, borderWidth: 2, borderColor: '#ffffff', marginLeft: -10 }} />
							<Image source={require('../assets/images/bg/Login.png')} style={{ width: 35, height: 35, borderRadius: 100, borderWidth: 2, borderColor: '#ffffff', marginLeft: -10 }} />
							<Image source={require('../assets/images/bg/Login.png')} style={{ width: 35, height: 35, borderRadius: 100, borderWidth: 2, borderColor: '#ffffff', marginLeft: -10 }} />
							<Image source={require('../assets/images/bg/Login.png')} style={{ width: 35, height: 35, borderRadius: 100, borderWidth: 2, borderColor: '#ffffff', marginLeft: -10 }} />
							<Text size={13} color="#A5A5A5" ml="10"> 20 Ulasan </Text>
						</Box>

						<Box mt={20}>
					        <Tabs 
					        	tabBarUnderlineStyle={{ backgroundColor: '#2D9CDB', height: 3, borderRadius: 100, width: 30, }}
					        	tabContainerStyle={{
								  	elevation:0
								}}
					        >
					          	<Tab 
					          		heading="Deskripsi"
					          		tabStyle={{ backgroundColor: '#ffffff' }} 
					          		textStyle={{ color: '#444444', position: 'absolute', left: -8 }} 
					          		activeTabStyle={{ backgroundColor: '#ffffff' }} 
					          		activeTextStyle={{ color: '#2D9CDB', position: 'absolute', left: -8 }}
					          	>
					          		<Box mt={20}>
					            		<Text size={15} color="#5E5E5E">
					            			Universitas Negri Malang, Disingkat UM, Merupakan perguruan tinggi negeri yang terletak di Malang dan Blitar Jawa Timur Indonesia.
											Universitas yang didirikan pada tanggal 18 Oktober 1945 ini sebelumnya bernama PTPG Malang. 
											Lalu IKIP Malang yang membuatnya menjadi salah satu IKIP tertua di Indonesia. 
											Rektor UM saat ini di jabat oleh Prof. Dr. H. Ah. Rofiuddin, M. Pd. 
					            		</Text>
					          		</Box>
					          	</Tab>
					          	<Tab 
					          		heading="Artikel"
					          		tabStyle={{ backgroundColor: '#ffffff' }} 
					          		textStyle={{ color: '#444444', position: 'absolute', left: -8 }} 
					          		activeTabStyle={{ backgroundColor: '#ffffff' }} 
					          		activeTextStyle={{ color: '#2D9CDB', position: 'absolute', left: -8 }}
					          	>
					            	<Box mt={20}>
					            		<Text size={15} color="#5E5E5E">
					            			Universitas Negri Malang, Disingkat UM, Merupakan perguruan tinggi negeri yang terletak di Malang dan Blitar Jawa Timur Indonesia.
											Universitas yang didirikan pada tanggal 18 Oktober 1945 ini sebelumnya bernama PTPG Malang. 
											Lalu IKIP Malang yang membuatnya menjadi salah satu IKIP tertua di Indonesia. 
											Rektor UM saat ini di jabat oleh Prof. Dr. H. Ah. Rofiuddin, M. Pd. 
					            		</Text>
					          		</Box>
					          	</Tab>
					        </Tabs>
						</Box>
		          	</Animated.View>
        		</ScrollView>
		        <Box bg="#0484F7"  center style={{ position: 'absolute', bottom: 0, width: '100%' }}>
					<TouchableOpacity onPress={ () => this.props.navigation.navigate('ProgramStudy') } style={{ paddingVertical: 14, width: '100%' }}>
						<Text size={15} color="#ffffff" center bold>PROGRAM STUDY</Text>
					</TouchableOpacity>
				</Box>
	    	</Box>
		)
	}
}

export default DetailKampus;
