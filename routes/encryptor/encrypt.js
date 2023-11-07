
const crypto = require('crypto');

global.router.post('/encryptor/encrypt', (request, response) => 
{

    const { encryption_type, text } = request.body;

    if (!text) 
    {
    
        response.render('index', { failure: 'Digite o texto que deseja criptografar' }); return;

    }

    var encrypted_text = null;

    try 
    {

        switch (encryption_type) 
        {
        
            case 'et01':
                encrypted_text = crypto.createHash(     'md5').update(text).digest('hex'); break;
            case 'et02':
                encrypted_text = crypto.createHash(    'sha1').update(text).digest('hex'); break;
            case 'et03':
                encrypted_text = crypto.createHash(  'sha224').update(text).digest('hex'); break;
            case 'et04':
                encrypted_text = crypto.createHash(  'sha256').update(text).digest('hex'); break;
            case 'et05':
                encrypted_text = crypto.createHash(  'sha384').update(text).digest('hex'); break;
            case 'et06':
                encrypted_text = crypto.createHash(  'sha512').update(text).digest('hex'); break;
            case 'et07':
                encrypted_text = crypto.createHash('sha3-224').update(text).digest('hex'); break;
            case 'et08':
                encrypted_text = crypto.createHash('sha3-256').update(text).digest('hex'); break;
            case 'et09':
                encrypted_text = crypto.createHash('sha3-384').update(text).digest('hex'); break;
            case 'et10':
                encrypted_text = crypto.createHash('sha3-512').update(text).digest('hex'); break;

        }

    } catch (error) 
    {

        response.render('index', { failure: 'Não foi possível criptografar o texto' }); return;

    }

    response.render('index', { encrypted_text: encrypted_text });

});