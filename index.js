import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';

import BottomBar from './src/components/BottomBar';
import StoryProvider from './src/context/provider';

const Main = () => {

    return (
        <StoryProvider>
            <View style={{ flex: 1 }}>
                <BottomBar />
            </View>
        </StoryProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);