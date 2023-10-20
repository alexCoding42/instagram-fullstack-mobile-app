import React from 'react';
import {Image, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../themes/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const FeedPost = () => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>the creator</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>oneuser</Text>
          and <Text style={styles.bold}>66 others</Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>usernotnamed</Text> Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Ipsam itaque quis facilis culpa
          harum, ratione non deserunt nostrum minus temporibus placeat
          perspiciatis molestiae, odit magni, minima quam illum quaerat
          necessitatibus. Eius, natus! Blanditiis incidunt perferendis corporis
          accusamus sit facere nisi veniam totam eum nemo? Debitis quas
          consectetur in corporis sed iure repellendus illum modi velit eligendi
          cupiditate minus, perferendis labore!
        </Text>

        {/* Comments */}
        <Text>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>usernotnamed</Text> Lorem ipsum dolor, sit
            amet consectetur adipisicing elit.
          </Text>
          <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
        </View>

        {/* Posted date */}
        <Text>18 December, 2023</Text>
      </View>
    </View>
  );
};

export default FeedPost;
