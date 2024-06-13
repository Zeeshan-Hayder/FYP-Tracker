import * as React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SplashScreen8 from "./screens/SplashScreen8";
import SplashScreen9 from "./screens/SplashScreen9";
import SplashScreen10 from "./screens/SplashScreen10";
import SplashScreen11 from "./screens/SplashScreen11";
import SplashScreen12 from "./screens/SplashScreen12";
import Onboarding3 from "./screens/Onboarding3";
import Onboarding2 from "./screens/Onboarding2";
import Onboarding1 from "./screens/Onboarding1";
import Login from "./screens/login";
import managersignup from "./screens/managersignup";
import adminsignup from "./screens/adminsignup";
import loginadmin from "./screens/loginadmin";
import LoginManager from "./screens/Loginmanager";
import LoginStudent from "./screens/LoginStudent";
import { MainStackNavigator } from "./screens/stacknavigator";
import AddClass from "./screens/AddClass";
import GroupComponent from "./components/GroupComponent";
import IPhone11ProX1 from "./screens/IPhone11ProX1";
import Group from "./screens/Group";
import ManagerMain from "./screens/Managermain";
import ListOfClasses from "./screens/Listofclasses";

import AdminHome from "./screens/AdminHome";
import GroupComponent1 from "./components/GroupComponent1";
import Group51 from "./components/Group51";
import Add from "./screens/Add";
import Group52 from "./components/Group52";
import YearSelectionScreen from "./screens/YearSelectionScreen ";
import Home from "./src/Home";
import Group53 from"./components/Group53";
import Group54 from "./components/Group54";
import Classes from "./screens/Classes";
import Groups from "./screens/Groups";
import Requets from "./screens/Requests";
import Feedback from "./screens/Feedback";
import Attendance from "./screens/Attendance";
import Reports from "./screens/Report";
import DrawerContent from "./screens/DrawerContent";
import Logout from "./screens/Logout";
import ProjectArchives from "./screens/Project Archives";
import ManagerClasses from "./screens/ManagerClasses";
import { createDrawerNavigator } from "@react-navigation/drawer";
import GroupsSecond from "./screens/GroupsSecond";
import Group55 from "./components/Group55";
import GroupsFirst from "./screens/GroupsFirst";
import Group56 from "./components/Group56";
import StudentMain from "./screens/StudentMain";
import RequestsManage from "./screens/RequestsManage";
import Group57 from "./components/Group57";
import Group58 from "./components/Group58";
import Group59 from "./components/Group59";
import Activities from "./screens/Activities";
import Task from "./screens/Task";
import Attendance1 from "./screens/Attendance1";
import joining from "./screens/joining";
import DrawerContent1 from "./screens/DrawerContent1";
import ManageFeedback from "./screens/ManageFeedback";
import Student from "./screens/Student";
import  Mark from "./screens/Mark";
import main  from "./screens/main";
import Group60 from "./components/Group60";
import Group61 from "./components/Group61";
import Group63 from "./components/Group63";
import Project from "./screens/Project";
import ProjectInformation from "./screens/ProjectInformation";
import Projectarchive2 from "./screens/Projectarchive2";
import Group64 from "./components/Group64";
import Group62 from "./components/Group62";
import Group65 from "./components/Group65";
import Report1 from "./screens/Report1";
import Projectarchives3 from "./screens/projectarchive3";
import Groupinfo from "./screens/Groupinfo";
import Activity from "./screens/Activity";
import Activity1 from "./screens/Activity1";
import Plan from "./screens/Plan";
import ManageActivities from "./screens/ManageActivities";
import Chat from "./screens/Chat";
import Statics from "./screens/Statics";
import Activity2 from "./screens/Activity2";
import Group70 from "./components/Group70";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splan from "./screens/Splan";
import Attendance2 from "./screens/Attendance2";
import Summary from "./screens/Summary";
import Mplan from "./screens/Mplan";
import UActivity from "./screens/UActivity";
import Result from "./screens/Result";
import ProjectArchive4 from "./screens/ProjectArchive4";
import ProjectArchive5 from "./screens/ProjectArchive5";
import Group71 from "./components/Group71";
import Group84 from "./components/Group84";
import Shared from "./screens/Shared";
import Group80 from "./components/Group80";
import Group81 from "./components/Group81";
import Shared1 from "./screens/Shared1";
import Shared2 from "./screens/Shared2";
import Shared3 from "./screens/Shared3";
import Shared4 from "./screens/Shared4";
import Sharednext from "./screens/Sharednext";
import Sharednnext2 from "./screens/Sharednnext2";
import Report3 from "./screens/Report3";
import Report4 from "./screens/Report4";
import Report5 from "./screens/Report5";
import Report6 from "./screens/Report6";
import Download  from "./screens/Download";
import Group86 from "./components/Group86";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [currentScreenIndex, setCurrentScreenIndex] = React.useState(0);
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
 
 
  const splashScreens = [
    SplashScreen8,
    SplashScreen9,
    SplashScreen10,
    SplashScreen11,
    SplashScreen12,
  ];

  const showNextScreen = () => {
    setCurrentScreenIndex((prevIndex) => (prevIndex + 1) % splashScreens.length);
  };

  React.useEffect(() => {
    let timer;

    if (hideSplashScreen) {
      timer = setInterval(() => {
        showNextScreen();
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [hideSplashScreen]);

  React.useEffect(() => {
    if (currentScreenIndex === splashScreens.length - 1) {
      // If the last splash screen is reached, move to the signup screen
      setHideSplashScreen(false);
    }
  }, [currentScreenIndex]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {hideSplashScreen ? (
          <Stack.Screen
            name={`SplashScreen${currentScreenIndex + 8}`}
            component={splashScreens[currentScreenIndex]}
          />
        ) : (
          <>
            <Stack.Screen name="Onboarding1" component={Onboarding1} />
            <Stack.Screen name="Onboarding2" component={Onboarding2} />
            <Stack.Screen name="Onboarding3" component={Onboarding3} />
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="managersignup" component={managersignup}/>
            <Stack.Screen name="adminsignup" component={adminsignup}/>
            <Stack.Screen name="loginadmin" component={loginadmin}/>
            <Stack.Screen name="LoginManager" component={LoginManager}/>
            <Stack.Screen name="LoginStudent" component={LoginStudent}/>
            <Stack.Screen name="ProjectInformation" component={ProjectInformation}
            options={(props) => ({
              headerShown: true,
              header: () => <Group59 />,
            })}/>
           < Stack.Screen
              name="Classes"
              component={Classes}
              options={(props) => ({
                headerShown: true,
                header: () => <Group54 />,
              })}
            />
        
            <Stack.Screen
              name="IPhone11ProX1"
              component={IPhone11ProX1}
              options={(props) => ({
                headerShown: true,
                header: () => <Group51 />,
              })}
            />
            
            
            <Stack.Screen
              name="Activity2"
              component={Activity2}
              options={(props) => ({
                headerShown: true,
                header: () => <Group65 />,
              })}
            />
             <Stack.Screen
              name="Result"
              component={Result}
              options={(props) => ({
                headerShown: true,
                header: () => <Group59 />,
              })}
            />
            <Stack.Screen
              name="UActivity"
              component={UActivity}
              options={(props) => ({
                headerShown: true,
                header: () => <Group65 />,
              })}
            />
            
          
             <Stack.Screen
              name="main"
              component={BottomTabRoute}
              options={(props) => ({
                headerShown: true,
                header: () => <Group59 />,
              })}
            
             
            />
            <Stack.Screen
              name="Groupinfo"
              component={Groupinfo}
              options={(props) => ({
                headerShown: true,
                header: () => <Group59 />,
              })}
            />
            <Stack.Screen
              name="Add"
              component={Add}
              options={(props) => ({
                headerShown: true,
                header: () => <Group52 />,
              })}
            />
             <Stack.Screen
              name="Download"
              component={Download}
              options={(props) => ({
                headerShown: true,
                header: () => <Group84 />,
              })}
            />
            <Stack.Screen
              name="Splan"
              component={Splan}
              options={(props) => ({
                headerShown: true,
                header: () => <Group59 />,
              })}
            />
            <Stack.Screen
              name="Summary"
              component={Summary}
              options={(props) => ({
                headerShown: true,
                header: () => <Group59 />,
              })}
            />
            <Stack.Screen
              name="ListOfClasses"
              component={ListOfClasses}
              options={(props) => ({
                headerShown: true,
                header: () => <Group53 />,
              })}
            />
             <Stack.Screen
              name="Report1"
              component={Report1}
              options={(props) => ({
                headerShown: true,
                header: () => <Group81 />,
              })}
            />
            <Stack.Screen
              name="Report6"
              component={Report6}
              options={(props) => ({
                headerShown: true,
                header: () => <Group81 />,
              })}
            />
             <Stack.Screen
              name="Report3"
              component={Report3}
              options={(props) => ({
                headerShown: true,
                header: () => <Group81 />,
              })}
            />
            <Stack.Screen
              name="Report5"
              component={Report5}
              options={(props) => ({
                headerShown: true,
                header: () => <Group81 />,
              })}
            />
            <Stack.Screen
              name="Report4"
              component={Report4}
              options={(props) => ({
                headerShown: true,
                header: () => <Group81 />,
              })}
            />
             <Stack.Screen
              name="Attendance2"
              component={Attendance2}
              options={(props) => ({
                headerShown: true,
                header: () => <Group59 />,
              })}
            />
            < Stack.Screen
              name="GroupsSecond"
              component={GroupsSecond}
              options={(props) => ({
                headerShown: true,
                header: () => <Group55 />,
              })}
            />
            < Stack.Screen
              name="GroupsFirst"
              component={GroupsFirst}
              options={(props) => ({
                headerShown: true,
                header: () => <Group56 />,
              })}
            />
          <Stack.Screen
              name="RequestsManage"
              component={RequestsManage}
              options={(props) => ({
                headerShown: true,
                header: () => <Group57 />,
              })}
            />
          
          <Stack.Screen
              name="StudentMain"
              component={StudentMain}
              options={(props) => ({
                headerShown: true,
                header: () => <Group58 />,
              })}
            />
            
            <Stack.Screen name="Mark" component={Mark}   options={(props) => ({
                headerShown: true,
                header: () => <Group59 />,
              })}
            /> 
            <Stack.Screen name="ManagerMain" component={DrawerRoutes}   />
            < Stack.Screen
              name="Project"
              component={Project}
              options={(props) => ({
                headerShown: true,
                header: () => <Group71 />,
              })}
            />
            <Stack.Screen name="Group" component={SecondDrawerRoutes}   />
            <Stack.Screen
              name="Student"
              component={Student}
              options={(props) => ({
                headerShown: true,
                header: () => <Group70 />,
                
              })}
            />
           
           <Stack.Screen
              name="Projectarchives2"
              component={Projectarchive2}
              options={(props) => ({
                headerShown: true,
                header: () => <Group62 />,
                
              })}
            />
            <Stack.Screen
              name="Shared1"
              component={Shared1}
              options={(props) => ({
                headerShown: true,
                header: () => <Group62 />,
                
              })}
            />
            <Stack.Screen
              name="Shared2"
              component={Shared2}
              options={(props) => ({
                headerShown: true,
                header: () => <Group62 />,
                
              })}
            />
            <Stack.Screen
              name="Shared3"
              component={Shared3}
              options={(props) => ({
                headerShown: true,
                header: () => <Group62 />,
                
              })}
            />
            <Stack.Screen
              name="Shared4"
              component={Shared4}
              options={(props) => ({
                headerShown: true,
                header: () => <Group62 />,
                
              })}
            />
            
            
             <Stack.Screen
              name="ProjectArchive4"
              component={ProjectArchive4}
              options={(props) => ({
                headerShown: true,
                header: () => <Group62 />,
                
              })}
            />
            <Stack.Screen
              name="ProjectArchive5"
              component={ProjectArchive5}
              options={(props) => ({
                headerShown: true,
                header: () => <Group62 />,
                
              })}
            />
            
            <Stack.Screen
              name="Projectarchives3"
              component={Projectarchives3}
              options={(props) => ({
                headerShown: true,
                header: () => <Group62 />,
                
              })}
            />
      < Stack.Screen
              name="Activity1"
              component={Activity1}
              options={(props) => ({
                headerShown: true,
                header: () => <Group61 />,
              })}
            />
             < Stack.Screen
              name="Sharednext"
              component={Sharednext}
              options={(props) => ({
                headerShown: true,
                header: () => <Group80 />,
              })}
            />
            < Stack.Screen
              name="Sharednnext2"
              component={Sharednnext2}
              options={(props) => ({
                headerShown: true,
                header: () => <Group59 />,
              })}
            />
             < Stack.Screen
              name="Mplan"
              component={Mplan}
              options={(props) => ({
                headerShown: true,
                header: () => <Group59 />,
              })}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerRoutes() {
  return (
    // Your drawer routes implementation goes here
    // You might want to return the Drawer.Navigator with its screens
    <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    screenOptions={{
      drawerIcon: ({ color }) => (
        <CustomDrawerIcon color={color} />
      ),
    }}
  >
      <Drawer.Screen name="ManagerMain" component={ManagerMain} options={(props) => ({
                headerShown: true,
                header: () => <Group86 />,
              })} /> 
      
     
    
      <Drawer.Screen name="ManagerClasses" component={ManagerClasses} options={{
      title: '               CLASSES', // Set your custom header title here
      headerTitleStyle: {
        color: '#002759',
        fontWeight:'bold' // Set your desired title color here
      },
     
    }} />
      
  
      <Drawer.Screen name="Groups" component={Groups} />
      <Drawer.Screen name="Requets" component={Requets} options={{
      title: '             REQUESTS', // Set your custom header title here
      headerTitleStyle: {
        color: '#002759',
        fontWeight:'bold' // Set your desired title color here
      },
     
    }}/>
      <Drawer.Screen name="Feedback" component={Feedback} options={(props) => ({
                headerShown: true,
                header: () => <Group71 />,
              })} /> 
      
      <Drawer.Screen name="Report" component={Reports} options={(props) => ({
                headerShown: true,
                header: () => <Group81 />,
              })} />
      <Drawer.Screen name="Activities" component={Activities} options={(props) => ({
                headerShown: true,
                header: () => <Group65 />,
              })} />
      
      <Drawer.Screen name="ProjectArchives" component={ProjectArchives} options={(props) => ({
                headerShown: true,
                header: () => <Group62 />,
              })} />
      
      
      
    
      {/* Add more screens as needed */}
    </Drawer.Navigator>
  );
}
const CustomDrawerIcon = ({ color }) => (
  <Ionicons
    name="menu"
    size={24}
    color="blue"
    style={{ strokeWidth: 3 }} // Increase this value to make the lines thicker
  />
);
function SecondDrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent1 {...props} />}
      screenOptions={{
        drawerIcon: ({ color }) => (
          <CustomDrawerIcon color={color} />
        ),
      }}
    >
      <Drawer.Screen
        name="Group"
        component={Group}
        options={(props) => ({
          headerShown: true,
          header: () => <Group59 />,
        })}
      />
      <Drawer.Screen
        name="Activity"
        component={Activity}
        options={(props) => ({
          headerShown: true,
          header: () => <Group65 />,
          
        })}
      />

      <Drawer.Screen
        name="Task"
        component={Task}
        options={(props) => ({
          headerShown: true,
          header: () => <Group59/>,
          
        })}
      />

      <Drawer.Screen
        name="Attendance1"
        component={Attendance1}
        options={(props) => ({
          headerShown: true,
          header: () => <Group59 />,
        })}
      />

      <Drawer.Screen
        name="Joining"
        component={joining}
        options={(props) => ({
          headerShown: true,
          header: () => <Group59 />,
        })}
      />

     
        <Drawer.Screen
        name="Shared"
        component={Shared}
        options={(props) => ({
          headerShown: true,
          header: () => <Group80 />,
        })}
      />

    </Drawer.Navigator>
  );
      
}
function BottomTabRoute() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        // Customize label style
        tabBarLabelStyle: {
          fontSize: 14, // Adjust the font size as needed
          fontWeight: 'bold',
          color: '#002759' // Make the font bold
        },
        // Customize inactive tab color
        tabBarInactiveTintColor: '#999999', // Adjust color as needed
        // Customize active tab color
        tabBarActiveTintColor: '#002759', // Adjust color as needed
        // Customize active tab background color
        tabBarActiveBackgroundColor: '#002759', // Adjust color as needed
      }}
      tabBarStyle={{
        height: 100, // Adjust the height of the tab bar
        borderTopLeftRadius: 90, // Make top left corner rounded
        borderTopRightRadius: 90, // Make top right corner rounded
      }}
    >
      <Tab.Screen
        name="Home"
        component={main}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={25} />
          ),
          headerShown: false,
            // Hide the header for this screen
        }}
      />
      <Tab.Screen
        name="Activities"
        component={ManageActivities}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list" color={color} size={25} />
          ),
           headerShown: false, // Hide the header for this screen
        }}
      />
      <Tab.Screen
        name="Plan"
        component={Plan}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" color={color} size={25} />
          ),
           headerShown: false, // Hide the header for this screen
        }}
      />
      <Tab.Screen
        name="Share"
        component={Chat}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="share-alt" color={color} size={25} />
          ),
           headerShown: false, // Hide the header for this screen
        }}
      />
    </Tab.Navigator>
  );
}




export default App;
