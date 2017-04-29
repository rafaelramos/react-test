var userData = function() {
  return {
    name: "Mike Ross",
    avatarUrl: "../assets/mike.jpg"
  }
};

var appointmentsData = function() {
  return [
    {
      "created_at" : "2017-04-21T10:44:51-06:00",
      "end" : "2017-05-24T07:30:00-06:00",
      "id" : 695,
      "patient_id" : 16,
      "physician_id" : 14,
      "start" : "2017-05-24T07:00:00-06:00",
      "updated_at" : "2017-04-21T10:44:51-06:00",
      "patient_name" :"Mike Ross",
      "physician_name" : "Gregory House",
      "symptoms": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "details": "Human is washing you why halp oh the horror flee scratch hiss bite human is washing you why halp oh the horror flee scratch hiss bite kick up litter for run in circles, and howl uncontrollably for no reason, if it smells like fish eat as much as you wish for cats go for world domination.",
      "status": "Pending"
    },
    {
      "created_at" : "2017-04-20T10:44:51-06:00",
      "end" : "2017-05-23T07:30:00-06:00",
      "id" : 695,
      "patient_id" : 16,
      "physician_id" : 15,
      "start" : "2017-05-23T07:00:00-06:00",
      "updated_at" : "2017-04-21T10:44:51-06:00",
      "patient_name" :"Mike Ross",
      "physician_name" : "John Seward",
      "symptoms": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "details": "You call this cat food? friends are not food favor packaging over toy.",
      "status": "Pending"
    },
    {
      "created_at" : "2017-04-19T10:44:51-06:00",
      "end" : "2017-05-22T07:30:00-06:00",
      "id" : 695,
      "patient_id" : 16,
      "physician_id" : 16,
      "start" : "2017-05-22T07:00:00-06:00",
      "updated_at" : "2017-04-21T10:44:51-06:00",
      "patient_name" :"Mike Ross",
      "physician_name" : "Abraham Van Helsing",
      "symptoms": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "details": "Burrow under covers use lap as chair curl into a furry donut curl into a furry donut and love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater) sit and stare yet stand in front of the computer screen.",
      "status": "Pending"
    },
    {
      "created_at" : "2017-04-18T10:44:51-06:00",
      "end" : "2017-04-21T07:30:00-06:00",
      "id" : 695,
      "patient_id" : 16,
      "physician_id" : 17,
      "start" : "2017-04-21T07:00:00-06:00",
      "updated_at" : "2017-04-21T10:44:51-06:00",
      "patient_name" :"Mike Ross",
      "physician_name" : "Henry Wu",
      "symptoms": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      "details": "Poop on grasses spit up on light gray carpet instead of adjacent linoleum ask for petting eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap or meowzer!.",
      "status": "Completed"
    },
    {
      "created_at" : "2017-04-17T10:44:51-06:00",
      "end" : "2017-04-20T07:30:00-06:00",
      "id" : 695,
      "patient_id" : 16,
      "physician_id" : 18,
      "start" : "2017-04-20T07:00:00-06:00",
      "updated_at" : "2017-04-21T10:44:51-06:00",
      "patient_name" :"Mike Ross",
      "physician_name" : "Hannibal Lecter",
      "symptoms": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      "details": "Fall over dead (not really but gets sypathy) rub face on owner yet hack up furballs.",
      "status": "Completed"
    },
    {
      "created_at" : "2017-04-16T10:44:51-06:00",
      "end" : "2017-04-19T07:30:00-06:00",
      "id" : 695,
      "patient_id" : 16,
      "physician_id" : 19,
      "start" : "2017-04-19T07:00:00-06:00",
      "updated_at" : "2017-04-21T10:44:51-06:00",
      "patient_name" :"Mike Ross",
      "physician_name" : "Henry Jekyll",
      "symptoms": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      "details": "Scratch the box chase imaginary bugs.",
      "status": "Cancelled"
    },
    {
      "created_at" : "2017-04-15T10:44:51-06:00",
      "end" : "2017-04-18T07:30:00-06:00",
      "id" : 695,
      "patient_id" : 16,
      "physician_id" : 20,
      "start" : "2017-04-18T07:00:00-06:00",
      "updated_at" : "2017-04-21T10:44:51-06:00",
      "patient_name" :"Mike Ross",
      "physician_name" : "Hastie Lanyon",
      "symptoms": "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
      "details": "Purrr purr littel cat, little cat purr purr lick sellotape yet purr while eating paw at your fat belly nap all day.",
      "status": "Cancelled"
    }
  ]
};
