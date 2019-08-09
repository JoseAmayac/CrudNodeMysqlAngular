"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send(res.json('API IS IN /api/games'));
    }
}
exports.indexController = new IndexController();
