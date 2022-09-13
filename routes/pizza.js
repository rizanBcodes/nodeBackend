import express from 'express';

const router = express.Router();

router.get(
    '/avocado',
    (req, res) => {
        res.send('got a request for avocado');
    }
)

router.get(
    '/cheese',
    (req, res) => {
        res.send('got a request for cheese');
    }
)

router.get(
    '/tomato',
    (req, res) => {
        res.send('got a request for tomato');
    }
)

router.get(
    '/',
    (req, res) => {
        res.send('got a request for pizza bland');
    }
)

export default router;