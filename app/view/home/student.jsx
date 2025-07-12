import {AnimatedCircularProgress} from "react-native-circular-progress";
import {Text, View, StyleSheet} from "react-native";
import {Circle} from "react-native-svg";
import { pendingCourseFilter, filters, courseDataAll } from "@/components/courseData";

export default function StudentIndex() {
    return (
        <View
            style={styles.studentPage}
        >
            <AnimatedCircularProgress
                size={160}
                width={18}
                fill={50}
                rotation={0}
                tintColor="#00e0ff"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875"
                renderCap={({center}) => <Circle cx={center.x} cy={center.y} r="8" fill="cyan"/>}
            >
                {(fill) => <Text style={styles.studyProgress}>{fill}%</Text>}
            </AnimatedCircularProgress>
            <Text style={styles.tooltip}> 今天学习进度 </Text>

            <View style={styles.progressContainer}>

                <View style={styles.progressItem}>
                    <Text style={styles.progressItemText}>学习时长</Text>
                    <AnimatedCircularProgress size={60} width={10} fill={20} tintColor="#00e0ff" rotation={0}
                                              backgroundColor="#3d5875">
                        {(fill) => <Text>{fill}%</Text>}
                    </AnimatedCircularProgress>
                    <Text style={styles.progressItemText}>1.5小时</Text>
                </View>

                <View style={styles.progressItem}>
                    <Text style={styles.progressItemText}>学习课程</Text>
                    <AnimatedCircularProgress size={60} width={10} fill={25} tintColor="#00e0ff" rotation={0}
                                              backgroundColor="#3d5875">
                        {(fill) => <Text>{fill}%</Text>}
                    </AnimatedCircularProgress>
                    <Text style={styles.progressItemText}>4门</Text>
                </View>

                <View style={styles.progressItem}>
                    <Text style={styles.progressItemText}>学习任务</Text>
                    <AnimatedCircularProgress size={60} width={10} fill={30} tintColor="#00e0ff" rotation={0}
                                              backgroundColor="#3d5875">
                        {(fill) => <Text>{fill}%</Text>}
                    </AnimatedCircularProgress>
                    <Text style={styles.progressItemText}>20个</Text>
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    studentPage:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#e0e0ff',
    },
    studyProgress: {
        fontFamily: 'Arial',
        fontSize: 28,
        fontWeight: '600',
    },

    tooltip: {
        fontSize: 16,
        color: '#333',
        marginTop: 10,
        fontWeight: 'bold',
    },

    progressContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 20,
    },

    progressItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
    },

    progressItemText: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
    },


});