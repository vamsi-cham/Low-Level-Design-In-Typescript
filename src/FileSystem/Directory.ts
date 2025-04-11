import { FileSystemInterface } from "./FileSystemInterface";

export class Directory implements FileSystemInterface{

  public directoryName: string;
  public filesAndDirectories: FileSystemInterface[] = [];

  constructor(directoryName: string){
    this.directoryName = directoryName
  }

  addFilesOrDirectories(...fileOrDirectoryName: FileSystemInterface[]){
    this.filesAndDirectories.push(...fileOrDirectoryName);
  }

  ls(){
    console.log("\n Directory: ", this.directoryName)
    this.filesAndDirectories.forEach((obj)=>{
        obj.ls();
    })
  }
}