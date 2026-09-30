const pullUpAdaptations = [
    "Ring Rows",
    "Pull-up com band (elástico)",
    "Jumping Pull-ups(com caixa)"
];

const pushUpAdaptations = [
    "Push-ups com apoio"
];

const girls = [
    // {
    //     name: "ANGIE",
    //     wod: {
    //         type: "FOR TIME",
    //         description: [
    //             "100 Pull-ups",
    //             "100 Push-ups",
    //             "100 Sit-ups",
    //             "100 Air Squats"
    //         ]
    //     },
    //     movements: [
    //         "pull_up",
    //         "push_up",
    //         "sit_up",
    //         "air_squat"
    //     ],
    //     adaptations: {
    //         time: [],
    //         movements: {
    //             pull_up: pullUpAdaptations,
    //             push_up: pushUpAdaptations
    //         }
    //     }
    // },

    {
        name: "ANNIE",
        wod: {
            type: "FOR TIME",
            description: [
                "50-40-30-20-10",
                "Double Unders",
                "Sit-ups"
            ]
        },
        movements: [
            "double_under",
            "sit_up"
        ],
        adaptations: {
            time: [],
            movements: {
                double_under: [
                    "Single Unders"
                ]
            }
        }
    },

    {
        name: "BARBARA",
        wod: {
            type: "5 ROUNDS",
            description: [
                "20 Pull-ups",
                "30 Push-ups",
                "40 Sit-ups",
                "50 Air Squats",
                "Rest 3 min"
            ]
        },
        movements: [
            "pull_up",
            "push_up",
            "sit_up",
            "air_squat"
        ],
        adaptations: {
            time: [
                "3 rounds",
                "4 rounds"
            ],
            movements: {
                pull_up: pullUpAdaptations,
                push_up: pushUpAdaptations
            }
        }
    },

    {
        name: "CINDY",
        wod: {
            type: "AMRAP 20",
            description: [
                "5 Pull-ups",
                "10 Push-ups",
                "15 Air Squats"
            ]
        },
        movements: [
            "pull_up",
            "push_up",
            "air_squat"
        ],
        adaptations: {
            time: [
                "AMRAP 10 min",
                "AMRAP 12 min",
                "AMRAP 15 min"
            ],
            movements: {
                pull_up: pullUpAdaptations,
                push_up: pushUpAdaptations
            }
        }
    },

    {
        name: "DIANE",
        wod: {
            type: "21-15-9",
            description: [
                "Deadlift",
                "Handstand Push-ups"
            ]
        },
        movements: [
            "deadlift",
            "handstand_push_up"
        ],
        adaptations: {
            time: [],
            movements: {
                handstand_push_up: [
                    "DB Shoulder Press",
                    "Push-ups"
                ]
            }
        }
    },

    {
        name: "ELIZABETH",
        wod: {
            type: "21-15-9",
            description: [
                "Cleans",
                "Ring Dips"
            ]
        },
        movements: [
            "clean",
            "ring_dip"
        ],
        adaptations: {
            time: [],
            movements: {
                ring_dip: [
                    "Bench Dips",
                    "Push-ups"
                ]
            }
        }
    },

    {
        name: "FRAN",
        wod: {
            type: "21-15-9",
            description: [
                "Thrusters 💀",
                "Pull-ups"
            ]
        },
        movements: [
            "thruster",
            "pull_up"
        ],
        adaptations: {
            time: [],
            movements: {
                pull_up: pullUpAdaptations
            }
        }
    },

    {
        name: "GRACE",
        wod: {
            type: "FOR TIME",
            description: [
                "30 Clean & Jerks"
            ]
        },
        movements: [
            "clean_and_jerk"
        ],
        adaptations: {
            time: [
                "20 Clean & Jerks"
            ],
            movements: {}
        }
    },

    {
        name: "HELEN",
        wod: {
            type: "3 ROUNDS FOR TIME",
            description: [
                "400m Run",
                "21 Kettlebell Swings",
                "12 Pull-ups"
            ]
        },
        movements: [
            "running",
            "kettlebell_swing",
            "pull_up"
        ],
        adaptations: {
            time: [
                "AMRAP 10 min",
                "AMRAP 12 min",
                "AMRAP 15 min"
            ],
            movements: {
                pull_up: pullUpAdaptations
            }
        }
    },

    {
        name: "ISABEL",
        wod: {
            type: "FOR TIME",
            description: [
                "30 Snatches"
            ]
        },
        movements: [
            "snatch"
        ],
        adaptations: {
            time: [
                "20 Snatches"
            ],
            movements: {}
        }
    },

    {
        name: "JACKIE",
        wod: {
            type: "FOR TIME",
            description: [
                "1000m Row",
                "50 Thrusters 💀",
                "30 Pull-ups"
            ]
        },
        movements: [
            "rowing",
            "thruster",
            "pull_up"
        ],
        adaptations: {
            time: [],
            movements: {
                row: [
                    "Air Bike - 3 min",
                    "Corrida - 800m"
                ],
                pull_up: pullUpAdaptations
            }
        }
    },

    {
        name: "KAREN",
        wod: {
            type: "FOR TIME",
            description: [
                "150 Wall Balls"
            ]
        },
        movements: [
            "wall_ball"
        ],
        adaptations: {
            time: [
                "100 Wall Balls"
            ],
            movements: {}
        }
    },

    {
        name: "KELLY",
        wod: {
            type: "5 ROUNDS FOR TIME",
            description: [
                "400m Run",
                "30 Box Jumps",
                "30 Wall Balls"
            ]
        },
        movements: [
            "running",
            "box_jump",
            "wall_ball"
        ],
        adaptations: {
            time: [
                "3 rounds",
                "AMRAP 10 min",
                "AMRAP 12 min",
                "AMRAP 15 min"
            ],
            movements: {}
        }
    },

    {
        name: "LINDA",
        wod: {
            type: "FOR TIME",
            description: [
                "10-9-8-7-6-5-4-3-2-1",
                "Deadlift",
                "Bench Press",
                "Clean"
            ]
        },
        movements: [
            "deadlift",
            "bench_press",
            "clean"
        ],
        adaptations: {
            time: [],
            movements: {}
        }
    },

    {
        name: "MARY",
        wod: {
            type: "AMRAP 20",
            description: [
                "5 Handstand Push-ups",
                "10 Pistols",
                "15 Pull-ups"
            ]
        },
        movements: [
            "handstand_push_up",
            "pistol",
            "pull_up"
        ],
        adaptations: {
            time: [
                "AMRAP 10 min",
                "AMRAP 12 min",
                "AMRAP 15 min"
            ],
            movements: {
                handstand_push_up: [
                    "DB Shoulder Press",
                    "Push-ups"
                ],
                pistol: [
                    "Air Squats",
                    "Box Squats"
                ],
                pull_up: pullUpAdaptations
            }
        }
    },

    {
        name: "NANCY",
        wod: {
            type: "5 ROUNDS FOR TIME",
            description: [
                "400m Run",
                "15 Overhead Squats"
            ]
        },
        movements: [
            "running",
            "overhead_squat"
        ],
        adaptations: {
            time: [
                "3 rounds",
                "AMRAP 10 min",
                "AMRAP 12 min",
                "AMRAP 15 min"
            ],
            movements: {}
        }
    },

    {
        name: "RACHEL",
        wod: {
            type: "3 ROUNDS FOR TIME",
            description: [
                "3 Cleans",
                "6 Front Squats",
                "9 Pull-ups"
            ]
        },
        movements: [
            "clean",
            "front_squat",
            "pull_up"
        ],
        adaptations: {
            time: [],
            movements: {
                pull_up: pullUpAdaptations
            }
        }
    },

    {
        name: "STEPHEN",
        wod: {
            type: "30-20-10",
            description: [
                "GHD Sit-ups",
                "Back Extensions",
                "Kettlebell Swings"
            ]
        },
        movements: [
            "ghd_sit_up",
            "back_extension",
            "kettlebell_swing"
        ],
        adaptations: {
            time: [],
            movements: {
                ghd_sit_up: [
                    "Sit-ups"
                ],
                back_extension: [
                    "Superman"
                ]
            }
        }
    },

    {
        name: "TABITHA",
        wod: {
            type: "FOR TIME",
            description: [
                "Pull-ups",
                "Push-ups",
                "Sit-ups",
                "Air Squats"
            ]
        },
        movements: [
            "pull_up",
            "push_up",
            "sit_up",
            "air_squat"
        ],
        adaptations: {
            time: [],
            movements: {
                pull_up: pullUpAdaptations,
                push_up: pushUpAdaptations
            }
        }
    }
];