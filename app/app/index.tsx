import {Role, useLogin} from "@/components/loginContext";
import StudentIndex from "@/view/home/student";
import TeacherIndex from "@/view/home/teacher";
import AdminIndex from "@/view/home/admin";
import {Text} from "react-native";

export default function Index() {
    const { role } = useLogin();

    switch (role) {
        case Role.ADMIN:
            return <AdminIndex/>;
        case Role.TEACHER:
            return <TeacherIndex/>;
        case Role.STUDENT:
            return <StudentIndex/>;
        default:
            return <Text>未知角色</Text>;
    }
}
