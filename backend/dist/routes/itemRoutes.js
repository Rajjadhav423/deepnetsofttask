"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itemController_1 = require("../controllers/itemController");
const router = (0, express_1.Router)();
router.post('/items', itemController_1.createItem);
router.get('/items/:menuId', itemController_1.getItemsByMenu);
exports.default = router;
