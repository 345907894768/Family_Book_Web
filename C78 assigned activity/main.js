var images = ["AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.jpg", "dad.png", "mom.png", "me.png"];
var names = ["Family Book-","Imrul Kaiser [Dad :)]", "Fatama Nur Somi [My Epic Mom B)]", "Fauzia Nur Ilham [haha it's me >:)]"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
