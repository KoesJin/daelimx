// Import the functions you need from the SDKs you need
// Firebase SDK에서 필요한 함수들을 가져옵니다.
import { initializeApp } from 'firebase/app'; // Firebase 앱 초기화 함수
import { getAuth } from 'firebase/auth'; // Firebase 인증 관련 모듈

// TODO: Add SDKs for Firebase products that you want to use
// Firebase에서 사용하려는 서비스에 대한 SDK를 추가할 수 있습니다.
// 예를 들어, Firestore, Cloud Storage 등을 추가할 수 있습니다.
// 참고 링크: https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Firebase 프로젝트에서 발급된 설정 정보입니다.
// apiKey, authDomain, projectId 등은 Firebase 콘솔에서 확인할 수 있습니다.
const firebaseConfig = {
    apiKey: 'AIzaSyCW8bJJ07Awff4urt1_J9ogRDxYCBYl33k',
    authDomain: 'daelimx-4a099.firebaseapp.com',
    projectId: 'daelimx-4a099',
    storageBucket: 'daelimx-4a099.appspot.com',
    messagingSenderId: '544473781807',
    appId: '1:544473781807:web:90a0410b0b6bdd9dfdd8da',
    measurementId: 'G-2X8FQVK385',
};

// Initialize Firebase
// Firebase 애플리케이션을 초기화합니다. firebaseConfig를 기반으로 앱을 설정합니다.
const app = initializeApp(firebaseConfig);

// 1. 인증 Authentication with "app"
// Firebase 인증 모듈을 초기화하고, 이를 통해 로그인, 회원가입 등 인증 작업을 처리할 수 있습니다.
// 인증 관련 작업에 사용될 Firebase 인증 객체를 내보냅니다.
export const auth = getAuth(app); // 'auth'는 Firebase 인증 모듈로 사용됩니다.
