document.addEventListener("DOMContentLoaded", function() {

    let rootButton = document.getElementById('request-root');
    let candidateInfo = document.getElementById('candidate-info');

    rootButton.addEventListener('click', () => {
        let request = 
        axios.get('https://eric-deploy-test.herokuapp.com/bb')
             .then(function(response){
                 const currentCandidates = response.data.candidates
                 console.log('--test successful--') 
                 console.log(currentCandidates)
                 currentCandidates.forEach(element => {
                    const candidate = document.createElement('li')
                    candidate.innerHTML = `${element.name} got ${element.votes} votes.`
                    candidateInfo.appendChild(candidate)
                 });
                 
             })
            
                

             
             
    });


});
