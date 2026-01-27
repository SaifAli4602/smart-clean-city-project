

export const homePage=(req, res) => {
    res.render('home')
}
export const aboutPage=(req, res) => {
    res.render('about')
}
export const signupPage=(req, res) =>{
     res.render('signup')
}
export const loginPage= (req, res) =>{
     res.render('login', { error: null })
}
export const formPage=(req, res) => {

    res.render('form', { errors: [], old: {} });
}