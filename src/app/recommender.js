const learningModelRecommendations = {
    active: {
        'Recommendation': 'Engage in hands-on activities, group discussions, or experiments to enhance your understanding',
        'Interactive Activity': 'Join a study group, participate in role-playing exercises, or create flashcards for interactive learning'
    },
    reflective: {
        'Recommendation': 'Take time for self-reflection, journaling, and thoughtful analysis of the material',
        'Interactive Activity': 'Create a reflective journal, engage in solo brainstorming sessions, or use mind maps for organizing thoughts'
    },
    sensing: {
        'Recommendation': 'Focus on concrete facts, practical examples, and real-world applications',
        'Interactive Activity': 'Conduct hands-on experiments, relate concepts to real-life scenarios, or use case studies for better understanding'
    },
    intuitive: {
        'Recommendation': 'Explore abstract concepts, theories, and make connections between different ideas',
        'Interactive Activity': 'Engage in discussions about hypothetical scenarios, explore creative projects, or relate information to overarching concepts'
    },
    visual: {
        'Recommendation': 'Use visual aids such as charts, diagrams, and graphs to reinforce learning',
        'Interactive Activity': 'Create mind maps, use educational videos or animations, and draw diagrams to represent information visually'
    },
    verbal: {
        'Recommendation': 'Focus on reading, writing, and discussing concepts with others',
        'Interactive Activity': 'Write summaries or essays, participate in debates, and engage in verbal discussions with peers'
    },
    sequential: {
        'Recommendation': 'Follow a structured, step-by-step approach to learning. Break down information into smaller parts',
        'Interactive Activity': 'Create detailed outlines, follow study guides, and organize information in a sequential manner'
    },
    global: {
        'Recommendation': 'Understand the big picture first and then delve into details. Make connections between different concepts',
        'Interactive Activity': 'Use concept maps, engage in discussions about overarching themes, and explore interdisciplinary connections'
    }
};

// function to get learning styles
function getDominantLearningStyles(inputObject) {
    // Define a result object to store the dominant styles
    const result = {};

    // Loop through each category in the input object
    for (const category in inputObject) {
        // Get the learning styles array for the current category
        const learningStyles = inputObject[category];

        // Create an object to store counts for each learning style in the current category
        const styleCounts = {};

        // Loop through each learning style in the array
        learningStyles.forEach(style => {
            // Check if the style exists in the styleCounts object
            if (styleCounts[style]) {
                // If it exists, increment the count
                styleCounts[style]++;
            } else {
                // If it doesn't exist, initialize the count to 1
                styleCounts[style] = 1;
            }
        });

        // Find the learning style with the highest count in the current category
        const dominantStyle = Object.keys(styleCounts).reduce((a, b) => styleCounts[a] > styleCounts[b] ? a : b);

        // Assign the dominant learning style to the result object
        result[category] = dominantStyle;
    }

    return result;
}


// exposed recommender function]
export function recommender(myObject) {
    // get the learning styles from myObject
    const dominantStylesObject = getDominantLearningStyles(myObject);
    let recommend_activity = [];
    let recommend_statemnt = [];
    
    //curate recommended activity
    recommend_activity.push(learningModelRecommendations[dominantStylesObject.input]['Interactive Activity']);
    recommend_activity.push(learningModelRecommendations[dominantStylesObject.perception]['Interactive Activity']);
    recommend_activity.push(learningModelRecommendations[dominantStylesObject.processing]['Interactive Activity']);
    recommend_activity.push(learningModelRecommendations[dominantStylesObject.understanding]['Interactive Activity']);
    
    // curate learning style affirmation statements
    recommend_statemnt.push(learningModelRecommendations[dominantStylesObject.input]['Recommendation']);
    recommend_statemnt.push(learningModelRecommendations[dominantStylesObject.perception]['Recommendation']);
    recommend_statemnt.push(learningModelRecommendations[dominantStylesObject.processing]['Recommendation']);
    recommend_statemnt.push(learningModelRecommendations[dominantStylesObject.understanding]['Recommendation']);
    
    // convert outputs to string
    let dominant_styles = Object.values(dominantStylesObject);
    dominant_styles = dominant_styles.join('-->');
    recommend_activity = recommend_activity.join(', ');
    recommend_statemnt = recommend_statemnt.join(', ');
    
    return [dominant_styles, recommend_activity, recommend_statemnt];    
}
