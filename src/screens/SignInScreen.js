import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../context";

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  container: {
    flex: 1,
    color: "white",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
  },
  h1: {
    color: "white",
    fontSize: 25,
  },
  text: {
    color: "white",
    marginHorizontal: '10%',
    marginVertical: '5%',
    textAlign: "center",
  },
  image: {
    height: '11%',
  },
  ButtonContainer :{
    borderRadius: 20,
    padding: 10,
    width: '80%',
    alignItems: "center",
    borderColor: 'white',
    borderWidth: 1,
    margin: 5,
  },
  ButtonText:{
    color: "white",
  },
  FilledButtonContainer :{
    borderRadius: 20,
    padding: 10,
    width: '80%',
    alignItems: "center",
    margin: 5,
    backgroundColor: "white",
    marginBottom: 10,
  },
  FilledButtonText:{
    color: "black",
  },

});

const theme = {
  colors: {
    primary: 'white',
  },
  Button: {
    titleStyle: {
      width: "80%",
    },
    containerStyle: {
      margin: 5,
      marginTop: 10,
      borderColor: "white",
      borderWidth: 1,
      border: "round",
    },
  },
};

function SignInButton({ title, onPress }) {
  return (
    <View>
      <Button type="outline" title={title} onPress={onPress} />
    </View>
  );
}

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export function SignIn({ navigation }) {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
      <ScreenContainer>
        <LinearGradient
          // Background Linear Gradient
          colors={["#FA89A7", "#ED5DBB"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.background}
        />
        <Image
        style={styles.image}
        source={require('../../assets/Icons/name.png')}
        resizeMode="contain"
       />
        <Text style={styles.text}>By tapping Create Account or Sign In, you agree to our Terms. Learn how we process your data in Private Policy and Cookies Policy.</Text>
        
        <TouchableOpacity onPress={() => signIn()} style={styles.FilledButtonContainer}>
          <Text style={styles.FilledButtonText}>Create Account</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.push("CreateAccount")} style={styles.ButtonContainer}>
          <Text style={styles.ButtonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Trouble Signing In?</Text>
      </ScreenContainer>
      </ThemeProvider>
  );
}

export function CreateAccount() {
  const { signUp } = React.useContext(AuthContext);
  return (
    <ThemeProvider theme={theme}>
      <ScreenContainer>
        <LinearGradient
          // Background Linear Gradient
          colors={["#FA89A7", "#ED5DBB"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.background}
        />
        <Image
        style={styles.image}
        source={require('../../assets/Icons/name.png')}
        resizeMode="contain"
       />
        <Text style={styles.text}>By tapping Create Account or Sign In, you agree to our Terms. Learn how we process your data in Private Policy and Cookies Policy.</Text>
        <SignInButton title="SIGN IN WITH APPLE" onPress={() => signUp()} />
        <SignInButton title="SIGN IN WITH FACEBOOK" onPress={() => signUp()} />
        <SignInButton title="SIGN IN WITH PHONE NUMBER" onPress={() => signUp()} />
        <Text style={styles.text}>Trouble Signing In?</Text>
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
          colors={["#FA89A7", "#ED5DBB"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.background}
        />
        <Text style={styles.text}>SignOut</Text>
        <SignInButton title="Sign Out" onPress={() => alert("Todo")} />
      </ScreenContainer>
    </ThemeProvider>
  );
};

export const Loading = () => {
  return (
    <ThemeProvider theme={theme}>
      <ScreenContainer>
        <LinearGradient
          // Background Linear Gradient
          colors={["#FA89A7", "#ED5DBB"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.background}
        />
        <Image
        style={styles.image}
        source={require('../../assets/Icons/name.png')}
        resizeMode="contain"
       />
      </ScreenContainer>
    </ThemeProvider>
  );
};

export const Profile = () => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
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
