import { Button, StyleSheet, Text, View } from 'react-native'
import {StyledText, StyledView} from '../../components/Styled'
import { useMMKVString } from 'react-native-mmkv'

const Profile = () => {
   const [accessToken, setAccessToken] = useMMKVString('accessToken')

  return (
    <StyledView>
      <StyledText>Profile page</StyledText>
      <Button onPress={() => {
        setAccessToken('')
      }} title={'Log out'} />
    </StyledView>
  )
}
export default Profile