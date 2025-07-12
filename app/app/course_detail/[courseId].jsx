import { useGlobalSearchParams } from 'expo-router';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

export default function CourseDetail() {
    const { courseId } = useGlobalSearchParams();
    const [isPlaying, setIsPlaying] = useState(true);

    const player = useVideoPlayer(require('@/assets/videos/course_video.mp4'), (player) => {
        player.loop = true;
        player.play();
    });

    const togglePlayPause = () => {
        if (isPlaying) {
            player.pause();
        } else {
            player.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>课程详情</Text>
            {courseId === '1' ? (
                <View style={styles.content}>
                    <Text style={styles.courseTitle}>高等数学</Text>

                    <View style={styles.chapterContainer}>
                        <Text style={styles.chapterTitle}>第一章: 函数基础</Text>

                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>第一节: 函数的定义</Text>

                            <View style={styles.videoContainer}>
                                <VideoView style={styles.video} player={player}>
                                    <Text>视频加载中...</Text>
                                </VideoView>


                            </View>
                        </View>
                    </View>
                </View>
            ) : (
                <Text style={styles.unavailableMessage}>这门课程暂时不可查看</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingTop: 20,
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginBottom: 20,
        color: '#333',
    },
    content: {
        marginHorizontal: 16,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    courseTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: 16,
    },
    chapterContainer: {
        marginBottom: 20,
    },
    chapterTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
        color: '#555',
    },
    sectionContainer: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#666',
        marginBottom: 12,
    },
    videoContainer: {
        position: 'relative',
        alignItems: 'center',
    },
    video: {
        width: 420,
        height: 280,
        borderRadius: 8,
        backgroundColor: '#000',
    },

    unavailableMessage: {
        textAlign: 'center',
        fontSize: 18,
        color: '#999',
    },
});
