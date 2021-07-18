const { Router } = require('express');
const authRepository = require('../repositorys/authRepository')

const router = Router();


router.get('/signup', authRepository.signup_get);
router.post('/signup', authRepository.signup_post)
router.get('/logout', authRepository.logout_get)

router.get('/login', authRepository.login_get)
router.post('/login', authRepository.login_post)


module.exports = router;