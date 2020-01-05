// You need to consider the following ratings:

//     Terrible: tip 0%
//     Poor: tip 5%
//     Good: tip 10%
//     Great: tip 15%
//     Excellent: tip 20%

// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

//     "Rating not recognised" in Javascript, Python and Ruby...
// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {
    rating.toLowerCase();
    switch(rating){
        case 'excellent': amount *= 1.2;
        break;

        case 'great': amount *=1.15;
        break;

        case 'good': amount *= 1.1;
        break;

        case 'poor': amount *= 1.05;
        break;

        case 'terrible': amount *= 1;
        break;

        default: return "Rating not recognised";
    }

    return Math.ceil(amount);
}