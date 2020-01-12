import foo from './foo'

//import bar from './../src/util/bar' //works
//import bar from 'src/util/bar' // does not work. Linter nor tsc show any warning, but when trying to execute, errors shows that bar can't be found
import bar from '@util/bar' // same as above

console.log('test 0')
console.log(foo + bar)

export {}
