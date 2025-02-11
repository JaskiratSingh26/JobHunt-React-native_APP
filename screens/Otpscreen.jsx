import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'


const Otpscreen = () => {
let route=useRoute()
    let {Otp,email}=route.params
    console.log('opt recvies from front end',Otp,email)

useEffect(()=>{

})



  return (
    <SafeAreaView>
    
    </SafeAreaView>
  )
}

export default Otpscreen

const styles = StyleSheet.create({})




// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false, // or 'STARTTLS'
//   auth: {
//     user: 'your-email@gmail.com',
//     pass: 'your-password'
//   }
// });

// const sendEmail = (email, otp) => {
//   const mailOptions = {
//     from: 'JOBHunt <your-email@gmail.com>',
//     to: email,
//     subject: 'OTP Verification',
//     text: `Your OTP is: ${otp}`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// };

// module.exports = sendEmail;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');

//   const handleSendOtp = async () => {
//     const otp = Math.floor(1000 + Math.random() * 9000).toString();
//     setOtp(otp);

//     try {
//       const response = await axios.post('https://your-backend-url.com/send-email', {
//         email,
//         otp
//       });

//       if (response.status === 200) {
//         navigation.navigate('Otp', { otp, email });
//       } else {
//         console.log('Error sending email');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View>
//       <TextInput
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//         placeholder="Enter your email"
//       />
//       <Button title="Send OTP" onPress={handleSendOtp} />
//     </View>
//   );
// };