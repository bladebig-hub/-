// Augment NodeJS.ProcessEnv to include API_KEY
// The process variable is expected to be declared by the environment (e.g. @types/node)
declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_KEY: string;
  }
}
