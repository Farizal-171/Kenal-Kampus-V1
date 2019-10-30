import React from 'react';
import { 
	ScrollView, 
	View, 
	TouchableOpacity, 
	Animated, 
	Image, 
	TextInput,
	Dimensions,
	Alert,
	Easing,
    ActivityIndicator,
    AsyncStorage,
    ToastAndroid,
    StatusBar
} from 'react-native';
import { Box, Text } from 'react-native-design-utility';

var { height, width } = Dimensions.get('window');

class LoginUser extends React.Component {
	constructor(props){
    	super(props)
    	this.state = {
    		secureTextEntry: true,
    		username: '',
    		password: '',
    		success: '',
    		status: '',
    		loading: false,
    		text: '',
    		scrollY : new Animated.Value(0)
    	}
  	}

  	_showPassword = () => {
        this.setState({ secureTextEntry: !this.state.secureTextEntry })
    }

  	_handleLoginUser = async () => {
    	let formData = new FormData();
	    formData.append('username', this.state.username);
	    formData.append('password', this.state.password);
	    formData.append('act', 'login');

    	fetch('http://kenalkampus.greatcode.id/server/ajax.php', {
      		method: 'POST',
      		body: formData
    	})
    	
    	.then((response) => response.json())
    	.then((responseJson) => {
      		if (responseJson=='success') {
      			this.props.navigation.navigate('Homes')
      		}
      		else{
      			ToastAndroid.show(responseJson , ToastAndroid.SHORT);
      		}
    	})
  	}

	render(){
		const { secureTextEntry, username, password, springValue, loading } = this.state
		return(
			<Box f={1} bg='#ffffff'>
				<StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
				<ScrollView style={{ width: '100%' }}>
					<Image source={require('../assets/images/bg/Login.png')} style={{ width: '100%', height: 400 }} />
		      		<Box style={{ paddingHorizontal: '5%', paddingRight: '5%', marginTop: -100 }}>
		      			<Box style={{ backgroundColor: '#ffffff', borderRadius: 10, padding: 20, shadowOffset:{width: 5, height: 3}, shadowColor: 'black', shadowOpacity: 0.3, elevation: 7 }}>
		      				<Text size={18} bold>Login</Text>
		      				<Box style={{ backgroundColor: '#2D9CDB', width: '50%', height: 1, marginTop: 20 }}></Box>
		      				<TextInput
		      					placeholder="Username"
                                returnKeyType = 'next'
		      					style={{ width: '100%', backgroundColor: '#dedede', borderRadius: 5, paddingLeft: 15, paddingRight: 15, paddingTop: 8, paddingBottom: 8, marginTop: 20 }}
		      					onChangeText={(text) => this.setState({ username: text })}
		      				/>
		      				<TextInput
                                returnKeyType='send'
		      					placeholder="Password"
		      					secureTextEntry={true}
		      					style={{ width: '100%', backgroundColor: '#dedede', borderRadius: 5, paddingLeft: 15, paddingRight: 15, paddingTop: 8, paddingBottom: 8, marginTop: 15 }}
                                onChangeText={(text) => this.setState({ password: text })}
		      				/>
		      			</Box>
	      				<Box style={{ backgroundColor: '#2D9CDB', borderRadius: 50, marginTop: 20 }}>
	      					<TouchableOpacity style={{ paddingTop: 10, paddingBottom: 10, width: '100%', alignItems: 'center' }} onPress={() => this._handleLoginUser()}>
	      						<Text style={{ color: '#ffffff', fontSize: 15 }}>LOGIN</Text>
	      					</TouchableOpacity>
	      				</Box>
	      				<Box dir="row" mt={10}>
	      					<Text size="sm">Belum Punya Akun?</Text>
      						<TouchableOpacity onPress={ () => this.props.navigation.navigate('RegisterUser') } style={{ marginLeft: 5 }}>
      							<Text size="sm" style={{ color: '#2D9CDB', }}>Daftar</Text>
      						</TouchableOpacity>
	      				</Box>
		      		</Box>
				</ScrollView>
	    	</Box>
		)
	}
}

export default LoginUser;
