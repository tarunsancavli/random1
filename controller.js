const index = (req,res,next) => {
    res.sendFile(`${__dirname}/html/index.html`);
}

const about = (req,res,next) => {
    res.sendFile(`${__dirname}/html/about.html`);
}

const contact = (req,res,next) => {
    res.sendFile(`${__dirname}/html/contact.html`);
}

const error = (req,res,next) => {
    res.sendFile(`${__dirname}/html/404.html`);
}

module.exports = {index,about,contact,error};