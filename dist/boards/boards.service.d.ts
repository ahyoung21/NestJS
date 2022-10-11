import { UsersService } from './../users/users.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.model';
export declare class BoardsService {
    private usersService;
    constructor(usersService: UsersService);
    private boards;
    getAllBoards(): Board[];
    createBoard(createBoardDto: CreateBoardDto): Board;
}
