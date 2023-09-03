# taskify-app

This is a simple task management app built with React Native and Expo. This app's design is inspired by [this figma design](https://www.figma.com/community/file/1276849647845865049).

## Installation

Clone this repository and install dependencies:

```bash
git clone
cd taskify-app
npm install
```

## Usage

```bash
npm start
```


## Installing React Navigation

```bash
npm install @react-navigation/native
```

For **Expo** managed apps, install the following:

```bash
npx expo install react-native-screens react-native-safe-area-context
```

Then, you can wrap your app with the `NavigationContainer` component:

```tsx
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```


## License

[MIT](https://choosealicense.com/licenses/mit/)
