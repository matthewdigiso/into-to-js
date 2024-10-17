const d = new Date();
let hour = d.getHours();

if(hour < 12) {
    greeting = "morning";
} else if (hour < 17) {
    greeting = "afternoon";
} else {
    greeting = "night";
}