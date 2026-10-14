import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { EPN } from '@/constants/epn-theme';

export default function TabsLayout() {
  return (
    <Tabs
     screenOptions={{
    tabBarActiveTintColor: EPN.accent,
    tabBarInactiveTintColor: EPN.text,
    headerStyle: {
      backgroundColor: EPN.accent,
    },
    headerShadowVisible: false,
    headerBackground: () => <View style={styles.headerBackground} />,
    headerTintColor: EPN.text,
    headerTitleStyle: {
      fontWeight: '700',
    },
    tabBarStyle: {
      backgroundColor: EPN.primary,
    },
  }}
      

    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Escuela Politecnica Nacional',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'information-circle' : 'information-circle-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: EPN.accent,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: EPN.text,
  },
});
