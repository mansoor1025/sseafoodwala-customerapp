import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CopyClipBoard from '../assets/icons/CopyClipBoard.svg';
import WhatsappIcon from '../assets/icons/WhatsappIcon.svg';
import MessageIcon from '../assets/icons/MessageIcon.svg';
import EmailIcon from '../assets/icons/EmailIcon.svg';
import ShareIcon from '../assets/icons/ShareIcon.svg';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '../store/useAuthStore';

const ReferralEarn = () => {
  const navigate = useNavigation();
  const userSession = useAuthStore((s) => s.user);
  const navScreen = !userSession && !userSession?.phonenumber ? "Login" : null
 
  const sentReferral = (screen) => {
    if (screen)
      navigate.navigate(screen)
  }

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Header title={'Refer & Earn'} />

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/referEarn.png')}
            style={styles.referralImage}
          />
          <Text style={styles.inviteText}>Invite your friends to enjoy</Text>
          <Text style={styles.freshText}>fresh seafood!</Text>
          <Text style={styles.discountText}>
            <Text style={{ color: 'rgba(0, 0, 0, 0.7)' }}>They get </Text>
            <Text style={{ color: 'rgba(253, 141, 24, 0.7)' }}>10% off </Text>
            <Text style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
              their first order, and you get{' '}
            </Text>
            <Text style={{ color: 'rgba(253, 141, 24, 0.7)' }}>
              {'\n'} 20% off{' '}
            </Text>
            <Text style={{ color: 'rgba(0, 0, 0, 0.7)' }}>your next!</Text>
          </Text>

          <View style={styles.promoCode}>
            <Text style={styles.promoCodeText}>SEAFOODRE2545</Text>
            <TouchableOpacity>
              <CopyClipBoard />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.shareIconsContainer}>
          <TouchableOpacity onPress={() => sentReferral(navScreen)}>
            <WhatsappIcon width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MessageIcon width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <EmailIcon width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <ShareIcon width={20} height={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.inviteSentContainer}>
            <Text style={styles.rowContentText}>Invite Sent</Text>
            <Text style={styles.columnContentText}>3 invites</Text>
          </View>
          <View style={styles.divider}></View>

          <View style={styles.inviteSentContainer}>
            <Text style={styles.rowContentText}>Accept Invite</Text>
            <Text style={styles.columnContentText}>1 invites</Text>
          </View>
          <View style={styles.divider}></View>

          <View style={styles.inviteSentContainer}>
            <Text style={styles.rowContentText}>Earn</Text>
            <Text style={styles.columnContentText}>1 Discount Earned</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReferralEarn;

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
  },

  imageContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  referralImage: {
    resizeMode: 'cover',
  },

  inviteText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.9)',
    marginTop: 25,
  },

  freshText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 20,
    color: '#FD8D18',
  },

  discountText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 12,
    textAlign: 'center',
    paddingVertical: 12,
  },

  promoCode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '55%', // Make it responsive
    height: 30,
    borderRadius: 15,
    backgroundColor: '#D9E7F3',
    paddingVertical: 7,
    paddingHorizontal: 15,
  },

  promoCodeText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 12,
    color: '#4086C2',
    paddingVertical: 1,
  },

  shareIconsContainer: {
    flexDirection: 'row',
    marginTop: 15,
    paddingHorizontal: 120,
    justifyContent: 'space-around',
  },

  contentContainer: {
    marginTop: 30,
    paddingHorizontal: 25,
  },

  inviteSentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rowContentText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.9)',
  },

  columnContentText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.9)',
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%', // Make it responsive
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
  },
});
