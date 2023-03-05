const { genSaltSync, hashSync, compareSync } = require('bcryptjs');

const minhaSenha1 = hashSync('!adm--94*-', genSaltSync(10));
const minhaSenha2 = hashSync('bacon35*/', genSaltSync(10));

console.table([minhaSenha1, minhaSenha2]);
