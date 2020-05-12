import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: { greet: string };
    Details: undefined;
};


type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Home'
>;

export type navigatioonProps = {
    route: ProfileScreenRouteProp;
    navigation: ProfileScreenNavigationProp;
};