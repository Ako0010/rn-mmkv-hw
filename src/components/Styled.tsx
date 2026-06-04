import { Text, View } from 'react-native'
import { useMMKVBoolean } from 'react-native-mmkv'

const StyledText = ({ children, className = '' }) => {
    const [darkmode, setDarkmode] = useMMKVBoolean('darkmode')

    return (
        <Text className={`${darkmode ? 'text-white' : 'text-black'} ${className}`}>
            {children}
        </Text>
    )
}

const StyledView = ({ children, className = '' }) => {
    const [darkmode, setDarkmode] = useMMKVBoolean('darkmode')

    return (
        <View className={`flex-1 ${darkmode ? 'bg-black' : 'bg-white'} ${className}`}>
            {children}
        </View>
    )
}

export { StyledText, StyledView }