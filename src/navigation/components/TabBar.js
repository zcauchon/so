import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {TabBarBottomProps, NavigationRoute} from 'react-navigation';


class TabBar extends Component {
    navigationStateIndex = null;

    renderTabBarButton = (route, index) => {
        const {
            activeTintColor,
            inactiveTintColor,
            navigation,
            getLabelText,
            renderIcon,
        } = this.props;

        const currentIndex = navigation.state.index;
        const color = currentIndex === index ? activeTintColor : inactiveTintColor;
        const label = getLabelText({route, focused: currentIndex === index, index})
        return (
            <TouchableOpacity
            >
                {renderIcon({
                    route,
                    tintColor: color,
                    focused: currentIndex === index,
                    index
                })}
            </TouchableOpacity>
        )
    }

    render() {
        const {navigation, style} = this.props;
        const tabBarButtons = navigation.state.routes.map(
            this.renderTabBarButton.bind(this)
        );
        return (
            <View 
                style={[
                    {
                        backgroundColor: "#0D0D0F",
                        height: 100
                    }
                ]}
            >
                {tabBarButtons}
            </View>
        )
    }
}

export default TabBar;