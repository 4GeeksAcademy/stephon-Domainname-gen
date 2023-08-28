/* eslint-disable */
function generateDomain(){
  let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
  let cite = [".com", ".edu",".net"]
  for(let i=0; i < pronoun.length;i++)
  for(let x=0; x < adj.length;x++)
  for(let y=0; y < noun.length;y++)
  for(let e=0; e < cite.length;e++)
console.log(pronoun[i] +adj[x] +noun[y] +cite[e])
}
console.log(generateDomain());
