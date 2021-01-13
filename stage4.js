const fetch = require('node-fetch')


fetch('https://http-hunt.thoughtworks-labs.net/challenge/input',{
    method:'GET',
    headers:{
        'userId':'XXXXXXXXXXX'
    }
}).then(r=>r.json()).then(res=>{

    var vowels=Array(5).fill(0);
    var text = res.text
    var index=0;
    while(index < text.length){
        switch(text.charAt(index).toLowerCase()){
            case "a":
                vowels[0]++
                break;
            case "e":
                vowels[1]++
                break;
            case "i":
                vowels[2]++
                break; 
            case "o":
                vowels[3]++
                break;
            case "u":
                vowels[4]++
                break;  
        }
        index++;
    }

    const body1 = {
        "a":vowels[0],
        "e":vowels[1],
        "i":vowels[2],
        "o":vowels[3],
        "u":vowels[4]
    }
    fetch('https://http-hunt.thoughtworks-labs.net/challenge/output',{
        method:'POST',
        body: JSON.stringify(body1),
        headers:{
            'userId':'XXXXXXXXXXX',
            'Content-Type': 'application/json'
        }
    }).then((r)=>r.json()).then((res)=>console.log(res)).catch((e)=>console.log(e));
})

