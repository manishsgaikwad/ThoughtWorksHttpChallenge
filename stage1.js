const fetch = require('node-fetch')


fetch('https://http-hunt.thoughtworks-labs.net/challenge/input',{
    method:'GET',
    headers:{
        'userId':'XXXXXXXXXXX'
    }
}).then(r=>r.json()).then(res=>{
    const body1 = {
        "count":res.text.length
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

