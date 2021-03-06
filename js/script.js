/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["7 Years", "Hey look ma I made it", "Lost Boy", "Sunflower", "Close To Me"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
var images = ["https://upload.wikimedia.org/wikipedia/en/thumb/8/86/LukasGraham2016.jpg/220px-LukasGraham2016.jpg", "https://snworksceo.imgix.net/mnd/eba3e87a-96b6-4a4a-97cd-c9ee8a0ac541.sized-1000x1000.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Lost_Boy_%28Official_Single_Cover%29_by_Ruth_B.png/220px-Lost_Boy_%28Official_Single_Cover%29_by_Ruth_B.png", "https://ssle.ulximg.com/image/750x750/cover/1539879018_90ca2a68e3319b9794eda00a055188dd.jpg/5d22c112a6eb31e4c69129be6f4fcfa0/1539879018_f22ee6817bb9f70cd7135058588b6e32.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Ellie_Goulding_and_Diplo_%E2%80%93_Close_to_Me.png/220px-Ellie_Goulding_and_Diplo_%E2%80%93_Close_to_Me.png"]
var artists = ["Lucas Graham", "Panic! At The Disco", "Ruth B.", "Post Malone ft. Swae Flee", "Ellie Goulding"]
var lengths = ["3:57", "2:50", "4:36", "2:39", "3:02"]
var links = ["https://www.youtube.com/watch?v=LHCob76kigA", "https://www.youtube.com/watch?v=BzbxacRr5Gk", "https://www.youtube.com/watch?v=58TBZnvyGwQ", "https://www.youtube.com/watch?v=ApXoWvfEYVU", "https://www.youtube.com/watch?v=ajN57m_OSpY"]
// Make sure they match the same order as your array above




    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
function displaySongInfo() {
    songs.forEach(function(song) {
        $("#songs").append(`<p>${song}</p>`);
    });
    images.forEach(function(image) {
        $("#images").append(`<img src="${image}">`);
    });
    artists.forEach(function(artist) {
        $("#artists").append(`<p>${artist}</p>`);
    });
    lengths.forEach(function(length) {
        $("#lengths").append(`<p>${length}</p>`);
    });
    links.forEach(function(link) {
        $("#links").append(`<a href=${link}>Youtube Link</a>`);
    });
}    
//Empties all of the items in the divs to refresh them.
function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}
//After deleting the stuff in the divs, the new song info is pushed ontothe arrays to be displayed on the page.
function addSongInfo(){
    
    var songInput = $("#song").val();
    var imageInput = $("#image").val();
    var artistInput = $("#artist").val();
    var lengthInput = $("#length").val();
    var linkInput = $("#links").val();
    
    //This pushes the songs into the variables.
    songs.push(songInput);
    images.push(imageInput);
    artists.push(artistInput);
    lengths.push(lengthInput);
    links.push(linkInput);

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();