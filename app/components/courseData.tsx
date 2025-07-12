import {Role} from "@/components/loginContext";
import Icon from '@expo/vector-icons/Ionicons';
import React from "react";
const courseDataAll = [
    {id: '1', title: '数学课程', description: '高等数学第一章 (1班)', image: require('@/assets/images/math.jpg')},
    {id: '2', title: '物理课程', description: '电学 (1班)', image: require('@/assets/images/physics.jpg')},
    {id: '3', title: '化学课程', description: '化学基础 (1班)', image: require('@/assets/images/chemistry.jpg')},
    {id: '4', title: '英语课程', description: '英语语法入门 (1班)', image: require('@/assets/images/english.jpg')},
    {id: '5', title: '编程课程', description: 'React Native开发 (1班)', image: require('@/assets/images/react-logo.png')},
    {id: '6', title: '数学课程', description: '高等数学第二章 (2班)', image: require('@/assets/images/math.jpg')},
    {id: '7', title: '物理课程', description: '力学 (2班)', image: require('@/assets/images/physics.jpg')},
];

const filters = {
    [Role.STUDENT]: ['1', '2', '3', '4', '5'],
    [Role.TEACHER]: ['1', '6', '5'],
    [Role.ADMIN]: ['1', '2', '3', '4', '5', '6', '7'],
}

// 待学习课程
const pendingCourseFilter = {
    [Role.STUDENT]: ['3', '4', '5'],
}


// 未学习学生
const unlearnedStudent = [
    {id: '1', name: '张三', course: ['3'], profile: <Icon name="person" size={24} color="black"/>},
    {id: '2', name: '李四', course: ['2'], profile: <Icon name="person" size={24} color="black"/>},
    {id: '3', name: '王五', course: ['3'], profile: <Icon name="person" size={24} color="black"/>},
    {id: '4', name: '赵六', course: ['4'], profile: <Icon name="person" size={24} color="black"/>},
    {id: '6', name: '孙八', course: ['2'], profile: <Icon name="person" size={24} color="black"/>},
    {id: '7', name: '周九', course: ['1'], profile: <Icon name="person" size={24} color="black"/>},
    {id: '8', name: '吴十', course: ['1'], profile: <Icon name="person" size={24} color="black"/>},
    {id: '9', name: '郑十一', course: ['3'], profile: <Icon name="person" size={24} color="black"/>},
    {id: '10', name: '王十二', course: ['3'], profile: <Icon name="person" size={24} color="black"/>},
    {id: '11', name: '赵十三', course: ['4'], profile: <Icon name="person" size={24} color="black"/>},
]


// 班主任看本班学生的学习情况
const studentData: StudentData[] = [
    {
        id: '1',
        name: '张三',
        course: ['1', '2', '3', '4', '5'],
        profile: <Icon name="person" size={24} color="grey"/>,
        finishedTask: [332, 333],
        missedTask: 1,
    },
    {
        id: '2',
        name: '李四',
        course: ['1', '2', '4', '5'],
        profile: <Icon name="person" size={24} color="grey"/>,
        finishedTask: [332, 333],
        missedTask: 1,
    },
    {
        id: '3',
        name: '王五',
        course: ['1', '2', '3', '4', '5'],
        profile: <Icon name="person" size={24} color="grey"/>,
        finishedTask: [332, 333],
        missedTask: 1,
    },
    {
        id: '4',
        name: '赵六',
        course: ['1', '2', '3', '4', '5'],
        profile: <Icon name="person" size={24} color="grey"/>,
        finishedTask: [332, 333],
        missedTask: 1,
    },
    {
        id: '5',
        name: '钱七',
        course: ['1', '2', '3', '4', '5'],
        profile: <Icon name="person" size={24} color="grey"/>,
        finishedTask: [332, 333],
        missedTask: 1,
    },
    {
        id: '6',
        name: '孙八',
        course: ['1', '2', '3', '4', '5'],
        profile: <Icon name="person" size={24} color="grey"/>,
        finishedTask: [332, 333],
        missedTask: 1,
    },
    {
        id: '7',
        name: '周九',
        course: ['1', '2', '3', '4', '5'],
        profile: <Icon name="person" size={24} color="grey"/>,
        finishedTask: [332, 333],
        missedTask: 1,
    },
    {
        id: '8',
        name: '吴十',
        course: ['4', '5'],
        profile: <Icon name="person" size={24} color="grey"/>,
        finishedTask: [130, 133],
        missedTask: 2,
    },
    {
        id: '9',
        name: '郑十一',
        course: ['1', '2', '3', '4', '5'],
        profile: <Icon name="person" size={24} color="grey"/>,
        finishedTask: [330, 333],
        missedTask: 3,
    },

]

interface StudentData {
    id: string;
    name: string;
    course: string[];
    profile: React.ReactElement;
    finishedTask: [number, number]; // [已完成任务数, 总任务数]
    missedTask: number; // 未完成任务数
}

export {courseDataAll, filters, pendingCourseFilter, StudentData, unlearnedStudent, studentData};