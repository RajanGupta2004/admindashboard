
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
const AuthTab = () => {
    return (
        <div>

            <Tabs defaultValue="register" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2" >
                    <TabsTrigger value="register">Registeration</TabsTrigger>
                    <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="register">
                    <RegisterForm />
                </TabsContent>
                <TabsContent value="login">
                    <LoginForm />
                </TabsContent>
            </Tabs>



        </div>
    )
}

export default AuthTab
