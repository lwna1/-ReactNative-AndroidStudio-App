import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Alert } from "react-native";
import { studentData, courseDataAll, filters } from "@/components/courseData";
import Icon from "@expo/vector-icons/Ionicons";
import { Role } from "@/components/loginContext";

const TeacherDashboard = () => {
    // 获取当前教师ID列表
    const teacherCourseIds = filters[Role.TEACHER];

    // 过滤课程数据
    const filteredCourses = courseDataAll.filter((course) =>
        teacherCourseIds.includes(course.id)
    );
    const renderStudentList = (courseId: string) => {
        // 根据ID过滤出学生
        const filteredStudents = studentData.filter((student) =>
            student.course.includes(courseId)
        );

        if (filteredStudents.length === 0) {
            return <Text style={styles.noStudentText}>暂无学生未完成任务</Text>;
        }

        return (
            <FlatList
                data={filteredStudents}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.studentCard}
                        onPress={() =>
                            Alert.alert(
                                "已催交！",
                                `已经将来自教师的催收通知发送给学生：${item.name}`
                            )
                        }
                    >
                        <View style={styles.studentProfile}>
                            {item.profile}
                            <Text style={styles.studentName}>{item.name}</Text>
                        </View>
                        <View style={styles.studentTaskInfo}>
                            <Text style={styles.taskText}>
                                已完成任务：{item.finishedTask[0]} / {item.finishedTask[1]}
                            </Text>
                            <Text style={styles.missedText}>
                                未完成任务：{item.missedTask}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>本班课程列表</Text>
            <FlatList
                data={filteredCourses}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.courseSection}>
                        <View style={styles.courseHeader}>
                            <Image
                                source={require("@/assets/images/react-logo.png")} //替换
                                style={styles.courseImage}
                            />
                            <View>
                                <Text style={styles.courseTitle}>{item.title}</Text>
                                <Text style={styles.courseDescription}>{item.description}</Text>
                            </View>
                        </View>
                        <View style={styles.studentList}>
                            {renderStudentList(item.id)}
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#333",
    },
    courseSection: {
        marginBottom: 24,
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    courseHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    courseImage: {
        width: 48,
        height: 48,
        borderRadius: 8,
        marginRight: 12,
    },
    courseTitle: {
        fontSize: 18,
        fontWeight: "600",
    },
    courseDescription: {
        fontSize: 14,
        color: "#666",
    },
    studentList: {
        marginTop: 12,
    },
    studentCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
    },
    studentProfile: {
        flexDirection: "row",
        alignItems: "center",
    },
    studentName: {
        fontSize: 16,
        marginLeft: 8,
        color: "#333",
    },
    studentTaskInfo: {
        flex: 1,
        alignItems: "flex-end",
    },
    taskText: {
        fontSize: 14,
        color: "#555",
    },
    missedText: {
        fontSize: 14,
        color: "#d9534f",
    },
    noStudentText: {
        fontSize: 14,
        color: "#999",
        textAlign: "center",
        padding: 8,
    },
});

export default TeacherDashboard;
