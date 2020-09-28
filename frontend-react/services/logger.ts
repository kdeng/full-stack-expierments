export class Logger {

  constructor() {

  }

  static debug(message: string) {
    this.printMessage(LogLevel.DEBUG, message);
  }

  static info(message: string) {
    this.printMessage(LogLevel.INFO, message);
  }

  static warn(message: string) {
    this.printMessage(LogLevel.WARNING, message);
  }

  static error(message: string, error: Error = null) {
    this.printMessage(LogLevel.ERROR, message, error);
  }

  private static printMessage(logLevel: LogLevel, message: string, e: Error = null): void {
    if (logLevel == LogLevel.WARNING) {
      console.warn(message);
    } else if (logLevel == LogLevel.ERROR) {
      console.error(message, e);
    } else {
      console.log(message);
    }
  }

}

enum LogLevel {
  DEBUG,
  INFO,
  WARNING,
  ERROR
}
