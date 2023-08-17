import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Movies } from '../containers';
import LikedCharacters from '../containers/LikedCharacters';
import { ScreenType } from '@/types';

const Tab = createBottomTabNavigator();

const HomeScreen: ScreenType = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen
        name="Liked characters"
        component={LikedCharacters}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
