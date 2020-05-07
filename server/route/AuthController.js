import SignUp from "../api/Auth/SignUp";
export default (router) => {
    router.get('/signUp', (req,res) => res.render('signUp'));
    router.post('/signUp', SignUp);

    router.get('/logIn', (req,res) => res.render('login'));
    router.post('/logIn', SignUp);

    router.get('/', (req,res) => res.render('home.ejs'));
}