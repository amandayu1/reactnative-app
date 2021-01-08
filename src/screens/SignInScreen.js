import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from "../../context";

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },  
  container: {
    flex: 1,
    color: "white",
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
  },
text: {
  color: "white",
  fontSize: 25,
 }
});

const theme ={
  Button : {
    titleStyle:{
      color:'white',
      width: '80%',
    },
    containerStyle:{
      margin: 5,
      marginTop: 10,
      borderColor: "white",
      borderWidth: 1,
      border: 'round',
    },
  },
};

function SignInButton ({title, onPress}) {
  return(
    <View >
      <Button   
        type="outline"
        title={title}
        onPress={onPress}/>
    </View>
  )
}

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);


export function SignIn({ navigation }) {
    const {signIn} = React.useContext(AuthContext);

    return (
    <ThemeProvider theme={theme}>
    <ScreenContainer>
      <LinearGradient
        // Background Linear Gradient
        colors={['#FA89A7', '#ED5DBB']}
        start={[0,0]}
        end={[1,1]}
        style={styles.background}
      />
      <Text style={styles.text}>HungerSwipe</Text>
      <SignInButton title="Sign In" onPress={() => signIn() } />
      <SignInButton
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
    </ThemeProvider>
  );
}

export function CreateAccount() {
    const {signUp} = React.useContext(AuthContext);
    return (
    <ThemeProvider theme={theme}>
    <ScreenContainer>
      <LinearGradient
        // Background Linear Gradient
        colors={['#FA89A7', '#ED5DBB']}
        start={[0,0]}
        end={[1,1]}
        style={styles.background}
      />
      <Text style={styles.text}>Create Account Screen</Text>
      <SignInButton title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
    </ThemeProvider>
  );
}

export const SignOut = () => {
  return (
    <ThemeProvider theme={theme}>
    <ScreenContainer>
      <LinearGradient
        // Background Linear Gradient
        colors={['#FA89A7', '#ED5DBB']}
        start={[0,0]}
        end={[1,1]}
        style={styles.background}
      />
      <Text style={styles.text}>SignOut</Text>
      <SignInButton title="Sign Out" onPress={() => alert("Todo")} />
    </ScreenContainer>
    </ThemeProvider>
  );
};

export const Splash = () => {
  return (
    <ThemeProvider theme={theme}>
    <ScreenContainer>
      <LinearGradient
        // Background Linear Gradient
        colors={['#FA89A7', '#ED5DBB']}
        start={[0,0]}
        end={[1,1]}
        style={styles.background}
      />
      <Text style={styles.text}>Loading...</Text>
    </ScreenContainer>
    </ThemeProvider>
  );
};

export const Profile = () => {
    const {signOut} = React.useContext(AuthContext);
    
    return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Sign Out" onPress={ () => signOut()} />
    </ScreenContainer>
  );
};

export const Home = () => {
  return (
    <ScreenContainer>
      <Text>Home Screen</Text>
    </ScreenContainer>
  );
};