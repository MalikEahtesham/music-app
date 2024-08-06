//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { rS, rV } from '../shared/responsive';

// create a component
const Dummy = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', padding: rV(10), justifyContent: 'space-between', height: rS(50), alignItems: 'center', }}>
                {/* <Text style={{ color: '#dedede' }}> X </Text> */}
                <Image
                    source={require('../assets/arrow_left.png')}
                    style={{ height: rS(20), width: rS(20), alignSelf: 'center' }}
                />
                <Text style={{ color: '#dedede', fontSize: rS(14) }}>Ophelia by Steven</Text>
                <Image
                    source={require('../assets/heart.png')}
                    style={{ height: rS(20), width: rS(20), alignSelf: 'center' }}
                />
            </View>
            <View style={{ justifyContent: 'center', flex: 1, }} >
                <Image
                    source={require('../assets/Rectangle_16.png')}
                    style={{ height: rS(240), borderRadius: rS(20), width: rS(220), alignSelf: 'center' }}
                />

            </View>
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', }} >
                <View style={{ alignSelf: 'center', justifyContent: 'center', }}>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ color: '#dedede', fontSize: rS(18) }}>Ophelia</Text>
                        <Text style={{ color: '#dedede' }}>Steven Price</Text>

                    </View>
                    <View style={{ backgroundColor: 'red', justifyContent: 'flex-start' }}>
                        <Image
                            resizeMethod='scale'
                            source={require('../assets/Group_59.png')}
                            style={{ height: rS(120), width: rS(300), alignSelf: 'center' }}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#dedede', fontSize: rS(14) }}>1:25</Text>
                            <Text style={{ color: '#dedede', fontSize: rS(14) }}>3:15</Text>

                        </View>
                    </View>
                </View>


                <Image
                    resizeMethod='scale'
                    source={require('../assets/Group.png')}
                    style={{ height: rS(120), width: rS(300), alignSelf: 'center' }}
                />
                {/* <Text style={{ color: '#dedede' }}>Ophelia</Text>
                <Text style={{ color: '#dedede' }}>Steven Price</Text> */}
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#0A091E',
    },
});

//make this component available to the app
export default Dummy;
