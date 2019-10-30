import React from 'react';
import { ScrollView, View, TouchableOpacity, Animated, Image, TextInput } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import Icon from 'react-native-ionicons';

class CreateArtikel extends React.Component {
	render(){
		return(
			<Box f={1} bg='#ffffff'>
				<Box>
					<Box dir="row" w="100%" bg="#ffffff" style={{ justifyContent: 'space-between', position: 'absolute', paddingHorizontal: '5%', paddingVertical: 8, zIndex: 1, top: 0}} center>
						<Box w="10%">
							<TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
								<Icon 
									name="ios-arrow-back"
									size={25}
								/>
							</TouchableOpacity>
						</Box>
						<Box w="80%">
							<Text size={17}>Tulis Artikel</Text>
						</Box>
						<Box>
							<Icon 
								name="ios-more"
								size={35}
							/>
						</Box>
					</Box>
					<ScrollView style={{ paddingHorizontal: '5%', paddingTop: 70, }}>
						<Box mt={15} bg="#DEDEDE" self="center" w="100%" h={48} style={{ borderRadius: 6 }}>
							<TouchableOpacity style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
								<Text size={14} ml={15} color="#5e5e5e">Upload Gambar</Text>
							</TouchableOpacity>
						</Box>
						<Box mt={15} bg="#DEDEDE" self="center" w="100%" h={48} style={{ borderRadius: 6, paddingHorizontal: 15 }}>
							<TextInput 
								placeholderTextColor="#5e5e5e"
								placeholder="Judul Artikel"
								style={{ fontSize: 14, width: '100%', height: '100%', justifyContent: 'center' }}
							/>
						</Box>
						<Box mt={15} bg="#DEDEDE" self="center" w="100%" h={48} style={{ borderRadius: 6, paddingHorizontal: 15 }}>
							<TextInput 
								placeholderTextColor="#5e5e5e"
								placeholder="Kategori Alat"
								style={{ fontSize: 14, width: '100%', height: '100%', justifyContent: 'center' }}
							/>
						</Box>
						<TextInput
						    multiline={true}
						    numberOfLines={20}
						    placeholder='Alamat'
	      					style={{ justifyContent: 'flex-start', textAlignVertical: 'top', width: '100%', backgroundColor: '#dedede', borderRadius: 5, paddingLeft: 15, paddingRight: 15, paddingTop: 8, paddingBottom: 8, marginTop: 20 }}
						/>

						<Box dir='row' mt={30} style={{ justifyContent: 'space-between' }}>
							<Box radius={100} border={1} w='45%' h={45} center style={{ borderColor: '#0484F7' }}>
								<TouchableOpacity style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
									<Text size={14} color='#0484F7' center>PREVIEW</Text>
								</TouchableOpacity>
							</Box>
							<Box radius={100} bg='#0484F7' w='45%' h={45} center>
								<TouchableOpacity style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
									<Box dir='row' w='100%' h='100%' center style={{ alignItems: 'center' }}>
										<Icon name='ios-create' size={18} color='#ffffff' />
										<Text size={14} color='#ffffff' ml={5} center>POSTING</Text>
									</Box>
								</TouchableOpacity>
							</Box>
						</Box>
						<Box h={100}></Box>
					</ScrollView>
				</Box>
	    	</Box>
		)
	}
}

export default CreateArtikel;
