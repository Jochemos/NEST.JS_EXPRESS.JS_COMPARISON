import { Request, Response } from 'express';
import { Router } from 'express';
import { UserService } from './user.service';

export const router = Router();

const getAll = async(request: Request, response: Response) => {
  const findService = new UserService();
  const view = await findService.execute();
  return response.json(view);
}
router.get('/user', getAll);

const addOne = async(request: Request, response: Response) => {
  const { commentId, author, comment, created_At } = request.body;
  const findService = new UserService();
  const view = await findService.createComment({ commentId, author, comment, created_At });
  return response.json({ "add": "success" });
}
router.post('/user/addcomment', addOne);
