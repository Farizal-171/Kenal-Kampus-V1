import React from 'react';
import { 
	ScrollView, 
	View, 
	TouchableOpacity, 
	Animated, 
	Image
} from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import Icon from 'react-native-ionicons';

class ProgramStudy extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
		return(
			<Box f={1} bg='#0484F7'>
				<Box dir='row' pl={20} pr={20} pt={20} pb={20} style={{ justifyContent: 'space-between' }}>
					<Box dir='row' center>
						<Icon name='ios-arrow-back' color='#ffffff' size={24} onPress={ () => this.props.navigation.goBack()} />
						<Box ml={20}>
							<Text color='#ffffff' size={14}>PROGRAM STUDY</Text>
							<Text color='#ffffff' size={11}>Universitas Negeri Malang</Text>
						</Box>
					</Box>
					<Image source={require('../assets/images/bg/Login.png')} style={{ width: 30, height: 30 }} />
				</Box>	

				<Box f={1} bg='#ffffff' style={{ borderTopRightRadius: 40, borderTopLeftRadius: 40 }}>
					<ScrollView >
						<Box f={1} bg='#ffffff' mt={10} pl={20} pr={20} pb={60} style={{ borderTopRightRadius: 40, borderTopLeftRadius: 40 }}>
							<Box mt={20}>
								<Collapse>
								  	<CollapseHeader>
								    	<Box pt={8} pb={8} pl={15} pr={10} radius={4} bg='#0484f726'>
								      		<Text>nganu</Text>
								    	</Box>
								  	</CollapseHeader>
								  	<CollapseBody>
									  	<Collapse>
									  		<CollapseHeader>
										  		<Box m={10} pl={5} pt={8} dir='row' style={{ alignItems: 'center' }}>
										  			<Box w={7} h={7} radius={100} bg='#0484F7'></Box>
										  			<Text size={15} ml={10}>Fakultas Agama Islam</Text>
										  		</Box>
									  		</CollapseHeader>
									  		<CollapseBody>
									  			<Box ml={22}>
										  			<Text size={14} ml={10} mt={8}>Fakultas Agama Islam</Text>
										  			<Text size={14} ml={10} mt={8}>Fakultas Agama Islam</Text>
										  		</Box>
									  		</CollapseBody>
									  	</Collapse>
									  	<Collapse>
									  		<CollapseHeader>
										  		<Box m={10} pl={5} pt={8} dir='row' style={{ alignItems: 'center' }}>
										  			<Box w={7} h={7} radius={100} bg='#0484F7'></Box>
										  			<Text size={15} ml={10}>Fakultas Agama Islam</Text>
										  		</Box>
									  		</CollapseHeader>
									  		<CollapseBody>
									  			<Box ml={22}>
										  			<Text size={14} ml={10} mt={8}>Fakultas Agama Islam</Text>
										  			<Text size={14} ml={10} mt={8}>Fakultas Agama Islam</Text>
										  		</Box>
									  		</CollapseBody>
									  	</Collapse>
									  	<Collapse>
									  		<CollapseHeader>
										  		<Box m={10} pl={5} pt={8} dir='row' style={{ alignItems: 'center' }}>
										  			<Box w={7} h={7} radius={100} bg='#0484F7'></Box>
										  			<Text size={15} ml={10}>Fakultas Agama Islam</Text>
										  		</Box>
									  		</CollapseHeader>
									  		<CollapseBody>
									  			<Box ml={22}>
										  			<Text size={14} ml={10} mt={8}>Fakultas Agama Islam</Text>
										  			<Text size={14} ml={10} mt={8}>Fakultas Agama Islam</Text>
										  		</Box>
									  		</CollapseBody>
									  	</Collapse>
									  	<Collapse>
									  		<CollapseHeader>
										  		<Box m={10} pl={5} pt={8} dir='row' style={{ alignItems: 'center' }}>
										  			<Box w={7} h={7} radius={100} bg='#0484F7'></Box>
										  			<Text size={15} ml={10}>Fakultas Agama Islam</Text>
										  		</Box>
									  		</CollapseHeader>
									  		<CollapseBody>
									  			<Box ml={22}>
										  			<Text size={14} ml={10} mt={8}>Fakultas Agama Islam</Text>
										  			<Text size={14} ml={10} mt={8}>Fakultas Agama Islam</Text>
										  		</Box>
									  		</CollapseBody>
									  	</Collapse>
								  	</CollapseBody>
								</Collapse>
							</Box>
						</Box>
					</ScrollView>
					<Box bg="#0484F7"  center style={{ position: 'absolute', bottom: 0, width: '100%' }}>
						<TouchableOpacity style={{ paddingVertical: 14, width: '100%' }}>
							<Text size={14} color="#ffffff" center bold>LIHAT PELUANG</Text>
						</TouchableOpacity>
					</Box>
				</Box>
	    	</Box>
		)
	}
}

export default ProgramStudy;
