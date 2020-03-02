function makeCounter() {
    let count = 0;
  
    return function() {
        return count++;
    }
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  console.log( counter2() ); // ?
  console.log( counter2() ); // ?

//=========================================

  function Counter() {
    let count = 0;
    
    // Need to name functions if multiple exist within another function.
    this.up = function() {
      return ++count;
    };
  
    this.down = function() {
      return --count;
    };
  }
  
  let counter3 = new Counter();
  
  console.log( counter3.up() ); // 1
  console.log( counter3.up() ); // 2
  console.log( counter3.down() ); // 1