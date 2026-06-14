import {View} from "react-native";
import Svg, {Circle} from "react-native-svg";

export const RingProgress = ({radius = 100, strokeWidth = 30}: { radius?: number, strokeWidth?: number }) => {

    const backGroundColor = "#EE0F55"
    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius;

    return (
        <View style={{
            width: 2 * radius,
            height: 2 * radius,
            alignSelf: "center"
        }}>
            <Svg>
                {/*The background circle*/}
                <Circle
                    cx={radius}
                    cy={radius}
                    r={innerRadius}
                    strokeWidth={strokeWidth}
                    stroke={backGroundColor}
                    opacity={0.2}
                />
                {/*The foreground circle*/}
                <Circle
                    cx={radius}
                    cy={radius}
                    r={innerRadius}
                    strokeWidth={strokeWidth}
                    stroke={backGroundColor}
                    strokeDasharray={[circumference * 0.75, circumference]}
                    strokeLinecap={"round"}
                />
            </Svg>
        </View>
    )
}