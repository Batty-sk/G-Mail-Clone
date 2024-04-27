const SMTPServer = require('smtp-server').SMTPServer;

    const mailServer = new SMTPServer({
        onConnect(session, cb){
            console.log('session ',session)
            cb() // if we're passing a error object in it it means we are rejecting the request.
        },
        onMailFrom(address,session,cb){
            console.log('Sender Mail Address: ',address.address)
            cb()
        },
        onData(stream,session,cb){
            console.log('coming data stream',stream)
        }
    })

mailServer.listen(25,()=>{
    console.log('mail server has been started!')
})

