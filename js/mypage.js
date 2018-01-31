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
console.log(provider);


var ref;

var leaderEvent;
var memberEvent;

firebase.auth().onAuthStateChanged(function(user) {
    var uid = user.uid;
    if (user){

        firebase.database().ref("users/" + uid +"/events"+"/leader").on("value",function(snapshot){
            leaderEvent = snapshot.val();
        });
        firebase.database().ref("users/" + uid +"/events"+"/member").on("value",function(snapshot){
            memberEvent = snapshot.val();
        });
    }

    else{

        ref = firebase.database().ref("/users/test1");

        ref.on("value",function(snapshot){

            var username = snapshot.child("name").val();
            document.getElementById("u_name").innerHTML = "名前：" + username;

            var profile = snapshot.child("profile").val();
            document.getElementById("u_profile").innerHTML = "プロフィール：" + profile;
        });

    }
    