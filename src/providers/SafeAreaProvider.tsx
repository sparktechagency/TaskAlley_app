import { CommonActions, NavigationProp, ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import React, { ReactNode, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BackButton from '../components/shered/BackButton';
const withoutLog = ['login', 'signup', "forget", "verify", "resetpassword", "choosesignup", "customersignup", "servicesignup"];
const SafeAreaProvider = ({ children, backButtonText }: { children: ReactNode, backButtonText?: string }) => {
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const route = useRoute();
  const [login, setLogin] = useState<boolean>(false);
  useEffect(() => {
    if (!login) {
      const currentRoute = route.name.toLowerCase();
      if (!withoutLog.includes(currentRoute)) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })
        );
      }
    }
  }, [login, route.name]);
  return (
    <View style={{
      marginTop: top,
      marginBottom: bottom,
    }}>
      {backButtonText && <BackButton text={backButtonText} />}
      <View style={{
        paddingHorizontal: 20,
        paddingBottom: 50
      }}>
        {children}
      </View>
    </View>
  )
}

export default SafeAreaProvider

const styles = StyleSheet.create({})