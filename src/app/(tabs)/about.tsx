import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { useMMKVBoolean } from 'react-native-mmkv'

const About = () => {
  const [darkmode, setDarkmode] = useMMKVBoolean('darkmode')

  return (
    <View className={`${darkmode ? 'bg-black' : 'bg-white'} flex-1`}>
      <Text className={darkmode ? 'text-white' : 'text-black'}>About page</Text>
      <Link className={darkmode ? 'text-white' : 'text-black'} href={'/products'}>Go To Products page</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})