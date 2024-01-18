the function accepts arguments with the object structure below

let myObject = {
    "perception": [
        "sensing",
        "intuitive",
        "intuitive"
    ],
    "input": [
        "visual",
        "verbal",
        "visual"
    ],
    "processing": [
        "reflective",
        "active",
        "active"
    ],
    "understanding": [
        "global",
        "global",
        "sequential"
    ]
};

its return is a list with two elements with index[0,1]
0 - dominant_styles
1 - recommend_activity
2 - recommend_statemnt

the reponse should be displayed to the user after the form is submitted and processed