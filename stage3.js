const fetch = require('node-fetch')


fetch('https://http-hunt.thoughtworks-labs.net/challenge/input',{
    method:'GET',
    headers:{
        'userId':'XXXXXXXXXXX'
    }
}).then(r=>r.json()).then(res=>{

    var count=0;
    var index=0;
    var text = res.text
    while(index < text.length){

    if(text.charAt(index) === "." || text.charAt(index) === '?' || text.charAt(index) === '!')
    {
    count++;
    }
    index++;
    }

    const body1 = {
        "sentenceCount":count
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

