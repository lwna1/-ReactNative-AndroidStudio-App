import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import { useRouter} from "expo-router";

function CourseList({ courseData }: CourseListProps) {
    const router = useRouter();
    return <FlatList data={courseData}
                     keyExtractor={(item) => item.id}
                     renderItem={({item}) => (
                         <TouchableOpacity style={styles.card} onPress={()=> {
                             // @ts-ignore
                             router.push(`/course_detail/${item.id}`);
                         }}>
                             <View style={styles.imageContainer}>
                                 <Image source={item.image}
                                        style={styles.courseImage}></Image>
                             </View>
                             <View style={styles.textContainer}>
                                 <Text style={styles.courseTitle}>{item.title}</Text>
                                 <Text style={styles.courseDescription}>{item.description}</Text>
                             </View>
                         </TouchableOpacity>
                     )}
    />;
}

interface CourseListProps {
    courseData: CourseData[];
}

interface CourseData {
    id: string;
    title: string;
    description: string;
    image: any;
}


const styles = StyleSheet.create({
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

export { CourseList, CourseListProps, CourseData };