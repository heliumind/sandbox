import { Result } from './result';

export class Scoreboard {
  private results: Result[] = [];

  addResult(newResult: Result): void {
    this.results.push(newResult);
  }

  updateScoreboard(): void {
    let output = '<h2>Scoreboard</h2>';

    for (const result of this.results) {
      output += '<h4>';
      output += `${result.playerName}: ${result.score}/${result.problemCount} for factor ${result.factor}`;
      output += '</h4>';
    }

    const scoresElement: HTMLElement = document.getElementById('scores')!;
    scoresElement.innerHTML = output;
  }
}
