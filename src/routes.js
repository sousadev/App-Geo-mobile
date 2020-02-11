import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
            title: "App-Geo"
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: "Profile on GitHub"
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#EEE',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#7D40E7'
            }
        }
    })
);

export default Routes;