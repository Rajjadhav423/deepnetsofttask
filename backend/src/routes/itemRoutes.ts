import { Router } from 'express';
import { createItem, getItemsByMenu } from '../controllers/itemController';

const router = Router();

router.post('/items', createItem);
router.get('/items/:menuId', getItemsByMenu);

export default router;
