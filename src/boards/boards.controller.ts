import { Board } from './board.model';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  // boardsService: BoardsService;

  // constructor(boardsService: BoardsService) {
  //   this.boardsService = boardsService;
  // }

  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }
}
