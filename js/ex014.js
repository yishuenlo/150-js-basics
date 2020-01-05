//CACULATE TIPS
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
    let tips;
    rating = rating.toLowerCase();
    switch(rating){
        case 'excellent': tips = amount * 0.2;
        break;

        case 'great': tips = amount * 0.15;
        break;

        case 'good': tips = amount * 0.1;
        break;

        case 'poor': tips = amount * 0.05;
        break;

        case 'terrible': tips = 0;
        break;

        default: return "Rating not recognised";
    }

    return Math.ceil(tips);
}