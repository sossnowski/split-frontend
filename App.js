import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainScreen from './screens/MainScreen'
import CalculateScreen from './screens/CalculateScreen';
import ShowBillScreen from './screens/ShowBill';

const MainNavigator = createStackNavigator({
  Home: {screen: MainScreen},
  Calculate: {screen: CalculateScreen},
  ShowBill: {screen: ShowBillScreen}
});

const App = createAppContainer(MainNavigator); 

export default App;