import { Request, Response } from 'express';
import Menu from '../models/Menu';

export const createMenu = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  
  try {
    const newMenu = new Menu({ name, description });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(500).json({ message: 'Error creating menu', error });
  }
};

export const getMenus = async (req: Request, res: Response) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menus', error });
  }
};
