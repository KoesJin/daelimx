// Firestore를 가져오기 위해 필요한 함수들을 불러옵니다.
import { initializeApp } from 'firebase/app'; // Firebase 앱 초기화 함수
import { getAuth } from 'firebase/auth'; // Firebase 인증 관련 모듈
import { getFirestore } from 'firebase/firestore'; // Firestore 가져오기

// Firebase 구성 정보
const firebaseConfig = {
    apiKey: 'AIzaSyCW8bJJ07Awff4urt1_J9ogRDxYCBYl33k',
    authDomain: 'daelimx-4a099.firebaseapp.com',
    projectId: 'daelimx-4a099',
    storageBucket: 'daelimx-4a099.appspot.com',
    messagingSenderId: '544473781807',
    appId: '1:544473781807:web:90a0410b0b6bdd9dfdd8da',
    measurementId: 'G-2X8FQVK385',
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// 인증 모듈 초기화
export const auth = getAuth(app);

// Firestore 데이터베이스 초기화
export const firestore = getFirestore(app);
