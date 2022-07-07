import axios from 'axios';
import * as fighterRepository from '../repositories/fighterRepository.js';

export async function find () {
    return fighterRepository.find();
}

export async function battle(firstUser: string, secondUser: string) {
    
    const firstUserRepo = await getFighterRepo(firstUser);
    const secondUserRepo = await getFighterRepo(secondUser);
    
    const firstFighter = await getFighter(firstUser);
    const secondFighter = await getFighter(secondUser);
    
    const firstUserStarCount = getFighterStarCount(firstUserRepo);
    const secondUserStarCount = getFighterStarCount(secondUserRepo);
    
    return getBattleResult(
        /* firstFighter,
        secondFighter,
        firstUserStarCount,
        secondUserStarCount */
    );
}

async function getFighterRepo(username: string) {

    const { data } = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
  
    return data;

}
  
async function getFighter(username: string) {

    const fighter = await fighterRepository.findUserName(username);
  
    if (!fighter) {
      /* const createdFighter = await fighterRepository.insertUser(username);
      return { id: id, username, wins: 0, losses: 0, draws: 0 }; */
    }
  
    return fighter;

}
  
function getFighterStarCount(fighterRepos: any[]) {

    const repoStars = fighterRepos.map((repo) => repo.stargazers_count);
    if (repoStars.length === 0) return 0;
  
    return repoStars.reduce((current: number, sum: number) => sum + current);

}
  
async function getBattleResult() {

}
  
