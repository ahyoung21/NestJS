import { UsersService } from './../users/users.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board, BoardStatus } from './board.model';
import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  // 여기서 UsersService 사용가능
  constructor(private usersService: UsersService) {}
  private boards: Board[] = []; // private 을 사용하지 않으면 다른 컴포넌트에서 배열 수정이 가능함 그걸 차단하기 위해 씀

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;

    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }
}
