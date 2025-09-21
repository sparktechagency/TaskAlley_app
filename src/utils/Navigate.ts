import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

const Navigate = () => {
  const navigate = useNavigation<NavigationProp<ParamListBase>>();
  return navigate.navigate;
};
export const Navigation = () => {
  const navigate = useNavigation<NavigationProp<ParamListBase>>();
  return navigate;
};
export default Navigate;
