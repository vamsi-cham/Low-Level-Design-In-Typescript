import { Directory } from "./FileSystem/Directory";
import { File } from "./FileSystem/File";

const movies = new Directory('Movies');

const movie1 = new File('Movie 1');
const movie2 = new File('Movie 2');
const movie3 = new File('Movie 3');
const movie4 = new File('Movie 4');

const comedyMovies = new Directory('Comedy Movies');

movies.addFilesOrDirectories(movie1,movie2, comedyMovies);
comedyMovies.addFilesOrDirectories(movie3,movie4);

movies.ls();
//comedyMovies.ls();