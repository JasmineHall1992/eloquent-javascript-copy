function triangles(size) {
    if (typeof size !== "number" || size < 1) {
      console.log("Please provide a positive number.");
      return;
    }
  
    for (let i = 1; i <= size; i++) {
      console.log("#".repeat(i));
    }
  }
  






function fizzBuzz(start, end) {
    // Loop through the numbers from start to end
    for (let i = start; i <= end; i++) {
      // Check if the number is divisible by both 3 and 5
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
      }
      // Check if the number is divisible by 3
      else if (i % 3 === 0) {
        console.log("fizz");
      }
      // Check if the number is divisible by 5
      else if (i % 5 === 0) {
        console.log("buzz");
      }
      // If none of the above, log the number itself
      else {
        console.log(i);
      }
    }
  }


  function drawChessboard(size) {
    if (typeof size !== "number" || size < 1) {
      console.log("Please provide a positive number.");
      return;
    }
  
    let board = "";
  
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        // Alternates between "#" and " " based on row + col sum
        board += (row + col) % 2 === 0 ? " " : "#";
      }
      board += "\n"; // Move to the next line after each row
    }
  
    console.log(board);
  }
  