import { FileSystemInterface } from "./FileSystemInterface";

export class File implements FileSystemInterface{

  public fileName: string;

  constructor(fileName: string){
    this.fileName = fileName;
  }

  ls(){
    console.log("\n File: ", this.fileName);
  }
}