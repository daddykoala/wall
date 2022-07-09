function pattern () {

    const patternMail = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$";
    validator(patternMail)
};

module.export = pattern;