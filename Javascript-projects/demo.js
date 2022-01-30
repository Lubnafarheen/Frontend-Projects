// step 1 get list of all attendees
const attendees = ['Lohsar', 'Khan', 'Ahmed']

// message
function sendInvite(attendee) {
  console.log(
    `Dear ${attendee}, \nYou are cordially invited to our place, on 20th Jan, 2022 at 7:00 PM`);
}

attendees.forEach((attendee) => {
  sendInvite(attendee);
});