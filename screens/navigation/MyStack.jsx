import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from '../UserRegistration/SignIn'
import { LogIn } from '../UserRegistration/LogIn'
import { Main } from '../app/Main'
import { Home } from '../UserRegistration/Home'
import { UpdatePassword } from '../UserRegistration/UpdatePassword'

const Stack = createNativeStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Main' component={Main}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='LogIn' component={LogIn}/>
            <Stack.Screen name='SignIn' component={SignIn}/>
            <Stack.Screen name='UpdatePassword' component={UpdatePassword}/>
        </Stack.Navigator>
    )
}

export {MyStack}