const fetch = require('node-fetch');


fetch('https://http-hunt.thoughtworks-labs.net/challenge',{
    method:'GET',
    headers:{
        'userId':'XXXXXXXXXXX'
    }
}).then(r => r.text()).then(r=>console.log(r));

