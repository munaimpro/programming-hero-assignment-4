// Function to render job stats on the dashboard
function renderJobCountOnDashboard() {
    const jobCount = getJobCount();

    document.getElementById('total-job').innerText = jobCount.totalJob;
    document.getElementById('interview-job').innerText = jobCount.interviewJob;
    document.getElementById('rejected-job').innerText = jobCount.rejectedJob;
}
renderJobCountOnDashboard()


// Function to render filtered job list
function renderFilteredJobs(activeTab = 'all') {
    const jobListContainer = document.getElementById('job-list');

    // Empty job container
    jobListContainer.innerHTML = '';

    // Filter job list according to active tab
    let filteredJob = jobs;
    let jobCount = getJobCount();
    document.getElementById('filtered-job-count').innerText = jobCount.totalJob + ' jobs';

    if (activeTab != 'all') {
        filteredJob = jobs.filter(job => job.status == activeTab);
        document.getElementById('filtered-job-count').innerText = activeTab == 'interview' ? jobCount.interviewJob + ' of ' + jobCount.totalJob + ' jobs' : jobCount.rejectedJob + ' of ' + jobCount.totalJob + ' jobs';
    }
    
    // Render job list
    if (filteredJob.length > 0) {
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
                            <button class="btn btn-circle bg-base-100 text-[#64748B]" onclick="deleteJob(${job.id}, '${job.role}')"><i class="fa-regular fa-trash-can"></i></button>
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
                        <p class="text-[14px] text-[#323B49] font-medium mt-2">${job.description}</p>
                    </div>
                    <!-- job action -->
                    <div class="job-action flex justify-start align-middle gap-2">
                        <button class="btn btn-outline btn-success uppercase font-semibold hover:text-white shadow-none" onclick="changeJobStatus(${job.id}, 'interview')">Interview</button>
                        <button class="btn btn-outline btn-error uppercase font-semibold hover:text-white shadow-none" onclick="changeJobStatus(${job.id}, 'rejected')">Rejected</button>
                    </div>
                </div>`;
        });
    } else {
        jobListContainer.innerHTML += `
            <!-- no job display -->
            <div class="bg-base-100 rounded-lg border-0 text-center p-16">
                <img src="./assets/jobs.png" alt="jobs" class="mx-auto mb-5">
                <div class="empty-job-text">
                    <h2 class="text-[#002C5C] font-semibold text-[24px] mb-1">No jobs available</h2>
                    <p class="text-[#64748B]">Check back soon for new job opportunities</p>
                </div>
            </div>
        `;
    }

    // Render dashboard stats
    renderJobCountOnDashboard();
}
// Render all jobs by default
renderFilteredJobs('all');

// Render jobs by active tab filter
document.getElementById('all-tab').addEventListener('click', function () {
    renderFilteredJobs('all');
    changeActiveTabButton('all-tab');
    setActiveTab('all');
});
document.getElementById('interview-tab').addEventListener('click', function () {
    renderFilteredJobs('interview');
    changeActiveTabButton('interview-tab');
    setActiveTab('interview');
});
document.getElementById('rejected-tab').addEventListener('click', function () {
    renderFilteredJobs('rejected');
    changeActiveTabButton('rejected-tab');
    setActiveTab('rejected');
});


// Function to change job status
function changeJobStatus(id, newStatus) {
    jobs = jobs.map(currentJob => {
        if (currentJob.id === id) {
            return {...currentJob, status: newStatus}
        }
        return currentJob;
    });
    renderFilteredJobs(getActiveTab())
    changeActiveTabButton(getActiveTab() + '-tab')
}


// Function to delete job
function deleteJob(id, role) {
    if (!confirm('Do you want to delete this job - ' + role)) {
        return;
    }
    jobs = jobs.filter(job => job.id !== id);
    renderFilteredJobs(getActiveTab())
    changeActiveTabButton(getActiveTab() + '-tab')
}