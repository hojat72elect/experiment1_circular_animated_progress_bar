import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {RingProgress} from "./src/RingProgress";

const Value = ({label, value}: { label: string, value: string }) => (
    <View style={styles.valueContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
);

export default function App() {
    return (
        <View style={styles.container}>

            <RingProgress/>
            <View style={{flexDirection: "row"}}>
                <Value label="Steps" value="1220"/>
                <Value label="Distance" value="0,75 km"/>
            </View>

            <Value label="Flights Climbed" value="12"/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        padding: 12,
    },
    valueContainer: {
        marginRight: 50,
        marginVertical: 10,
    },
    label: {
        color: "white",
        fontSize: 20,
    },
    value: {
        fontSize: 35,
        color: "#AFB3BE",
        fontWeight: "500"
    },
});
