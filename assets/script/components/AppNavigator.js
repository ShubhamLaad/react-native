import { createStackNavigator, createAppContainer } from 'react-navigation';
import CategoryListScreen from '../scrrens/CategoryListScreen';
import CategoryDetailsScreen from '../scrrens/CategoryDetailsScreen';
import pagesConstant from '../constants/pages.constant';
import CustomHeader from './CustomHeader';
import React from 'react';

const StackNavigator = createStackNavigator(
  {
    CategoryListScreen: {
      screen: CategoryListScreen,
      navigationOptions: {
        header: props => <CustomHeader {...props} />
      }
    },
    CategoryDetailsScreen: {
      screen: CategoryDetailsScreen,
      navigationOptions: {
        header: props => <CustomHeader {...props} />
      }
    },
  }, {
    initialRouteName: pagesConstant.CategoryListScreen,
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default AppNavigator;
