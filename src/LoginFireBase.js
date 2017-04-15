 (function() {

//Initialize Firebase
 	const config = {
    apiKey: "AIzaSyAeO7IBdEX_pVePdytyPArFTB1e2RfhHWg",
    authDomain: "lenbo-2e538.firebaseapp.com",
    databaseURL: "https://lenbo-2e538.firebaseio.com",
    projectId: "lenbo-2e538",
    storageBucket: "lenbo-2e538.appspot.com",
    messagingSenderId: "511604296562"
  };

firebase.initializeApp(config);

	//Get Elements for Login, Register and Log Out 
	const txtEmail = documents.getElementById('Email');
	const txtPassword = documents.getElementById('Password');
	const btnLogin = documents.getElementById('btnLogin');
	const btnSignUp = documents.getElementById('btnSignUp');
	const btnLogOut = documents.getElementById('btnLogOut');


	//Login Events
	btnLogin.addEventLister('click', e=>{
		//Get Email and Pass 
		const email = Email.value; 
		const pass = Password; 
		const auth = firebase.auth(); 
		//Sign In 
		const promise = auth.signInWithEmailAndPassword(email, pass); 
		promise.catch(e => console.log(e.messsage)); 
	}); 

		//Add Sign Up 
		btnSignUp.addEventLister('click', e=> {
			const email = Email.value; 
		const pass = Password; 
		const auth = firebase.auth(); 
		//Sign Up 
		const promise = auth.createUserWithEmailAndPassword(email, pass); 
		promise
			.catch(e => console.log(e.message));

	}); 

		//Logging Out
		btnLogOut.addEventLister('click', e=> {
			firebase.auth().signOut(); 
		})

		//Adding Real Team Listner 
		firebase.auth().onAuthStateChanged(firebaseUser => {
			if(firebaseUser){
				console.log(firebaseUser);
			} else {
				console.log('user not logged in'); 
			}
		});


}());


