/**
 * Strings in this class have to match the command strings registered in the language server.
 * LSP extended commands.
 */
export class LanguageServerRequest {
  public static Compile: string = "compile";
  public static CounterExample: string = "counterExample";
}

/**
 * Strings in this file have to match the command strings registered in the language server.
 * Server side send commands that the client should listen to.
 * LSP extended notifications.
 */
export class LanguageServerNotification {
  public static Error: string = "ERROR";
  public static Warning: string = "WARNING";
  public static Info: string = "INFO";
  public static UpdateStatusbar: string = "updateStatusbar";
  public static ServerStarted: string = "serverStarted";
  public static DafnyLanguageServerVersionReceived: string =
    "dafnyLanguageServerVersionReceived";

  public static ActiveVerifiyingDocument: string = "activeVerifiyingDocument";
}

/**
 * Configuration settings for the Dafny language server
 * These settings are mostly no longer necessary
 * with the later adapted languageServerInstaller for the Dafny language server Github CI.
 */
export class LanguageServerConfig {
  public static ServerFolder: string = "dafnyLanguageServer";
  public static ServerDownloadAddress: string =
    "https://wuza.ch/specials/SA/Server.zip";
  public static RequiredVersion: string = "1.2.3";
}
