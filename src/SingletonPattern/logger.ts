class Logger {
  private static instance: Logger;

  // Private constructor to prevent direct instantiation
  private constructor() {}

  // Static method to access the singleton instance
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
      console.log('Logger instance created');
    }
    return Logger.instance;
  }

  public log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}

// const ap = new AssociatedParty()

// Usage
const logger1 = Logger.getInstance();
logger1.log('App started');

const logger2 = Logger.getInstance();
logger2.log('User logged in');

// Check if both instances are same
console.log('Same instance?', logger1 === logger2); // true ✅
