import {View} from 'react-native';
import {RingProgress} from "./src/RingProgress";

export default function App() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black",
            justifyContent: "center",
        }}>
            <RingProgress progress={0.23} radius={150} strokeWidth={30}/>
        </View>
    );
}
