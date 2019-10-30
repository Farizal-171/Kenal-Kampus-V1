import React from 'react';
import { ScrollView, View, TouchableOpacity, Animated, Image, } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import Icon from 'react-native-ionicons';
import { Container, Header, Content, Tab, Tabs, TabHeading, ScrollableTab } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

HEADER_MAX_HEIGHT = 300
HEADER_MIN_HEIGHT = 60
PROFILE_MIN_HEIGHT = 40
PROFILE_MAX_HEIGHT = 80

class Profile extends React.Component {
	constructor(props){
    	super(props)
    	this.state = {
    		verifed: false,
    		before: true,
    		scrollY : new Animated.Value(0)
    	}
  	}

	render(){
		const headerHeight = this.state.scrollY.interpolate({
      		inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      		outputRange:[HEADER_MAX_HEIGHT, 0],
      		extrapolate: 'clamp'
    	});
		const contentTop = this.state.scrollY.interpolate({
      		inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      		outputRange:[HEADER_MAX_HEIGHT + 10, HEADER_MIN_HEIGHT + 10],
      		extrapolate: 'clamp'
    	});
		const headerTop = this.state.scrollY.interpolate({
      		inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
      			HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_MIN_HEIGHT,
        		HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_MIN_HEIGHT + 26
      		],
      		outputRange:[-90, -90, -90, 0],
      		extrapolate: 'clamp'
    	});

		const martopTabs = this.state.scrollY.interpolate({
      		inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      		outputRange:[ 310, 70],
      		extrapolate: 'clamp'
    	});

    	const martopTab = this.state.scrollY.interpolate({
      		inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      		outputRange:[ 10, 250],
      		extrapolate: 'clamp'
    	});

    	const { before, verifed } = this.state
		return(
			<Box f={1} bg='#ffffff'>
				{(before) ? (
					<Box f={1} bg='#ffffff' pl={20} pr={20}>
						<Box dir="row" mt={10} style={{ justifyContent: 'space-between'}} center>
							<Box>
								<Text size={17}>Profile</Text>
							</Box>
							<Box>
								<Icon 
									name="ios-more"
									size={35}
								/>
							</Box>
						</Box>

						<Box w="100%" center>
							<Box mt={25} circle={100} avatar>
								<Image source={ require('../assets/images/profile/profile.png') } />
							</Box>
							<Text mt={15} size={16} bold>Muhammad Wildan Wari</Text>
							<Box bg="#27AE60" w="100%" h={50} mt={30} center style={{ borderRadius: 100 }}>
								<TouchableOpacity onPress={ () => this.props.navigation.navigate('Qualifed') } style={{ width: '100%', paddingVeritcal: 15 }}>
									<Text color="#ffffff" center size={14} bold>UPGRADE PROFILE</Text>
								</TouchableOpacity>
							</Box>
						</Box>
						
						<Box mt={30}>
							<Box mt={15}>
								<Text size={12} color="#a5a5a5">Nama</Text>
								<Text size={15} color="#222222" bold>Muhammad Wildan Wari</Text>
							</Box>
							<Box mt={15}>
								<Text size={12} color="#a5a5a5">Nomor Telepone</Text>
								<Text size={15} color="#222222" bold>085852924085</Text>
							</Box>
							<Box mt={15}>
								<Text size={12} color="#a5a5a5">Alamat</Text>
								<Text size={15} color="#222222" bold>2722 Canden Ave Austin, Idaho 78097 United State</Text>
							</Box>
						</Box>
					</Box>
				) : false}

				{(verifed) ? (
					<Box f={1} bg='#ffffff'>
						<Animated.View style={{  paddingHorizontal: '5%', height: headerHeight, position: 'absolute', top: 0, width: '100%', }}>
							<Animated.View style={{position: 'absolute', bottom: 0, marginLeft: '5%', width: '100%', }}>
								<Box dir="row" mt={15} style={{ justifyContent: 'space-between'}} center>
									<Box>
										<Text size={17}>Profile</Text>
									</Box>
									<Box>
										<Icon 
											name="ios-more"
											size={35}
										/>
									</Box>
								</Box>

								<Animated.View style={{ flexDirection: 'column', width: '100%', alignItems: 'center' }}>
									<Box w={100} h={100}>
										<Box mt={25} circle={100} avatar>
											<Image source={ require('../assets/images/profile/profile.png') } />
										</Box>
										<Image source={ require('../assets/images/icons/star.png') } style={{ position: 'absolute', width: '40%', height: '40%', right: 0, top: 20 }} />
									</Box>
									<Text mt={40} size={16} bold>Muhammad Wildan Wari</Text>
									<Box dir="row" center>
										<Text size={12} color="#a5a5a5">Teknik Komputer - </Text>
										<Text size={12} color="#0484F7">Universitas Negeri Malang</Text>
									</Box>
									<Box bg="#0484F7" w="100%" h={50} mt={30} center style={{ borderRadius: 100 }}>
										<TouchableOpacity onPress={ () => this.props.navigation.navigate('CreateArtikel') } style={{ width: '100%', paddingVeritcal: 15 }}>
											<Box dir="row" center>
												<Icon 
													name="md-add-circle"
													color="#ffffff"
													size={20}
												/>
												<Text color="#ffffff" ml={7} center size={12} bold>POSTING ARTIKEL</Text>
											</Box>
										</TouchableOpacity>
									</Box>

								</Animated.View>
							</Animated.View>
						</Animated.View>

						<Animated.View style={{ width: '100%', marginTop: headerTop, position: 'absolute', backgroundColor: '#ffffff', paddingBottom: 20, paddingTop: 20 }}>
							<Box center dir="row" style={{ paddingHorizontal: '5%', justifyContent: 'space-between' }}>
								<Box w={40} h={40}>
									<Box circle={40} avatar>
										<Image source={ require('../assets/images/profile/profile.png') } />
									</Box>
									<Image source={ require('../assets/images/icons/star.png') } style={{ position: 'absolute', width: '30%', height: '30%', right: 0,}} />
								</Box>
								<Box w="70%">
									<Text size={16} bold>Muhammad Wildan Wari</Text>
								</Box>
								<Box bg="#0484F7" w={35} h={35} center style={{ borderRadius: 100 }}>
									<TouchableOpacity onPress={ () => this.props.navigation.navigate('CreateArtikel') } style={{ width: '100%', paddingVeritcal: 15 }}>
										<Box dir="row" center>
											<Icon 
												name="md-add"
												color="#ffffff"
												size={25}
											/>
										</Box>
									</TouchableOpacity>
								</Box>
							</Box>
						</Animated.View>

						<Animated.View style={{ flex: 1, }}>
							<Animated.View style={{ marginTop: martopTabs }}></Animated.View>
							<Tabs
			     				tabBarUnderlineStyle={{ backgroundColor: '#0484F7', height: 5, borderRadius: 2, width: 68, marginLeft: 56}}
					        	tabContainerStyle={{
					        		backgroundColor: '#ffffff',
								  	elevation: 0,
								  	borderBottomWidth: 4,
								  	borderBottomColor: '#9e9e9e30',
								}} 
								
			     			>
			     				<Tab 
			     					heading="Profile"
					          		tabStyle={{ backgroundColor: '#ffffff', }} 
					          		textStyle={{ color: '#444444' }} 
					          		activeTabStyle={{ backgroundColor: '#ffffff' }} 
					          		activeTextStyle={{ color: '#0484F7' }}
			     				>
							        <ScrollView 
							        	style={{ flex: 1, paddingHorizontal: '5%' }}
							        	scrollEventThrottle={16}
							          	onScroll={Animated.event(
							            	[{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
							          	)}
							        >
							        	<Animated.View style={{ marginTop: martopTab }}>
								          	<Box mt={15}>
												<Text size={12} color="#a5a5a5">Nama</Text>
												<Text size={15} color="#222222" bold>Muhammad Wildan Wari</Text>
											</Box>
											<Box mt={15}>
												<Text size={12} color="#a5a5a5">Nomor Telepone</Text>
												<Text size={15} color="#222222" bold>085852924085</Text>
											</Box>
											<Box mt={15}>
												<Text size={12} color="#a5a5a5">Program Study</Text>
												<Text size={15} color="#222222" bold>S1 - Teknik Informatika</Text>
											</Box>
											<Box mt={15}>
												<Text size={12} color="#a5a5a5">Kampus</Text>
												<Text size={15} color="#222222" bold>Universitas Negeri Malang</Text>
											</Box>
											<Box mt={15}>
												<Text size={12} color="#a5a5a5">Alamat</Text>
												<Text size={15} color="#222222" bold>2722 Canden Ave Austin, Idaho 78097 United State</Text>
											</Box>
											<Box h={1000}></Box>
							        	</Animated.View>
							        </ScrollView>
							    </Tab>
							    <Tab 
							    	heading="Artikel (15)"
					          		tabStyle={{ backgroundColor: '#ffffff' }} 
					          		textStyle={{ color: '#444444' }} 
					          		activeTabStyle={{ backgroundColor: '#ffffff' }} 
					          		activeTextStyle={{ color: '#0484F7' }}
							    >
							    	<ScrollView
							    		style={{ flex: 1 }}
							          	scrollEventThrottle={16}
							          	onScroll={Animated.event(
							            	[{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
							          	)}
							    	>
							    		<Animated.View style={{ marginTop: martopTab }}>
								          	<Box style={{ paddingHorizontal: '5%' }}>
								            	<Box mt={20}>
													<Image source={require('../assets/images/bg/Login.png')} style={{ width: '100%', height: 230, borderRadius: 15 }} />
													<LinearGradient colors={[ '#c4c4c400', '#000000c4' ]} style={{ width: '100%', height: 230, borderRadius: 15, marginTop: -230, }}>
														<TouchableOpacity style={{ width: '100%', height: 230 }}>
															<Box p={15} style={{ position: 'absolute', bottom: 0 }}>
																<Text size="base" color="#ffffff" style={{ lineHeight: 23 }} bold>Fakultas Teknik UM | Unggul dan Menjadi Rujukan</Text>
																<Box dir="row" mt={5} style={{ justifyContent: "space-between", }}>
																	<Box dir="row" mt={5}>
																		<Text size={12} color="#ffffff">Oleh - </Text>
																		<Text size={12} color="#0484F7">Arif Ragil </Text>
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
													<LinearGradient colors={[ '#c4c4c400', '#000000c4' ]} style={{ width: '100%', height: 230, borderRadius: 15, marginTop: -230, }}>
														<TouchableOpacity style={{ width: '100%', height: 230 }}>
															<Box p={15} style={{ position: 'absolute', bottom: 0 }}>
																<Text size="base" color="#ffffff" style={{ lineHeight: 23 }} bold>Fakultas Teknik UM | Unggul dan Menjadi Rujukan</Text>
																<Box dir="row" mt={5} style={{ justifyContent: "space-between", }}>
																	<Box dir="row" mt={5}>
																		<Text size={12} color="#ffffff">Oleh - </Text>
																		<Text size={12} color="#0484F7">Arif Ragil </Text>
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
													<LinearGradient colors={[ '#c4c4c400', '#000000c4' ]} style={{ width: '100%', height: 230, borderRadius: 15, marginTop: -230, }}>
														<TouchableOpacity style={{ width: '100%', height: 230 }}>
															<Box p={15} style={{ position: 'absolute', bottom: 0 }}>
																<Text size="base" color="#ffffff" style={{ lineHeight: 23 }} bold>Fakultas Teknik UM | Unggul dan Menjadi Rujukan</Text>
																<Box dir="row" mt={5} style={{ justifyContent: "space-between", }}>
																	<Box dir="row" mt={5}>
																		<Text size={12} color="#ffffff">Oleh - </Text>
																		<Text size={12} color="#0484F7">Arif Ragil </Text>
																	</Box>
																	<Box>
																		<Text size={12} color="#ffffff">12 Komentar</Text>
																	</Box>
																</Box>
															</Box>
														</TouchableOpacity>
													</LinearGradient>
												</Box>
												<Box h={20}></Box>
							          		</Box>
							    		</Animated.View>
							        </ScrollView>
							    </Tab>
							</Tabs>
						</Animated.View>
			    	</Box>
		    	) : true}
			</Box>
		)
	}
}

export default Profile;
