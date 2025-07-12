import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Alert, Button} from "react-native";
import { studentData, courseDataAll } from "@/components/courseData";
import Icon from "@expo/vector-icons/Ionicons";
const AdminDashboard = () =>{
    const renderStudentList = (courseId:string) =>{
        const unlearnedStudents = studentData.filter(student => student.course.includes(courseId));
        if (unlearnedStudents.length === 0) {
            return <Text style={styles.noStudentText}>暂无未完成的学生</Text>;
        }
        return (
            <FlatList data={unlearnedStudents}
                      keyExtractor={(item)=>item.id}
                      renderItem={({item})=>(
                          <TouchableOpacity style={styles.studentCard} onPress={() => Alert.alert("已通知！", "已经将来自班主任催收通知发给给该学生！")}>
                              <View style={styles.studentProfile}>
                                  {item.profile}
                                  <Text style={styles.studentName}>{item.name}</Text>
                              </View>
                              <View style={styles.studentTaskInfo}>
                                  <Text style={styles.taskText}>
                                      已完成任务：{item.finishedTask[0]} / {item.finishedTask[1]}
                                  </Text>
                                  <Text style={styles.missedText}>未完成任务：{item.missedTask}</Text>
                              </View>
                          </TouchableOpacity>
                      )}
            ></FlatList>
        );
    };

    return (<View style={styles.container}>
        <Text style={styles.title}>课程列表</Text>
        <FlatList data={courseDataAll}
                  keyExtractor={(item)=>item.id}
                  renderItem={({item})=>(
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
        ></FlatList>
    </View>);
};

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f9f9f9",
        padding: 16,
    },
    title:{
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
    studentTaskInfo:{
      flex:1,
      alignItems:"flex-end",
    },
    taskText: {
        fontSize: 14,
        color: "#555",
    },
    missedText: {
        fontSize: 14,
        color: "#d9534f",
    },
    noStudentText:{
        fontSize:14,
        color:'#999',
        textAlign:"center",
        padding:8,
    },
})

export default AdminDashboard;