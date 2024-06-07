function scoreInclusivity(content) {
    const inclusivitySubcategories = {
        'Youth Representation': {
            questions: [
                {
                    text: "Does the article cite a person described as a ‘youth’ or ‘young person’ or include a citation from a person under 35 years of age, or is the topic about youth rights or issues?",
                    scoreYes: 1,
                    scoreNo: 0,
                    keywords: ['youth', 'young person', 'under 35']
                }
            ]
        },
        'Inclusion of Minority Voices': {
            questions: [
                {
                    text: "Does the story actively include and positively highlight the experiences, opinions, and stories of minority groups and traditionally excluded sectors?",
                    scoreYes: 1,
                    scoreNo: 0,
                    keywords: ['minority groups', 'traditionally excluded sectors']
                }
            ]
        },
        // ... other subcategories
    };

    let totalScore = 0;
    for (const subcategory in inclusivitySubcategories) {
        const subcat = inclusivitySubcategories[subcategory];
        subcat.questions.forEach(question => {
            // Check if any keyword is in content
            const hasKeywords = question.keywords.some(keyword => content.toLowerCase().includes(keyword.toLowerCase()));
            totalScore += hasKeywords ? question.scoreYes : question.scoreNo;
        });
    }
    return totalScore;
}

function updateResultsUI(analysisResults) {
    // Create and populate the table with categories and scores
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    const table = document.createElement('table');
    for (const category in analysisResults) {
        const tr = document.createElement('tr');
        const tdCategory = document.createElement('td');
        tdCategory.textContent = category;
        const tdScore = document.createElement('td');
        tdScore.textContent = analysisResults[category];
        tr.appendChild(tdCategory);
        tr.appendChild(tdScore);
        table.appendChild(tr);
    }
    resultsDiv.appendChild(table);
}
