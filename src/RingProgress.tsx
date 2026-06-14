import {View} from "react-native";
import Svg, {Circle} from "react-native-svg";

export const RingProgress = ({radius = 100}: { radius?: number }) => {

    const backGroundColor = "#EE0F55"

    return (
        <View style={{
            width: 2 * radius,
            height: 2 * radius,
            alignSelf: "center"
        }}>
            <Svg>
                <Circle r={radius} fill={backGroundColor} cx={radius} cy={radius}/>
            </Svg>
        </View>
    )
}