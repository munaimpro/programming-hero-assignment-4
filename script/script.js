// Job data
let jobs = [
    {
        id: 1,
        company: "Mobile First Corp",
        role: "React Native Developer",
        status: "not_applied"
    },
    {
        id: 2,
        company: "WebFlow Agency",
        role: "Web Designer & Developer",
        status: "interview"
    },
    {
        id: 3,
        company: "WebFlow Agency",
        role: "Web Designer & Developer",
        status: "rejected"
    }
];


// Filter and count total job according to job status
function getJobCount() {
    return {
        totalJob: jobs.length,
        interviewJob: jobs.filter(j => j.status == 'interview').length,
        rejectedJob: jobs.filter(j => j.status == 'rejected').length,
    };
}

console.log(getJobCount())

// Render job stats on the dashboard
function renderJobCountOnDashboard() {
    const jobCount = getJobCount();

    document.getElementById('total-job').innerText = jobCount.totalJob;
    document.getElementById('interview-job').innerText = jobCount.interviewJob;
    document.getElementById('rejected-job').innerText = jobCount.rejectedJob;
}

renderJobCountOnDashboard()