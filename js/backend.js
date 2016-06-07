// Initialize Firebase
var config = {
  apiKey: "AIzaSyDtU8ptBb06SoOMM80bMP-I-mP6r7Z5nI4",
  authDomain: "testing-a024d.firebaseapp.com",
  databaseURL: "https://testing-a024d.firebaseio.com",
  storageBucket: "testing-a024d.appspot.com",
};
firebase.initializeApp(config);

//Create database object
var database = firebase.database();

var ref = firebase.database().ref("data");

function pushData() {
  ref.push(getDataFromInput("input"));
  alert(getDataFromInput("input"));
}
