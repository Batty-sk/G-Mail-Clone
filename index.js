const SMTPServer = require('smtp-server').SMTPServer;

const mailServer = new SMTPServer({
    onData(stream, session,cb){
        stream.pipe(process.stdout)
        stream.on('end', callback);

    }
})

mailServer.listen(25,()=>{
    console.log('mail server has been started!')
})

