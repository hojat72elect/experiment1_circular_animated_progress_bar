import Animated, {useAnimatedProps, useSharedValue, withTiming} from "react-native-reanimated";
import {View} from "react-native";
import Svg, {Circle} from "react-native-svg";
import {useEffect} from "react";
import AntDesign from '@expo/vector-icons/AntDesign';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const RingProgress = ({radius = 100, strokeWidth = 20, progress}: {
    radius?: number,
    strokeWidth?: number,
    progress: number
}) => {

    const backGroundColor = "#EE0F55"
    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius;

    const fill = useSharedValue(0.6);

    const animatedProps = useAnimatedProps(() => ({
        strokeDasharray: [circumference * fill.value, circumference]
    }));

    useEffect(() => {
        fill.value = withTiming(progress, {duration: 2_000});
    }, [progress]);

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
                <AnimatedCircle
                    animatedProps={animatedProps}
                    cx={radius}
                    cy={radius}
                    originX={radius}
                    originY={radius}
                    r={innerRadius}
                    strokeWidth={strokeWidth}
                    stroke={backGroundColor}
                    strokeLinecap={"round"}
                    rotation="-90"
                />
            </Svg>
            <AntDesign name="arrow-right" size={strokeWidth * 0.6} color="black"
                       style={{position: "absolute", alignSelf: "center", top: 0.1 * strokeWidth}}/>
        </View>
    )
}