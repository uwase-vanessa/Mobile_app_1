import React from 'react'
import { View, Text } from 'react-native'
import {Tabs} from "expo-router"

const TabsLayout = () => {
// render
    return (
        <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle : {
                backgroundColor: 'white',
                position: 'absolute',
                borderTopColor: '#0061FF1A',
                borderTopWidth: 1,
                minHeight: 70,
            }
          }}
        
        >
            <Tabs.Screen 
            name='index'
            options={{
                title: 'Home'
            }}
            />
        </Tabs>
    )
}

export default TabsLayout
