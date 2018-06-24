import { MOVE } from './config';
import Logic from './layouts/Logic';

it('test', () => {
  expect(true).toBe(true);
});

it('the board is full', () => {
  const moves = [
    MOVE.PLAYER_1.val,
    MOVE.PLAYER_1.val,
    MOVE.PLAYER_1.val,
    MOVE.PLAYER_1.val,
    MOVE.PLAYER_1.val,
    MOVE.PLAYER_1.val,
    MOVE.PLAYER_1.val,
    MOVE.PLAYER_1.val,
    MOVE.PLAYER_1.val
  ];
  expect(Logic.isFull(moves)).toBe(true);
});

it('the board is not full', () => {
  const moves = [
    MOVE.PLAYER_1.val,
    MOVE.PLAYER_1.val,
    MOVE.PLAYER_1.val,
    MOVE.PLAYER_1.val,
    MOVE.PENDING.val,
    MOVE.PLAYER_1.val,
    MOVE.PLAYER_1.val,
    MOVE.PLAYER_1.val,
    MOVE.PLAYER_1.val
  ];
  expect(Logic.isFull(moves)).toBe(false);
});

it('the game has a winner', () => {
  const moves1 = [
    MOVE.PLAYER_1.val,
    MOVE.PLAYER_1.val,
    MOVE.PLAYER_1.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val
  ];

  expect(Logic.getWinner(moves1)).toBe(MOVE.PLAYER_1.val);

  const moves2 = [
    MOVE.PLAYER_1.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PLAYER_1.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PLAYER_1.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val
  ];
  expect(Logic.getWinner(moves2)).toBe(MOVE.PLAYER_1.val);

  const moves3 = [
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PLAYER_2.val,
    MOVE.PENDING.val,
    MOVE.PLAYER_2.val,
    MOVE.PENDING.val,
    MOVE.PLAYER_2.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val
  ];

  expect(Logic.getWinner(moves3)).toBe(MOVE.PLAYER_2.val);
});

it('the game has no winner', () => {
  const moves = [
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PLAYER_1.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PLAYER_2.val,
    MOVE.PENDING.val
  ];

  expect(Logic.getWinner(moves)).toBe(null);
});

it('set a move on the board', () => {
  const moves = [
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val
  ];
  const updatedMoves = [
    MOVE.PLAYER_1.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val,
    MOVE.PENDING.val
  ];
  expect(Logic.updatedMoves(moves, 0, MOVE.PLAYER_1.val)).toEqual(updatedMoves);
});
