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
exports.getMenus = exports.createMenu = void 0;
const Menu_1 = __importDefault(require("../models/Menu"));
const createMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    try {
        const newMenu = new Menu_1.default({ name, description });
        yield newMenu.save();
        res.status(201).json(newMenu);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating menu', error });
    }
});
exports.createMenu = createMenu;
const getMenus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menus = yield Menu_1.default.find();
        res.status(200).json(menus);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching menus', error });
    }
});
exports.getMenus = getMenus;
