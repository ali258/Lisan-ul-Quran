import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

jest.mock('react-native-vector-icons/FontAwesome5', () => 'Icon');

jest.mock('react-native-vector-icons/Feather', () => 'Icon');

jest.mock('react-native-vector-icons/AntDesign', () => 'Icon');

jest.mock('react-native-vector-icons/Entypo', () => 'Icon');

jest.mock('react-native-vector-icons/EvilIcons', () => 'Icon');

jest.mock('react-native-vector-icons/Fontisto', () => 'Icon');

jest.mock('react-native-vector-icons/Foundation', () => 'Icon');

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

jest.mock('react-native-vector-icons/Octicons', () => 'Icon');

jest.mock('react-native-vector-icons/SimpleLineIcons', () => 'Icon');

jest.mock('react-native-vector-icons/Zocial', () => 'Icon');

jest.mock('react-native-vector-icons/Feather', () => 'Icon');

jest.mock('react-native-vector-icons/AntDesign', () => 'Icon');

jest.mock('react-native-vector-icons/Entypo', () => 'Icon');

jest.mock('react-native-vector-icons/EvilIcons', () => 'Icon');

jest.mock('react-native-vector-icons/Fontisto', () => 'Icon');

jest.mock('react-native-vector-icons/Foundation', () => 'Icon');

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

jest.mock('react-native-vector-icons/Octicons', () => 'Icon');

jest.mock('react-native-vector-icons/SimpleLineIcons', () => 'Icon');

jest.mock('react-native-vector-icons/Zocial', () => 'Icon'); 