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

/*var urlParam = location.search.substring(1);
if(urlParam){
  var param = urlParam.split('&');
  var paramArray = [];
  for (i = 0; i < param.length; i++) {
    var paramItem = param[i].split('=');
    paramArray[paramItem[0]] = paramItem[1];
  }
}
var id = paramArray.user_id;*/
var ref;



firebase.auth().onAuthStateChanged(function(user) {
  var uid = user.uid;
  console.log(uid);
    if (user){

        ref = firebase.database().ref("users/" + uid);

        ref.on("value",function(snapshot){

            var username = snapshot.child("name").val();
            document.getElementById("u_name").innerHTML = "名前：" + username;

            var profile = snapshot.child("profile").val();
            document.getElementById("u_profile").innerHTML = "プロフィール：" + profile;

            document.getElementById("l_eventList").innerHTML = "作成イベント";
            document.getElementById("m_eventList").innerHTML = "参加イベント";
            
            snapshot.forEach(function(childsnapshot){
              var leader = childsnapshot.child("events/leader").val();
              var l_elemLi = document.createElement('li');
              document.getElementById("l_eventList").appendChild(l_elemLi) = leader;

              var member = childsnapshot.child("events/members").val();
              var m_elemLi = document.createElement('li');
              document.getElementById('m_eventList').appendChild(m_elemLi) = member;
            });
        });

        
        //if (id == uid){
          $('#settings').click(function(){
            var url = "../settings.html?user_id=" + uid;
            location.href = url;
          });
        /*}
        else{
          document.getElementById('settings').style.display="none";
        }*/
    }
  });
    