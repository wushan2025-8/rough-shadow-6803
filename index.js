// export default {
//   async fetch(request, context) {
//     const { env } = await import("alibaba:workers");
//     const test1 = env.test;
//     const test2 = env.test2; 
//     const test3 = env.test3;
//     const test4 = env.test4;
//     const test5 = env.test5;
//     const tEst5 = env.tEst5;
//     const tesT6 = env.tesT6; 
    
//     return new Response(`test1 is : ${test1}, test2 is : ${test2}, test3 is : ${test3}, test4 is : ${test4} ,test5 is : ${test5}, tEst5 is : ${tEst5}, tesT6 is : ${tesT6}`);
//   },
// }; 


import { env } from "alibaba:workers";

const test1 = env.test; 
const test2 = env.test2;
const test3 = env.test3;
const test4 = env.test4;
const test5 = env.test5;
const tEst5 = env.tEst5;
const tesT6 = env.tesT6; 

export default {
  async fetch(request, context) {
    return new Response(`test1 is : ${test1}, test2 is : ${test2}, test3 is : ${test3}, test4 is : ${test4} ,test5 is : ${test5}, tEst5 is : ${tEst5}, tesT6 is : ${tesT6}`);
  },
};
