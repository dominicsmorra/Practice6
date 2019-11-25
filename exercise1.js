
var Movie = /** @class */ (function () {
    function Movie(title, duration, stars) {
        this.title = title;
        this.duration = duration;
        this.stars = stars;
    }
    Movie.prototype.movieInfo = function () {
        console.log(`${this.title} runs for ${this.duration} minutes and stars ${this.stars.join(' ')}`);    
    };
    return Movie;
}());
let movie1 = new Movie("The Great Gatsby", 170, ["Leonaro Dicaprio", "Tobey Maguire"])
let movie2 = new Movie("Joker", 190, ["Joaquin Phoenix"])
let movie3 = new Movie("Avengers", 210, ["Robert Downey Jr.", "Mark Ruffalo", "Scarlett Johanson", "Chris Evans"])
let movie4 = new Movie("Forrest Gump", 200, ["Tom Hanks"])
let movie5 = new Movie("Pulp Fiction", 170, ["Samuel L. Jackson", "John Travolta"])
let movies = [movie1,movie2,movie3,movie4,movie5]
movies[1].movieInfo()
