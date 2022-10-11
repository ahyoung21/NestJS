"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const users_service_1 = require("./../users/users.service");
const board_model_1 = require("./board.model");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let BoardsService = class BoardsService {
    constructor(usersService) {
        this.usersService = usersService;
        this.boards = [];
    }
    getAllBoards() {
        return this.boards;
    }
    createBoard(createBoardDto) {
        const { title, description } = createBoardDto;
        const board = {
            id: (0, uuid_1.v1)(),
            title,
            description,
            status: board_model_1.BoardStatus.PUBLIC,
        };
        this.boards.push(board);
        return board;
    }
};
BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], BoardsService);
exports.BoardsService = BoardsService;
//# sourceMappingURL=boards.service.js.map