// Job data
let jobs = [
    {
        id: 1,
        company: "Mobile First Corp",
        role: "React Native Developer",
        location: "Seattle, WA",
        jobType: "Full-time",
        salary: "$140,000 - $190,000",
        status: "not_applied"
    },
    {
        id: 2,
        company: "WebFlow Agency",
        role: "Web Designer & Developer",
        location: "Seattle, WA",
        jobType: "Full-time",
        salary: "$140,000 - $190,000",
        status: "interview"
    },
    {
        id: 3,
        company: "Dummy Company",
        role: "Web Designer & Developer",
        location: "Seattle, WA",
        jobType: "Full-time",
        salary: "$140,000 - $190,000",
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

// Render filtered job list
function renderFilteredJobs(activeTab = 'all') {
    const jobListContainer = document.getElementById('job-list');

    // Empty job container
    jobListContainer.innerHTML = '';

    // Filter job list according to active tab
    let filteredJob = jobs;
    if (activeTab != 'all') {
        filteredJob = jobs.filter(j => j.status == activeTab);
    }

    // Render job list
    filteredJob.forEach(job => {
        let jobStatusButton = '';
        if (job.status == 'not_applied') {
            jobStatusButton = `<button class="btn uppercase text-[#002C5C] bg-[#EEF4FF] border-0 font-medium text-[14px]">not applied</button>`
        }

        if (job.status == 'interview') {
            jobStatusButton = `<button class="btn bg-green-900 uppercase border border-green-200 font-medium text-[14px] shadow-none hover:bg-green-900 text-green-200">interview</button>`
        }

        if (job.status == 'rejected') {
            jobStatusButton = `<button class="btn bg-red-900 uppercase border border-red-200 font-medium text-[14px] shadow-none hover:bg-red-900 text-red-200">rejected</button>`
        }

        jobListContainer.innerHTML += `
                <div class="job-item space-y-4 p-6 rounded-lg border border-[#F1F2F4] bg-base-100 mb-3">
                    <!-- job header -->
                    <div class="flex justify-between align-middle">
                        <div class="job-title">
                            <h2 class="text-[#002C5C] font-semibold text-[18px]">${job.company}</h2>
                            <p class="text-[#64748B] font-normal">${job.role}</p>
                        </div>
                        <div class="delete-button">
                            <button class="btn btn-circle bg-base-100 text-[#64748B]"><i class="fa-regular fa-trash-can"></i></button>
                        </div>
                    </div>
                    <!-- job meta -->
                    <div class="job-meta text-[#64748B] text-[14px]">
                        <p>${job.location}
                        •
                        ${job.jobType}
                        •
                        ${job.salary}</p>
                    </div>
                    <!-- job status -->
                    <div class="job-status">
                        ${jobStatusButton}
                        <p class="text-[14px] text-[#323B49] font-medium mt-2">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>
                    <!-- job action -->
                    <div class="job-action flex justify-start align-middle gap-2">
                        <button class="btn btn-outline btn-success uppercase font-semibold hover:text-white shadow-none">Interview</button>
                        <button class="btn btn-outline btn-error uppercase font-semibold hover:text-white shadow-none">Rejected</button>
                    </div>
                </div>`;
    });

    // Render dashboard stats
    renderJobCountOnDashboard();
}

// Render filtered job list on tab activation
renderFilteredJobs('all');
document.getElementById('all-tab').addEventListener('click', function () {
    renderFilteredJobs('all');
});
document.getElementById('interview-tab').addEventListener('click', function () {
    renderFilteredJobs('interview');
});
document.getElementById('rejected-tab').addEventListener('click', function () {
    renderFilteredJobs('rejected');
});