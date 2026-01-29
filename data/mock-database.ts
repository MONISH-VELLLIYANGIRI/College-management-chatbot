// Mock database with data from HuggingFace dataset: SleepyTerr/college_student_scores
// Generated on: 2026-01-29 17:43:53
// Total records processed: 100

import type { Student, Attendance, Timetable, Fee, Academic } from "@/types"

export const studentsDB: Record<string, Student> = {
  "STU00001": {
    "id": "STU00001",
    "name": "Karen Gerry",
    "dept": "Computer Science",
    "year": 1,
    "email": "karen.gerry@university.edu"
  },
  "STU00002": {
    "id": "STU00002",
    "name": "Christina Wright",
    "dept": "Electronics",
    "year": 2,
    "email": "christina.wright@university.edu"
  },
  "STU00003": {
    "id": "STU00003",
    "name": "Robert Huston",
    "dept": "Mechanical",
    "year": 3,
    "email": "robert.huston@university.edu"
  },
  "STU00004": {
    "id": "STU00004",
    "name": "Nettie Olivarria",
    "dept": "Civil",
    "year": 4,
    "email": "nettie.olivarria@university.edu"
  },
  "STU00005": {
    "id": "STU00005",
    "name": "Juana Arroyo",
    "dept": "Electrical",
    "year": 1,
    "email": "juana.arroyo@university.edu"
  },
  "STU00006": {
    "id": "STU00006",
    "name": "Gary Sellers",
    "dept": "Information Technology",
    "year": 2,
    "email": "gary.sellers@university.edu"
  },
  "STU00007": {
    "id": "STU00007",
    "name": "Nicolas Hare",
    "dept": "Computer Science",
    "year": 3,
    "email": "nicolas.hare@university.edu"
  },
  "STU00008": {
    "id": "STU00008",
    "name": "Sammy Brooks",
    "dept": "Electronics",
    "year": 4,
    "email": "sammy.brooks@university.edu"
  },
  "STU00009": {
    "id": "STU00009",
    "name": "Joshua Lewandowski",
    "dept": "Mechanical",
    "year": 1,
    "email": "joshua.lewandowski@university.edu"
  },
  "STU00010": {
    "id": "STU00010",
    "name": "Jason Mendes",
    "dept": "Civil",
    "year": 2,
    "email": "jason.mendes@university.edu"
  },
  "STU00011": {
    "id": "STU00011",
    "name": "Michael Mahoney",
    "dept": "Electrical",
    "year": 3,
    "email": "michael.mahoney@university.edu"
  },
  "STU00012": {
    "id": "STU00012",
    "name": "Justin Rambo",
    "dept": "Information Technology",
    "year": 4,
    "email": "justin.rambo@university.edu"
  },
  "STU00013": {
    "id": "STU00013",
    "name": "Terry Ryan",
    "dept": "Computer Science",
    "year": 1,
    "email": "terry.ryan@university.edu"
  },
  "STU00014": {
    "id": "STU00014",
    "name": "Albert Hernandez",
    "dept": "Electronics",
    "year": 2,
    "email": "albert.hernandez@university.edu"
  },
  "STU00015": {
    "id": "STU00015",
    "name": "Janelle Manning",
    "dept": "Mechanical",
    "year": 3,
    "email": "janelle.manning@university.edu"
  },
  "STU00016": {
    "id": "STU00016",
    "name": "Elizabeth Reyes",
    "dept": "Civil",
    "year": 4,
    "email": "elizabeth.reyes@university.edu"
  },
  "STU00017": {
    "id": "STU00017",
    "name": "Johnny Cronin",
    "dept": "Electrical",
    "year": 1,
    "email": "johnny.cronin@university.edu"
  },
  "STU00018": {
    "id": "STU00018",
    "name": "Ruth Hankins",
    "dept": "Information Technology",
    "year": 2,
    "email": "ruth.hankins@university.edu"
  },
  "STU00019": {
    "id": "STU00019",
    "name": "Leon Clayton",
    "dept": "Computer Science",
    "year": 3,
    "email": "leon.clayton@university.edu"
  },
  "STU00020": {
    "id": "STU00020",
    "name": "Richard Kiewiet",
    "dept": "Electronics",
    "year": 4,
    "email": "richard.kiewiet@university.edu"
  },
  "STU00021": {
    "id": "STU00021",
    "name": "Sharon Goldman",
    "dept": "Mechanical",
    "year": 1,
    "email": "sharon.goldman@university.edu"
  },
  "STU00022": {
    "id": "STU00022",
    "name": "Arthur Hopkins",
    "dept": "Civil",
    "year": 2,
    "email": "arthur.hopkins@university.edu"
  },
  "STU00023": {
    "id": "STU00023",
    "name": "Michael Redman",
    "dept": "Electrical",
    "year": 3,
    "email": "michael.redman@university.edu"
  },
  "STU00024": {
    "id": "STU00024",
    "name": "Bessie Koch",
    "dept": "Information Technology",
    "year": 4,
    "email": "bessie.koch@university.edu"
  },
  "STU00025": {
    "id": "STU00025",
    "name": "Lillian Simmonds",
    "dept": "Computer Science",
    "year": 1,
    "email": "lillian.simmonds@university.edu"
  },
  "STU00026": {
    "id": "STU00026",
    "name": "Nancy Doerr",
    "dept": "Electronics",
    "year": 2,
    "email": "nancy.doerr@university.edu"
  },
  "STU00027": {
    "id": "STU00027",
    "name": "Amalia Dominguez",
    "dept": "Mechanical",
    "year": 3,
    "email": "amalia.dominguez@university.edu"
  },
  "STU00028": {
    "id": "STU00028",
    "name": "Charlotte Krause",
    "dept": "Civil",
    "year": 4,
    "email": "charlotte.krause@university.edu"
  },
  "STU00029": {
    "id": "STU00029",
    "name": "Joan Tocco",
    "dept": "Electrical",
    "year": 1,
    "email": "joan.tocco@university.edu"
  },
  "STU00030": {
    "id": "STU00030",
    "name": "Michael Ford",
    "dept": "Information Technology",
    "year": 2,
    "email": "michael.ford@university.edu"
  },
  "STU00031": {
    "id": "STU00031",
    "name": "Hugh Mitchell",
    "dept": "Computer Science",
    "year": 3,
    "email": "hugh.mitchell@university.edu"
  },
  "STU00032": {
    "id": "STU00032",
    "name": "Robert Najera",
    "dept": "Electronics",
    "year": 4,
    "email": "robert.najera@university.edu"
  },
  "STU00033": {
    "id": "STU00033",
    "name": "Mike Kelly",
    "dept": "Mechanical",
    "year": 1,
    "email": "mike.kelly@university.edu"
  },
  "STU00034": {
    "id": "STU00034",
    "name": "Jasper Bernard",
    "dept": "Civil",
    "year": 2,
    "email": "jasper.bernard@university.edu"
  },
  "STU00035": {
    "id": "STU00035",
    "name": "Miguel Bagen",
    "dept": "Electrical",
    "year": 3,
    "email": "miguel.bagen@university.edu"
  },
  "STU00036": {
    "id": "STU00036",
    "name": "Angela Cartwright",
    "dept": "Information Technology",
    "year": 4,
    "email": "angela.cartwright@university.edu"
  },
  "STU00037": {
    "id": "STU00037",
    "name": "Jennifer Henderson",
    "dept": "Computer Science",
    "year": 1,
    "email": "jennifer.henderson@university.edu"
  },
  "STU00038": {
    "id": "STU00038",
    "name": "Soila Fuller",
    "dept": "Electronics",
    "year": 2,
    "email": "soila.fuller@university.edu"
  },
  "STU00039": {
    "id": "STU00039",
    "name": "Melissa Murray",
    "dept": "Mechanical",
    "year": 3,
    "email": "melissa.murray@university.edu"
  },
  "STU00040": {
    "id": "STU00040",
    "name": "Betty Shelley",
    "dept": "Civil",
    "year": 4,
    "email": "betty.shelley@university.edu"
  },
  "STU00041": {
    "id": "STU00041",
    "name": "Regina Brown",
    "dept": "Electrical",
    "year": 1,
    "email": "regina.brown@university.edu"
  },
  "STU00042": {
    "id": "STU00042",
    "name": "Gary Turkin",
    "dept": "Information Technology",
    "year": 2,
    "email": "gary.turkin@university.edu"
  },
  "STU00043": {
    "id": "STU00043",
    "name": "Darnell Tait",
    "dept": "Computer Science",
    "year": 3,
    "email": "darnell.tait@university.edu"
  },
  "STU00044": {
    "id": "STU00044",
    "name": "Willie Charles",
    "dept": "Electronics",
    "year": 4,
    "email": "willie.charles@university.edu"
  },
  "STU00045": {
    "id": "STU00045",
    "name": "Doris Wince",
    "dept": "Mechanical",
    "year": 1,
    "email": "doris.wince@university.edu"
  },
  "STU00046": {
    "id": "STU00046",
    "name": "Micheal Thomas",
    "dept": "Civil",
    "year": 2,
    "email": "micheal.thomas@university.edu"
  },
  "STU00047": {
    "id": "STU00047",
    "name": "Stephen Allen",
    "dept": "Electrical",
    "year": 3,
    "email": "stephen.allen@university.edu"
  },
  "STU00048": {
    "id": "STU00048",
    "name": "John Knipper",
    "dept": "Information Technology",
    "year": 4,
    "email": "john.knipper@university.edu"
  },
  "STU00049": {
    "id": "STU00049",
    "name": "Frances Rodriguez",
    "dept": "Computer Science",
    "year": 1,
    "email": "frances.rodriguez@university.edu"
  },
  "STU00050": {
    "id": "STU00050",
    "name": "Joan Hammond",
    "dept": "Electronics",
    "year": 2,
    "email": "joan.hammond@university.edu"
  },
  "STU00051": {
    "id": "STU00051",
    "name": "Thomas Longoria",
    "dept": "Mechanical",
    "year": 3,
    "email": "thomas.longoria@university.edu"
  },
  "STU00052": {
    "id": "STU00052",
    "name": "Michael Williams",
    "dept": "Civil",
    "year": 4,
    "email": "michael.williams@university.edu"
  },
  "STU00053": {
    "id": "STU00053",
    "name": "Jamie Wong",
    "dept": "Electrical",
    "year": 1,
    "email": "jamie.wong@university.edu"
  },
  "STU00054": {
    "id": "STU00054",
    "name": "Mary Gilmore",
    "dept": "Information Technology",
    "year": 2,
    "email": "mary.gilmore@university.edu"
  },
  "STU00055": {
    "id": "STU00055",
    "name": "Janice Parr",
    "dept": "Computer Science",
    "year": 3,
    "email": "janice.parr@university.edu"
  },
  "STU00056": {
    "id": "STU00056",
    "name": "Nan Knauss",
    "dept": "Electronics",
    "year": 4,
    "email": "nan.knauss@university.edu"
  },
  "STU00057": {
    "id": "STU00057",
    "name": "Lisa Juarez",
    "dept": "Mechanical",
    "year": 1,
    "email": "lisa.juarez@university.edu"
  },
  "STU00058": {
    "id": "STU00058",
    "name": "Roger Bevis",
    "dept": "Civil",
    "year": 2,
    "email": "roger.bevis@university.edu"
  },
  "STU00059": {
    "id": "STU00059",
    "name": "Jesus William",
    "dept": "Electrical",
    "year": 3,
    "email": "jesus.william@university.edu"
  },
  "STU00060": {
    "id": "STU00060",
    "name": "Shirley Claypoole",
    "dept": "Information Technology",
    "year": 4,
    "email": "shirley.claypoole@university.edu"
  },
  "STU00061": {
    "id": "STU00061",
    "name": "Helen Diemer",
    "dept": "Computer Science",
    "year": 1,
    "email": "helen.diemer@university.edu"
  },
  "STU00062": {
    "id": "STU00062",
    "name": "Keith Smith",
    "dept": "Electronics",
    "year": 2,
    "email": "keith.smith@university.edu"
  },
  "STU00063": {
    "id": "STU00063",
    "name": "Robert Underwood",
    "dept": "Mechanical",
    "year": 3,
    "email": "robert.underwood@university.edu"
  },
  "STU00064": {
    "id": "STU00064",
    "name": "Donald Delgado",
    "dept": "Civil",
    "year": 4,
    "email": "donald.delgado@university.edu"
  },
  "STU00065": {
    "id": "STU00065",
    "name": "Brian Pickard",
    "dept": "Electrical",
    "year": 1,
    "email": "brian.pickard@university.edu"
  },
  "STU00066": {
    "id": "STU00066",
    "name": "Andrew Davies",
    "dept": "Information Technology",
    "year": 2,
    "email": "andrew.davies@university.edu"
  },
  "STU00067": {
    "id": "STU00067",
    "name": "Debra Rosales",
    "dept": "Computer Science",
    "year": 3,
    "email": "debra.rosales@university.edu"
  },
  "STU00068": {
    "id": "STU00068",
    "name": "Carlos Dominguez",
    "dept": "Electronics",
    "year": 4,
    "email": "carlos.dominguez@university.edu"
  },
  "STU00069": {
    "id": "STU00069",
    "name": "Leonard Cummings",
    "dept": "Mechanical",
    "year": 1,
    "email": "leonard.cummings@university.edu"
  },
  "STU00070": {
    "id": "STU00070",
    "name": "Ann Rudd",
    "dept": "Civil",
    "year": 2,
    "email": "ann.rudd@university.edu"
  },
  "STU00071": {
    "id": "STU00071",
    "name": "Michael Greer",
    "dept": "Electrical",
    "year": 3,
    "email": "michael.greer@university.edu"
  },
  "STU00072": {
    "id": "STU00072",
    "name": "Juana Ferrusi",
    "dept": "Information Technology",
    "year": 4,
    "email": "juana.ferrusi@university.edu"
  },
  "STU00073": {
    "id": "STU00073",
    "name": "Ron Wurzbacher",
    "dept": "Computer Science",
    "year": 1,
    "email": "ron.wurzbacher@university.edu"
  },
  "STU00074": {
    "id": "STU00074",
    "name": "Michael Marshall",
    "dept": "Electronics",
    "year": 2,
    "email": "michael.marshall@university.edu"
  },
  "STU00075": {
    "id": "STU00075",
    "name": "Eric Fifield",
    "dept": "Mechanical",
    "year": 3,
    "email": "eric.fifield@university.edu"
  },
  "STU00076": {
    "id": "STU00076",
    "name": "Leslie Teich",
    "dept": "Civil",
    "year": 4,
    "email": "leslie.teich@university.edu"
  },
  "STU00077": {
    "id": "STU00077",
    "name": "Robert Sutton",
    "dept": "Electrical",
    "year": 1,
    "email": "robert.sutton@university.edu"
  },
  "STU00078": {
    "id": "STU00078",
    "name": "John Skaggs",
    "dept": "Information Technology",
    "year": 2,
    "email": "john.skaggs@university.edu"
  },
  "STU00079": {
    "id": "STU00079",
    "name": "Katelyn Ardrey",
    "dept": "Computer Science",
    "year": 3,
    "email": "katelyn.ardrey@university.edu"
  },
  "STU00080": {
    "id": "STU00080",
    "name": "Lee Torres",
    "dept": "Electronics",
    "year": 4,
    "email": "lee.torres@university.edu"
  },
  "STU00081": {
    "id": "STU00081",
    "name": "Dennis Sawicki",
    "dept": "Mechanical",
    "year": 1,
    "email": "dennis.sawicki@university.edu"
  },
  "STU00082": {
    "id": "STU00082",
    "name": "Michael Carson",
    "dept": "Civil",
    "year": 2,
    "email": "michael.carson@university.edu"
  },
  "STU00083": {
    "id": "STU00083",
    "name": "Marie Fernandez",
    "dept": "Electrical",
    "year": 3,
    "email": "marie.fernandez@university.edu"
  },
  "STU00084": {
    "id": "STU00084",
    "name": "Fred Jackson",
    "dept": "Information Technology",
    "year": 4,
    "email": "fred.jackson@university.edu"
  },
  "STU00085": {
    "id": "STU00085",
    "name": "Eva Flens",
    "dept": "Computer Science",
    "year": 1,
    "email": "eva.flens@university.edu"
  },
  "STU00086": {
    "id": "STU00086",
    "name": "Glen Rubottom",
    "dept": "Electronics",
    "year": 2,
    "email": "glen.rubottom@university.edu"
  },
  "STU00087": {
    "id": "STU00087",
    "name": "Thomas Giannone",
    "dept": "Mechanical",
    "year": 3,
    "email": "thomas.giannone@university.edu"
  },
  "STU00088": {
    "id": "STU00088",
    "name": "Steven Walrath",
    "dept": "Civil",
    "year": 4,
    "email": "steven.walrath@university.edu"
  },
  "STU00089": {
    "id": "STU00089",
    "name": "Julie Remick",
    "dept": "Electrical",
    "year": 1,
    "email": "julie.remick@university.edu"
  },
  "STU00090": {
    "id": "STU00090",
    "name": "Daniel Garcia",
    "dept": "Information Technology",
    "year": 2,
    "email": "daniel.garcia@university.edu"
  },
  "STU00091": {
    "id": "STU00091",
    "name": "Doyle Helton",
    "dept": "Computer Science",
    "year": 3,
    "email": "doyle.helton@university.edu"
  },
  "STU00092": {
    "id": "STU00092",
    "name": "Samuel Eshom",
    "dept": "Electronics",
    "year": 4,
    "email": "samuel.eshom@university.edu"
  },
  "STU00093": {
    "id": "STU00093",
    "name": "Brent Blanchard",
    "dept": "Mechanical",
    "year": 1,
    "email": "brent.blanchard@university.edu"
  },
  "STU00094": {
    "id": "STU00094",
    "name": "Alanna Wickline",
    "dept": "Civil",
    "year": 2,
    "email": "alanna.wickline@university.edu"
  },
  "STU00095": {
    "id": "STU00095",
    "name": "Catherine Haislip",
    "dept": "Electrical",
    "year": 3,
    "email": "catherine.haislip@university.edu"
  },
  "STU00096": {
    "id": "STU00096",
    "name": "Rolando Marshall",
    "dept": "Information Technology",
    "year": 4,
    "email": "rolando.marshall@university.edu"
  },
  "STU00097": {
    "id": "STU00097",
    "name": "Hattie Gardner",
    "dept": "Computer Science",
    "year": 1,
    "email": "hattie.gardner@university.edu"
  },
  "STU00098": {
    "id": "STU00098",
    "name": "Mamie Tomilson",
    "dept": "Electronics",
    "year": 2,
    "email": "mamie.tomilson@university.edu"
  },
  "STU00099": {
    "id": "STU00099",
    "name": "Leah Ankenman",
    "dept": "Mechanical",
    "year": 3,
    "email": "leah.ankenman@university.edu"
  },
  "STU00100": {
    "id": "STU00100",
    "name": "Herman Gomez",
    "dept": "Civil",
    "year": 4,
    "email": "herman.gomez@university.edu"
  }
}

export const attendanceDB: Record<string, Attendance[]> = {
  "STU00001": [
    {
      "studentId": "STU00001",
      "subject": "Data Structures",
      "percentage": 59,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00001",
      "subject": "Web Development",
      "percentage": 54,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00001",
      "subject": "Database Systems",
      "percentage": 75,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00002": [
    {
      "studentId": "STU00002",
      "subject": "Circuit Theory",
      "percentage": 64,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00002",
      "subject": "Signals & Systems",
      "percentage": 54,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00002",
      "subject": "Digital Electronics",
      "percentage": 74,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00003": [
    {
      "studentId": "STU00003",
      "subject": "Thermodynamics",
      "percentage": 91,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00003",
      "subject": "Mechanics",
      "percentage": 70,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00003",
      "subject": "Materials Science",
      "percentage": 51,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00004": [
    {
      "studentId": "STU00004",
      "subject": "Structural Analysis",
      "percentage": 97,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00004",
      "subject": "Surveying",
      "percentage": 61,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00004",
      "subject": "Hydraulics",
      "percentage": 61,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00005": [
    {
      "studentId": "STU00005",
      "subject": "Power Systems",
      "percentage": 93,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00005",
      "subject": "Control Systems",
      "percentage": 99,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00005",
      "subject": "Electrical Machines",
      "percentage": 89,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00006": [
    {
      "studentId": "STU00006",
      "subject": "Database Management",
      "percentage": 67,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00006",
      "subject": "Web Technologies",
      "percentage": 53,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00006",
      "subject": "Networks",
      "percentage": 58,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00007": [
    {
      "studentId": "STU00007",
      "subject": "Data Structures",
      "percentage": 72,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00007",
      "subject": "Web Development",
      "percentage": 98,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00007",
      "subject": "Database Systems",
      "percentage": 61,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00008": [
    {
      "studentId": "STU00008",
      "subject": "Circuit Theory",
      "percentage": 82,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00008",
      "subject": "Signals & Systems",
      "percentage": 91,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00008",
      "subject": "Digital Electronics",
      "percentage": 75,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00009": [
    {
      "studentId": "STU00009",
      "subject": "Thermodynamics",
      "percentage": 65,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00009",
      "subject": "Mechanics",
      "percentage": 69,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00009",
      "subject": "Materials Science",
      "percentage": 58,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00010": [
    {
      "studentId": "STU00010",
      "subject": "Structural Analysis",
      "percentage": 87,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00010",
      "subject": "Surveying",
      "percentage": 87,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00010",
      "subject": "Hydraulics",
      "percentage": 59,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00011": [
    {
      "studentId": "STU00011",
      "subject": "Power Systems",
      "percentage": 84,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00011",
      "subject": "Control Systems",
      "percentage": 74,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00011",
      "subject": "Electrical Machines",
      "percentage": 81,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00012": [
    {
      "studentId": "STU00012",
      "subject": "Database Management",
      "percentage": 83,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00012",
      "subject": "Web Technologies",
      "percentage": 63,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00012",
      "subject": "Networks",
      "percentage": 83,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00013": [
    {
      "studentId": "STU00013",
      "subject": "Data Structures",
      "percentage": 77,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00013",
      "subject": "Web Development",
      "percentage": 60,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00013",
      "subject": "Database Systems",
      "percentage": 97,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00014": [
    {
      "studentId": "STU00014",
      "subject": "Circuit Theory",
      "percentage": 51,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00014",
      "subject": "Signals & Systems",
      "percentage": 81,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00014",
      "subject": "Digital Electronics",
      "percentage": 69,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00015": [
    {
      "studentId": "STU00015",
      "subject": "Thermodynamics",
      "percentage": 79,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00015",
      "subject": "Mechanics",
      "percentage": 60,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00015",
      "subject": "Materials Science",
      "percentage": 88,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00016": [
    {
      "studentId": "STU00016",
      "subject": "Structural Analysis",
      "percentage": 62,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00016",
      "subject": "Surveying",
      "percentage": 67,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00016",
      "subject": "Hydraulics",
      "percentage": 51,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00017": [
    {
      "studentId": "STU00017",
      "subject": "Power Systems",
      "percentage": 90,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00017",
      "subject": "Control Systems",
      "percentage": 76,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00017",
      "subject": "Electrical Machines",
      "percentage": 50,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00018": [
    {
      "studentId": "STU00018",
      "subject": "Database Management",
      "percentage": 65,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00018",
      "subject": "Web Technologies",
      "percentage": 67,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00018",
      "subject": "Networks",
      "percentage": 85,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00019": [
    {
      "studentId": "STU00019",
      "subject": "Data Structures",
      "percentage": 54,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00019",
      "subject": "Web Development",
      "percentage": 72,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00019",
      "subject": "Database Systems",
      "percentage": 73,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00020": [
    {
      "studentId": "STU00020",
      "subject": "Circuit Theory",
      "percentage": 77,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00020",
      "subject": "Signals & Systems",
      "percentage": 60,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00020",
      "subject": "Digital Electronics",
      "percentage": 76,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00021": [
    {
      "studentId": "STU00021",
      "subject": "Thermodynamics",
      "percentage": 88,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00021",
      "subject": "Mechanics",
      "percentage": 70,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00021",
      "subject": "Materials Science",
      "percentage": 51,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00022": [
    {
      "studentId": "STU00022",
      "subject": "Structural Analysis",
      "percentage": 94,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00022",
      "subject": "Surveying",
      "percentage": 93,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00022",
      "subject": "Hydraulics",
      "percentage": 80,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00023": [
    {
      "studentId": "STU00023",
      "subject": "Power Systems",
      "percentage": 69,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00023",
      "subject": "Control Systems",
      "percentage": 54,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00023",
      "subject": "Electrical Machines",
      "percentage": 63,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00024": [
    {
      "studentId": "STU00024",
      "subject": "Database Management",
      "percentage": 73,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00024",
      "subject": "Web Technologies",
      "percentage": 72,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00024",
      "subject": "Networks",
      "percentage": 51,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00025": [
    {
      "studentId": "STU00025",
      "subject": "Data Structures",
      "percentage": 76,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00025",
      "subject": "Web Development",
      "percentage": 90,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00025",
      "subject": "Database Systems",
      "percentage": 78,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00026": [
    {
      "studentId": "STU00026",
      "subject": "Circuit Theory",
      "percentage": 79,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00026",
      "subject": "Signals & Systems",
      "percentage": 74,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00026",
      "subject": "Digital Electronics",
      "percentage": 64,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00027": [
    {
      "studentId": "STU00027",
      "subject": "Thermodynamics",
      "percentage": 94,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00027",
      "subject": "Mechanics",
      "percentage": 90,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00027",
      "subject": "Materials Science",
      "percentage": 61,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00028": [
    {
      "studentId": "STU00028",
      "subject": "Structural Analysis",
      "percentage": 76,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00028",
      "subject": "Surveying",
      "percentage": 59,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00028",
      "subject": "Hydraulics",
      "percentage": 86,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00029": [
    {
      "studentId": "STU00029",
      "subject": "Power Systems",
      "percentage": 75,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00029",
      "subject": "Control Systems",
      "percentage": 71,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00029",
      "subject": "Electrical Machines",
      "percentage": 77,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00030": [
    {
      "studentId": "STU00030",
      "subject": "Database Management",
      "percentage": 56,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00030",
      "subject": "Web Technologies",
      "percentage": 68,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00030",
      "subject": "Networks",
      "percentage": 69,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00031": [
    {
      "studentId": "STU00031",
      "subject": "Data Structures",
      "percentage": 91,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00031",
      "subject": "Web Development",
      "percentage": 50,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00031",
      "subject": "Database Systems",
      "percentage": 88,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00032": [
    {
      "studentId": "STU00032",
      "subject": "Circuit Theory",
      "percentage": 96,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00032",
      "subject": "Signals & Systems",
      "percentage": 56,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00032",
      "subject": "Digital Electronics",
      "percentage": 73,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00033": [
    {
      "studentId": "STU00033",
      "subject": "Thermodynamics",
      "percentage": 87,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00033",
      "subject": "Mechanics",
      "percentage": 53,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00033",
      "subject": "Materials Science",
      "percentage": 70,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00034": [
    {
      "studentId": "STU00034",
      "subject": "Structural Analysis",
      "percentage": 54,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00034",
      "subject": "Surveying",
      "percentage": 50,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00034",
      "subject": "Hydraulics",
      "percentage": 59,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00035": [
    {
      "studentId": "STU00035",
      "subject": "Power Systems",
      "percentage": 72,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00035",
      "subject": "Control Systems",
      "percentage": 64,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00035",
      "subject": "Electrical Machines",
      "percentage": 95,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00036": [
    {
      "studentId": "STU00036",
      "subject": "Database Management",
      "percentage": 77,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00036",
      "subject": "Web Technologies",
      "percentage": 89,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00036",
      "subject": "Networks",
      "percentage": 63,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00037": [
    {
      "studentId": "STU00037",
      "subject": "Data Structures",
      "percentage": 83,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00037",
      "subject": "Web Development",
      "percentage": 61,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00037",
      "subject": "Database Systems",
      "percentage": 86,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00038": [
    {
      "studentId": "STU00038",
      "subject": "Circuit Theory",
      "percentage": 64,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00038",
      "subject": "Signals & Systems",
      "percentage": 71,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00038",
      "subject": "Digital Electronics",
      "percentage": 67,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00039": [
    {
      "studentId": "STU00039",
      "subject": "Thermodynamics",
      "percentage": 81,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00039",
      "subject": "Mechanics",
      "percentage": 71,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00039",
      "subject": "Materials Science",
      "percentage": 73,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00040": [
    {
      "studentId": "STU00040",
      "subject": "Structural Analysis",
      "percentage": 75,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00040",
      "subject": "Surveying",
      "percentage": 99,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00040",
      "subject": "Hydraulics",
      "percentage": 63,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00041": [
    {
      "studentId": "STU00041",
      "subject": "Power Systems",
      "percentage": 97,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00041",
      "subject": "Control Systems",
      "percentage": 96,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00041",
      "subject": "Electrical Machines",
      "percentage": 83,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00042": [
    {
      "studentId": "STU00042",
      "subject": "Database Management",
      "percentage": 80,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00042",
      "subject": "Web Technologies",
      "percentage": 66,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00042",
      "subject": "Networks",
      "percentage": 61,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00043": [
    {
      "studentId": "STU00043",
      "subject": "Data Structures",
      "percentage": 68,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00043",
      "subject": "Web Development",
      "percentage": 78,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00043",
      "subject": "Database Systems",
      "percentage": 71,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00044": [
    {
      "studentId": "STU00044",
      "subject": "Circuit Theory",
      "percentage": 58,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00044",
      "subject": "Signals & Systems",
      "percentage": 95,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00044",
      "subject": "Digital Electronics",
      "percentage": 55,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00045": [
    {
      "studentId": "STU00045",
      "subject": "Thermodynamics",
      "percentage": 78,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00045",
      "subject": "Mechanics",
      "percentage": 63,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00045",
      "subject": "Materials Science",
      "percentage": 85,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00046": [
    {
      "studentId": "STU00046",
      "subject": "Structural Analysis",
      "percentage": 100,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00046",
      "subject": "Surveying",
      "percentage": 99,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00046",
      "subject": "Hydraulics",
      "percentage": 94,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00047": [
    {
      "studentId": "STU00047",
      "subject": "Power Systems",
      "percentage": 88,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00047",
      "subject": "Control Systems",
      "percentage": 69,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00047",
      "subject": "Electrical Machines",
      "percentage": 85,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00048": [
    {
      "studentId": "STU00048",
      "subject": "Database Management",
      "percentage": 53,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00048",
      "subject": "Web Technologies",
      "percentage": 99,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00048",
      "subject": "Networks",
      "percentage": 71,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00049": [
    {
      "studentId": "STU00049",
      "subject": "Data Structures",
      "percentage": 52,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00049",
      "subject": "Web Development",
      "percentage": 97,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00049",
      "subject": "Database Systems",
      "percentage": 63,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00050": [
    {
      "studentId": "STU00050",
      "subject": "Circuit Theory",
      "percentage": 78,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00050",
      "subject": "Signals & Systems",
      "percentage": 82,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00050",
      "subject": "Digital Electronics",
      "percentage": 65,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00051": [
    {
      "studentId": "STU00051",
      "subject": "Thermodynamics",
      "percentage": 60,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00051",
      "subject": "Mechanics",
      "percentage": 92,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00051",
      "subject": "Materials Science",
      "percentage": 85,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00052": [
    {
      "studentId": "STU00052",
      "subject": "Structural Analysis",
      "percentage": 82,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00052",
      "subject": "Surveying",
      "percentage": 64,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00052",
      "subject": "Hydraulics",
      "percentage": 74,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00053": [
    {
      "studentId": "STU00053",
      "subject": "Power Systems",
      "percentage": 87,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00053",
      "subject": "Control Systems",
      "percentage": 61,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00053",
      "subject": "Electrical Machines",
      "percentage": 81,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00054": [
    {
      "studentId": "STU00054",
      "subject": "Database Management",
      "percentage": 60,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00054",
      "subject": "Web Technologies",
      "percentage": 89,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00054",
      "subject": "Networks",
      "percentage": 82,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00055": [
    {
      "studentId": "STU00055",
      "subject": "Data Structures",
      "percentage": 76,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00055",
      "subject": "Web Development",
      "percentage": 69,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00055",
      "subject": "Database Systems",
      "percentage": 94,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00056": [
    {
      "studentId": "STU00056",
      "subject": "Circuit Theory",
      "percentage": 82,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00056",
      "subject": "Signals & Systems",
      "percentage": 79,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00056",
      "subject": "Digital Electronics",
      "percentage": 85,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00057": [
    {
      "studentId": "STU00057",
      "subject": "Thermodynamics",
      "percentage": 70,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00057",
      "subject": "Mechanics",
      "percentage": 87,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00057",
      "subject": "Materials Science",
      "percentage": 69,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00058": [
    {
      "studentId": "STU00058",
      "subject": "Structural Analysis",
      "percentage": 88,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00058",
      "subject": "Surveying",
      "percentage": 52,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00058",
      "subject": "Hydraulics",
      "percentage": 67,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00059": [
    {
      "studentId": "STU00059",
      "subject": "Power Systems",
      "percentage": 80,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00059",
      "subject": "Control Systems",
      "percentage": 77,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00059",
      "subject": "Electrical Machines",
      "percentage": 87,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00060": [
    {
      "studentId": "STU00060",
      "subject": "Database Management",
      "percentage": 87,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00060",
      "subject": "Web Technologies",
      "percentage": 75,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00060",
      "subject": "Networks",
      "percentage": 52,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00061": [
    {
      "studentId": "STU00061",
      "subject": "Data Structures",
      "percentage": 95,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00061",
      "subject": "Web Development",
      "percentage": 79,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00061",
      "subject": "Database Systems",
      "percentage": 72,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00062": [
    {
      "studentId": "STU00062",
      "subject": "Circuit Theory",
      "percentage": 51,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00062",
      "subject": "Signals & Systems",
      "percentage": 62,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00062",
      "subject": "Digital Electronics",
      "percentage": 81,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00063": [
    {
      "studentId": "STU00063",
      "subject": "Thermodynamics",
      "percentage": 76,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00063",
      "subject": "Mechanics",
      "percentage": 62,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00063",
      "subject": "Materials Science",
      "percentage": 94,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00064": [
    {
      "studentId": "STU00064",
      "subject": "Structural Analysis",
      "percentage": 85,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00064",
      "subject": "Surveying",
      "percentage": 51,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00064",
      "subject": "Hydraulics",
      "percentage": 65,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00065": [
    {
      "studentId": "STU00065",
      "subject": "Power Systems",
      "percentage": 60,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00065",
      "subject": "Control Systems",
      "percentage": 86,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00065",
      "subject": "Electrical Machines",
      "percentage": 54,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00066": [
    {
      "studentId": "STU00066",
      "subject": "Database Management",
      "percentage": 96,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00066",
      "subject": "Web Technologies",
      "percentage": 98,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00066",
      "subject": "Networks",
      "percentage": 53,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00067": [
    {
      "studentId": "STU00067",
      "subject": "Data Structures",
      "percentage": 67,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00067",
      "subject": "Web Development",
      "percentage": 87,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00067",
      "subject": "Database Systems",
      "percentage": 70,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00068": [
    {
      "studentId": "STU00068",
      "subject": "Circuit Theory",
      "percentage": 50,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00068",
      "subject": "Signals & Systems",
      "percentage": 51,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00068",
      "subject": "Digital Electronics",
      "percentage": 89,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00069": [
    {
      "studentId": "STU00069",
      "subject": "Thermodynamics",
      "percentage": 84,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00069",
      "subject": "Mechanics",
      "percentage": 85,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00069",
      "subject": "Materials Science",
      "percentage": 63,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00070": [
    {
      "studentId": "STU00070",
      "subject": "Structural Analysis",
      "percentage": 84,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00070",
      "subject": "Surveying",
      "percentage": 75,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00070",
      "subject": "Hydraulics",
      "percentage": 88,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00071": [
    {
      "studentId": "STU00071",
      "subject": "Power Systems",
      "percentage": 80,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00071",
      "subject": "Control Systems",
      "percentage": 60,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00071",
      "subject": "Electrical Machines",
      "percentage": 80,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00072": [
    {
      "studentId": "STU00072",
      "subject": "Database Management",
      "percentage": 77,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00072",
      "subject": "Web Technologies",
      "percentage": 57,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00072",
      "subject": "Networks",
      "percentage": 63,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00073": [
    {
      "studentId": "STU00073",
      "subject": "Data Structures",
      "percentage": 88,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00073",
      "subject": "Web Development",
      "percentage": 93,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00073",
      "subject": "Database Systems",
      "percentage": 55,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00074": [
    {
      "studentId": "STU00074",
      "subject": "Circuit Theory",
      "percentage": 50,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00074",
      "subject": "Signals & Systems",
      "percentage": 89,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00074",
      "subject": "Digital Electronics",
      "percentage": 61,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00075": [
    {
      "studentId": "STU00075",
      "subject": "Thermodynamics",
      "percentage": 74,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00075",
      "subject": "Mechanics",
      "percentage": 92,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00075",
      "subject": "Materials Science",
      "percentage": 65,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00076": [
    {
      "studentId": "STU00076",
      "subject": "Structural Analysis",
      "percentage": 92,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00076",
      "subject": "Surveying",
      "percentage": 71,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00076",
      "subject": "Hydraulics",
      "percentage": 66,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00077": [
    {
      "studentId": "STU00077",
      "subject": "Power Systems",
      "percentage": 87,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00077",
      "subject": "Control Systems",
      "percentage": 69,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00077",
      "subject": "Electrical Machines",
      "percentage": 94,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00078": [
    {
      "studentId": "STU00078",
      "subject": "Database Management",
      "percentage": 69,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00078",
      "subject": "Web Technologies",
      "percentage": 57,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00078",
      "subject": "Networks",
      "percentage": 72,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00079": [
    {
      "studentId": "STU00079",
      "subject": "Data Structures",
      "percentage": 52,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00079",
      "subject": "Web Development",
      "percentage": 78,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00079",
      "subject": "Database Systems",
      "percentage": 63,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00080": [
    {
      "studentId": "STU00080",
      "subject": "Circuit Theory",
      "percentage": 100,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00080",
      "subject": "Signals & Systems",
      "percentage": 89,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00080",
      "subject": "Digital Electronics",
      "percentage": 56,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00081": [
    {
      "studentId": "STU00081",
      "subject": "Thermodynamics",
      "percentage": 51,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00081",
      "subject": "Mechanics",
      "percentage": 75,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00081",
      "subject": "Materials Science",
      "percentage": 95,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00082": [
    {
      "studentId": "STU00082",
      "subject": "Structural Analysis",
      "percentage": 67,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00082",
      "subject": "Surveying",
      "percentage": 79,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00082",
      "subject": "Hydraulics",
      "percentage": 81,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00083": [
    {
      "studentId": "STU00083",
      "subject": "Power Systems",
      "percentage": 93,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00083",
      "subject": "Control Systems",
      "percentage": 66,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00083",
      "subject": "Electrical Machines",
      "percentage": 64,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00084": [
    {
      "studentId": "STU00084",
      "subject": "Database Management",
      "percentage": 59,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00084",
      "subject": "Web Technologies",
      "percentage": 69,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00084",
      "subject": "Networks",
      "percentage": 93,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00085": [
    {
      "studentId": "STU00085",
      "subject": "Data Structures",
      "percentage": 54,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00085",
      "subject": "Web Development",
      "percentage": 65,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00085",
      "subject": "Database Systems",
      "percentage": 66,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00086": [
    {
      "studentId": "STU00086",
      "subject": "Circuit Theory",
      "percentage": 58,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00086",
      "subject": "Signals & Systems",
      "percentage": 95,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00086",
      "subject": "Digital Electronics",
      "percentage": 90,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00087": [
    {
      "studentId": "STU00087",
      "subject": "Thermodynamics",
      "percentage": 51,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00087",
      "subject": "Mechanics",
      "percentage": 92,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00087",
      "subject": "Materials Science",
      "percentage": 96,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00088": [
    {
      "studentId": "STU00088",
      "subject": "Structural Analysis",
      "percentage": 83,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00088",
      "subject": "Surveying",
      "percentage": 56,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00088",
      "subject": "Hydraulics",
      "percentage": 93,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00089": [
    {
      "studentId": "STU00089",
      "subject": "Power Systems",
      "percentage": 87,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00089",
      "subject": "Control Systems",
      "percentage": 65,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00089",
      "subject": "Electrical Machines",
      "percentage": 83,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00090": [
    {
      "studentId": "STU00090",
      "subject": "Database Management",
      "percentage": 80,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00090",
      "subject": "Web Technologies",
      "percentage": 94,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00090",
      "subject": "Networks",
      "percentage": 54,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00091": [
    {
      "studentId": "STU00091",
      "subject": "Data Structures",
      "percentage": 59,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00091",
      "subject": "Web Development",
      "percentage": 96,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00091",
      "subject": "Database Systems",
      "percentage": 94,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00092": [
    {
      "studentId": "STU00092",
      "subject": "Circuit Theory",
      "percentage": 99,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00092",
      "subject": "Signals & Systems",
      "percentage": 97,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00092",
      "subject": "Digital Electronics",
      "percentage": 76,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00093": [
    {
      "studentId": "STU00093",
      "subject": "Thermodynamics",
      "percentage": 61,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00093",
      "subject": "Mechanics",
      "percentage": 76,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00093",
      "subject": "Materials Science",
      "percentage": 72,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00094": [
    {
      "studentId": "STU00094",
      "subject": "Structural Analysis",
      "percentage": 85,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00094",
      "subject": "Surveying",
      "percentage": 72,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00094",
      "subject": "Hydraulics",
      "percentage": 89,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00095": [
    {
      "studentId": "STU00095",
      "subject": "Power Systems",
      "percentage": 70,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00095",
      "subject": "Control Systems",
      "percentage": 73,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00095",
      "subject": "Electrical Machines",
      "percentage": 63,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00096": [
    {
      "studentId": "STU00096",
      "subject": "Database Management",
      "percentage": 98,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00096",
      "subject": "Web Technologies",
      "percentage": 58,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00096",
      "subject": "Networks",
      "percentage": 64,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00097": [
    {
      "studentId": "STU00097",
      "subject": "Data Structures",
      "percentage": 96,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00097",
      "subject": "Web Development",
      "percentage": 84,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00097",
      "subject": "Database Systems",
      "percentage": 92,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00098": [
    {
      "studentId": "STU00098",
      "subject": "Circuit Theory",
      "percentage": 55,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00098",
      "subject": "Signals & Systems",
      "percentage": 69,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00098",
      "subject": "Digital Electronics",
      "percentage": 82,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00099": [
    {
      "studentId": "STU00099",
      "subject": "Thermodynamics",
      "percentage": 97,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00099",
      "subject": "Mechanics",
      "percentage": 86,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00099",
      "subject": "Materials Science",
      "percentage": 80,
      "lastUpdated": "2026-01-27"
    }
  ],
  "STU00100": [
    {
      "studentId": "STU00100",
      "subject": "Structural Analysis",
      "percentage": 98,
      "lastUpdated": "2026-01-29"
    },
    {
      "studentId": "STU00100",
      "subject": "Surveying",
      "percentage": 91,
      "lastUpdated": "2026-01-28"
    },
    {
      "studentId": "STU00100",
      "subject": "Hydraulics",
      "percentage": 84,
      "lastUpdated": "2026-01-27"
    }
  ]
}

export const feesDB: Record<string, Fee[]> = {
  "STU00001": [
    {
      "studentId": "STU00001",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00001",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00002": [
    {
      "studentId": "STU00002",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00002",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00003": [
    {
      "studentId": "STU00003",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00003",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00004": [
    {
      "studentId": "STU00004",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00004",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00005": [
    {
      "studentId": "STU00005",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00005",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00006": [
    {
      "studentId": "STU00006",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00006",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00007": [
    {
      "studentId": "STU00007",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00007",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00008": [
    {
      "studentId": "STU00008",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00008",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00009": [
    {
      "studentId": "STU00009",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00009",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00010": [
    {
      "studentId": "STU00010",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00010",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00011": [
    {
      "studentId": "STU00011",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00011",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00012": [
    {
      "studentId": "STU00012",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00012",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00013": [
    {
      "studentId": "STU00013",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00013",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00014": [
    {
      "studentId": "STU00014",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00014",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00015": [
    {
      "studentId": "STU00015",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00015",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00016": [
    {
      "studentId": "STU00016",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00016",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00017": [
    {
      "studentId": "STU00017",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00017",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00018": [
    {
      "studentId": "STU00018",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00018",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00019": [
    {
      "studentId": "STU00019",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00019",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00020": [
    {
      "studentId": "STU00020",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00020",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00021": [
    {
      "studentId": "STU00021",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00021",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00022": [
    {
      "studentId": "STU00022",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00022",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00023": [
    {
      "studentId": "STU00023",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00023",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00024": [
    {
      "studentId": "STU00024",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00024",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00025": [
    {
      "studentId": "STU00025",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00025",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00026": [
    {
      "studentId": "STU00026",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00026",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00027": [
    {
      "studentId": "STU00027",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00027",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00028": [
    {
      "studentId": "STU00028",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00028",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00029": [
    {
      "studentId": "STU00029",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00029",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00030": [
    {
      "studentId": "STU00030",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00030",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00031": [
    {
      "studentId": "STU00031",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00031",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00032": [
    {
      "studentId": "STU00032",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00032",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00033": [
    {
      "studentId": "STU00033",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00033",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00034": [
    {
      "studentId": "STU00034",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00034",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00035": [
    {
      "studentId": "STU00035",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00035",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00036": [
    {
      "studentId": "STU00036",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00036",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00037": [
    {
      "studentId": "STU00037",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00037",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00038": [
    {
      "studentId": "STU00038",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00038",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00039": [
    {
      "studentId": "STU00039",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00039",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00040": [
    {
      "studentId": "STU00040",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00040",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00041": [
    {
      "studentId": "STU00041",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00041",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00042": [
    {
      "studentId": "STU00042",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00042",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00043": [
    {
      "studentId": "STU00043",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00043",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00044": [
    {
      "studentId": "STU00044",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00044",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00045": [
    {
      "studentId": "STU00045",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00045",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00046": [
    {
      "studentId": "STU00046",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00046",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00047": [
    {
      "studentId": "STU00047",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00047",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00048": [
    {
      "studentId": "STU00048",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00048",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00049": [
    {
      "studentId": "STU00049",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00049",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00050": [
    {
      "studentId": "STU00050",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00050",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00051": [
    {
      "studentId": "STU00051",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00051",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00052": [
    {
      "studentId": "STU00052",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00052",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00053": [
    {
      "studentId": "STU00053",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00053",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00054": [
    {
      "studentId": "STU00054",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00054",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00055": [
    {
      "studentId": "STU00055",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00055",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00056": [
    {
      "studentId": "STU00056",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00056",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00057": [
    {
      "studentId": "STU00057",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00057",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00058": [
    {
      "studentId": "STU00058",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00058",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00059": [
    {
      "studentId": "STU00059",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00059",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00060": [
    {
      "studentId": "STU00060",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00060",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00061": [
    {
      "studentId": "STU00061",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00061",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00062": [
    {
      "studentId": "STU00062",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00062",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00063": [
    {
      "studentId": "STU00063",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00063",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00064": [
    {
      "studentId": "STU00064",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00064",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00065": [
    {
      "studentId": "STU00065",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00065",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00066": [
    {
      "studentId": "STU00066",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00066",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00067": [
    {
      "studentId": "STU00067",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00067",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00068": [
    {
      "studentId": "STU00068",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00068",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00069": [
    {
      "studentId": "STU00069",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00069",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00070": [
    {
      "studentId": "STU00070",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00070",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00071": [
    {
      "studentId": "STU00071",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00071",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00072": [
    {
      "studentId": "STU00072",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00072",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00073": [
    {
      "studentId": "STU00073",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00073",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00074": [
    {
      "studentId": "STU00074",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00074",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00075": [
    {
      "studentId": "STU00075",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00075",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00076": [
    {
      "studentId": "STU00076",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00076",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00077": [
    {
      "studentId": "STU00077",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00077",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00078": [
    {
      "studentId": "STU00078",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00078",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00079": [
    {
      "studentId": "STU00079",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00079",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00080": [
    {
      "studentId": "STU00080",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00080",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00081": [
    {
      "studentId": "STU00081",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00081",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00082": [
    {
      "studentId": "STU00082",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00082",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00083": [
    {
      "studentId": "STU00083",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00083",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00084": [
    {
      "studentId": "STU00084",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00084",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00085": [
    {
      "studentId": "STU00085",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00085",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00086": [
    {
      "studentId": "STU00086",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00086",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00087": [
    {
      "studentId": "STU00087",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00087",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00088": [
    {
      "studentId": "STU00088",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00088",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00089": [
    {
      "studentId": "STU00089",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00089",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00090": [
    {
      "studentId": "STU00090",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00090",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00091": [
    {
      "studentId": "STU00091",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00091",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00092": [
    {
      "studentId": "STU00092",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00092",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00093": [
    {
      "studentId": "STU00093",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00093",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00094": [
    {
      "studentId": "STU00094",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00094",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00095": [
    {
      "studentId": "STU00095",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00095",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00096": [
    {
      "studentId": "STU00096",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00096",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-09-26"
    }
  ],
  "STU00097": [
    {
      "studentId": "STU00097",
      "semester": 1,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-02-28"
    },
    {
      "studentId": "STU00097",
      "semester": 2,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-03-30"
    }
  ],
  "STU00098": [
    {
      "studentId": "STU00098",
      "semester": 3,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-04-29"
    },
    {
      "studentId": "STU00098",
      "semester": 4,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-05-29"
    }
  ],
  "STU00099": [
    {
      "studentId": "STU00099",
      "semester": 5,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-06-28"
    },
    {
      "studentId": "STU00099",
      "semester": 6,
      "totalFee": 50000,
      "paidAmount": 0,
      "dueAmount": 50000,
      "status": "pending",
      "dueDate": "2026-07-28"
    }
  ],
  "STU00100": [
    {
      "studentId": "STU00100",
      "semester": 7,
      "totalFee": 50000,
      "paidAmount": 50000,
      "dueAmount": 0,
      "status": "paid",
      "dueDate": "2026-08-27"
    },
    {
      "studentId": "STU00100",
      "semester": 8,
      "totalFee": 50000,
      "paidAmount": 25000,
      "dueAmount": 25000,
      "status": "partial",
      "dueDate": "2026-09-26"
    }
  ]
}

export const academicsDB: Record<string, Academic[]> = {
  "STU00001": [
    {
      "studentId": "STU00001",
      "semester": 2,
      "gpa": 2.8,
      "grades": {
        "Data Structures": "B+",
        "Web Development": "D",
        "Database Systems": "B"
      },
      "status": "warning"
    }
  ],
  "STU00002": [
    {
      "studentId": "STU00002",
      "semester": 4,
      "gpa": 2.3,
      "grades": {
        "Circuit Theory": "B",
        "Signals & Systems": "D",
        "Digital Electronics": "B-"
      },
      "status": "probation"
    }
  ],
  "STU00003": [
    {
      "studentId": "STU00003",
      "semester": 6,
      "gpa": 2.94,
      "grades": {
        "Thermodynamics": "A",
        "Mechanics": "B-",
        "Materials Science": "D"
      },
      "status": "warning"
    }
  ],
  "STU00004": [
    {
      "studentId": "STU00004",
      "semester": 8,
      "gpa": 2.6,
      "grades": {
        "Structural Analysis": "D",
        "Surveying": "C",
        "Hydraulics": "C"
      },
      "status": "warning"
    }
  ],
  "STU00005": [
    {
      "studentId": "STU00005",
      "semester": 2,
      "gpa": 3.67,
      "grades": {
        "Power Systems": "A",
        "Control Systems": "A",
        "Electrical Machines": "A-"
      },
      "status": "good"
    }
  ],
  "STU00006": [
    {
      "studentId": "STU00006",
      "semester": 4,
      "gpa": 2.05,
      "grades": {
        "Database Management": "C+",
        "Web Technologies": "D",
        "Networks": "D"
      },
      "status": "probation"
    }
  ],
  "STU00007": [
    {
      "studentId": "STU00007",
      "semester": 6,
      "gpa": 2.94,
      "grades": {
        "Data Structures": "D",
        "Web Development": "A",
        "Database Systems": "C"
      },
      "status": "warning"
    }
  ],
  "STU00008": [
    {
      "studentId": "STU00008",
      "semester": 8,
      "gpa": 2.87,
      "grades": {
        "Circuit Theory": "B+",
        "Signals & Systems": "A",
        "Digital Electronics": "B"
      },
      "status": "warning"
    }
  ],
  "STU00009": [
    {
      "studentId": "STU00009",
      "semester": 2,
      "gpa": 2.84,
      "grades": {
        "Thermodynamics": "A",
        "Mechanics": "C+",
        "Materials Science": "D"
      },
      "status": "warning"
    }
  ],
  "STU00010": [
    {
      "studentId": "STU00010",
      "semester": 4,
      "gpa": 3.05,
      "grades": {
        "Structural Analysis": "B",
        "Surveying": "A-",
        "Hydraulics": "D"
      },
      "status": "warning"
    }
  ],
  "STU00011": [
    {
      "studentId": "STU00011",
      "semester": 6,
      "gpa": 2.45,
      "grades": {
        "Power Systems": "C",
        "Control Systems": "B-",
        "Electrical Machines": "B+"
      },
      "status": "probation"
    }
  ],
  "STU00012": [
    {
      "studentId": "STU00012",
      "semester": 8,
      "gpa": 2.62,
      "grades": {
        "Database Management": "C",
        "Web Technologies": "C",
        "Networks": "B+"
      },
      "status": "warning"
    }
  ],
  "STU00013": [
    {
      "studentId": "STU00013",
      "semester": 2,
      "gpa": 2.9,
      "grades": {
        "Data Structures": "A-",
        "Web Development": "C",
        "Database Systems": "A"
      },
      "status": "warning"
    }
  ],
  "STU00014": [
    {
      "studentId": "STU00014",
      "semester": 4,
      "gpa": 2.91,
      "grades": {
        "Circuit Theory": "B-",
        "Signals & Systems": "B+",
        "Digital Electronics": "C+"
      },
      "status": "warning"
    }
  ],
  "STU00015": [
    {
      "studentId": "STU00015",
      "semester": 6,
      "gpa": 2.92,
      "grades": {
        "Thermodynamics": "C+",
        "Mechanics": "C",
        "Materials Science": "A-"
      },
      "status": "warning"
    }
  ],
  "STU00016": [
    {
      "studentId": "STU00016",
      "semester": 8,
      "gpa": 2.17,
      "grades": {
        "Structural Analysis": "C+",
        "Surveying": "C+",
        "Hydraulics": "D"
      },
      "status": "probation"
    }
  ],
  "STU00017": [
    {
      "studentId": "STU00017",
      "semester": 2,
      "gpa": 2.51,
      "grades": {
        "Power Systems": "B-",
        "Control Systems": "B",
        "Electrical Machines": "D"
      },
      "status": "warning"
    }
  ],
  "STU00018": [
    {
      "studentId": "STU00018",
      "semester": 4,
      "gpa": 2.96,
      "grades": {
        "Database Management": "A-",
        "Web Technologies": "C+",
        "Networks": "A-"
      },
      "status": "warning"
    }
  ],
  "STU00019": [
    {
      "studentId": "STU00019",
      "semester": 6,
      "gpa": 2.64,
      "grades": {
        "Data Structures": "C+",
        "Web Development": "B-",
        "Database Systems": "B-"
      },
      "status": "warning"
    }
  ],
  "STU00020": [
    {
      "studentId": "STU00020",
      "semester": 8,
      "gpa": 2.53,
      "grades": {
        "Circuit Theory": "B",
        "Signals & Systems": "C",
        "Digital Electronics": "B"
      },
      "status": "warning"
    }
  ],
  "STU00021": [
    {
      "studentId": "STU00021",
      "semester": 2,
      "gpa": 2.45,
      "grades": {
        "Thermodynamics": "D",
        "Mechanics": "B-",
        "Materials Science": "D"
      },
      "status": "probation"
    }
  ],
  "STU00022": [
    {
      "studentId": "STU00022",
      "semester": 4,
      "gpa": 2.47,
      "grades": {
        "Structural Analysis": "D",
        "Surveying": "A",
        "Hydraulics": "B+"
      },
      "status": "probation"
    }
  ],
  "STU00023": [
    {
      "studentId": "STU00023",
      "semester": 6,
      "gpa": 2.9,
      "grades": {
        "Power Systems": "A",
        "Control Systems": "D",
        "Electrical Machines": "C"
      },
      "status": "warning"
    }
  ],
  "STU00024": [
    {
      "studentId": "STU00024",
      "semester": 8,
      "gpa": 2.59,
      "grades": {
        "Database Management": "B",
        "Web Technologies": "B-",
        "Networks": "D"
      },
      "status": "warning"
    }
  ],
  "STU00025": [
    {
      "studentId": "STU00025",
      "semester": 2,
      "gpa": 3.12,
      "grades": {
        "Data Structures": "B+",
        "Web Development": "A",
        "Database Systems": "B"
      },
      "status": "warning"
    }
  ],
  "STU00026": [
    {
      "studentId": "STU00026",
      "semester": 4,
      "gpa": 2.78,
      "grades": {
        "Circuit Theory": "C+",
        "Signals & Systems": "B-",
        "Digital Electronics": "C"
      },
      "status": "warning"
    }
  ],
  "STU00027": [
    {
      "studentId": "STU00027",
      "semester": 6,
      "gpa": 3.21,
      "grades": {
        "Thermodynamics": "A",
        "Mechanics": "A",
        "Materials Science": "C"
      },
      "status": "warning"
    }
  ],
  "STU00028": [
    {
      "studentId": "STU00028",
      "semester": 8,
      "gpa": 2.94,
      "grades": {
        "Structural Analysis": "A",
        "Surveying": "D",
        "Hydraulics": "A-"
      },
      "status": "warning"
    }
  ],
  "STU00029": [
    {
      "studentId": "STU00029",
      "semester": 2,
      "gpa": 2.49,
      "grades": {
        "Power Systems": "C+",
        "Control Systems": "B-",
        "Electrical Machines": "B"
      },
      "status": "probation"
    }
  ],
  "STU00030": [
    {
      "studentId": "STU00030",
      "semester": 4,
      "gpa": 2.23,
      "grades": {
        "Database Management": "D",
        "Web Technologies": "C+",
        "Networks": "C+"
      },
      "status": "probation"
    }
  ],
  "STU00031": [
    {
      "studentId": "STU00031",
      "semester": 6,
      "gpa": 2.59,
      "grades": {
        "Data Structures": "B+",
        "Web Development": "D",
        "Database Systems": "A-"
      },
      "status": "warning"
    }
  ],
  "STU00032": [
    {
      "studentId": "STU00032",
      "semester": 8,
      "gpa": 1.75,
      "grades": {
        "Circuit Theory": "D",
        "Signals & Systems": "D",
        "Digital Electronics": "B-"
      },
      "status": "probation"
    }
  ],
  "STU00033": [
    {
      "studentId": "STU00033",
      "semester": 2,
      "gpa": 2.23,
      "grades": {
        "Thermodynamics": "C",
        "Mechanics": "D",
        "Materials Science": "B-"
      },
      "status": "probation"
    }
  ],
  "STU00034": [
    {
      "studentId": "STU00034",
      "semester": 4,
      "gpa": 2.07,
      "grades": {
        "Structural Analysis": "A",
        "Surveying": "D",
        "Hydraulics": "D"
      },
      "status": "probation"
    }
  ],
  "STU00035": [
    {
      "studentId": "STU00035",
      "semester": 6,
      "gpa": 2.4,
      "grades": {
        "Power Systems": "D",
        "Control Systems": "C",
        "Electrical Machines": "A"
      },
      "status": "probation"
    }
  ],
  "STU00036": [
    {
      "studentId": "STU00036",
      "semester": 8,
      "gpa": 2.62,
      "grades": {
        "Database Management": "B",
        "Web Technologies": "A-",
        "Networks": "C"
      },
      "status": "warning"
    }
  ],
  "STU00037": [
    {
      "studentId": "STU00037",
      "semester": 2,
      "gpa": 2.68,
      "grades": {
        "Data Structures": "B+",
        "Web Development": "C",
        "Database Systems": "A-"
      },
      "status": "warning"
    }
  ],
  "STU00038": [
    {
      "studentId": "STU00038",
      "semester": 4,
      "gpa": 2.7,
      "grades": {
        "Circuit Theory": "A-",
        "Signals & Systems": "B-",
        "Digital Electronics": "C+"
      },
      "status": "warning"
    }
  ],
  "STU00039": [
    {
      "studentId": "STU00039",
      "semester": 6,
      "gpa": 3.48,
      "grades": {
        "Thermodynamics": "A",
        "Mechanics": "B-",
        "Materials Science": "B-"
      },
      "status": "warning"
    }
  ],
  "STU00040": [
    {
      "studentId": "STU00040",
      "semester": 8,
      "gpa": 2.6,
      "grades": {
        "Structural Analysis": "B",
        "Surveying": "A",
        "Hydraulics": "C"
      },
      "status": "warning"
    }
  ],
  "STU00041": [
    {
      "studentId": "STU00041",
      "semester": 2,
      "gpa": 2.97,
      "grades": {
        "Power Systems": "D",
        "Control Systems": "A",
        "Electrical Machines": "B+"
      },
      "status": "warning"
    }
  ],
  "STU00042": [
    {
      "studentId": "STU00042",
      "semester": 4,
      "gpa": 2.57,
      "grades": {
        "Database Management": "A",
        "Web Technologies": "C+",
        "Networks": "C"
      },
      "status": "warning"
    }
  ],
  "STU00043": [
    {
      "studentId": "STU00043",
      "semester": 6,
      "gpa": 3.41,
      "grades": {
        "Data Structures": "A-",
        "Web Development": "B",
        "Database Systems": "B-"
      },
      "status": "warning"
    }
  ],
  "STU00044": [
    {
      "studentId": "STU00044",
      "semester": 8,
      "gpa": 2.33,
      "grades": {
        "Circuit Theory": "C+",
        "Signals & Systems": "A",
        "Digital Electronics": "D"
      },
      "status": "probation"
    }
  ],
  "STU00045": [
    {
      "studentId": "STU00045",
      "semester": 2,
      "gpa": 3.17,
      "grades": {
        "Thermodynamics": "C+",
        "Mechanics": "C",
        "Materials Science": "A-"
      },
      "status": "warning"
    }
  ],
  "STU00046": [
    {
      "studentId": "STU00046",
      "semester": 4,
      "gpa": 3.43,
      "grades": {
        "Structural Analysis": "B-",
        "Surveying": "A",
        "Hydraulics": "A"
      },
      "status": "warning"
    }
  ],
  "STU00047": [
    {
      "studentId": "STU00047",
      "semester": 6,
      "gpa": 2.8,
      "grades": {
        "Power Systems": "A",
        "Control Systems": "C+",
        "Electrical Machines": "A-"
      },
      "status": "warning"
    }
  ],
  "STU00048": [
    {
      "studentId": "STU00048",
      "semester": 8,
      "gpa": 3.39,
      "grades": {
        "Database Management": "B-",
        "Web Technologies": "A",
        "Networks": "B-"
      },
      "status": "warning"
    }
  ],
  "STU00049": [
    {
      "studentId": "STU00049",
      "semester": 2,
      "gpa": 3.02,
      "grades": {
        "Data Structures": "B",
        "Web Development": "A",
        "Database Systems": "C"
      },
      "status": "warning"
    }
  ],
  "STU00050": [
    {
      "studentId": "STU00050",
      "semester": 4,
      "gpa": 2.67,
      "grades": {
        "Circuit Theory": "B-",
        "Signals & Systems": "B+",
        "Digital Electronics": "C+"
      },
      "status": "warning"
    }
  ],
  "STU00051": [
    {
      "studentId": "STU00051",
      "semester": 6,
      "gpa": 3.75,
      "grades": {
        "Thermodynamics": "A",
        "Mechanics": "A",
        "Materials Science": "A-"
      },
      "status": "good"
    }
  ],
  "STU00052": [
    {
      "studentId": "STU00052",
      "semester": 8,
      "gpa": 2.68,
      "grades": {
        "Structural Analysis": "D",
        "Surveying": "C",
        "Hydraulics": "B-"
      },
      "status": "warning"
    }
  ],
  "STU00053": [
    {
      "studentId": "STU00053",
      "semester": 2,
      "gpa": 2.99,
      "grades": {
        "Power Systems": "A-",
        "Control Systems": "C",
        "Electrical Machines": "B+"
      },
      "status": "warning"
    }
  ],
  "STU00054": [
    {
      "studentId": "STU00054",
      "semester": 4,
      "gpa": 2.65,
      "grades": {
        "Database Management": "D",
        "Web Technologies": "A-",
        "Networks": "B+"
      },
      "status": "warning"
    }
  ],
  "STU00055": [
    {
      "studentId": "STU00055",
      "semester": 6,
      "gpa": 3.43,
      "grades": {
        "Data Structures": "A-",
        "Web Development": "C+",
        "Database Systems": "A"
      },
      "status": "warning"
    }
  ],
  "STU00056": [
    {
      "studentId": "STU00056",
      "semester": 8,
      "gpa": 3.43,
      "grades": {
        "Circuit Theory": "A-",
        "Signals & Systems": "B",
        "Digital Electronics": "A-"
      },
      "status": "warning"
    }
  ],
  "STU00057": [
    {
      "studentId": "STU00057",
      "semester": 2,
      "gpa": 3.31,
      "grades": {
        "Thermodynamics": "B",
        "Mechanics": "A-",
        "Materials Science": "C+"
      },
      "status": "warning"
    }
  ],
  "STU00058": [
    {
      "studentId": "STU00058",
      "semester": 4,
      "gpa": 2.62,
      "grades": {
        "Structural Analysis": "B",
        "Surveying": "D",
        "Hydraulics": "C+"
      },
      "status": "warning"
    }
  ],
  "STU00059": [
    {
      "studentId": "STU00059",
      "semester": 6,
      "gpa": 3.14,
      "grades": {
        "Power Systems": "A",
        "Control Systems": "B",
        "Electrical Machines": "A-"
      },
      "status": "warning"
    }
  ],
  "STU00060": [
    {
      "studentId": "STU00060",
      "semester": 8,
      "gpa": 3.15,
      "grades": {
        "Database Management": "A",
        "Web Technologies": "B",
        "Networks": "D"
      },
      "status": "warning"
    }
  ],
  "STU00061": [
    {
      "studentId": "STU00061",
      "semester": 2,
      "gpa": 2.56,
      "grades": {
        "Data Structures": "B-",
        "Web Development": "B",
        "Database Systems": "B-"
      },
      "status": "warning"
    }
  ],
  "STU00062": [
    {
      "studentId": "STU00062",
      "semester": 4,
      "gpa": 2.62,
      "grades": {
        "Circuit Theory": "B-",
        "Signals & Systems": "C",
        "Digital Electronics": "B+"
      },
      "status": "warning"
    }
  ],
  "STU00063": [
    {
      "studentId": "STU00063",
      "semester": 6,
      "gpa": 3.21,
      "grades": {
        "Thermodynamics": "A",
        "Mechanics": "C",
        "Materials Science": "A"
      },
      "status": "warning"
    }
  ],
  "STU00064": [
    {
      "studentId": "STU00064",
      "semester": 8,
      "gpa": 2.65,
      "grades": {
        "Structural Analysis": "A-",
        "Surveying": "D",
        "Hydraulics": "C+"
      },
      "status": "warning"
    }
  ],
  "STU00065": [
    {
      "studentId": "STU00065",
      "semester": 2,
      "gpa": 1.95,
      "grades": {
        "Power Systems": "D",
        "Control Systems": "A-",
        "Electrical Machines": "D"
      },
      "status": "probation"
    }
  ],
  "STU00066": [
    {
      "studentId": "STU00066",
      "semester": 4,
      "gpa": 2.62,
      "grades": {
        "Database Management": "D",
        "Web Technologies": "A",
        "Networks": "D"
      },
      "status": "warning"
    }
  ],
  "STU00067": [
    {
      "studentId": "STU00067",
      "semester": 6,
      "gpa": 3.17,
      "grades": {
        "Data Structures": "A",
        "Web Development": "A-",
        "Database Systems": "B-"
      },
      "status": "warning"
    }
  ],
  "STU00068": [
    {
      "studentId": "STU00068",
      "semester": 8,
      "gpa": 2.67,
      "grades": {
        "Circuit Theory": "B",
        "Signals & Systems": "D",
        "Digital Electronics": "A-"
      },
      "status": "warning"
    }
  ],
  "STU00069": [
    {
      "studentId": "STU00069",
      "semester": 2,
      "gpa": 3.13,
      "grades": {
        "Thermodynamics": "B-",
        "Mechanics": "A-",
        "Materials Science": "C"
      },
      "status": "warning"
    }
  ],
  "STU00070": [
    {
      "studentId": "STU00070",
      "semester": 4,
      "gpa": 3.19,
      "grades": {
        "Structural Analysis": "A-",
        "Surveying": "B",
        "Hydraulics": "A-"
      },
      "status": "warning"
    }
  ],
  "STU00071": [
    {
      "studentId": "STU00071",
      "semester": 6,
      "gpa": 2.5,
      "grades": {
        "Power Systems": "B",
        "Control Systems": "C",
        "Electrical Machines": "B+"
      },
      "status": "warning"
    }
  ],
  "STU00072": [
    {
      "studentId": "STU00072",
      "semester": 8,
      "gpa": 2.14,
      "grades": {
        "Database Management": "B",
        "Web Technologies": "D",
        "Networks": "C"
      },
      "status": "probation"
    }
  ],
  "STU00073": [
    {
      "studentId": "STU00073",
      "semester": 2,
      "gpa": 2.76,
      "grades": {
        "Data Structures": "D",
        "Web Development": "A",
        "Database Systems": "D"
      },
      "status": "warning"
    }
  ],
  "STU00074": [
    {
      "studentId": "STU00074",
      "semester": 4,
      "gpa": 2.79,
      "grades": {
        "Circuit Theory": "A",
        "Signals & Systems": "A-",
        "Digital Electronics": "C"
      },
      "status": "warning"
    }
  ],
  "STU00075": [
    {
      "studentId": "STU00075",
      "semester": 6,
      "gpa": 2.75,
      "grades": {
        "Thermodynamics": "C",
        "Mechanics": "A",
        "Materials Science": "C+"
      },
      "status": "warning"
    }
  ],
  "STU00076": [
    {
      "studentId": "STU00076",
      "semester": 8,
      "gpa": 3.0,
      "grades": {
        "Structural Analysis": "A",
        "Surveying": "B-",
        "Hydraulics": "C+"
      },
      "status": "warning"
    }
  ],
  "STU00077": [
    {
      "studentId": "STU00077",
      "semester": 2,
      "gpa": 2.65,
      "grades": {
        "Power Systems": "D",
        "Control Systems": "C+",
        "Electrical Machines": "A"
      },
      "status": "warning"
    }
  ],
  "STU00078": [
    {
      "studentId": "STU00078",
      "semester": 4,
      "gpa": 2.29,
      "grades": {
        "Database Management": "A-",
        "Web Technologies": "D",
        "Networks": "B-"
      },
      "status": "probation"
    }
  ],
  "STU00079": [
    {
      "studentId": "STU00079",
      "semester": 6,
      "gpa": 2.4,
      "grades": {
        "Data Structures": "D",
        "Web Development": "B",
        "Database Systems": "C"
      },
      "status": "probation"
    }
  ],
  "STU00080": [
    {
      "studentId": "STU00080",
      "semester": 8,
      "gpa": 2.65,
      "grades": {
        "Circuit Theory": "B",
        "Signals & Systems": "A-",
        "Digital Electronics": "D"
      },
      "status": "warning"
    }
  ],
  "STU00081": [
    {
      "studentId": "STU00081",
      "semester": 2,
      "gpa": 3.63,
      "grades": {
        "Thermodynamics": "B+",
        "Mechanics": "B",
        "Materials Science": "A"
      },
      "status": "good"
    }
  ],
  "STU00082": [
    {
      "studentId": "STU00082",
      "semester": 4,
      "gpa": 2.39,
      "grades": {
        "Structural Analysis": "D",
        "Surveying": "B",
        "Hydraulics": "B+"
      },
      "status": "probation"
    }
  ],
  "STU00083": [
    {
      "studentId": "STU00083",
      "semester": 6,
      "gpa": 2.6,
      "grades": {
        "Power Systems": "B+",
        "Control Systems": "C+",
        "Electrical Machines": "C"
      },
      "status": "warning"
    }
  ],
  "STU00084": [
    {
      "studentId": "STU00084",
      "semester": 8,
      "gpa": 2.94,
      "grades": {
        "Database Management": "B-",
        "Web Technologies": "C+",
        "Networks": "A"
      },
      "status": "warning"
    }
  ],
  "STU00085": [
    {
      "studentId": "STU00085",
      "semester": 2,
      "gpa": 2.63,
      "grades": {
        "Data Structures": "B",
        "Web Development": "C+",
        "Database Systems": "C+"
      },
      "status": "warning"
    }
  ],
  "STU00086": [
    {
      "studentId": "STU00086",
      "semester": 4,
      "gpa": 3.13,
      "grades": {
        "Circuit Theory": "D",
        "Signals & Systems": "A",
        "Digital Electronics": "A"
      },
      "status": "warning"
    }
  ],
  "STU00087": [
    {
      "studentId": "STU00087",
      "semester": 6,
      "gpa": 3.37,
      "grades": {
        "Thermodynamics": "A",
        "Mechanics": "A",
        "Materials Science": "A"
      },
      "status": "warning"
    }
  ],
  "STU00088": [
    {
      "studentId": "STU00088",
      "semester": 8,
      "gpa": 2.18,
      "grades": {
        "Structural Analysis": "D",
        "Surveying": "D",
        "Hydraulics": "A"
      },
      "status": "probation"
    }
  ],
  "STU00089": [
    {
      "studentId": "STU00089",
      "semester": 2,
      "gpa": 2.96,
      "grades": {
        "Power Systems": "C+",
        "Control Systems": "C+",
        "Electrical Machines": "B+"
      },
      "status": "warning"
    }
  ],
  "STU00090": [
    {
      "studentId": "STU00090",
      "semester": 4,
      "gpa": 2.66,
      "grades": {
        "Database Management": "C+",
        "Web Technologies": "A",
        "Networks": "D"
      },
      "status": "warning"
    }
  ],
  "STU00091": [
    {
      "studentId": "STU00091",
      "semester": 6,
      "gpa": 3.33,
      "grades": {
        "Data Structures": "B",
        "Web Development": "A",
        "Database Systems": "A"
      },
      "status": "warning"
    }
  ],
  "STU00092": [
    {
      "studentId": "STU00092",
      "semester": 8,
      "gpa": 2.99,
      "grades": {
        "Circuit Theory": "B+",
        "Signals & Systems": "A",
        "Digital Electronics": "B"
      },
      "status": "warning"
    }
  ],
  "STU00093": [
    {
      "studentId": "STU00093",
      "semester": 2,
      "gpa": 2.75,
      "grades": {
        "Thermodynamics": "B+",
        "Mechanics": "B",
        "Materials Science": "B-"
      },
      "status": "warning"
    }
  ],
  "STU00094": [
    {
      "studentId": "STU00094",
      "semester": 4,
      "gpa": 2.89,
      "grades": {
        "Structural Analysis": "A",
        "Surveying": "B-",
        "Hydraulics": "A-"
      },
      "status": "warning"
    }
  ],
  "STU00095": [
    {
      "studentId": "STU00095",
      "semester": 6,
      "gpa": 2.55,
      "grades": {
        "Power Systems": "A-",
        "Control Systems": "B-",
        "Electrical Machines": "C"
      },
      "status": "warning"
    }
  ],
  "STU00096": [
    {
      "studentId": "STU00096",
      "semester": 8,
      "gpa": 2.44,
      "grades": {
        "Database Management": "B",
        "Web Technologies": "D",
        "Networks": "C"
      },
      "status": "probation"
    }
  ],
  "STU00097": [
    {
      "studentId": "STU00097",
      "semester": 2,
      "gpa": 3.57,
      "grades": {
        "Data Structures": "B",
        "Web Development": "B+",
        "Database Systems": "A"
      },
      "status": "good"
    }
  ],
  "STU00098": [
    {
      "studentId": "STU00098",
      "semester": 4,
      "gpa": 2.55,
      "grades": {
        "Circuit Theory": "C",
        "Signals & Systems": "C+",
        "Digital Electronics": "B+"
      },
      "status": "warning"
    }
  ],
  "STU00099": [
    {
      "studentId": "STU00099",
      "semester": 6,
      "gpa": 2.92,
      "grades": {
        "Thermodynamics": "C+",
        "Mechanics": "A-",
        "Materials Science": "B+"
      },
      "status": "warning"
    }
  ],
  "STU00100": [
    {
      "studentId": "STU00100",
      "semester": 8,
      "gpa": 2.81,
      "grades": {
        "Structural Analysis": "C+",
        "Surveying": "A",
        "Hydraulics": "B+"
      },
      "status": "warning"
    }
  ]
}

export const timetableDB: Timetable[] = [
  { day: "Monday", subject: "Data Structures", time: "09:00 - 10:30", room: "A101", instructor: "Dr. Sharma" },
  { day: "Monday", subject: "Web Development", time: "11:00 - 12:30", room: "B202", instructor: "Prof. Verma" },
  { day: "Tuesday", subject: "Database Systems", time: "09:00 - 10:30", room: "A101", instructor: "Dr. Malhotra" },
  { day: "Wednesday", subject: "Circuit Theory", time: "10:00 - 11:30", room: "C303", instructor: "Prof. Singh" },
  { day: "Thursday", subject: "Thermodynamics", time: "09:00 - 10:30", room: "D404", instructor: "Dr. Desai" },
  { day: "Friday", subject: "Web Development", time: "14:00 - 15:30", room: "B202", instructor: "Prof. Verma" },
]

export const getStudentById = (id: string): Student | undefined => studentsDB[id]
export const getAttendance = (studentId: string): Attendance[] => attendanceDB[studentId] || []
export const getTimetable = (day?: string): Timetable[] => {
  if (!day) return timetableDB
  return timetableDB.filter((t) => t.day.toLowerCase() === day.toLowerCase())
}
export const getFees = (studentId: string): Fee[] => feesDB[studentId] || []
export const getAcademics = (studentId: string): Academic[] => academicsDB[studentId] || []
