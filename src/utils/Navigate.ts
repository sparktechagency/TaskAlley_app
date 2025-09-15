
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native'

const Navigate = () => {
  const navigate = useNavigation<NavigationProp<ParamListBase>>()
  return navigate.navigate
}

export default Navigate
