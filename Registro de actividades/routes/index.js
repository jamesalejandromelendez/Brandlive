import { Router } from 'express';
import { getActivitys, insertActivity, deleteActivity, editActivity, getActivityId } from '../controllers/index.controller.js'; 
const router = Router();


// router.get('/ver', getActivitys);
// router.post('/insertar', insertActivity);
// router.get('/ver/:id', getActivityId);
// router.delete('/eliminar/:id', deleteActivity)
// router.put('/actualizar/:id', editActivity);

export default router;