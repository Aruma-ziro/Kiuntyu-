  	// Initialize Firebase 
  	var config = { 
  		apiKey: "AIzaSyB72JSMwvhh25ac-HDcpe9kK8xAZ8vTxVQ", 
  		authDomain: "kiunchu-bf551.firebaseapp.com", 
  		databaseURL: "https://kiunchu-bf551.firebaseio.com", 
  		projectId: "kiunchu-bf551", 
  		storageBucket: "kiunchu-bf551.appspot.com", 
  		messagingSenderId: "272941572629" 
  	}; 
  	firebase.initializeApp(config);
    //facebook プロバイダオブジェクトのインスタンス作成
    var provider = new firebase.auth.FacebookAuthProvider();

    var clickBtnLogin = function(){
        firebase.auth().signInWithRedirect(provider);
    };
    window.onload = function() {
        document.getElementById("btnLogin").onclick = clickBtnLogin;
    };