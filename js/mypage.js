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


firebase.auth().onAuthStateChanged(function(user) {
    if (user){

        var arg  = new Object;
        url = location.search.substring(1).split('&');

        for(i=0; url[i]; i++) {
            var k = url[i].split('=');
            arg[k[0]] = k[1];
        }

        var id = arg.user_id;

        ref = firebase.database().ref("/users/" + id);

        ref.on("value",function(snapshot){

            var username = snapshot.child("name").val();
            document.getElementById("u_name").innerHTML = "名前：" + username;

            var profile = snapshot.child("profile").val();
            document.getElementById("u_profile").innerHTML = "プロフィール：" + profile;

            //ここ以下foreachが必要
            var leader = snapshot.child("events/leader").val();
            document.getElementById("u_leader").innerHTML = "作成イベント：" + leader;

            var member = snapshot.child("events/members").val();
            document.getElementById("u_members").innerHTML = "参加イベント：" + member;
        });
    }
  });
    