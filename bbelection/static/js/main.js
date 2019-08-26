document.addEventListener("DOMContentLoaded", function() {

    let rootButton = document.getElementById('request-root');
    let candidateInfo = document.getElementById('candidate-info');

    rootButton.addEventListener('click', function() {
        let request = 
        axios.get('https://bb-election-api.herokuapp.com')
             .then(function(response){
                 const currentCandidates = response.data.candidates
                 console.log('--test successful--') 
                 console.log(currentCandidates)
                 currentCandidates.forEach(element => {
                    const candidate = document.createElement('li')
                    candidate.innerHTML = `${element.name} got ${element.votes} votes.`
                    candidateInfo.appendChild(candidate)

                    const voteForm = document.createElement('form')
                    voteForm.method = 'POST'
                    voteForm.action= `https://bb-election-api.herokuapp.com/vote?id=${element.id}`
                    voteForm.setAttribute('name', 'id')
                    
                    const voteButton = document.createElement('input')
                    voteButton.type ='submit'
                    voteButton.value = 'VOTE'

                    voteForm.appendChild(voteButton)    
                    candidate.appendChild(voteForm) 

                    voteButton.addEventListener('click',(e) => {
                        e.preventDefault()
                        let vote = axios.post(`https://bb-election-api.herokuapp.com/vote?id=${element.id}`)
                        .then(function(response) {
                             console.log('--user voted!')
                        })
                        .catch(function(error){
                            console.log('error')
                        })
                        .then(function(response){
                            console.log('voting ended')
                        }); 
                        
                    });
                 });
                 
             }); 
    
        

    }); 
    
    

    


});
