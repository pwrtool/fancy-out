export class FancyOut {
  /**
   * Outputs a message to the console
   * @param message - The message to output
   * @return void
   */
  static out(message: string) {
    console.log(message);
  }

  /**
   * Outputs a message to the console in green and bold text
   * @param message - The message to output
   * @return void
   */
  static success(message: string) {
    console.log("\x1b[32m%s\x1b[0m", message);
  }

  /**
   * Outputs a message to the console in bold text
   * Does not work on some terminals
   * @param message - The message to output
   * @return void
   */
  static bold(message: string) {
    console.log("\x1b[1;3m%s\x1b[0m", message);
  }

  /**
   * Outputs a message to the console in yellow and bold text
   * @param message - The message to output
   * @return void
   */
  static warn(message: string) {
    console.log("\x1b[33m%s\x1b[0m", message);
  }

  /**
   * Outputs a message to the console in bold blue text with an underline
   * @param message - The message to output
   * @return void
   */
  static header(message: string) {
    console.log("\x1b[34;4m%s\x1b[0m", message);
  }

  /**
   * Outputs a message to the console in red and bold text
   * @param message - The message to output
   * @return void
   */
  static error(message: string) {
    console.log("\x1b[31m%s\x1b[0m", message);
  }

  /**
   * Outputs a message to the console in cyan text
   * @param message - The message to output
   * @return void
   */
  static info(message: string) {
    console.log("\x1b[36m%s\x1b[0m", message);
  }

  /**
   * Outputs a message to the console in underlined text
   * @param message - The message to output
   * @return void
   */
  static underlined(message: string) {
    console.log("\x1b[4m%s\x1b[0m", message);
  }
}
