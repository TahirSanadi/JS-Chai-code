//immideatly invoke function expression

(function chai(){
    console.log('dbConnected');
})();

((name)=>{
    console.log(`DBconnected two ${name}` );
})('tahir')
