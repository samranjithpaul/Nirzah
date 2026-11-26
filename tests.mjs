import assert from 'node:assert/strict';
import {game} from './lib/game.ts';
const couple=game('NIRANJAN','Tirzah');
assert.deepEqual([couple.count,couple.order,couple.winner],[8,[1,4,3,0,5],2]);
assert.deepEqual(game('Amit','Anita').order,[2,5,3,1,4]);
assert.deepEqual(game('Aaa','A').pairs,[[0,0]]);
assert.equal(game('Ann','Ann').winner,null);
assert.deepEqual(game('X- A',' a2').pairs,[[3,1]]);
assert.equal(game('A'.repeat(80),'B').count,81);

import {notebookDate} from './lib/date.ts';
for (const [winner, length] of [2,9,7,5,1,26].entries()) {
  const result = game('A'.repeat(length), 'B');
  assert.equal(result.winner, winner);
  assert.equal(new Set(result.order).size, 5);
  assert.ok(!result.order.includes(winner));
}
assert.equal(notebookDate('08/12', new Date('2026-12-31T18:30:00Z')), '08/12/2027');
assert.equal(notebookDate('29/02/2028'), '29/02/2028');
assert.throws(() => notebookDate('31/04/2026'));
