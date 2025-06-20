import express from 'express';
import {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getAllUsers
} from '../controller/userController.js';
const router = express.Router();
import  validateUser  from '../middlewares/inputValidator.js';

router.post('/user', validateUser, createUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getUserById);
router.put('/user/:id', validateUser, updateUser);
router.delete('/user/:id', deleteUser);

export default router;
