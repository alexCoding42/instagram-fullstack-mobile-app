import {ScrollView, StyleSheet} from 'react-native';
import FeedPost from './src/components/FeedPost';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
