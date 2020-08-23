import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'allex',
    email: 'allex@gmail.com',
    password: '132456',
    techs: ['Node', 'React', { title: 'React', experience: 1100 }],
  });

  return response.json({ message: 'Hello World' });
}
