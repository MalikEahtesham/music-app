/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { rMS, rS, rV } from './src/shared/responsive';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import Dummy from './src/screens/Dummy';
type SectionProps = PropsWithChildren<{
  title: string;
}>;


const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#0A091E',
          width: '98%',
          height: 60,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          shadowColor: '#A8BACF',
          shadowOffset: { width: 0, height: -5 },
          shadowOpacity: 0.4,
          shadowRadius: 20,
          elevation: 50, // Increased elevation for clearer shadow on Android
        }}
      >
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
              <Text style={{ color: isFocused ? 'tomato' : 'gray' }}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
function App(): React.JSX.Element {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator> */}
      <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}

      // screenOptions={({ route }) => ({
      //   tabBarStyle: {
      //     backgroundColor: '#0A091E', // Background color of the tab bar
      //     borderTopWidth: 0, // Remove top border
      //     // elevation: 5, // Shadow for Android
      //     height: 60, // Height of the tab bar
      //     // shadowColor: '#A8BACF',
      //     // shadowOffset: { width: 4, height: 3 },
      //     // shadowOpacity: 5.27,
      //     // shadowRadius: 4.65,
      //     elevation: 6,
      //     shadowColor: '#A8BACF',
      //     shadowOffset: { width: 0, height: -5 },
      //     shadowOpacity: 0.1,
      //     shadowRadius: 20,
      //     borderTopLeftRadius:30,
      //     borderTopRightRadius:30,
      //     width:'98%',
      //     alignSelf:'center'
      //   },

      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName: any = '';

      //     if (route.name === 'Home') {
      //       iconName = focused
      //         ? 'ios-information-circle'
      //         : 'ios-information-circle-outline';
      //     } else if (route.name === 'Settings') {
      //       iconName = focused ? 'ios-list' : 'ios-list-outline';
      //     }

      //     // You can return any component that you like here!
      //     return null//  <Ionicons name={iconName} size={size} color={color} />;
      //   },
      //   tabBarActiveTintColor: 'tomato',
      //   tabBarInactiveTintColor: 'gray',
      // })}
      >
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: false,
          tabBarBadge: 3
        }} />
        <Tab.Screen name="Settings" component={Dummy} options={{
          headerShown: false,
          tabBarBadge: 3
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    // marginLeft: 10,
    // marginTop: StatusBar.currentHeight || 0,
    paddingVertical: rV(5),
    paddingHorizontal: rV(10),
    // marginRight: 10,
    backgroundColor: '#0A071E'
  },
  header: {
    // width: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  item: {
    height: rV(120),
    // backgroundColor: '#f9c2ff',
    padding: rS(5),
    marginVertical: rS(3),
    // marginHorizontal: rS(3),
  },
  itemNew: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'red',
    flex: 1,
    padding: rS(3),
    marginVertical: rS(5),
    marginHorizontal: rS(2),
  },
  title: {
    fontSize: rS(14),
    color: '#fff',
    alignSelf: 'center'
  },
  titleNew: {
    fontSize: rS(14),
    color: '#fff',
    // alignSelf: 'center'
  },
  views: {
    fontSize: rS(12),
    color: '#DEDEDE',
    // alignSelf: 'center'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
