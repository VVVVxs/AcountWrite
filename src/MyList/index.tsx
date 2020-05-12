import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { navigatioonProps } from '../types';

const MyList = ({ navigation, route }: navigatioonProps) => {
    const list = [
        {
            name: 'Amy Farha',
            avatar_url:
                'http://b-ssl.duitang.com/uploads/item/201804/22/20180422184826_NPZmF.thumb.700_0.jpeg',
            subtitle: 'Vice President',
        },
        {
            name: 'Amy Farha',
            avatar_url:
                'http://b-ssl.duitang.com/uploads/item/201804/22/20180422184826_NPZmF.thumb.700_0.jpeg',
            subtitle: 'Vice President',
        },
        {
            name: 'Amy Farha',
            avatar_url:
                'http://b-ssl.duitang.com/uploads/item/201804/22/20180422184826_NPZmF.thumb.700_0.jpeg',
            subtitle: 'Vice President',
        },
        {
            name: 'Amy Farha',
            avatar_url:
                'http://b-ssl.duitang.com/uploads/item/201804/22/20180422184826_NPZmF.thumb.700_0.jpeg',
            subtitle: 'Vice President',
        },
        {
            name: 'Amy Farha',
            avatar_url:
                'http://b-ssl.duitang.com/uploads/item/201804/22/20180422184826_NPZmF.thumb.700_0.jpeg',
            subtitle: 'Vice President',
        },
        {
            name: 'Chris Jackson',
            avatar_url:
                'http://b-ssl.duitang.com/uploads/item/201804/22/20180422184826_NPZmF.thumb.700_0.jpeg',
            subtitle: 'Vice Chairman',
        },
    ];
    return (
        <View>
            {list.map((l, i) => (
                <ListItem
                    key={i}
                    leftAvatar={{ source: { uri: l.avatar_url } }}
                    title={l.name}
                    subtitle={l.subtitle}
                    bottomDivider
                />
            ))}
            <TouchableOpacity onPress={() => navigation.push('Details')}>
                <Text>{route.params.greet}</Text>
            </TouchableOpacity>

        </View>
    );
};

export default MyList;
