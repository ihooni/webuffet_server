/**
 * Router for https://api.webuffet.net
 */

import express from 'express';
import storage_router from './storage/index';

const router = express.Router();

router.use('/storage', storage_router);

// invalid request
router.all('*', (req, res) => {
  res.status(404).json({ err: true, msg: "invalid request" });
});

export default router;
