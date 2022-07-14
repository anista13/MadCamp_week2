import { View, Text, Alert } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview';

const axios = require("axios")
const qs = require("qs")

const REST_API_KEY = 'f12209a96c0cfb052d69e146e350a84f'
const REDIRECT_URI = 'http://192.249.18.166/oauth' //change it to our server 
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const getCode = (target) => {
  console.log("beginning of getCode")
  console.log(target)
  const exp = 'code=';
  const condition = target.indexOf(exp);
  console.log(`condition: ${condition}`)
  if (condition !== -1) {
    const requestCode = target.substring(condition + exp.length);
    requestToken(requestCode);
  }
};

const requestToken = async (code) => {
  console.log("beginning of requestToken")
  const requestTokenUrl = 'https://kauth.kakao.com/oauth/token';

  const options = qs.stringify({
    grant_type: 'authorization_code',
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code,
  });

  try {
    console.log("before axios post")
    const tokenResponse = await axios.post(requestTokenUrl, options);
    const ACCESS_TOKEN = tokenResponse.data.access_token;

    console.log("after axios post")
    const body = {
      ACCESS_TOKEN,
    };
    console.log("before post")
    const response = await axios.post(REDIRECT_URI, body);
    // const value = response.data;
    // const result = await storeUser(value);
    // if (result === 'stored') {
    // const user = await getData('user');
    console.log(response)
    // dispatch(read_S(user));
    // await navigation.navigate('Main');
    // }
  } catch (e) {
    console.log(e);
  }
};

const KakaoSignInScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={{ flex: 1 }}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={event => {
          const data = event.nativeEvent.url;
          getCode(data);
        }}
      />
    </View>
  )
}

export default KakaoSignInScreen