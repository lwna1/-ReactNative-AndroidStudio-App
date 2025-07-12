import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useLogin} from "../components/loginContext";
import {CourseList} from "../components/CourseList";
import {courseDataAll, filters} from "../components/courseData";


export default function Courses() {
    const [filter, setFilter] = React.useState('');
    const {role} = useLogin();

    // 过滤课程数据
    const courseDataRaw = filter === '' ?
        courseDataAll :
        courseDataAll.filter(item =>
            item.title.includes(filter) ||
            item.description.includes(filter)
        );

    const courseData = courseDataRaw.filter(item => filters[role].includes(item.id));

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput}
                           placeholder="搜索课程"
                           placeholderTextColor={"#999"}
                           onChangeText={(e) => setFilter(e.trim())}
                           value={filter}
                />
            </View>
            <CourseList courseData={courseData}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingTop: 20,
    },
    searchContainer: {
        marginHorizontal: 16,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#4e4e4e',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    searchInput: {
        fontSize: 16,
        color: '#2b2b2b'
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginVertical: 6,
        padding: 24,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    imageContainer: {
        marginRight: 12,
    },
    courseImage: {
        width: 42,
        height: 42,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
    },
    courseTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    courseDescription: {
        fontSize: 14,
        color: '#666',
    },
});