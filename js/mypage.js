var config = {
 apiKey: "AIzaSyB72JSMwvhh25ac-HDcpe9kK8xAZ8vTxVQ", 
 authDomain: "kiunchu-bf551.firebaseapp.com", 
 databaseURL: "https://kiunchu-bf551.firebaseio.com", 
 projectId: "kiunchu-bf551", 
 storageBucket: "kiunchu-bf551.appspot.com", 
 messagingSenderId: "272941572629" 
};
firebase.initializeApp(config);
var provider = new firebase.auth.FacebookAuthProvider();
var uid = "test1/"
var username;
var profile;
var leaderEvent;
var memberEvent;
firebase.auth().onAuthStateChanged(function(user) {
    firebase.database().ref("users/" + "test1/" +"/username").on("value",function(snapshot){
        username = snapshot.val();
        document.getElementById("name").innerHTML = "名前：" + username;
    });
    firebase.database().ref("users/" + "test1/" +"/profile").on("value",function(snapshot){
        profile = snapshot.val();
        document.getElementById("profile").innerHTML = "プロフィール：" + profile;
    });
    firebase.database().ref("users/" + uid +"/events"+"/leader").on("value",function(snapshot){
        leaderEvent = snapshot.val();
    });
    firebase.database().ref("users/" + uid +"/events"+"/member").on("value",function(snapshot){
        memberEvent = snapshot.val();
    });