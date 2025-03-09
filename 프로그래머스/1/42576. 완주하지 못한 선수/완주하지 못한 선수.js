const solution = (participant, completion) => {
    participant.sort()
    completion.sort()

    for(let i=0; i<participant.length-1; i++) {
        if(participant[i] === completion[i]) continue;
        
        if(participant[i] === completion[i+1]){
            return completion[i]
        }
        else if(participant[i+1] === completion[i]){
            return participant[i]
            
        }
    }
    
    return participant.at(-1)
}