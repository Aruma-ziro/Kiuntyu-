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
var uid = user.uid
var ref = firebase.database().ref("/users/test1");


var username;
var profile;
var leaderEvent;
var memberEvent;
firebase.auth().onAuthStateChanged(function(user) {
    ref.on("value",function(snapshot){

        var username = snapshot.child("name").val();
        document.getElementById("u_name").innerHTML = "名前：" + username;

        var profile = snapshot.child("profile").val();
        document.getElementById("u_profile").innerHTML = "プロフィール：" + profile;
    });
    firebase.database().ref("users/" + uid +"/events"+"/leader").on("value",function(snapshot){
        leaderEvent = snapshot.val();
    });
    firebase.database().ref("users/" + uid +"/events"+"/member").on("value",function(snapshot){
        memberEvent = snapshot.val();
    });