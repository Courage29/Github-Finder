//searchinput
const searchUser = document.getElementById('names');

//search input
searchUser.addEventListener('keyup', (e) => {
    //get the value
    const userText = e.target.value;
    //check if the input is empty
    if(userText !== ''){
        // make an http reuest
        const github = new Github;
         github.getUser(userText).then(data => {
            console.log(data);
            if(data.profileData.message === 'Not Found') {
                // show alert
                const ui = new UI;
                ui.showAlert('User not Found', 'alert alert-danger');
               console.log('wrong')

            } else{
                //show data
                const ui = new UI;
                ui.showProfile(data.profileData);
                ui.showRepos(data.repoData);
            }
         });
     } else{
        // clear profile
        const ui = new UI;
        ui.clearProfile();
    }
});