import { Request, Response } from 'express';
import Item from '../models/Item';

export const createItem = async (req: Request, res: Response) => {
  const { name, description, price, menuId } = req.body;
  
  try {
    const newItem = new Item({ name, description, price, menu: menuId });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Error creating item', error });
  }
};

export const getItemsByMenu = async (req: Request, res: Response) => {
  const { menuId } = req.params;
  
  try {
    const items = await Item.find({ menu: menuId });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error });
  }
};
