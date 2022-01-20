import { Request, Response, Router } from 'express';
import UserService from './user.service.ts';

const router = Router();

const getAll = async (request: Request, response: Response) => {
  const findService = new UserService();
  const view = await findService.execute();
  return response.json(view);
};
router.get('/user', getAll);

const addOne = async (request: Request, response: Response) => {
  const {
    commentId, author, comment, createdAt,
  } = request.body;
  const findService = new UserService();
  await findService.createComment({
    commentId, author, comment, createdAt,
  });
  return response.json({ add: 'success' });
};
router.post('/user/addcomment', addOne);

export default router;
