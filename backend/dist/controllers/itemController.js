"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemsByMenu = exports.createItem = void 0;
const Item_1 = __importDefault(require("../models/Item"));
const createItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, menuId } = req.body;
    try {
        const newItem = new Item_1.default({ name, description, price, menu: menuId });
        yield newItem.save();
        res.status(201).json(newItem);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating item', error });
    }
});
exports.createItem = createItem;
const getItemsByMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { menuId } = req.params;
    try {
        const items = yield Item_1.default.find({ menu: menuId });
        res.status(200).json(items);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
});
exports.getItemsByMenu = getItemsByMenu;
