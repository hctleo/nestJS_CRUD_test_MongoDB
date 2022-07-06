"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskScheme = void 0;
const mongoose = require("mongoose");
exports.TaskScheme = new mongoose.Schema({
    description: String,
    completed: Boolean
});
//# sourceMappingURL=task.scheme.js.map