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

class RegisterUser extends React.Component {
	constructor(props){
    	super(props)
    	this.state = {
    		secureTextEntry: true,
    		username: '',
    		password: '',
    		fullname: '',
    		success: '',
    		status: '',
    		loading: false,
    		text: '',
    		scrollY : new Animated.Value(0)
    	}
  	}

	render(){
		return(
			<Box f={1} bg='#ffffff' center>
				<ScrollView style={{ width: '100%' }}>
					<Image source={require('../assets/images/bg/Login.png')} style={{ width: '100%', height: 400 }} />
		      		<Box pb={20} style={{ paddingLeft: '5%', paddingRight: '5%', marginTop: -340 }}>
		      			<Box style={{ backgroundColor: '#ffffff', borderRadius: 10, padding: 20, shadowOffset:{width: 5, height: 3}, shadowColor: 'black', shadowOpacity: 0.3, elevation: 7 }}>
		      				<Text style={{ fontSize: 18 }}>Registrasi</Text>
		      				<Box style={{ backgroundColor: '#2D9CDB', width: '50%', height: 1, marginTop: 20 }}></Box>
		      				<TextInput
		      					placeholder="Nama Lengkap"
		      					style={{ width: '100%', backgroundColor: '#dedede', borderRadius: 5, paddingLeft: 15, paddingRight: 15, paddingTop: 8, paddingBottom: 8, marginTop: 20 }}
		      				/>
		      				<TextInput
		      					placeholder="Email"
		      					style={{ width: '100%', backgroundColor: '#dedede', borderRadius: 5, paddingLeft: 15, paddingRight: 15, paddingTop: 8, paddingBottom: 8, marginTop: 20 }}
		      				/>
		      				<TextInput
		      					placeholder="Nomor Telephone"
		      					style={{ width: '100%', backgroundColor: '#dedede', borderRadius: 5, paddingLeft: 15, paddingRight: 15, paddingTop: 8, paddingBottom: 8, marginTop: 20 }}
		      				/>
		      				<TextInput
							    multiline={true}
							    numberOfLines={10}
							    placeholder='Alamat'
		      					style={{ justifyContent: 'flex-start', textAlignVertical: 'top', height: 100, width: '100%', backgroundColor: '#dedede', borderRadius: 5, paddingLeft: 15, paddingRight: 15, paddingTop: 8, paddingBottom: 8, marginTop: 20 }}
							/>
		      				<TextInput
		      					placeholder="Password"
		      					secureTextEntry={true}
		      					style={{ width: '100%', backgroundColor: '#dedede', borderRadius: 5, paddingLeft: 15, paddingRight: 15, paddingTop: 8, paddingBottom: 8, marginTop: 15 }}
		      				/>
		      				<TextInput
		      					placeholder="Confirm Password"
		      					secureTextEntry={true}
		      					style={{ width: '100%', backgroundColor: '#dedede', borderRadius: 5, paddingLeft: 15, paddingRight: 15, paddingTop: 8, paddingBottom: 8, marginTop: 15 }}
		      				/>
		      			</Box>
	      				<Box style={{ backgroundColor: '#2D9CDB', borderRadius: 50, marginTop: 20 }}>
	      					<TouchableOpacity style={{ paddingTop: 10, paddingBottom: 10, width: '100%', alignItems: 'center' }} onPress={()=> this.props.navigation.navigate('LoginUser')}>
	      						<Text style={{ color: '#ffffff', fontSize: 15 }}>REGISTER</Text>
	      					</TouchableOpacity>
	      				</Box>
	      				<Box dir="row" mt={10}>
	      					<Text size="sm">Sudah Punya Akun?</Text>
      						<TouchableOpacity onPress={ () => this.props.navigation.goBack() } style={{ marginLeft: 5 }}>
      							<Text size="sm" style={{ color: '#2D9CDB', }}>Login</Text>
      						</TouchableOpacity>
	      				</Box>
		      		</Box>
				</ScrollView>
	    	</Box>
		)
	}
}

export default RegisterUser;
