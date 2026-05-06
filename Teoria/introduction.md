## 0. To create a new Expo project, run the following in your terminal:
  ```sh
  npx create-expo-app@latest
  ```

## 1. Start a development server
  To start the development server, run the following command:
  ```sh
  npx expo start
  ```

## 2. Open the app on your device
  After running the command above, you will see a QR code in your terminal. Scan this QR code to open the app on your device.

## 3. [File structure](https://docs.expo.dev/get-started/start-developing/#file-structure)

## 4. [Tools](https://docs.expo.dev/develop/tools/)
 
  ### Expo Tools for VS Code
  Expo Tools is a VS Code extension to improve your development experience when working with app config files. It provides features such as autocomplete and intellisense for files such as app config, EAS config, store config and Expo Module config files.

  You can also use it to debug your app using VS Code's built-in debugger to set breakpoints, inspect variables, execute code through the debug console, and more. See Debugging with VS Code for how to use this extension for debugging.

  ### Test prototypes with Expo Go
  Expo Go is a free, open-source playground for students and learners to try out React Native. It works with Android and iOS.
  > *Note:* Expo Go is limited and not useful for building production-grade projects. Use development builds instead.

## 5. [Using libraries](https://docs.expo.dev/workflow/using-libraries/)
  
  ### Navigation in Expo and React Native apps
  The core React Native library **does not include a built-in navigation solution**, so you can choose a navigation library that best fits your needs. For Expo and React Native apps, it is generally a choice between [React Navigation](https://reactnavigation.org/) or [Expo Router](/router/introduction).

  ### Why React Native apps need a navigation library
  React Native core includes basic UI components, touch handling, device APIs and networking, but excludes, among other things, storage, camera, maps, most device sensors, and navigation! These are intended to be covered by community libraries.

  ### React Navigation
  React Navigation is a component-based navigation library widely used across the React Native ecosystem. It lets you compose stack, tab, and drawer navigators entirely in code so you can implement complex flows, custom transitions, and app-specific UX patterns.

  The library offers platform-specific look-and-feel with smooth animations and gestures, unified mobile and web routing, automatic deep links, type routes with static configuration, and is highly customizable.

  [React Navigation: Getting started](https://reactnavigation.org/docs/getting-started) — Learn how to get started with React Navigation.

## 6. [Splash screen and app icon](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/)

  ### Splash screen
  A splash screen, also known as a launch screen, is the first screen a user sees when they open your app. It stays visible while the app is loading. You can also control the behavior of when a splash screen disappears by using the native SplashScreen API.

  The expo-splash-screen has a built-in config plugin that lets you configure properties such as the splash icon and background color.

  ### App icon
  An app's icon is what your app users see on their device's home screen and app stores. Android and iOS have different and strict requirements.

## 7. [Safe areas](https://docs.expo.dev/develop/user-interface/safe-areas/)

  Creating a safe area ensures your app screen's content is positioned correctly: it doesn't get overlapped by notches, status bars, home indicators, and other interface elements that are part of the device's physical hardware or are controlled by the operating system.

  [`react-native-safe-area-context`](https://github.com/AppAndFlow/react-native-safe-area-context) provides a flexible API for handling Android and iOS device's safe area insets. It also provides a `SafeAreaView` component that you can use instead of a `<View>`.

  ### Installation
  You can skip installing `react-native-safe-area-context` if you have created a project using [the default template](/get-started/create-a-project). This library is installed as peer dependency for Expo Router library. Otherwise, install it by running the following command:
  ```sh
  npx expo install react-native-safe-area-context
  ```

  ### Usage
  **With Expo Router installed**  
  Directly use `SafeAreaView` to wrap the content of your screen's component.  
  It is a regular `View` with the safe area insets applied as extra padding or margin.
  ```tsx
  import { Text } from 'react-native';
  import { SafeAreaView } from 'react-native-safe-area-context';

  export default function HomeScreen() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Content is in safe area.</Text>
      </SafeAreaView>
    );
  }
  ```

  **Don't have Expo Router installed**  
  Import and add `SafeAreaProvider` to the root component file (such as App.tsx).  
  Use `SafeAreaProvider` to wrap the content of your screen's component.
  ```tsx
  import { SafeAreaProvider } from 'react-native-safe-area-context';

  export default function App() {
    return (
      return <SafeAreaProvider>...</SafeAreaProvider>;
    );
  }
  ```
