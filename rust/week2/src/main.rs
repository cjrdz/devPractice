// std::io is a module that provides functions for reading user input from the console.
use std::io;

fn main() {
    // Prompt the user to enter the first number
    println!("Enter your first number:");
    let mut num1 = String::new();
    io::stdin()
        .read_line(&mut num1)
        .expect("Failed to read input");
    let num1: i32 = num1.trim().parse().expect("Please enter a valid integer");

    // Prompt the user to enter the second number
    println!("Enter your second number:");
    let mut num2 = String::new();
    io::stdin()
        .read_line(&mut num2)
        .expect("Failed to read input");
    let num2: f64 = num2.trim().parse().expect("Please enter a valid number");

    // Calculate the result of raising num1 to the power of num2
    let result = (num1 as f64).powf(num2);

    // Print the result as an integer
    println!("The result is: {}", result as i32);
}
