import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

var styles = StyleSheet.create({
    avenirB:{
        fontFamily: 'AvenirLTStd-Black'
    },
    avenirM:{
        fontFamily: 'AvenirLTStd-Medium'
    },
    avenirR:{
        fontFamily: 'AvenirLTStd-Roman'
    },


    nunitoB:{
        fontFamily: 'NunitoSans-Bold'
    }, 
    nunitoR:{
        fontFamily: 'NunitoSans-Regular'
    }, 
    nunitoS:{
        fontFamily: 'NunitoSans-SemiBold'
    }, 


    quickB:{
        fontFamily: 'QuickSand-Bold'
    }, 
    quickM:{
        fontFamily: 'QuickSand-Medium'
    }, 
    quickR:{
        fontFamily: 'QuickSand-Regular'
    }, 
    quickS:{
        fontFamily: 'QuickSand-SemiBold'
    }, 
});

module.exports = styles;